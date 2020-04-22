$( function(){
  
     //캔버스 준비
    var canv = $( '#canvas1' )[0].getContext("2d");
    var gra1 = canv.createLinearGradient( 70, 250 ,450, 250 );
    
    gra1.addColorStop(0, "#6a0b0b");
    gra1.addColorStop(0.5, "#954242");
    gra1.addColorStop(1, "#b59898");
    
    canv.fillStyle=gra1;
    
    canv.font="italic bold 150px Impact";
    canv.fillText("Canvas", 0, 250 );
    
});
