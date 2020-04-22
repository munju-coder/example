$(function () {

    //캔버스 준비
    var canv = $('#canvas1')[0].getContext("2d");
   
    var gra1 = canv.createLinearGradient( 70, 250, 450, 250 );
    
    gra1.addColorStop(0 , "#ff2277");
    gra1.addColorStop(0.5 , "#ffce48");
    gra1.addColorStop(1 , "#2288ff");
    
    canv.fillStyle = gra1;
    
    canv.font = "italic bold 150px Impact";
    canv.fillText( "Canvas" , 0, 250 );
    
});