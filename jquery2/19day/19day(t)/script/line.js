$( function() {

    //캔버스 준비
    var canv = $( '#canvas1' )[0].getContext("2d");
    
    canv.fillStyle = "#cc3b3b";     //채우기 색 
    canv.strokeStyle = "#171515";   //선 색
    canv.lineWidth = "10";          //선 굵기

    //butt - 좌표 밖 , square - 좌표 안 , round - 둥글게
    canv.lineCap = "round";         //선 끝모양
    
    //bevel - 접힘 , miter - 뾰족 , round - 둥글게 
    canv.lineJoin = "bevel";       //선 꺾이는 부분
    
    canv.beginPath();               //패스 시작
    canv.moveTo( 320 , 20 );       //시작점
    canv.lineTo( 400, 20 );         //연결점
    canv.lineTo( 360, 100 );         //연결점
    canv.closePath();                //닫힌 패스
    
    
    canv.stroke();                  //선그리기
    canv.fill();                    //면 채우기
});






