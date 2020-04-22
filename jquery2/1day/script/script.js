$( function() {

    var $btn = $( '.instaArea figure figcaption a' );
    
    //.instaArea figure figcaption a클릭하면 함수 실행(헤야 할 일)
    $btn.click( function() {
       
        //.bgArea영역을 fadeIn
        $( '.bgArea' ).fadeIn('slow');
        
        //.instaArea영역을 70%크기로 줄임(작아져야할것)
        $('.instaArea' ).transition({
            'translate' : '-50% , -50%' , //가운데배치위함, translate가 없고 scale만 넣으면 위치가 안맞음(변할것은 아니지만 값은 넣어주어야함)
            'scale' : 0.7
        }, 1000);
        
        //body의 외곽선(선의 굵기)을 50px로 늘림-안쪽으로 들어가는듯한 애니메이션
        $( 'body' ).animate({ 'border-width' : 50 }, 1000);
        
        //.popup영역 원본크기로 늘림-가운데에서 커지는것처럼 나와야함
        $( '.popup' ).transition({
           'translate' : '-50% , -50%' ,
           'scale' : 1//원본비율로 커지게
        }, 1000);
        
        //팝업창안의 내용 -이미지, 텍스트 내용 각각 가져와야함
        $( '.popup img' ).attr( 'src' , $(this).parent().prev().find('img').attr('src') );
        
        //내가 클릭한것의 부모의 이전에 있는 자식요소-find 후손선택자. 의img의 src속성
        $( '.popup p' ).text( $(this).prev().text() );
        //클릭한것(this)의 이전의 text
        
    });
    
    //닫기 버튼 클릭했을떄 팝업창 원래 상태로  
    
    $( '.fa-times-circle' ).click( function() {
       
        $( '.bgArea' ).fadeOut( 'slow' );
        
        $('.instaArea' ).transition({
            'translate' : '-50% , -50%' ,
            'scale' : 1
        }, 1000);
        
        $( 'body' ).animate({ 'border-width' : 0 }, 1000);
        
        $( '.popup' ).transition({
           'translate' : '-50% , -50%' ,
           'scale' : 0
        }, 1000);
    });
    
});