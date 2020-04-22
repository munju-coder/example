$(function (){
    //nav>ul>li에 마우스커서가 들어오면 함수 실행
  $('nav>ul>li').mouseenter(function(){
      //this->마우스커서가 들어온 li의 ul을 slideDown
    $ ( 'ul' , this ).stop().slideDown('slow');
      
  }); 
    //nav>ul>li 마우스 커서가 빠져나가면 함수 실행
    $( 'nav>ul>li' ).mouseleave(function(){
        //마우스 커서가 빠져나간 li의 ul을 slideUp
      $( 'ul', this ).stop().slideUp('slow');  
    });
});