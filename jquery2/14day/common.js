/**
 * @brief common object
 */
var COMMON = {};

/**
 * @brief cookie Object
 */
COMMON.cookie = {
    /**
     * @brief 쿠키값 가져오기
     * @param {string} cName 쿠키 지정 값
     * @returns {string} unescape value
     */
    getCookie : function (cName)
    {
        cName = cName + '=';
        var cookieData = document.cookie;
        var start = cookieData.indexOf(cName);
        var cValue = '';

        if(start != -1)
        {
            start += cName.length;
            var end = cookieData.indexOf(';', start);
            if(end == -1)end = cookieData.length;
            cValue = cookieData.substring(start, end);
        }
        return unescape(cValue);
    },
    /**
     * @brief cookie setting
     * @param {string} cName 
     * @param {string} cValue   
     * @param {number} cDay     지속일
     */
    setCookie : function (cName, cValue, cDay)
    {
        let expire = new Date();

        expire.setDate(expire.getDate() + cDay);
        cookies = cName + '=' + escape(cValue) + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.

        if(typeof cDay != 'undefined')
        {
            cookies += ';expires=' + expire.toGMTString() + ';';
        }

        document.cookie = cookies;
    },
    /**
     * @brief cookie delete
     * @param {string} name 
     */
    delCookie : function (name)
    {
        let today = new Date();

        today.setTime(today.getTime() - 1);
        let value = get_cookie(name);
        if(value != "")
        {
            document.cookie = name + "=" + value + "; path=/; expires=" + today.toGMTString();
        }
    }
};

/**
 * @brief form data event
 */
COMMON.form = {
    /**
     * @brief html text comma change
     * @param {string} str 
     * @returns {string}
     */
    comma : function(str)
    {
        str = String(str);
        return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    },
    /**
     * @brief html text comma remove
     * @param {string} str 
     * @returns {string}
     */
    uncomma : function(str) 
    {
        str = String(str);
        return str.replace(/[^\d]+/g, '');        
    },
    /**
     * @brief input num comma
     * @param {string} obj 
     */
    inputNumComma : function(obj)
    {
        obj.value = this.comma(this.uncomma(obj.value));
    },
    /**
     * @brief member product insert & modify pd_price limit(300만원) ? 결제사 제한
     */
    inputNumCommaChk : function(obj)
    {
        let val = this.uncomma(obj.value);
        if(val > 3000000)
        {
            obj.value = 0;
            alert("상품 금액이 300만원 이상을 초과할 수 없습니다.");
        }
        else
        {
            obj.value = this.comma(this.uncomma(obj.value));
        }        
    },
    /**
     * @brief 문자열에서 숫자만 추출
     * @param {string} str
     * @returns {number}
     */
    str_num : function(str)
    {
        let res = str.replace(/[^0-9]/g,"");    
        return res;
    },
    /**
     * @brief 자리수 채우기
     * @param {*} n value
     * @param {*} width 길이
     * @returns {*}
     */
    left_pad : function(n, width)
    {
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;        
    },
    /**
     * @brief 문자열 공백 제거
     * @param {string}} stringToTrim 
     * @returns {string}
     */
    trim : function(stringToTrim)
    {
        var str = stringToTrim.replace(/^\s+|\s+$/g,"");
	
        if(str == "" || str == "undefined")
        {
            str = null;
        }
        
        return str;        
    },
    limitText : function(str, limit)
    {        
        if(str.length > limit)
        {
            alert("글자수가 " + limit + " 자로 제한되어 있습니다.");
        }
    },
    inputPhoneNumber : function (obj) {

        var number = obj.value.replace(/[^0-9]/g, "");
        var phone = "";    
    
        if(number.length < 4) {
            return number;
        } else if(number.length < 7) {
            phone += number.substr(0, 3);
            phone += "-";
            phone += number.substr(3);
        } else if(number.length < 11) {
            phone += number.substr(0, 3);
            phone += "-";
            phone += number.substr(3, 3);
            phone += "-";
            phone += number.substr(6);
        } else {
            phone += number.substr(0, 3);
            phone += "-";
            phone += number.substr(3, 4);
            phone += "-";
            phone += number.substr(7);
        }
        obj.value = phone;
    },
    maxLengthChk : function(object) {
        if (object.value.length > object.maxLength){
            object.value = object.value.slice(0, object.maxLength);
        }        
    }
};


