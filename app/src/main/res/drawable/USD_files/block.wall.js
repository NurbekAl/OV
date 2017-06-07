$(function()
{
	var vUrl = intelli.config.ia_url + 'wall.json';

	$('.main-content').on('focus', '.js-wall-post-body', function() {
		$(this).parent().addClass('is-focused');
		$(this).animate({
			height: 100
		});
	});

	$('.main-content').on('blur', '.js-wall-post-body', function() {
		$(this).parent().removeClass('is-focused');
	});

	$('.main-content').on('click', '.js-wall-post-submit', function(e) {
		e.preventDefault();

		var $this = $(this),
			$postBody = $this.closest('.wall-form').find('.js-wall-post-body'),
			isReply = false,
			parentId = '';

		if ($this.is('[data-parent]')) {
			isReply = true;
			parentId = $this.data('parent');
		}

		if ($postBody.val().length == 0)
		{
			$postBody.parent().addClass('has-warning');

			return false;
		}

		$this.prop('disabled', true).html('<span class="fa fa-refresh fa-spin"></span> Отправляем');

		$.post(vUrl, {
			action: 'add',
			body: $postBody.val(),
			parent: parentId
		}).done(function(response)
		{
			$postBody.val('').trigger('keyup');
			intelli.notifFloatBox({msg: response.messages, autohide: true, type: response.error ? 'error' : 'success'});
			if (typeof response.html != 'undefined' && !response.error)
			{
				$postBody.parent().removeClass('has-warning');

				if (!isReply) {
					$('.js-wall-post-list .alert').remove();
					$(response.html).prependTo('.js-wall-post-list').fadeIn(800);
				} else {
					$this.closest('.wall-post__body').next().append(response.html);
					$this.closest('.js-wall-post-reply-form').slideUp('fast');
				}

				$('.js-wall-post-body.-post').dodosTextCounter(intelli.config.post_max_chars,
				{
					counterDisplayElement: 'span',
					counterDisplayClass: 'js-wall-counter'
				});
			}

			$this.html('Отправить');

			setTimeout(function() {
				$this.prop('disabled', false);
			}, 4000);
		});
	});

	$('.js-wall-post-list').on('click', '.js-wall-post-delete', function(e) {
		e.preventDefault();
		var that = this;
		var params = {
			url: vUrl,
			type: 'post',
			data: {action: 'delete', id: $(this).data('post-id')}
		};

		if (confirm(_t('are_you_sure_to_delete_this_post')))
		{
			$.ajax(params).done(function(response) {
				intelli.notifFloatBox({msg: response.messages, autohide: true, type: response.error ? 'error' : 'success'});
				if (!response.error)
				{
					$(that).closest('.wall-post').fadeOut(800);
				}
			});
		}
	});

	$('.js-wall-post-list').on('click', '.js-wall-post-edit', function(e) {
		e.preventDefault();

		var body_section = $(this).closest('.wall-post').find('.js-wall-post-body-text');
		var prev_body = body_section.text();

		body_section.html('');
		body_section.append('<textarea class="form-control js-wall-post-body-edit" style="resize: none;">' + prev_body + '</textarea>').append('<br><a href="#" class="btn btn-xs btn-success js-wall-post-update" data-post-id=' + $(this).data('post-id') + '>' + _t('save') + '</a>');

		body_section.children('.js-wall-post-update').click(function(e) {
			e.preventDefault();

			var new_body = body_section.children('.js-wall-post-body-edit').val();
			var post_id = $(this).data('post-id');

			var params = {
				url: vUrl,
				type: 'post',
				data: {action: 'edit', id: post_id, body: new_body}
			};
			$.ajax(params).done(function(response) {
				intelli.notifFloatBox({msg: response.messages, autohide: true, type: response.error ? 'error' : 'success'});
				if (!response.error)
				{
					body_section.children('.js-wall-post-body-edit').remove();
					body_section.html(response.html);
				}
			});
		});
	});

	$('.js-btn-wall-more').click(function(e) {
		e.preventDefault();

		$(this).html('<span class="fa fa-refresh fa-spin"></span> Загружаем');

		var limit = $(this).data('limit') ? $(this).data('limit') : intelli.config.posts_per_load;

		var params = {
			url: vUrl,
			type: 'get',
			data: {
				action: 'read',
				start: parseInt($('.wall-post--parent').length),
				limit: limit
			}
		};

		$.ajax(params).done(function(response) {
			if (typeof response.html != 'undefined' && 0 != response.html.length && !response.error)
			{
				$('.js-btn-wall-more').html('<span class="fa fa-angle-double-down"></span> Показать ещё');
				$(response.html).insertBefore('.wall-posts__more');

				if (typeof $.fn.linkify !== 'undefined')
				{
					$('.js-wall-post-body-text').linkify();
				}
				$('.js-wall-post-body.-post').dodosTextCounter(intelli.config.post_max_chars,
				{
					counterDisplayElement: 'span',
					counterDisplayClass: 'js-wall-counter'
				});

				$('[data-toggle="tooltip"]').tooltip();
			}
		});
	});

	$('.js-wall-post-body.-post').dodosTextCounter(intelli.config.post_max_chars,
	{
		counterDisplayElement: 'span',
		counterDisplayClass: 'js-wall-counter'
	});

	setInterval(function() {
		$.ajax( {
			type: 'get',
			url: intelli.config.ia_url + 'wall/read.json',
			data: {
				action: 'latest',
			},
			datatype: "html",
			success:function(data)
			{
				if (typeof data.html != 'undefined' && !data.error)
				{
					$(data.html).prependTo('.js-wall-post-list').fadeIn(800);
					$('.js-wall-post-body.-post').dodosTextCounter(intelli.config.post_max_chars,
					{
						counterDisplayElement: 'span',
						counterDisplayClass: 'js-wall-counter'
					});
				}
			}
		});
	}, 60000);

	$('.js-wall-post-body-text').linkify();

	$('.js-wall-post-list').on('click', '.js-wp-like, .js-wp-dislike', function(e)
	{
		e.preventDefault();

		var $this = $(this),
			$counter = $this.parent().find('.wall-post__likes__rate'),
			itemId = $this.data('itemid');

		if (itemId) {
			var action = $this.hasClass('dislike') ? 'dislike' : 'like';

			$.post(intelli.config.baseurl + 'wall/read.json', {action: action, post: itemId}, function(response) {
				intelli.notifFloatBox({msg: response.messages, type: response.error ? 'info' : 'success', autohide: true});
				if (!response.error) {
					var num = ('like' == action) ? 1 : -1;
					$counter.text(parseInt($counter.text()) + num);
				} 
			});
		}
	});

	//
	// REPLY
	// --------------------------------------------------

	$('.js-wall-post-list').on('click', '.js-wall-reply', function(e) {
		e.preventDefault();

		$(this).closest('.wall-post__body').find('.wall-form--reply').slideDown('fast');
	})

	$('.js-wall-post-list').on('click', '.js-wall-post-reply-cancel', function(e) {
		e.preventDefault();

		$(this).closest('.wall-form--reply').slideUp('fast');
	})
});