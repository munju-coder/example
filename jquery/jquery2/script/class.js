$(function(){
  /*
  
  .class name X-> class name O 
  
  $( 선택자 ).addClass ( '클래스명' )          -선택자에 클래스 추가 
  $( 선택자 ).removeClass ( '클래스명' )      -선택자에 클래스 제거
  $( 선택자 ).toggleClass ( '클래스명' )       -선택자에 클래스 추가/제거
  
  $( 선택자 ).hasClass ( '클래스명' )           
  -선택자에 Class가 있으면 true, 없으면 false 검사의 개념
  
  $( 선택자 ).index()                     -선택자의 index번호를 가져옴
  ~() 값을 가져옴
  
  $( 선택자 ).text()                       -선택자의 text값을 가져옴
  $( 선택자 ).text( '텍스트값' )        -선택자에 text값을 작성 ( 기존의 text 대체하여 들어감 )
  
  */
    
    
     /*
    
    $( '.list1 dd:nth-of-type(1)' ).click( function() {
       
        $( '.main' ).addClass( 'effect1' );
        
    });
    
    $( '.list1 dd:nth-of-type(2)' ).click( function() {
       
        $( '.main' ).addClass( 'effect2' );
        
    });
    
    $( '.list1 dd:nth-of-type(3)' ).click( function() {
       
        $( '.main' ).addClass( 'effect3' );
        
    });
    */
    
    
    
    //list1 dd를 클릭하면 함수를 실행해라
    $('.list1 dd' ).click( function(){
        //클릭한 dd의 index번호를 num에 담아줌(번호가 변할것이기때문에 변수)
      var num=$( this ).index();  //클릭한 것-이벤트바로앞, 클릭한 dd의 인덱스 번호를 num에 담을것.
        //이름뒤 괄호 -값을 가지고 오는것
        //main영역에 effect1~3클래스 추가
   $( '.main' ).addClass( 'effect'+num );//effect1~3을 클릭해라.
    });
    
    $( '.list2 dd' ).click( function(){
      var num=$(this).index();
        $('.main').removeClass( 'effect'+num);
    });
    
    $( '.list3 dd' ).click( function(){
      var num=$(this).index();
        $('.main').toggleClass( 'effect'+num);
    });
    
     $( '.list4 dd' ).click( function(){
      var txt = $(this).text();
         if( $('.main').hasClass(txt) ) {
             $( '.main p' ).text (txt+'클래스를 가지고 있다');
         }else{
             $('.main p').text (txt+'클래스를 가지고 있지 않다');
         }
     });
        
});