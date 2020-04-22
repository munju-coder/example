$(function () {

    //캔버스 준비
    var canv = $('#canvas1')[0].getContext("2d");
   
    var ani = setInterval( canvasAni , 1000 / 30 );
    
    var posX = 50;
    
    canv.fillStyle = "red";
    
    function canvasAni() {
        
        canv.clearRect( 0, 0, 500, 400 );
        
        canv.beginPath();
        canv.arc( posX, 200, 50, Math.PI * 2, 0, true  )
        canv.fill();
        
        //posX += 2;
        
        //현재값 += 속도 * ( 도착값 - 현재값)
        //속도값 0.2 ~ 0.4( 30fps기준 ) / 0.02 ~  0.04 (60fps)
        
        posX += 0.2 * ( 450 - posX );    
        
        if( posX >= 450 ){
            clearInterval( ani );
        }
    }
    
});