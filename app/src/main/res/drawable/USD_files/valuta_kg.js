/*! iFrame Resizer (iframeSizer.contentWindow.min.js) - v3.5.5 - 2016-06-16
 *  Desc: Include this file in any page being loaded into an iframe
 *        to force the iframe to resize to the content size.
 *  Requires: iframeResizer.min.js on host page.
 *  Copyright: (c) 2016 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */

!function(a,b){"use strict";function c(b,c,d){"addEventListener"in a?b.addEventListener(c,d,!1):"attachEvent"in a&&b.attachEvent("on"+c,d)}function d(b,c,d){"removeEventListener"in a?b.removeEventListener(c,d,!1):"detachEvent"in a&&b.detachEvent("on"+c,d)}function e(a){return a.charAt(0).toUpperCase()+a.slice(1)}function f(a){var b,c,d,e=null,f=0,g=function(){f=Ha(),e=null,d=a.apply(b,c),e||(b=c=null)};return function(){var h=Ha();f||(f=h);var i=ya-(h-f);return b=this,c=arguments,0>=i||i>ya?(e&&(clearTimeout(e),e=null),f=h,d=a.apply(b,c),e||(b=c=null)):e||(e=setTimeout(g,i)),d}}function g(a){return na+"["+pa+"] "+a}function h(b){ma&&"object"==typeof a.console&&console.log(g(b))}function i(b){"object"==typeof a.console&&console.warn(g(b))}function j(){k(),h("Initialising iFrame ("+location.href+")"),l(),o(),n("background",X),n("padding",_),B(),t(),u(),p(),D(),v(),ja=C(),O("init","Init message from host page"),Ea()}function k(){function a(a){return"true"===a?!0:!1}var c=ia.substr(oa).split(":");pa=c[0],Y=b!==c[1]?Number(c[1]):Y,aa=b!==c[2]?a(c[2]):aa,ma=b!==c[3]?a(c[3]):ma,ka=b!==c[4]?Number(c[4]):ka,V=b!==c[6]?a(c[6]):V,Z=c[7],ga=b!==c[8]?c[8]:ga,X=c[9],_=c[10],va=b!==c[11]?Number(c[11]):va,ja.enable=b!==c[12]?a(c[12]):!1,ra=b!==c[13]?c[13]:ra,Ba=b!==c[14]?c[14]:Ba}function l(){function b(){var b=a.iFrameResizer;h("Reading data from page: "+JSON.stringify(b)),Da="messageCallback"in b?b.messageCallback:Da,Ea="readyCallback"in b?b.readyCallback:Ea,ua="targetOrigin"in b?b.targetOrigin:ua,ga="heightCalculationMethod"in b?b.heightCalculationMethod:ga,Ba="widthCalculationMethod"in b?b.widthCalculationMethod:Ba}function c(a,b){return"function"==typeof a&&(h("Setup custom "+b+"CalcMethod"),Ga[b]=a,a="custom"),a}"iFrameResizer"in a&&Object===a.iFrameResizer.constructor&&(b(),ga=c(ga,"height"),Ba=c(Ba,"width")),h("TargetOrigin for parent set to: "+ua)}function m(a,b){return-1!==b.indexOf("-")&&(i("Negative CSS value ignored for "+a),b=""),b}function n(a,c){b!==c&&""!==c&&"null"!==c&&(document.body.style[a]=c,h("Body "+a+' set to "'+c+'"'))}function o(){b===Z&&(Z=Y+"px"),n("margin",m("margin",Z))}function p(){document.documentElement.style.height="",document.body.style.height="",h('HTML & body height set to "auto"')}function q(b){function f(){O(b.eventName,b.eventType)}var g={add:function(b){c(a,b,f)},remove:function(b){d(a,b,f)}};b.eventNames&&Array.prototype.map?(b.eventName=b.eventNames[0],b.eventNames.map(g[b.method])):g[b.method](b.eventName),h(e(b.method)+" event listener: "+b.eventType)}function r(a){q({method:a,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),q({method:a,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),q({method:a,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),q({method:a,eventType:"Input",eventName:"input"}),q({method:a,eventType:"Mouse Up",eventName:"mouseup"}),q({method:a,eventType:"Mouse Down",eventName:"mousedown"}),q({method:a,eventType:"Orientation Change",eventName:"orientationchange"}),q({method:a,eventType:"Print",eventName:["afterprint","beforeprint"]}),q({method:a,eventType:"Ready State Change",eventName:"readystatechange"}),q({method:a,eventType:"Touch Start",eventName:"touchstart"}),q({method:a,eventType:"Touch End",eventName:"touchend"}),q({method:a,eventType:"Touch Cancel",eventName:"touchcancel"}),q({method:a,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),q({method:a,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),q({method:a,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),"child"===ra&&q({method:a,eventType:"IFrame Resized",eventName:"resize"})}function s(a,b,c,d){return b!==a&&(a in c||(i(a+" is not a valid option for "+d+"CalculationMethod."),a=b),h(d+' calculation method set to "'+a+'"')),a}function t(){ga=s(ga,fa,Ia,"height")}function u(){Ba=s(Ba,Aa,Ja,"width")}function v(){!0===V?(r("add"),G()):h("Auto Resize disabled")}function w(){h("Disable outgoing messages"),sa=!1}function x(){h("Remove event listener: Message"),d(a,"message",T)}function y(){null!==$&&$.disconnect()}function z(){r("remove"),y(),clearInterval(la)}function A(){w(),x(),!0===V&&z()}function B(){var a=document.createElement("div");a.style.clear="both",a.style.display="block",document.body.appendChild(a)}function C(){function d(){return{x:a.pageXOffset!==b?a.pageXOffset:document.documentElement.scrollLeft,y:a.pageYOffset!==b?a.pageYOffset:document.documentElement.scrollTop}}function e(a){var b=a.getBoundingClientRect(),c=d();return{x:parseInt(b.left,10)+parseInt(c.x,10),y:parseInt(b.top,10)+parseInt(c.y,10)}}function f(a){function c(a){var b=e(a);h("Moving to in page link (#"+d+") at x: "+b.x+" y: "+b.y),S(b.y,b.x,"scrollToOffset")}var d=a.split("#")[1]||a,f=decodeURIComponent(d),g=document.getElementById(f)||document.getElementsByName(f)[0];b!==g?c(g):(h("In page link (#"+d+") not found in iFrame, so sending to parent"),S(0,0,"inPageLink","#"+d))}function g(){""!==location.hash&&"#"!==location.hash&&f(location.href)}function j(){function a(a){function b(a){a.preventDefault(),f(this.getAttribute("href"))}"#"!==a.getAttribute("href")&&c(a,"click",b)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),a)}function k(){c(a,"hashchange",g)}function l(){setTimeout(g,ca)}function m(){Array.prototype.forEach&&document.querySelectorAll?(h("Setting up location.hash handlers"),j(),k(),l()):i("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return ja.enable?m():h("In page linking not enabled"),{findTarget:f}}function D(){h("Enable public methods"),Ca.parentIFrame={autoResize:function(a){return!0===a&&!1===V?(V=!0,v()):!1===a&&!0===V&&(V=!1,z()),V},close:function(){S(0,0,"close"),A()},getId:function(){return pa},getPageInfo:function(a){"function"==typeof a?(Fa=a,S(0,0,"pageInfo")):(Fa=function(){},S(0,0,"pageInfoStop"))},moveToAnchor:function(a){ja.findTarget(a)},reset:function(){R("parentIFrame.reset")},scrollTo:function(a,b){S(b,a,"scrollTo")},scrollToOffset:function(a,b){S(b,a,"scrollToOffset")},sendMessage:function(a,b){S(0,0,"message",JSON.stringify(a),b)},setHeightCalculationMethod:function(a){ga=a,t()},setWidthCalculationMethod:function(a){Ba=a,u()},setTargetOrigin:function(a){h("Set targetOrigin: "+a),ua=a},size:function(a,b){var c=""+(a?a:"")+(b?","+b:"");O("size","parentIFrame.size("+c+")",a,b)}}}function E(){0!==ka&&(h("setInterval: "+ka+"ms"),la=setInterval(function(){O("interval","setInterval: "+ka)},Math.abs(ka)))}function F(){function c(a){function b(a){!1===a.complete&&(h("Attach listeners to "+a.src),a.addEventListener("load",g,!1),a.addEventListener("error",i,!1),l.push(a))}"attributes"===a.type&&"src"===a.attributeName?b(a.target):"childList"===a.type&&Array.prototype.forEach.call(a.target.querySelectorAll("img"),b)}function d(a){l.splice(l.indexOf(a),1)}function e(a){h("Remove listeners from "+a.src),a.removeEventListener("load",g,!1),a.removeEventListener("error",i,!1),d(a)}function f(a,c,d){e(a.target),O(c,d+": "+a.target.src,b,b)}function g(a){f(a,"imageLoad","Image loaded")}function i(a){f(a,"imageLoadFailed","Image load failed")}function j(a){O("mutationObserver","mutationObserver: "+a[0].target+" "+a[0].type),a.forEach(c)}function k(){var a=document.querySelector("body"),b={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return n=new m(j),h("Create body MutationObserver"),n.observe(a,b),n}var l=[],m=a.MutationObserver||a.WebKitMutationObserver,n=k();return{disconnect:function(){"disconnect"in n&&(h("Disconnect body MutationObserver"),n.disconnect(),l.forEach(e))}}}function G(){var b=0>ka;a.MutationObserver||a.WebKitMutationObserver?b?E():$=F():(h("MutationObserver not supported in this browser!"),E())}function H(a,b){function c(a){var c=/^\d+(px)?$/i;if(c.test(a))return parseInt(a,W);var d=b.style.left,e=b.runtimeStyle.left;return b.runtimeStyle.left=b.currentStyle.left,b.style.left=a||0,a=b.style.pixelLeft,b.style.left=d,b.runtimeStyle.left=e,a}var d=0;return b=b||document.body,"defaultView"in document&&"getComputedStyle"in document.defaultView?(d=document.defaultView.getComputedStyle(b,null),d=null!==d?d[a]:0):d=c(b.currentStyle[a]),parseInt(d,W)}function I(a){a>ya/2&&(ya=2*a,h("Event throttle increased to "+ya+"ms"))}function J(a,b){for(var c=b.length,d=0,f=0,g=e(a),i=Ha(),j=0;c>j;j++)d=b[j].getBoundingClientRect()[a]+H("margin"+g,b[j]),d>f&&(f=d);return i=Ha()-i,h("Parsed "+c+" HTML elements"),h("Element position calculated in "+i+"ms"),I(i),f}function K(a){return[a.bodyOffset(),a.bodyScroll(),a.documentElementOffset(),a.documentElementScroll()]}function L(a,b){function c(){return i("No tagged elements ("+b+") found on page"),ea}var d=document.querySelectorAll("["+b+"]");return 0===d.length?c():J(a,d)}function M(){return document.querySelectorAll("body *")}function N(a,c,d,e){function f(){ea=m,za=n,S(ea,za,a)}function g(){function a(a,b){var c=Math.abs(a-b)<=va;return!c}return m=b!==d?d:Ia[ga](),n=b!==e?e:Ja[Ba](),a(ea,m)||aa&&a(za,n)}function i(){return!(a in{init:1,interval:1,size:1})}function j(){return ga in qa||aa&&Ba in qa}function k(){h("No change in size detected")}function l(){i()&&j()?R(c):a in{interval:1}||k()}var m,n;g()||"init"===a?(P(),f()):l()}function O(a,b,c,d){function e(){a in{reset:1,resetPage:1,init:1}||h("Trigger event: "+b)}function f(){return wa&&a in ba}f()?h("Trigger event cancelled: "+a):(e(),Ka(a,b,c,d))}function P(){wa||(wa=!0,h("Trigger event lock on")),clearTimeout(xa),xa=setTimeout(function(){wa=!1,h("Trigger event lock off"),h("--")},ca)}function Q(a){ea=Ia[ga](),za=Ja[Ba](),S(ea,za,a)}function R(a){var b=ga;ga=fa,h("Reset trigger event: "+a),P(),Q("reset"),ga=b}function S(a,c,d,e,f){function g(){b===f?f=ua:h("Message targetOrigin: "+f)}function i(){var g=a+":"+c,i=pa+":"+g+":"+d+(b!==e?":"+e:"");h("Sending message to host page ("+i+")"),ta.postMessage(na+i,f)}!0===sa&&(g(),i())}function T(b){function d(){return na===(""+b.data).substr(0,oa)}function e(){function d(){ia=b.data,ta=b.source,j(),da=!1,setTimeout(function(){ha=!1},ca)}document.body?d():(h("Waiting for page ready"),c(a,"readystatechange",e))}function f(){ha?h("Page reset ignored by init"):(h("Page size reset by host page"),Q("resetPage"))}function g(){O("resizeParent","Parent window requested size check")}function k(){var a=m();ja.findTarget(a)}function l(){return b.data.split("]")[1].split(":")[0]}function m(){return b.data.substr(b.data.indexOf(":")+1)}function n(){return"iFrameResize"in a}function o(){var a=m();h("MessageCallback called from parent: "+a),Da(JSON.parse(a)),h(" --")}function p(){var a=m();h("PageInfoFromParent called from parent: "+a),Fa(JSON.parse(a)),h(" --")}function q(){return b.data.split(":")[2]in{"true":1,"false":1}}function r(){switch(l()){case"reset":f();break;case"resize":g();break;case"inPageLink":case"moveToAnchor":k();break;case"message":o();break;case"pageInfo":p();break;default:n()||q()||i("Unexpected message ("+b.data+")")}}function s(){!1===da?r():q()?e():h('Ignored message of type "'+l()+'". Received before initialization.')}d()&&s()}function U(){"loading"!==document.readyState&&a.parent.postMessage("[iFrameResizerChild]Ready","*")}var V=!0,W=10,X="",Y=0,Z="",$=null,_="",aa=!1,ba={resize:1,click:1},ca=128,da=!0,ea=1,fa="bodyOffset",ga=fa,ha=!0,ia="",ja={},ka=32,la=null,ma=!1,na="[iFrameSizer]",oa=na.length,pa="",qa={max:1,min:1,bodyScroll:1,documentElementScroll:1},ra="child",sa=!0,ta=a.parent,ua="*",va=0,wa=!1,xa=null,ya=16,za=1,Aa="scroll",Ba=Aa,Ca=a,Da=function(){i("MessageCallback function not defined")},Ea=function(){},Fa=function(){},Ga={height:function(){return i("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return i("Custom width calculation function not defined"),document.body.scrollWidth}},Ha=Date.now||function(){return(new Date).getTime()},Ia={bodyOffset:function(){return document.body.offsetHeight+H("marginTop")+H("marginBottom")},offset:function(){return Ia.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return Ga.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,K(Ia))},min:function(){return Math.min.apply(null,K(Ia))},grow:function(){return Ia.max()},lowestElement:function(){return Math.max(Ia.bodyOffset(),J("bottom",M()))},taggedElement:function(){return L("bottom","data-iframe-height")}},Ja={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return Ga.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(Ja.bodyScroll(),Ja.documentElementScroll())},max:function(){return Math.max.apply(null,K(Ja))},min:function(){return Math.min.apply(null,K(Ja))},rightMostElement:function(){return J("right",M())},taggedElement:function(){return L("right","data-iframe-width")}},Ka=f(N);c(a,"message",T),U()}(window||{});

// mobile detect
!function(a){var b=/iPhone/i,c=/iPod/i,d=/iPad/i,e=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,f=/Android/i,g=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,h=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,i=/Windows Phone/i,j=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,k=/BlackBerry/i,l=/BB10/i,m=/Opera Mini/i,n=/(CriOS|Chrome)(?=.*\bMobile\b)/i,o=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,p=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),q=function(a,b){return a.test(b)},r=function(a){var r=a||navigator.userAgent,s=r.split("[FBAN");if("undefined"!=typeof s[1]&&(r=s[0]),s=r.split("Twitter"),"undefined"!=typeof s[1]&&(r=s[0]),this.apple={phone:q(b,r),ipod:q(c,r),tablet:!q(b,r)&&q(d,r),device:q(b,r)||q(c,r)||q(d,r)},this.amazon={phone:q(g,r),tablet:!q(g,r)&&q(h,r),device:q(g,r)||q(h,r)},this.android={phone:q(g,r)||q(e,r),tablet:!q(g,r)&&!q(e,r)&&(q(h,r)||q(f,r)),device:q(g,r)||q(h,r)||q(e,r)||q(f,r)},this.windows={phone:q(i,r),tablet:q(j,r),device:q(i,r)||q(j,r)},this.other={blackberry:q(k,r),blackberry10:q(l,r),opera:q(m,r),firefox:q(o,r),chrome:q(n,r),device:q(k,r)||q(l,r)||q(m,r)||q(o,r)||q(n,r)},this.seven_inch=q(p,r),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window)return this},s=function(){var a=new r;return a.Class=r,a};"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=r:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=s():"function"==typeof define&&define.amd?define("isMobile",[],a.isMobile=s()):a.isMobile=s()}(this);

(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.flash0ai = function() {
	this.initialize(img.flash0ai);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,328,188);


(lib.flash0ai_1 = function() {
	this.initialize(img.flash0ai_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,577,200);


(lib.flash0ai_2 = function() {
	this.initialize(img.flash0ai_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,281,73);


(lib.flash0ai_3 = function() {
	this.initialize(img.flash0ai_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1166,195);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(69,69,69,0.008)").s().p("Ehc9APoIAA/PMC57AAAIAAfPg");
	this.shape.setTransform(595,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1190,200);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash0ai_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,577,200), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash0ai();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,328,188), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash0ai_2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,281,73), null);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash0ai_1();
	this.instance.parent = this;
	this.instance.setTransform(-288.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-288.5,-100,577,200);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash0ai();
	this.instance.parent = this;
	this.instance.setTransform(-164,-94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,-94,328,188);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash0ai_2();
	this.instance.parent = this;
	this.instance.setTransform(-140.5,-36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.5,-36.5,281,73);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(140.5,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,281,73), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(288.5,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,577,200), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(164,94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,328,188), null);


// stage content:
(lib._1190200valita0megadn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.button.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("http://bit.ly/2dFpsM7", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(120));

	// Слой 6
	this.button = new lib.Символ7();
	this.button.parent = this;
	this.button.setTransform(595.1,101.1,1,1,0,0,0,595,100);
	new cjs.ButtonHelper(this.button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(120));

	// Слой 5
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(1019,200,1,1,0,0,0,164,94);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Анимация4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1019,107);
	this.instance_1._off = true;

	this.instance_2 = new lib.Символ4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1019,107,1,1,0,0,0,164,94);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},105).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:176.8,alpha:0.25},0).wait(1).to({y:153.5,alpha:0.5},0).wait(1).to({y:130.3,alpha:0.75},0).wait(1).to({y:124.5,alpha:0.809},0).wait(1).to({y:118.6,alpha:0.879},0).wait(1).to({y:112.8,alpha:0.941},0).wait(1).to({y:110.9,alpha:0.961},0).wait(1).to({y:109,alpha:0.98},0).to({_off:true},1).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(105).to({startPosition:0},0).wait(1).to({alpha:0.801},0).wait(1).to({alpha:0.602},0).wait(1).to({alpha:0.398},0).wait(1).to({alpha:0.199},0).to({_off:true},1).wait(1));

	// Слой 4
	this.instance_3 = new lib.Символ3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(615.5,100,1,1,0,0,0,288.5,100);
	this.instance_3.alpha = 0;

	this.instance_4 = new lib.Анимация5("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(615.5,100);
	this.instance_4._off = true;

	this.instance_5 = new lib.Символ5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(615.5,100,1,1,0,0,0,288.5,100);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},105).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.809},0).wait(1).to({alpha:0.879},0).wait(1).to({alpha:0.941},0).wait(1).to({alpha:0.961},0).wait(1).to({alpha:0.98},0).to({_off:true},1).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(105).to({startPosition:0},0).wait(1).to({alpha:0.801},0).wait(1).to({alpha:0.602},0).wait(1).to({alpha:0.398},0).wait(1).to({alpha:0.199},0).to({_off:true},1).wait(1));

	// Слой 3
	this.instance_6 = new lib.Символ1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(164.5,1.5,1,1,0,0,0,140.5,36.5);
	this.instance_6.alpha = 0;

	this.instance_7 = new lib.Анимация3("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(164.5,93.5);
	this.instance_7._off = true;

	this.instance_8 = new lib.Символ6();
	this.instance_8.parent = this;
	this.instance_8.setTransform(164.5,93.5,1,1,0,0,0,140.5,36.5);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},105).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({y:24.5,alpha:0.25},0).wait(1).to({y:47.5,alpha:0.5},0).wait(1).to({y:70.5,alpha:0.75},0).wait(1).to({y:76.3,alpha:0.809},0).wait(1).to({y:82,alpha:0.879},0).wait(1).to({y:87.8,alpha:0.941},0).wait(1).to({y:89.7,alpha:0.961},0).wait(1).to({y:91.6,alpha:0.98},0).to({_off:true},1).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},0).wait(105).to({startPosition:0},0).wait(1).to({alpha:0.801},0).wait(1).to({alpha:0.602},0).wait(1).to({alpha:0.398},0).wait(1).to({alpha:0.199},0).to({_off:true},1).wait(1));

	// Слой 2
	this.instance_9 = new lib.flash0ai_3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(25,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(595.1,65,1191,329);
// library properties:
lib.properties = {
	width: 1190,
	height: 200,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"https://valuta.kg/bdn/megacom_day_night/images/flash0ai.png", id:"flash0ai"},
		{src:"https://valuta.kg/bdn/megacom_day_night/images/flash0ai_1.png", id:"flash0ai_1"},
		{src:"https://valuta.kg/bdn/megacom_day_night/images/flash0ai_2.png", id:"flash0ai_2"},
		{src:"https://valuta.kg/bdn/megacom_day_night/images/flash0ai_3.png", id:"flash0ai_3"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		document.getElementById("canvas").style.display = 'none';
		document.getElementById("mega-static-link").style.display = 'block';
	} else {
		canvas = document.getElementById("canvas");
		anim_container = document.getElementById("animation_container");
		dom_overlay_container = document.getElementById("dom_overlay_container");
		images = images||{};
		var loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", handleFileLoad);
		loader.addEventListener("complete", handleComplete);
		loader.loadManifest(lib.properties.manifest);
	}
}

function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}
function handleComplete(evt) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib._1190200valita0megadn();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.enableMouseOver();
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {
		var lastW, lastH, lastS=1;
		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();
		function resizeCanvas() {
			var w = lib.properties.width, h = lib.properties.height;
			var iw = window.innerWidth, ih=window.innerHeight;
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
			if(isResp) {
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
					sRatio = lastS;
				}
				else if(!isScale) {
					if(iw<w || ih<h)
						sRatio = Math.min(xRatio, yRatio);
				}
				else if(scaleType==1) {
					sRatio = Math.min(xRatio, yRatio);
				}
				else if(scaleType==2) {
					sRatio = Math.max(xRatio, yRatio);
				}
			}
			canvas.width = w*pRatio*sRatio;
			canvas.height = h*pRatio*sRatio;
			//canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
			//canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;
			stage.scaleY = pRatio*sRatio;
			lastW = iw; lastH = ih; lastS = sRatio;
		}
	}
	// makeResponsive(false,'both',false,1);
	fnStartAnimation();
}

window.onload=init;