COMMON.mbChk = {
    minLength : 8,  //password str minlength
    maxLength : 15, //password str maxlength
    emailChk : function(email){
        var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;	

        if(exptext.test(email) == false)
        {
            return false;
        }        
    },
    passwdChk : function(password)
    {
        var pw = password;
        var num = pw.search(/[0-9]/g);
        var eng = pw.search(/[a-z]/ig);
        var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
        var _bool = true;
    
        if(pw.length < this.minLength || pw.length > this.maxLength)
        {
            alert(this.minLength + "자리 ~ " + this.maxLength + "자리 이내로 입력해주세요.");
            _bool = false;
        }
    
        if(pw.search(/₩s/) != -1)
        {
            alert("비밀번호는 공백업이 입력해주세요.");
            _bool = false;
        } 
        
        if(num < 0 || eng < 0 || spe < 0 )
        {
            alert("영문,숫자, 특수문자를 혼합하여 입력해주세요.");
            _bool = false;
        }	
        
        return _bool;
    }
};

/**
 * @brief args operation
 */
COMMON.arrOperator = {
    /**
     * @brief array plus sum
     * @param {Array<number>} val 
     * @return {number} sum
     */
    arrPlus : function (val)
    {
        let sum = null;
        for(let i = 0; i < val.length; i++)
        {
            if(val[i] == null || isNaN(val[i]) == true)
            {
                val[i] = 0;
            }
            sum += val[i];
        }
        
        return sum;
    },
    /**
     * @brief array minus sum
     * @param {Array<number>} val
     * @returns {number} sum
     */
    arrMinus : function (val)
    {
        let sum = null;
        for(let i = 0; i < val.length; i++)
        {
            if(val[i] == null || isNaN(val[i]) == true)
            {
                val[i] = 0;
            }
            sum -= val[i];
        }
        
        return sum;        
    },
    arrMuliplication : function(val, amount)
    {
        let sum = null;
        for(let i = 0; i < val.length; i++)
        {
            if(val[i] == null)
            {
                val[i] = null;										
            }
            sum += val[i] * amount;
            
        }
        
        return sum;
    },
    /**
     * @brief 배열 빈값 제거
     * @param {Array<*>} actual
     * @returns {Array<*>} 빈 배열 제거 후 재정렬
     */
    cleanArray : function (actual)
    {
        let newArray = new Array();
        for (let i = 0; i < actual.length; i++) 
        {
          if(actual[i])
          {
            newArray.push(actual[i]);
          }
        }
        return newArray;        
    }
};

/**
 * @brief urlParameter & urlFileName 
 */
COMMON.url = {
    /**
     * @brief url parameter 가져오기
     * @param {string} parameter
     * @returns {string}
     */
    urlParameter : function (parameter)
    {
        let results = new RegExp('[\?&]' + parameter + '=([^&#]*)').exec(window.location.href);
        if (results==null)
        {
           return null;
        }
        else
        {
           return results[1] || 0;
        }
    },
    /**
     * @brief url fileName 가져오기
     * @returns {string}
     */
    urlFileName : function ()
    {
        let filename = document.location.href.split("/").slice(-1).pop();
        let newName = filename.split("?");
        
        return newName[0];
    }
};

COMMON.winOpen = {
    windowOpen : function (url, _top, _left, width, height) 
    {
        window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=" + _top +",left=" + _left +",width=" + width + ",height=" + height);
    }
};

/**
 * @brief daum kakao api "주소 찾기"
 */
