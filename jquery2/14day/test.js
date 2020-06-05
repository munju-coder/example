   <script>
    $("document").ready(function(){
        var pd_amount = parseInt($("#pd_amount").val());
        var pd_price = parseInt(COMMON.form.str_num($(".total_price").text()));
        var pd_min_quantity = parseInt($("#pd_min_quantity").val());    //최소 구매수량
        var pd_max_quantity = parseInt($("#pd_max_quantity").val());    //최대 구매수량
        var delivery_price = parseInt($("#delivery_price").val());

        var chk_amount = parseInt($("#cnt").val());
        
        var total_amount = chk_amount;
        var total_price = 0;
        
        //최소 구매수량이 0으로 등록되었을때 1로 초기화 시킴.
        if(pd_min_quantity == 0)
        {
            pd_min_quantity = 1;
        }

        //plus
        $("#plus").click(function(){
            total_amount = total_amount + chk_amount;
            
            if(pd_max_quantity != 0 && pd_max_quantity < total_amount)
            {
                alert("최대 구매수량은 " + pd_max_quantity + "개 입니다.");
                $("#cnt").val(pd_max_quantity);
                total_price = pd_price * pd_max_quantity;
                $(".total_price").text(COMMON.form.comma(total_price));
            }
            else
            {
                if(pd_amount <script total_amount)
                {
                    alert("현재 상품의 재고 수량은 " + pd_amount + "개 입니다.");

                    $("#cnt").val(pd_amount);
                    total_price = pd_price * pd_amount;
                    $(".total_price").text(COMMON.form.comma(total_price));
                    
                }
                else
                {
                    $("#cnt").val(total_amount);
                    total_price = pd_price * total_amount;
                    $(".total_price").text(COMMON.form.comma(total_price));
                    
                }
            }
        });
    </script>