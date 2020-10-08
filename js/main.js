$(document).ready( function(){
    $(document).ready( function(){
        /**
        * @brief footer img click event
        */
        $('.ft_wrap ul li a').each(function(i){
            $(this).click(function(e){
                e.preventDefault();
                var src = $(this).find("img").attr("srcc");

                console.log(src);
                $(this).find("img").attr("src", src);
            
            });
        });

        $('.ft_wrap ul li').click( function(){
            $(this).addClass('active');

            if($(this).hasClass == 'active') {
                $(this).removeClass('active');
                
            }else {
                $(this).addClass('active');
            }
        }); 

    });
});