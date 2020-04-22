$( function() {
   
    /*
        $( location ).attr( 'href' )     -> 전체경로
        
        $( location ).attr( 'protocol' ) -> 프로토콜
        $( location ).attr( 'host' )     -> 호스팅 주소
        $( location ).attr( 'pathname' ) -> 파일경로
        $( location ).attr( 'search' )   -> 인자값
    */
    
    //console.log( $(location).attr('href') );
    
    //console.log( $( location ).attr( 'protocol' ) );
    //console.log( $( location ).attr( 'host' ) );
    //console.log( $( location ).attr( 'pathname' ) );
    //console.log( $( location ).attr( 'search' ) );
    
    var pageName = $(location).attr('pathname').split('/')[3];
    console.log( pageName )
    
    var $menu = $( 'header nav ul li' );
    
    if( pageName == "index.html" ) {
        $menu.eq(0).children('a').addClass( 'active' );
    }else if( pageName == "page2.html" ) {
        $menu.eq(1).children('a').addClass( 'active' );
    }else if( pageName == "page3.html" ) {
        $menu.eq(2).children('a').addClass( 'active' );
    }else if( pageName == "page4.html" ) {
        $menu.eq(3).children('a').addClass( 'active' );
    }
    
});



