

// $(document).ready(function(){
	
// 	init();
	
		
// 	// Scroll Event
// 	$('body').on('scroll touchmove mousewheel', function(event) {	
		
// 		//console.log(current_idx);

// 		if(last_y > $("html").scrollTop() && !onpage_on){
			
// 			//원페이지 스크롤 진입
// 			console.log(":: 원페이지 시작 ::");
// 			onpage_on = true;
// 			isScroll = false;
// 		}
		
// 		if(!onpage_on) return;
		
// 		//스크롤 이벤트 막기
// 		// event.preventDefault();
// 		event.stopPropagation();		
// 		if(isScroll) return; // 현재 스크롤이 동작중이면 종료
		
		
// 		isScroll = true;		
// 		var direction = event.originalEvent.wheelDelta; //마우스 휠 방향
// 		var y = 0;

// 		if(direction > 0){
// 			// up
// 			current_idx --;
// 			if(current_idx < 0){current_idx = -1;}
// 			y = current_idx * page_h;
// 		}
// 		else{
// 			// down
// 			current_idx ++;
// 			if(current_idx > total_section){
// 				current_idx = total_section;
// 				onpage_on = false;
// 				return;
// 			}
			
// 			y = current_idx * page_h;		
// 		}

// 		$('body').animate({scrollTop: y}, 500, function(){isScroll=false;});	
// 	});
// });

// $( window ).resize(function() {
	
// 	// 반응형
// 	setHeight();
// });


// function init(){
	
// 	setHeight();
	
// 	total_section = $('#onepage > section').length;
// 	last_y = page_h * total_section;
// }	

// function setHeight(){
	
// 	// 높이 설정
// 	screen_h = document.body.clientHeight;
// 	page_h = screen_h;
// 	$("#onepage > section").height(page_h);
// }

var total_section = 0; // 전체 섹션 수
var current_idx   = 0; // 현재 보고 있는 섹션 번호

var screen_height = 0; // 화면높이
var page_height   = 0; // 섹션높이 -- 섹션높이는 화면높이와 동일하게 세팅됨	    
var last_y        = 0; // 마지막 섹션까지의  (섹션 수 * 섹션 높이)

var onpage_on = true;  // 스크롤이 맨 밑으로 갈 경우 false로 변경됨, 아닐 경우는 true로
var isScroll = false;  // 스크롤 가능상태 (이벤트 도중엔 true 였다가 종료 후 false로 변경됨)

