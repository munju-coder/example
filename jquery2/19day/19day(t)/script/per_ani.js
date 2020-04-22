$( function() {
    
    var canv = $( '#canvas1' )[0].getContext("2d");
    
    var timeline = setInterval( canvasAni , 1000 / 60 );
    
    canv.lineWidth = "3";
    canv.strokeStyle = "#262626";
    
    canv.beginPath();
    canv.arc( 80, 200, 40, Math.PI * 2 , 0 , true );
    canv.stroke();
    
    canv.beginPath();
    canv.arc( 180, 200, 40, Math.PI * 2 , 0 , true );
    canv.stroke();
    
    canv.beginPath();
    canv.arc( 280, 200, 40, Math.PI * 2 , 0 , true );
    canv.stroke();
    
    canv.beginPath();
    canv.arc( 380, 200, 40, Math.PI * 2 , 0 , true );
    canv.stroke();
    
    var skill1 = 0;
    var per1 = 0;
    var deg1 = 0;
    
    var skill2 = 0;
    var per2 = 0;
    var deg2 = 0;
    
    var skill3 = 0;
    var per3 = 0;
    var deg3 = 0;
    
    var skill4 = 0;
    var per4 = 0;
    var deg4 = 0;
    
    function canvasAni() {
        
        canv.clearRect( 0, 0, 500, 400 );
        
        skill1 += 0.02 * ( 82 - skill1 );
        per1 = Math.floor( skill1 );
        deg1 += 0.02 * ( ( 2 * 0.82 ) - deg1 );
        
        skill2 += 0.02 * ( 35 - skill2 );
        per2 = Math.floor( skill2 );
        deg2 += 0.02 * ( ( 2 * 0.35 ) - deg2 );
        
        skill3 += 0.02 * ( 57 - skill3 );
        per3 = Math.floor( skill3 );
        deg3 += 0.02 * ( ( 2 * 0.57 ) - deg3 );
        
        skill4 += 0.02 * ( 70 - skill4 );
        per4 = Math.floor( skill4 );
        deg4 += 0.02 * ( ( 2 * 0.70 ) - deg4 );
        
        canv.lineWidth = "3";
        canv.strokeStyle = "#262626";

        canv.beginPath();
        canv.arc( 80, 200, 40, Math.PI * 2 , 0 , true );
        canv.stroke();

        canv.beginPath();
        canv.arc( 180, 200, 40, Math.PI * 2 , 0 , true );
        canv.stroke();

        canv.beginPath();
        canv.arc( 280, 200, 40, Math.PI * 2 , 0 , true );
        canv.stroke();

        canv.beginPath();
        canv.arc( 380, 200, 40, Math.PI * 2 , 0 , true );
        canv.stroke();
        
        canv.lineWidth = "10";
        canv.strokeStyle = "#0058ff";
        //canv.lineCap = "round";
        
        canv.beginPath();
        canv.arc( 80, 200, 30, Math.PI * deg1 - 1.5 , Math.PI * 1.5, true );
        canv.stroke();
        
        canv.strokeStyle = "#ff9d00";
        canv.beginPath();
        canv.arc( 180, 200, 30, Math.PI * deg2 - 1.5 , Math.PI * 1.5, true );
        canv.stroke();
        
        canv.strokeStyle = "#45ff00";
        canv.beginPath();
        canv.arc( 280, 200, 30, Math.PI * deg3 - 1.5 , Math.PI * 1.5, true );
        canv.stroke();
        
        canv.strokeStyle = "#ff0080";
        canv.beginPath();
        canv.arc( 380, 200, 30, Math.PI * deg4 - 1.5 , Math.PI * 1.5, true );
        canv.stroke();
        
        canv.font = "20px Impact";
        canv.fillStyle = "#333";
        
        //퍼센트
        canv.fillText( per1 + '%' , 65, 210 );
        canv.fillText( per2 + '%' , 165, 210 );
        canv.fillText( per3 + '%' , 265, 210 );
        canv.fillText( per4 + '%' , 365, 210 );
        
        //과목
        canv.fillText( 'Photoshop' , 35, 270 );
        canv.fillText( 'Illust' , 157, 270 );
        canv.fillText( 'HTML & CSS' , 235, 270 );
        canv.fillText( 'JQuery' , 355, 270 );
        
    }
    
});



