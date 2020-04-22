$(function(){
  
    
    /*
    
    $(location).attr( 'href' )          -> 전체경로
    $(location).attr( 'protocol' )    -> 프로토콜
    $(location).attr( 'host' )          ->호스팅 주소
    $(location).attr( 'pathname' )  -> 파일 경로
    $(location).attr( 'search' )       -> 인자값
    
    
    */
   // console.log( $(location).attr( 'href' ));
   
   // console.log( $(location).attr( 'protocol' ));
   // console.log( $(location).attr( 'host' ));
   // console.log( $(location).attr( 'pathname'));
    
   // console.log( $(location).attr( 'search' ));
    //http:프로토콜//127.0.0.1:49781호스팅주소/15day/index.html파일경로 인자값-검색했을때 넘겨주는 주소
    
    var pageName = $(location).attr('pathname').split('/')[2];
    // var pageName = $(location).attr('pathname').split('/')[2]; -방번호의 파일명을 배열로 가져옴 
    
    console.log(pageName);
    var $menu = $('header nav ul li');
    
    if( pageName =="index.html"){
        $menu.eq(0).children( 'a' ).addClass('active');
    }else if( pageName =="page2.html"){
        $menu.eq(1).children( 'a' ).addClass('active');
    }else if( pageName =="page3.html"){
        $menu.eq(2).children( 'a' ).addClass('active');
    }else if( pageName =="page4.html"){
        $menu.eq(3).children( 'a' ).addClass('active');
    }
    

});