// 웸페이지 로드 시 실행되는 함수영역 
// https://docu94.tistory.com/37 <- 참조
$(document).ready(function(){
	init(); // 초기화 함수
	
	// Scroll Event (스크롤, 터치이동, 마우스휠 동작 시 실행되는 이벤트)
	$("body").on('scroll touchmove mousewheel', function(event) {
		// $("element").scrollTop() 설정된 요소의 세로 스크롤 막대 위치를 표시
		// https://www.w3schools.com/jquery/css_scrolltop.asp <- 참조
		
		if(last_y > $("html, body").scrollTop() && !onpage_on){
			// 현재 화면의 스크롤바가 화면 맨 밑에 있지 않으면서 onpage_on가 false 인 경우 (false로의 변경은 80~85번째 줄에서 발생)
			
			onpage_on = true; // 스크롤이 화면 맨 밑에 있다가 다시 스크롤을 화면 위로 올리는 경우, 이벤트가 진행되도록 true로 변경
			isScroll = false; // 스크롤이 화면 맨 밑에 있지 않을 경우, 스크롤이 가능하도록 false 상태 유지
		}
		
		event.stopPropagation();	  
		// 이벤트 전파막기(중복실행 방지를 위함) https://ismydream.tistory.com/98 <- 참조
		
		if(!onpage_on) return false;  
		// 80~85번째 줄에서 false로 변경이 된 상태에서 스크롤을 계속 밑으로 내릴 경우 return 처리
									  
		// 스크롤을 위로 올릴 경우, 38~43번째 줄의 분기문 로직이 실행되어 return을 피하게 됨.

		if(isScroll)   return false;  
		// true 일 경우 리턴되어 스크롤 이벤트 실행이 안됨 
									  
		// 53번째 줄에서 true로 설정되기 때문에, 이벤트 종료시(95번째줄)까지 이 이벤트는 실행되지 못함.
								 
		isScroll = true; // 스크롤 이벤트 연속발생을 막기위해 처음 이벤트 발생 후 true로 설정하고 이벤트 종료 시까지 유지
		 
		var current_y = 0; // 현재 위치한 섹션 y좌료
		var direction = event.originalEvent.wheelDelta;

		if(direction > 0){ // 위로 올릴 경우 양수
			console.log("up");
			
			// 현재 보고있는 섹션위치
			current_idx--; // current_idx = current_idx - 1; 
			
			if(current_idx < 0){
				current_idx = 0; // 음수가 될 경우 무조건 0으로 고정한다.
			}
			
			// 변경전 : if(current_idx < 0){ current_idx = -1; }
			// 변경후 : if(current_idx < 0){ current_idx = 0;  } // 음수로 할 경우 current_y 가 음의 값이 된다.
			
			current_y = current_idx * page_height; // 이동될 섹션의  y좌표 위치
			
		}else{ // 아래로 내릴 경우 음수
			console.log("down");
			
			// 현재 보고있는 섹션위치
			current_idx++; // current_idx = current_idx + 1; 
			
			// 현재 보고있는 섹션위치가 총 섹션 갯수를 초과할 경우,
			if(current_idx > total_section){
				current_idx = total_section; // 동일하게 한다. 초과하지 않도록
				
				onpage_on = false; // 이경우 마지막 페이지 맨 밑까지 스크롤을 한 경우므로, false로 변경
				return;            // 이후 이벤트는 실행하지 않는다. 맨 밑이므로
			}

			current_y = current_idx * page_height; // 이동될 섹션의  y좌표 위치
		}
		
		// 해당 y좌료로 스크롤 애니메이션(부드럽게) 이동, 이 때 500은 소요시간을 의미 (밀리세컨드므로 약 0.5초 [1000ms = 1s])
		// 이동하는 곳은 이동할 섹션의 최상단 y좌표
		
		// 스크롤이 완료되었다면, isScroll을 false로 설정
		// 여기가지 이벤트가 실행되었다면 다시 스크롤 이벤트가 발생하도록 false로 변경한 것으로 생각됨
		$("html, body").animate({scrollTop: current_y}, 500, function(){ isScroll=false; });
	});
});

	$( window ).resize(function() {
		// 변경전 : setHeight();
		// 변경후 : init(); // 브라우저 크기를 변경할 경우 섹션 크기도 재설정됨 (반응형) -- page_height 값이 변하므로, last_y값도 변경되어야 함.
		init();
	});

	function init(){ // 초기화 함수 - 31번째 줄에서 호출
		setHeight(); // 섹션 세로크기 설정
		
		total_section = $('#onepage > section').length - 1;	// 전체 섹션 갯수, 1 빼주는 이유는 current_idx 값이 1이 아닌 0부터 시작하므로
		last_y = page_height * total_section; // setHeight에서 설정된 page_height(섹션높이) 값에 섹션 갯수를 곱한다.
	}

	function setHeight(){ // 섹션 세로크기 설정함수 - 106번째 줄에서 호출
		screen_height = window.innerHeight // document.body.clientHeight; // margin, border를 제외한 화면 세로크기 (padding은 포함)
		page_height   = screen_height;

		//$("#onepage > section").height(page_height); 
		$("#onepage > section").css("height", page_height); // 현재 화면 크기를 섹션 높이로 할당 -- 따라서 첫번째 섹션이 화면을 채우게 된다.
	}