$(function () {

    //캔버스 준비
    var canv = $('#canvas1')[0].getContext("2d");

    canv.strokeStyle = "#ff00f5";
    canv.lineWidth = "5";
    
    canv.beginPath();
    //canv.arc( x , y , r , 시작위치 , 끝위치 , 반시계 );
    canv.arc( 50 , 100 , 20 , Math.PI * 0.5 , 0 , true );
    canv.stroke();
    
    canv.beginPath();
    canv.arc( 100 , 100 , 20 , Math.PI * 1 , 0 , true );
    canv.stroke();
    
    canv.beginPath();
    canv.arc( 150 , 100 , 20 , Math.PI * 1.5 , 0 , true );
    canv.stroke();
    
    canv.beginPath();
    canv.arc( 200 , 100 , 20 , Math.PI * 2 , 0 , true );
    canv.stroke();
    
    
    
    canv.beginPath();
    canv.arc( 50 , 250 , 20 , Math.PI * 0.5 , 0 , false );
    canv.stroke();
    
    canv.beginPath();
    canv.arc( 100 , 250 , 20 , Math.PI * 1 , 0 , false );
    canv.stroke();
    
    canv.beginPath();
    canv.arc( 150 , 250 , 20 , Math.PI * 1.5 , 0 , false );
    canv.stroke();
    
    canv.beginPath();
    canv.arc( 200 , 250 , 20 , Math.PI * 2 , 0 , false );
    canv.stroke();
    
    canv.fillStyle="#fcd1bf";
    canv.beginPath();
    canv.arc( 350, 150 , 50, Math.PI * 2 , 0 , true );
    canv.fill();
    
    canv.fillStyle="#fa8ac6";
    canv.beginPath();
    canv.arc( 350, 170 , 10, Math.PI * 1 , 0 , true );
    canv.fill();
    
    canv.fillStyle="#000000";
    canv.beginPath();
    canv.arc( 320, 150 , 5, Math.PI * 1 , 0 , false );
    canv.fill();
    
    canv.beginPath();
    canv.arc( 380, 150 , 5, Math.PI * 1 , 0 , false );
    canv.fill();
    
});
