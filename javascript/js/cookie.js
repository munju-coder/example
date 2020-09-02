var COMMON = {};
/**
 * @brief cookie object
 */
COMMON.cookie = {
    /**
     * @brief 쿠카값 가져오기
     * @param {string} cName 
     * @returns {string} unescape value
     */
    getCookie : function (cName)
    {
        cName = cName + '=';
        var cookieData = document.cookie;
        var start = cookieData.indexOf(cName);
        var cValue = '';
        if(start != -1){
            start += cName.length;
            var end = cookieData.indexOf(';', start);
            if(end == -1)end = cookieData.length;
            cValue = cookieData.substring(start, end);
        }
        return unescape(cValue);
    },
    /**
     * @brief 쿠키 설정
     * @param {string} cName
     * @param {string} cValue
     * @param {number} cDay
     */
    setCookie : function (cName, cValue, cDay)
    {
        var expire = new Date();
        expire.setDate(expire.getDate() + cDay);
        cookies = cName + '=' + escape(cValue) + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.
        if(typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
        document.cookie = cookies;
    },
    /**
     * @brief cookie delete
     * @param {string} name 
     */
    delCookie : function (name)
    {
        var today = new Date();

        today.setTime(today.getTime() - 1);
        var value = get_cookie(name);
        if(value != "")
        {
            document.cookie = name + "=" + value + "; path=/; expires=" + today.toGMTString();
        }
    }
};