COMMON.daum = {
    DaumPostcode : function (devide)
    {
        daum.postcode.load(function () {
            new daum.Postcode({
                oncomplete: function (data) {
                    
                    let fullAddr = ''; 
                    let extraAddr = '';    
                    
                    if (data.userSelectedType === 'R') { 
                        fullAddr = data.roadAddress;
    
                    } else { 
                        fullAddr = data.jibunAddress;
                    }    
                    
                    if (data.userSelectedType === 'R') {
                        
                        if (data.bname !== '') {
                            extraAddr += data.bname;
                        }
                        
                        if (data.buildingName !== '') {
                            extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                        }
                        
                        fullAddr += (extraAddr !== '' ? ' (' + extraAddr + ')' : '');
                    }				
                    
                    if(devide == "mb_zip_btn")
                    {
                        document.getElementById('mb_zip').value = data.zonecode;
                        document.getElementById('mb_addr_1').value = fullAddr;
                        document.getElementById('mb_addr_2').focus();
                    }
                    else if(devide == "r_zip_btn")
                    {
                        document.getElementById('r_zip').value = data.zonecode;
                        document.getElementById('r_addr_1').value = fullAddr;
                        document.getElementById('r_addr_2').focus();
                    }
                                    
                }
            }).open();
        });        
    }
};

/**
 * @brief REST call
 */
