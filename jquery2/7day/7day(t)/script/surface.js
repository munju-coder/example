$(function () {

    var moveTop;
    var indexNum;

    $('#section1 .txtBox').addClass('on');

    $('section').each(function () {
        $(this).mousewheel(function (e, delta) {

            if (delta > 0) {

                if ($(this).prev()[0] != undefined) {

                    moveTop = $(this).prev().offset().top;
                    indexNum = $(this).prev().index();

                    $('.pager a').eq(indexNum).addClass('active');
                    $('.pager a').not($('.pager a').eq(indexNum)).removeClass('active');
                    $('section').eq(indexNum).find('.txtBox').addClass('on');
                    $('.txtBox').not($('section').eq(indexNum).find('.txtBox')).removeClass('on');
                }

            } else {

                if ($(this).next()[0] != undefined) {

                    moveTop = $(this).next().offset().top;
                    indexNum = $(this).next().index();

                    $('.pager a').eq(indexNum).addClass('active');
                    $('.pager a').not($('.pager a').eq(indexNum)).removeClass('active');
                    
                    $('section').eq(indexNum).find('.txtBox').addClass('on');
                   $('.txtBox').not($('section').eq(indexNum).find('.txtBox')).removeClass('on');
                }
                
            }
            
            console.log( indexNum );

            $( 'html, body' ).stop().animate({ 'scrollTop' : moveTop }, 1000, "easeOutExpo");
        });
    });
});
