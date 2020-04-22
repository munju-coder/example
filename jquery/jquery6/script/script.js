$(function(){
  
    var onOff=false; //화면 안 false, 화면 밖 true
    $('.btn').click(function(){
      
        onOff=!onOff;
        if(onOff){
            $('header').stop().animate({'left':'-25%'},1000);
            $('section').stop().animate({'width':'100%'},1000);
            
            $('.btn i').removeClass('fas fa-search-plus');
            $('.btn i').addClass('fas fa-search-minus');
        }else{
            $('header').stop().animate({'left':0},1000);
            $('section').stop().animate({'width':'75%'},1000);
            
            $('.btn i').removeClass('fas fa-search-minus');
            $('.btn i').addClass('fas fa-search-plus');
        }
    });
    
});