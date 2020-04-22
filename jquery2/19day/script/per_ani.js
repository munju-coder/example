$(function () {

    //캔버스 준비
    var canv = $('#canvas1')[0].getContext("2d");

    var timeline = setInterval(canvasAni, 1000 / 60);

    canv.lineWidth = "3";
    canv.strokeStyle = "#0027ff";
    canv.beginPath();
    canv.arc(80, 200, 40, Math.PI * 2, 0, true);
    canv.stroke();
    
    canv.lineWidth = "3";
    canv.strokeStyle = "#0027ff";
    canv.beginPath();
    canv.arc(180, 180, 40, Math.PI * 2, 0, true);
    canv.stroke();
    
    canv.lineWidth = "3";
    canv.strokeStyle = "#0027ff";
    canv.beginPath();
    canv.arc(280, 200, 40, Math.PI * 2, 0, true);
    canv.stroke();
    
    canv.lineWidth = "3";
    canv.strokeStyle = "#0027ff";
    canv.beginPath();
    canv.arc(380, 200, 40, Math.PI * 2, 0, true);
    canv.stroke();
    

    var skill1 = 0;
    var per1 = 0;
    var deg1 = 0;


    //지우고 그리고반복 -원먼저 그리고 시작
    function canvasAni() {

        canv.clearRect(0, 0, 500, 400);
        
        skill1 += 0.02* (72 - skill1);
        per1 = Math.floor(skill1);
        deg1 += 0.02 * ( (2 * 0.72) - deg1);

        canv.lineWidth = "3";
        canv.strokeStyle = "#0027ff";

        canv.beginPath();

        canv.arc(80, 200, 40, Math.PI * 2, 0, true);
        canv.stroke();
        
        skill2 += 0.02* (72 - skill2);
        per2 = Math.floor(skill2);
        deg2 += 0.02 * ( (2 * 0.72) - deg2);

        canv.lineWidth = "3";
        canv.strokeStyle = "#0027ff";

        canv.beginPath();

        canv.arc(80, 200, 40, Math.PI * 2, 0, true);
        canv.stroke();
        
        skill3 += 0.02* (72 - skill1);
        per3 = Math.floor(skill1);
        deg3 += 0.02 * ( (2 * 0.72) - deg1);

        canv.lineWidth = "3";
        canv.strokeStyle = "#0027ff";

        canv.beginPath();

        canv.arc(80, 200, 40, Math.PI * 2, 0, true);
        canv.stroke();
        
        skill4 += 0.02* (72 - skill1);
        per4 = Math.floor(skill1);
        deg4 += 0.02 * ( (2 * 0.72) - deg1);

        canv.lineWidth = "3";
        canv.strokeStyle = "#0027ff";

        canv.beginPath();

        canv.arc(80, 200, 40, Math.PI * 2, 0, true);
        canv.stroke();
        
        
        canv.lineWidth = "10"
        canv.strokeStyle = "#009dff";
        canv.lineCap = "round";
        
        canv.beginPath();
        
         canv.lineWidth = "10"
        canv.strokeStyle = "#009dff";
        canv.lineCap = "round";
        
        canv.beginPath();
        
         canv.lineWidth = "10"
        canv.strokeStyle = "#009dff";
        canv.lineCap = "round";
        
        canv.beginPath();
        
         canv.lineWidth = "10"
        canv.strokeStyle = "#009dff";
        canv.lineCap = "round";
        
        canv.beginPath();
        
        
        
        // 0 0.5 1 1.5 시계방향원
        canv.arc( 80, 200, 30, Math.PI * deg1 -1.5, Math.PI * 1.5 , true);
        canv.stroke();
        
        canv.font ="20px Impact";
        canv.fillStyle = "#333";
        //퍼센트
        canv.fillText(per1+ '%', 65, 210);
        canv.fillText(per2+ '%', 165, 210);
        canv.fillText(per3+ '%', 265, 210);
        canv.fillText(per4+ '%', 365, 210);
        
        //과목
        canv.fillText("photoshop", 35, 270);
        canv.fillText("illust", 35, 270);
        canv.fillText("photoshop", 35, 270);
        canv.fillText("photoshop", 35, 270);
        
        
    
    }
    
  
});



