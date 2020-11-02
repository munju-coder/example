
//work
function worksUI(){
	var el = $('.works');

	if(el.length <= 0){
		return
	}
	
	//현재시간
	time();
	function time(){
		var date = new Date();
		var hour = date.getHours();
		var min = date.getMinutes();
		var sec = date.getSeconds();

		//두자릿수로 만들기
		function zero(num){
			if(num < 10){
				num = "0" + num;
			}
			return num;
		}
		document.getElementById("nowTime").innerText=zero(hour) + ":" + zero(min) + ":" + zero(sec);
	}
	timer = setInterval(time, 1000);

	$(window).scroll(function(){
		var win = $(window);
		var winT = win.scrollTop();
		var winH = win.height();
		
		if(winT < $(".works .secConts").eq(0).offset().top){
			$('#nowTime').show();
			$('.worksYear').hide();
			$('.mainTxt').removeClass('hide')
		}

		$(".works .secConts").each(function(){
			var top = $(this).offset().top;

			if(winT + winH - winH/2 + 55 > top){
				var year = $(this).find('h2').text();
				//console.log(year)
				$('#nowTime').hide();
				$('.worksYear').show().text(year);
				$('.mainTxt').addClass('hide')
			}
		});
	});
}
	
//work 텍스트
function alwaysMsg(){
	var el = $(".alwaysMsg");
	var texts = ["have", "will", "want", "new", "try", "on", "say", "loved", "with", "enjoy", "fun", "trust"];
	var count = texts.length - 1;
	var i = 1;
	
	if(el.length <= 0){
		return;
	}

	(function enter() {
		titTimer = setTimeout(function(){
			el.html(texts[i]);
			i++;
			enter()
			if(i > count){
				i=0;
				return
			}
		}, 1300)
	})();
}

//about
function aboutUI(){
	var el = $('.about');

	if(el.length <= 0){
		return
	}
	
	$.event.add(window,"load",function(){
		var phW = $('.photoLine li:last-child').offset().left;
		var txtW = $('.txtLine').width() + 520;
		var lastLiW = $('.photoLine li:last-child').width();
		var allW = phW + lastLiW + 100; //100 우측 여백
		var isitMove = false;
		var playStart;

		el.find('.photoLine').width(allW);
		el.find('.txtLine').width(txtW);
		
		$.jInvertScroll(['.scroll'],
			{
			height: allW,
			onScroll: function(percent, e) {
				if(percent >= 1){
					$('body, html').stop(true,false);
				}
			}
		});
	});

	/*
	scrollAni();
	function scrollAni(){
		clearInterval(playStart);

		var speed = ($('body')[0].clientHeight - window.pageYOffset) * 1.8;
		$('body, html').stop().animate({
			scrollTop : allW
		}, speed , 'linear');

		isitMove = true;
	}

	$(window).off('mousewheel.mwEvt').on('mousewheel.mwEvt' , function(e, delta){
		$('body, html').stop(true,false);
		
		if(isitMove == true){
			clearInterval(playStart);
			playStart = setInterval(function(){
				scrollAni();
			}, 800);
			isitMove = false;
		}
		
	})
	*/
}

//textarea
var cloneCSSProperties = [
	'lineHeight', 'textDecoration', 'letterSpacing',
	'fontSize', 'fontFamily', 'fontStyle', 
	'textTransform', 'textAlign', 
	'direction', 'wordSpacing', 'fontSizeAdjust', 
	'whiteSpace', 'wordWrap'
];

var textareaCSS = {
	overflow: "hidden",
	position: "absolute",
	top: "0",
	left: "0",
	height: "100%"
};

var preCSS = {
	margin:"0",
	padding:"20px",
	display: "block",
	visibility: "hidden",
	fontWeight:"500"
};

var containerCSS = {
	position: "relative"
};

var initializedDocuments = { };

function resize(textarea) {  
	$(textarea).parent().find("span").text(textarea.value);
}

function initialize(document) {
	// Only need to initialize events once per document
	if (!initializedDocuments[document]) {
		initializedDocuments[document] = true;
		
		$(document).delegate(
			".expandingText textarea", 
			"input onpropertychange", 
			function () {
				resize(this);
			}
		);
	}
}

$.fn.expandingTextarea = function () {
	return this.filter("textarea").each(function () {
		
		initialize(this.ownerDocument || document);
		
		var textarea = $(this);

		textarea.wrap("<div class='expandingText'></div>");
		textarea.after("<pre class='textareaClone'><span></span><br /></pre>");

		var container = textarea.parent().css(containerCSS);
		var pre = container.find("pre").css(preCSS);

		textarea.css(textareaCSS);
	
		$.each(cloneCSSProperties, function (i, p) {
			pre.css(p, textarea.css(p));
		});
		
		resize(this);
	});
};

$.fn.expandingTextarea.initialSelector = "textarea.expanding";


$(function(){
	worksUI();
	alwaysMsg();
	aboutUI(); 
		
	// 메뉴
	$("#menuToggle").on("click",function(e){
		e.preventDefault();

		if(!$("nav").hasClass("open")){
			$(this).addClass("open");
			$("nav").addClass("open");
			$(".menuDim").stop().fadeIn();
		}else{
			$(this).removeClass("open");
			$("nav").removeClass("open");
			$(".menuDim").stop().fadeOut();
		}
	});

	// 마우스 icon
	$(document).on('mousemove', function (e) {
		$(".mouseCur").css({
		  "left": e.clientX,
		  "top": e.clientY
		});
	});

	$(".curhide").on({
		'mousemove' : function(){
			$(".mouseCur").hide();
		},
		'mouseleave' : function(){
			$(".mouseCur").show();
		}
	});
	
	// textarea
	$($.fn.expandingTextarea.initialSelector).expandingTextarea();

});



