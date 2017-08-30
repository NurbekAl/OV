$(function()
{
	$('#offer_currency_from').change(function()
	{
		var currency_to = $('#offer_currency_to').val();
		var currency_from = $('#offer_currency_from').val();

		if (1 == currency_to)
		{
			// get current currency rate
			jQuery.getJSON('/currencies/read.json?action=get_currency_rate&currency=' + currency_from, function(data)
			{
				var rate = data.rate;

				if (rate != 0)
				{
					$('#nbkrrate').html(data.rate);
				}
				else
				{
					$('#nbkrrate').html('неизвестен');
				}

				$('#currencylimit').html(data.max_limit);
			});
		}
		else
		{
			$('#nbkrrate').html('неизвестен');
		}
	});

	$('#offer_currency_to').change(function()
	{
		var currency_to = $('#offer_currency_to').val();
		var currency_from = $('#offer_currency_from').val();

		if (currency_to == 1)
		{
			// get current currency rate
			$.ajax(
				{
					url: '/valuta.ajax?' + Math.random(),
					dataType: 'json',
					type: "POST",
					data: "action=get_currency_rate&currency=" + currency_from,
					success: function(data)
					{
						var rate = data.rate;

						if (rate != 0)
						{
							$('#nbkrrate').html(data.rate);
						}
						else
						{
							$('#nbkrrate').html('неизвестен');
						}
					},

					error: function(xhr, ajaxOptions, thrownError)
					{
						// console.log(thrownError);
					}
				});
		}
		else
		{
			$('#nbkrrate').html('неизвестен');
		}
	});

	// process edit action
	$("#editoffer").click(function()
	{
		intelli.common.redirectUrl('/offer/edit/' + offerid + '.html');
	});

	// process prolongue action
	$('#prolongue').click(function(e)
	{
		e.preventDefault();

		$.ajax(
		{
			url: '/api.json?' + Math.random(),
			dataType: 'json',
			type: "POST",
			data: "action=prolongue&offer_id=" + offerid,
			success: function(data)
			{
				if (false == data.error)
				{
					intelli.notifFloatBox({msg: data.message, type: 'success'});
				}
			},
			error: function(xhr, ajaxOptions, thrownError)
			{
				console.log(thrownError);
			}
		});
	});

	// process close action
	$('#closeoffer').click(function(e)
	{
		e.preventDefault();

		var msg = "Ваше предложение будет удалено. Продолжить?";

		if (confirm(msg))
		{
			$.ajax(
			{
				url: '/api.json?' + Math.random(),
				dataType: 'json',
				type: "POST",
				data: "action=close_offer&offer_id=" + offerid,
				success: function(data)
				{
					if (false == data.error)
					{
						intelli.notifFloatBox({msg: data.message, type: 'success'});
						document.location = intelli.config.baseurl + '/profile/offers/';
					}
				},
				error: function(xhr, ajaxOptions, thrownError)
				{
					console.log(thrownError);
				}
			});
		}
	});

	// process open action
	$('#openoffer').click(function(e)
	{
		e.preventDefault();

		var msg = "Ваше предложение будет помечено как активное.\nВы сможете проводить сделки с этим предложением. Продолжить?";

		if (confirm(msg))
		{
			$.ajax(
			{
				url: '/valuta.ajax?' + Math.random(),
				dataType: 'json',
				type: "POST",
				data: "action=open_offer&offer_id=" + offerid + "&owner_id=" + ownerid,
				success: function(data)
				{
					if ('ok' == data['type'])
					{
						intelli.notifFloatBox({msg: 'Спасибо. Вашe предложение было помечено как активное.', type: 'success', autohide: true});
					}
				},
				error: function(xhr, ajaxOptions, thrownError)
				{
					console.log(thrownError);
				}
			});
		}
	});

	// process accept action
	$('#acceptoffer').click(function(e)
	{
		e.preventDefault();

		var msg = "Ваш запрос будет отправлен владельцу этого предложения.\nОн сможет увидеть его в списке запросов и владелец свяжется с Вами. Продолжить?";

		if (confirm(msg))
		{
			$.ajax(
				{
					url: '/valuta.ajax?' + Math.random(),
					dataType: 'json',
					type: "POST",
					data: "action=send_offer&offer_id=" + offerid + "&owner_id=" + ownerid,
					success: function(data)
					{
						if ('ok' == data['type'])
						{
							intelli.notifFloatBox({msg: 'Спасибо. Ваш запрос был отправлен владельцу предложения.', type: 'success', autohide: true});
						}
					},

					error: function(xhr, ajaxOptions, thrownError)
					{
						console.log(thrownError);
					}
				});
		}
	});
});