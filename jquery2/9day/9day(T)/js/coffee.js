$(function () {

/*

페이징 - 앵커, 마우스 휠, 키보드

var indexNum;

var pos;


*/
       var indexNum;
       var pos;
    
    //앵커
    $('nav a').click( function(e){
      
        e.preventDefault();
                        
    $( 'html, body' ).stop().animate({ 'scrollTop' : $(this.hash).offset().top }, 1000, "easeOutQuad" );
        
        $(this).addClass('active');
        $('nav a').not(this).removeClass('active')
        
    });
    
    //마우스휠
    $('section').each( function(){
      
        $(this).mousewheel( function(e, delta){
            
           if( $('html,body').is(':animated')) return; //중복실행 막음
            
            console.log($(this).prev()[0]);
            
            if(delta>0){
                
                if( $(this).prev()[0] !=undefined){
                    pos=$(this).prev().offset().top;
                    indexNum=$(this).prev().index();
                }
            }else{
                
                if( $(this).next()[0] !=undefined){
                    pos=$(this).next().offset().top;
                    indexNum=$(this).next().index();
                }
            }
            
            $('nav a').eq( indexNum ).addClass('active');
            $('nav a').not( $('nav a').eq( indexNum )).removeClass('active');
            
            $('html,body').animate({'scrollTop':pos},1000,"easeOutQuad");
        });
    });
 
          //키보드
       $(window).keydown( function(e){
         $('nav a').each( function(){
           
             if( $(this).hasClass( 'active') ){
                 indexNum=$(this).index();
             }
         });
         
           switch(e.keyCode){
               case 38:
                   pos=$('section').eq(indexNum).prev().position().top;
                   $('nav a').eq(indexNum).prev().addClass('active');
                   $('nav a').not($('nav a').eq(indexNum).prev()).removeClass('active');
                   
                   break;
                   
               case 40:
                   pos=$('section').eq(indexNum).next().position().top;
                   $('nav a').eq(indexNum).next().addClass('active');
                   $('nav a').not($('nav a').eq(indexNum).next()).removeClass('active');
                   
                   break;
                   
           }
           $('html, body').animate({'scrollTop':pos},1000,"easeOutQuad");
       });
    
            
        /*
        
        1.scroll 이벤트 사용
        2. 스크롤바 공식 이용
        3. .bean1~.bean5 위치 parallax
        
        */
        $(window).scroll( function(){
              
                function scrollFn (a,b,c,d){
                    return srcAct =(d-c)/(b-a)*( $(window).scrollTop()-a)+c;
                }
              //a~b: 0~$('#page2').offset().top  c~d: 0~d
            var bean1 =scrollFn( 0,$('#page2').offset().top,0,20 );
            var bean2 =scrollFn( 0,$('#page2').offset().top,0,75 );
            var bean3 =scrollFn( 0,$('#page2').offset().top,0,30 );
            var bean4 =scrollFn( 0,$('#page2').offset().top,0,13 );
            var bean5 =scrollFn( 0,$('#page2').offset().top,0,85 );
            
             $('.bean1').css({'top':bean1+'%'});
             $('.bean2').css({'top':bean2+'%'});
             $('.bean3').css({'top':bean3+'%'});
             $('.bean4').css({'top':bean4+'%'});
             $('.bean5').css({'top':bean5+'%'});
            
            });
    });



