<script>
            $(document).ready( function(){

                var toatl_price = 0;

                var pd_seq = [];
                var amount = [];
                var chkBox = [];
                var product_price = [];
                var each_price = [];

                var each_product_price = 0;
                var deliveryPrice = 3000;
                var deliveryChkPrice = 29999;

                //cnt input init 1
                $(".cnt_input").val(1);

                //init checkbox false
                $("input:checkbox").prop("checked" ,false);

                $('#pd_all_input').click(function(){

                    //all init
                    pd_seq = [];
                    amount = [];
                    chkBox = [];
                    product_price = [];
                    total_price = 0;
                    each_product_price = 0;
                                
                    if($("#pd_all_input").prop("checked")) 
                    {
                        $("input:checkbox[name='chk[]']").prop("checked",true);

                        $("input:checkbox[name='chk[]']").each(function(i){
                            
                            product_price[i] = parseInt(COMMON.form.str_num($(".product_price").eq(i).text()));
                            amount[i] = parseInt(COMMON.form.str_num($(".cnt_input").eq(i).val()));

                            each_product_price += (product_price[i] * amount[i]);
                            $(".only_p_price").text(COMMON.form.comma(each_product_price));

                            if(each_product_price > deliveryChkPrice)
                            {
                                total_price = each_product_price;
                                $(".etc_price").text(COMMON.form.comma(0));
                            }
                            else
                            {
                                total_price = each_product_price + deliveryPrice;
                                $(".etc_price").text(COMMON.form.comma(deliveryPrice));
                            }


                            $(".total_price").text(COMMON.form.comma(total_price));

                        });
                    }
                    else 
                    {
                        pd_seq = [];
                        amount = [];
                        chkBox = [];
                        product_price = [];
                        total_price = 0;
                        each_product_price = 0;

                        $("input:checkbox[name='chk[]']").prop("checked",false);
                        $(".only_p_price, .etc_price, .total_price").text(COMMON.form.comma(total_price));
                    }
                    
                });
                
                //each
                $("input:checkbox[name='chk[]']").each(function(i){
                    $(this).click(function(){

                        total_price = 0;
                        //all chk init
                        $("#pd_all_input").prop("checked" ,false);


                        chkBox[i] = $(this).is(":checked");

                        product_price[i] = parseInt(COMMON.form.str_num($(".product_price").eq(i).text()));
                        amount[i] = parseInt(COMMON.form.str_num($(".cnt_input").eq(i).val()));

                        product_price[i] = product_price[i] * amount[i];

                        /* var each_pd_seq = $(this).attr("pd_seq");
                        var each_amount = $(this).attr("amount"); */

                        if(chkBox[i] == true)
                        {                
                            /* pd_seq.push(each_pd_seq);
                            chk_amount.push(each_amount); */
                            each_product_price += product_price[i];
                        }
                        else
                        {
                            each_product_price -= product_price[i];
                            /* pd_seq.splice(i);
                            chk_amount.splice(i); */
                            
                        }

                        $(".only_p_price").text(COMMON.form.comma(each_product_price));

                        if(each_product_price > deliveryChkPrice)
                        {
                            total_price = each_product_price;
                            $(".etc_price").text(COMMON.form.comma(0));
                        }
                        else
                        {
                            if(chkBox[i] == true)
                            {
                                total_price = each_product_price;
                                if(total_price > deliveryChkPrice)
                                {
                                    total_price -= deliveryPrice;
                                    $(".etc_price").text(COMMON.form.comma(0));
                                }
                                else
                                {
                                    total_price += deliveryPrice;
                                    $(".etc_price").text(COMMON.form.comma(deliveryPrice));
                                }

                                console.log(total_price);
                            }
                            else
                            {
                                total_price = each_product_price;
                                if(total_price > deliveryChkPrice)
                                {
                                    total_price -= deliveryPrice;
                                    $(".etc_price").text(COMMON.form.comma(0));
                                }
                                else
                                {
                                    if(total_price != 0)
                                    {
                                        total_price += deliveryPrice;
                                    }
                                    
                                    $(".etc_price").text(COMMON.form.comma(deliveryPrice));
                                }
                                console.log(total_price);
                            }

                            if(total_price == 0)
                            {
                                $(".etc_price").text(COMMON.form.comma(0));
                            }
                            
                            
                        }

                        $(".total_price").text(COMMON.form.comma(total_price));

                    });
                });



                $(".plus").each(function(i){
                    $(this).click(function(){

                        total_price = 0;
                        each_price[i] = 0;
                        each_product_price = 0;
                        //checkbox checked true
                        $(".each_chk").eq(i).prop("checked", true);

                        //amount plus
                        amount[i] = parseInt($(".cnt_input").eq(i).val());
                        product_price[i] = parseInt(COMMON.form.str_num($(".product_price").eq(i).text()));
                        amount[i] += 1;
                        $(".cnt_input").eq(i).val(amount[i]);

                        each_price[i] = (product_price[i] * amount[i]);

                        for(var k = 0; k < each_price.length; k++)
                        {
                            if(each_price[k] == "undefined" || each_price[k] == null)
                            {
                                each_price[k] = 0;
                            }
                            
                            each_product_price += each_price[k];
                        }

                        //each_product_price += each_price[i];

                        $(".only_p_price").text(COMMON.form.comma(each_product_price));

                        if(each_product_price > deliveryChkPrice)
                        {
                            total_price = each_product_price;
                            $(".etc_price").text(COMMON.form.comma(0));
                        }
                        else
                        {
                            total_price = each_product_price + deliveryPrice;
                            $(".etc_price").text(COMMON.form.comma(deliveryPrice));
                        }


                        $(".total_price").text(COMMON.form.comma(total_price));

                    });
                });

                $(".minus").each(function(i){
                    $(this).click(function(){

                        total_price = 0;
                        each_price[i] = 0;
                        each_product_price = 0;
                        //checkbox checked true
                        $(".each_chk").eq(i).prop("checked", true);

                        //amount plus
                        amount[i] = parseInt($(".cnt_input").eq(i).val());
                        product_price[i] = parseInt(COMMON.form.str_num($(".product_price").eq(i).text()));
                        amount[i] -= 1;

                        if(amount[i] >= 1)
                        {
                            $(".cnt_input").eq(i).val(amount[i]);

                            each_price[i] = (product_price[i] * amount[i]);

                            for(var k = 0; k < each_price.length; k++)
                            {
                                if(each_price[k] == "undefined" || each_price[k] == null)
                                {
                                    each_price[k] = 0;
                                }
                                
                                each_product_price += each_price[k];
                            }

                            //each_product_price += each_price[i];

                            $(".only_p_price").text(COMMON.form.comma(each_product_price));

                            if(each_product_price > deliveryChkPrice)
                            {
                                total_price = each_product_price;
                                $(".etc_price").text(COMMON.form.comma(0));
                            }
                            else
                            {
                                total_price = each_product_price + deliveryPrice;
                                $(".etc_price").text(COMMON.form.comma(deliveryPrice));
                            }


                            $(".total_price").text(COMMON.form.comma(total_price));
                        }
                        else
                        {
                            amount[i] = 1;
                            $(".cnt_input").eq(i).val(amount[i]);

                            each_price[i] = (product_price[i] * amount[i]);

                            for(var k = 0; k < each_price.length; k++)
                            {
                                if(each_price[k] == "undefined" || each_price[k] == null)
                                {
                                    each_price[k] = 0;
                                }
                                
                                each_product_price += each_price[k];
                            }

                            //each_product_price += each_price[i];

                            $(".only_p_price").text(COMMON.form.comma(each_product_price));

                            if(each_product_price > deliveryChkPrice)
                            {
                                total_price = each_product_price;
                                $(".etc_price").text(COMMON.form.comma(0));
                            }
                            else
                            {
                                total_price = each_product_price + deliveryPrice;
                                $(".etc_price").text(COMMON.form.comma(deliveryPrice));
                            }


                            $(".total_price").text(COMMON.form.comma(total_price));
                            alert("최소구매 수량은 1개 입니다.");
                        }
                        

                    });
                });
                
            });
        </script>