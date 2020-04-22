$(function () {

    //캔버스 준비
    var canv = $('#canvas1')[0].getContext("2d");

    canv.fillStyle = "#5800ff";
    
    //canv.fillRect( x , y , 넓이 , 높이 );
    canv.fillRect( 0 , 0 , 200 , 100 );
    
    
    //var 그라데이션이름 = 캔버스이름.createLinearGradient( x1 , y1, x2 , y2  );
    var gra1 = canv.createLinearGradient( 0 , 110, 80 , 180  );
    gra1.addColorStop( 0 , "red" );
    gra1.addColorStop( 0.5 , "green" );
    gra1.addColorStop( 1 , "blue" );
    
    canv.fillStyle = gra1;
    canv.fillRect( 0, 100, 100, 100 );
   
    
    //var 그라데이션이름 = 캔버스이름.createRadialGradient( x1, y1, r, x2, y2, r2 );
    var gra2 = canv.createRadialGradient( 50, 250 , 30 , 50, 250 , 31 );
    gra2.addColorStop( 0, "blue" );
    gra2.addColorStop( 1, "yellow" );
    
    canv.fillStyle = gra2;
    canv.fillRect( 0, 200, 100, 100 );
    
});
