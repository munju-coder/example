$(function(){
  var onOff=false; // 햄버거 버튼이 화면 밖에 있을 때를  false 라고 지정 
    $('.hamburger-bt').click( function(){
      onOff=!onOff;
       console.log(onOff);
        //onOff 값이 참이라면 header 넓이가 밖으로 나옴
                if( onOff ) {
            
            $( 'header' ).stop().animate({ 'left' : 0 }, 1000, "easeOutExpo");
            $( '.f_bt,.t_bt' ).animate({ 'top' : 13 }, 500, "easeOutExpo" ).transition({ 'rotate' : '45deg' }, 500, "easeOutExpo" );

            
            $( '.s_bt' ).delay(500).transition({ 'rotate' : '-45deg' }, 500, "easeOutExpo");
                    
            //그렇지 않으면, 원래 false로 지정한 값=햄버거버튼이 밖으로 나온상태
        }else{
            $( 'header' ).stop().animate({ 'left' : -200 }, 1000, "easeOutExpo");
            $( 'span'  ).stop().animate({ 'rotate' : 0 }, 500, "easeOutExpo");
            
            $( '.f_bt' ).animate({ 'top' : 0 }, 500, "easeOutExpo" );
            $( '.s_bt' ).animate({ 'top' : 13 }, 500, "easeOutExpo" );
            $( '.t_bt' ).animate({ 'top' : 26 }, 500, "easeOutExpo" );
        }
    });
});