COMMON.ajax = {
    /**
     * @brief ajax call
     * @param {string} _method      GET, POST, PUT, DELETE 
     * @param {string} dir          REST dir
     * @param {object} dataObject   serializeObject
     */
    restfulAjax : function(_method, dir, dataObject) {
        $.ajax({
            type: _method,
            cache : false,
            dataType: "json",
            url: URL + "/REST/"+ dir +"/index.php",
            data: JSON.stringify(dataObject),
            success: function(data)
            {
                alert(data['return_msg']);

                //login 
                if(data['return_cd'] == "0003")
                {
                    location.href = MOBILE_URL;
                }
            },
            error: function(r) {
                alert("통신실패...");
            }
        });
    },
    restfulAjaxReturn : function(_method, dir, dataObject) {
        let rObject;
        let dataObj = null;

        if(_method == "GET")
        {
            dataObj = dataObject;
        }
        else
        {
            dataObj = JSON.stringify(dataObject);
        }

        $.ajax({
            type: _method,
            cache : false,
            async: false,
            dataType: "json",
            url: URL + "/REST/"+ dir +"/index.php",
            data: dataObj,
            success: function(data)
            {
                rObject = data;
            },
            error: function(r) {
                alert("통신실패...");
            }
        });

        return rObject;
    },
    /**
     * @brief product row call, index call
     * @param {string} sca 
     * @param {string} sfl 
     * @param {string} stx 
     * @param {string} sst 
     * @param {string} sod
     * @param {string} page      
     * @param {string} limit 
     * @param {number} pd_category 
     * @param {string} region
     * @param {string} city
     */
    productList : function(sca, sfl, stx, sst, sod, page, limit, pd_category, region, city)
    {

        $.ajax({
            type : "GET",
            dataType: "json",
            url: URL + "/REST/product/user/",
            cache : false,		
            data: {'api_key':'123456789', 'sca' : sca, 'sfl' : sfl, 'stx' : stx, 'sst' : sst, 'sod' : sod, 'page' : page, 'limit' : limit, 'pd_category' : pd_category, 'region' : region, 'city' : city },
            success : function(data)
            {
                //console.log(data['return_msg']);
                let html = new Array();

                for(let i = 0; i < data['rows'].length; i++)
                {
                    html[i] = '<a href = "'+MOBILE_URL+'/product/view.php?seq='+data['rows'][i]['seq']+'"><div class="pdlb_middle">';

                    if(data['rows'][i]['img_1'] != "")
                    {
                        html[i] += '<div class="pdlbm_left"><img src="'+ URL +'/uploads/images/product/320/' + data['rows'][i]['img_1'] + '" alt="상품이미지"></div>';
                    }
                    else
                    {
                        html[i] += '<div class="pdlbm_left"><img src="'+ URL +'/images/no_img.png" alt="상품이미지"></div>';
                    }
                    
                    html[i] += '<div class="pdlbm_right"><div class="pdlbm_name" title="123">' + data['rows'][i]['pd_name'] + '</div><div class="pdlbm_price">' + COMMON.form.comma(data['rows'][i]['pd_price']) + ' 원</div></div>';

                    html[i] += '</div></a>';
                    $('<div class = "pdl_box"></div>').append(html[i]).appendTo(".pd_in_box");
                }

                if(data['count'] < 1)
                {
                    $(".list_null").remove();
                    $('<div class = "list_null">검색된 자료가 없습니다.</div>').appendTo(".pd_in_box");
                }
                else
                {
                    $(".list_null").remove();
                }

                /**
                 * @brief product detail page move
                 */
                $(".pdb_top").click(function(){
                    let seq = COMMON.form.trim($(this).siblings(".pdb_bottom").attr("seq"));
                    location.href = MOBILE_URL + "/product/view.php?seq=" + seq;
                });

                //order btn
                $(".order_btn").click(function(){
                    let orderObject = new Object();
                    orderObject['seq'] = $(this).parents(".pdb_bottom").attr("seq");

                    if(MB_ID == "")
                    {
                        alert("로그인 후 구매 가능합니다.");
                    }
                    else
                    {
                        location.href = MOBILE_URL + "/order/order.php?seq=" + orderObject['seq'] + "&u_amount=1" ;
                    }
                    
                });

                //cart btn
                $(".cart_btn").click(function(){

                    if(MB_ID == "")
                    {
                        alert("로그인 후 사용가능합니다.");
                    }
                    else
                    {
                        var cartObject = {};
                        cartObject['api_key'] = "123456789";
                        cartObject['mb_id'] = MB_ID;
                        cartObject['pd_seq'] = $(this).parents(".pdb_bottom").attr("seq");
                        cartObject['ct_amount'] = 1;
                        
                        $.ajax({
                            method : "PUT",
                            type : "json",
                            cache : false,
                            url : URL + "/REST/cart/",
                            data : JSON.stringify(cartObject),
                            success : function(data)
                            {
                                alert(data['return_msg']);
                            },
                            error : function(r)
                            {
                                alert("통신실패.");
                            }
                        });
                    }
                });

                //btn_more hide
                if(data['total_page'] == page )
                {
                    $(".pd_more_btn").hide();
                }
                else
                {
                    $(".pd_more_btn").show();
                }
                
                if(data['count'] == 0)
                {
                    //$(".pd_in_box").html("검색된 상품이 없습니다.").css("font-size","100px");
                    $(".pd_more_btn").hide();
                }
                
            },          
            error: function(r) {
                alert("index_board error~~~");
            }
        });	
    },
    /**
     * @brief member -> mypage 본인이 등록한 리스트      
     */
    productMBList : function(sca, sfl, stx, sst, sod, page, limit, pd_category, mb_id)
    {
        $.ajax({
            type : "GET",
            dataType: "json",
            url: URL + "/REST/member/product/",
            cache : false,		
            data: {'api_key':'123456789', 'sca' : sca, 'sfl' : sfl, 'stx' : stx, 'sst' : sst, 'sod' : sod, 'page' : page, 'limit' : limit, 'pd_category' : pd_category, 'mb_id': mb_id },
            success : function(data)
            {
                //console.log(data['message']);
                var html = new Array();

                for(var i = 0; i < data['rows'].length; i++)
                {
                    html[i] = '<div class = "m_pd_box">';
                        html[i] += '<div class = "mbp_top">';
                            html[i] += '<div class = "mbpt_img">';
                            html[i] += '<a href = "'+MOBILE_URL+'/member/product_modify.php?w=u&seq='+data['rows'][i]['seq']+'">';

                            if(data['rows'][i]['img_1'] != "")
                            {
                                html[i] += '<img src="'+ URL +'/uploads/images/product/320/' + data['rows'][i]['img_1'] + '" alt="상품">';
                            }
                            else
                            {
                                html[i] += '<img src="'+ URL +'/images/no_img.png" alt="상품">';
                            }
                            
                            html[i] += '</a>';
                            html[i] += '</div>';

                            html[i] += '<div class = "mbpt_order">';
                            html[i] += '<ul>';
                            html[i] += '<li>' + data['rows'][i]['pd_reg_date'].substring(0, 10) + '</li>';
                            html[i] += '<li>' + data['rows'][i]['pd_name'] + '</li>';
                            html[i] += '<li>' + COMMON.form.comma(data['rows'][i]['pd_price']) +' 원</li>';
                            html[i] += '<li class = "text_c_red">상품재고(' + data['rows'][i]['pd_amount'] + ')</li>';
                            html[i] += '<li><div class = "copy_btn" seq = "'+data['rows'][i]['seq']+'">상품 재등록</div></li>';
                            html[i] += '</ul>';
                            html[i] += '</div>';
                        html[i] += '</div>';

                        html[i] += '<div class = "mbp_middle">';
                        html[i] += '</div>';
                    html[i] += '</div>';

                    $('<div ></div>').append(html[i]).appendTo(".m_pd_in_box");
                }
             
                //btn_more hide
                if(data['total_page'] == page )
                {
                    $(".pd_more_btn").hide();
                }
                else
                {
                    $(".pd_more_btn").show();
                }
                
                if(data['count'] == 0)
                {
                    //$(".pd_in_box").html("검색된 상품이 없습니다.").css("font-size","100px");
                    $(".pd_more_btn").hide();
                }

                //상품 재등록
                $(".copy_btn").each(function(){
                    $(this).click(function(){
                        let seq = $(this).attr("seq");                        
                        let formObject = {};
                        let conf = confirm("상품을 재등록 하시겠습니까?");

                        formObject['api_key'] = "123456789";
                        formObject['seq'] = seq;

                        if(conf == true)
                        {
                            $.ajax({
                                type: "PUT",
                                cache : false,
                                dataType: "json",
                                url: URL + "/REST/product/copy/index.php",
                                data: JSON.stringify(formObject),
                                success: function(data)
                                {
                                    alert(data['return_msg']);                
                                    
                                    if(data['return_cd'] == "0000")
                                    {
                                        location.reload();
                                    }
                                    
                                },
                                error: function(r) {
                                    alert("통신실패...");
                                }
                            });
                        }
                        
                    });
                });
                
            },          
            error: function(r) {
                alert("index_board error~~~");
            }
        });	
    },
    boardList : function(board, sca, sfl, stx, sst, sod, page, limit)
    {
        $.ajax({
            type : "GET",
            dataType: "json",
            url: URL + "/REST/board/"+ board,
            cache : false,		
            data: {'api_key':'123456789', 'sca' : sca, 'sfl' : sfl, 'stx' : stx, 'sst' : sst, 'sod' : sod, 'page' : page, 'limit' : limit },
            success : function(data)
            {
                //추후
            },
            error : function(e)
            {
                alert("통신 실패.");
            }
        });
    }
};


/**
 * @brief serializeObject
 */
$.fn.serializeObject = function() {
    var obj = null;
    try {
        if (this[0].tagName && this[0].tagName.toUpperCase() == "FORM") {
            var arr = this.serializeArray();
            if (arr) {
                obj = {};
                jQuery.each(arr, function() {
                    obj[this.name] = this.value;
                });
            }
        }
    } catch (e) {
        alert(e.message);
    } finally {
    }
 
    return obj;
};

/**
 * @brief serializeFiles
 */
$.fn.serializeFiles = function() {
    var form = $(this),
        formData = new FormData()
        formParams = form.serializeArray();

    $.each(form.find('input[type="file"]'), function(i, tag) {
        $.each($(tag)[0].files, function(i, file) {
        formData.append(tag.name, file);
        });
    });

    $.each(formParams, function(i, val) {
        formData.append(val.name, val.value);
    });

    return formData;
};



