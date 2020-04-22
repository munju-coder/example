$(function ( ) {
    // nav 영역에 마우스커서가 들어오면 함수 실행
    $( 'nav' ).mouseenter( function(){
    //nav ul li ul 을 slideDown
        $('nav ul li ul').stop().slideDown('slow');
    });
    //nav영역에서 마우스커서가 빠져나가면 함수 실행
    $( 'nav' ).mouseleave( function(){
    //nav ul li ul을 slideUp
        $( 'nav ul li ul' ).stop().slideUp('slow');
    });
});

