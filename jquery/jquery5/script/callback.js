$( function() {

    groundAni();
    cloud1Ani();
    cloud2Ani();
    cloud3Ani();
    cloud4Ani();
    
    function groundAni() {
        $( '.ground' ).animate({ 'top' : 150 }, 1000).animate({ 'top' : 130 }, 1000, null, groundAni);
    }
    
    function cloud1Ani() {
        $( '.cloud1' ).animate({ 'left' : '100%'}, 30000, null, function() {
            $( '.cloud1' ).css({ 'left' : -506 });
            cloud1Ani();
        });
    }
    
    function cloud2Ani() {
        $( '.cloud2' ).animate({ 'left' : '100%'}, 28000, null, function() {
            $( '.cloud2' ).css({ 'left' : -1000 });
            cloud2Ani();
        });
    }
    
    function cloud3Ani() {
        $( '.cloud3' ).animate({ 'left' : '100%'}, 18000, null, function() {
            $( '.cloud3' ).css({ 'left' : -1000 });
            cloud3Ani();
        });
    }
    
    function cloud4Ani() {
        $( '.cloud4' ).animate({ 'left' : '100%'}, 23000, null, function() {
            $( '.cloud4' ).css({ 'left' : -1020 });
            cloud4Ani();
        });
    }
    

});