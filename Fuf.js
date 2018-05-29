/// <reference path="jquery-1.11.3.min.js" />
/// <reference path="layer/layer.js" />

(function () {
    //强成2016年6月13日 14:59:25
    //数据验证框架
    window.CT = window.CT || {};
    var CT = window.CT;


    var replace = CT.replace = function (val, str, str1) {
        try {
            if (val == null || val == undefined) {
                return "";
            } else {
                return val.replace(str, str1);
            }
        } catch (e) {
            return "";
        }

    }

    var ToFixedTwo = CT.ToFixedTwo = function (str) {
        if (str == null || str == undefined) {
            return "";
        } else {
            str = parseFloat(str);
            return str.toFixed(2);
        }
    }

    var IsUrl = CT.IsUrl = function (str_url) {
        var strRegex = '^((https|http|ftp|rtsp|mms)://)?'
        + '(([0-9a-z_!~*\'().&=+$%-]+: )?[0-9a-z_!~*\'().&=+$%-]+@)?' //ftp的user@ 
        + '(([0-9]{1,3}.){3}[0-9]{1,3}' // IP形式的URL- 199.194.52.184 
        + '|' // 允许IP和DOMAIN（域名） 
        + '([0-9a-z_!~*\'()-]+.)*' // 域名- www. 
        + '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' // 二级域名 
        + '[a-z]{2,6})' // first level domain- .com or .museum 
        + '(:[0-9]{1,4})?' // 端口- :80 
        + '((/?)|' // a slash isn't required if there is no file name 
        + '(/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+/?)$';
        var re = new RegExp(strRegex);
        if (re.test(str_url)) {
            return (true);
        } else {
            return (false);
        }
    }

    var outNull = CT.outNull = function (str) {
        if (str == null || str == undefined) {
            return "";
        } else {
            return str;
        }
    }

    /// <summary>
    /// 验证只能输入大于0的数字
    /// </summary>
    var BigNumber = CT.BigNumber = function (str) {
        if (str == "") {
            return false;
        }
        if (isNaN(str) || str <= 0) {
            return false;
        }
        return true;
    }



    /// <summary>
    /// 验证不能输入中文
    /// </summary>
    var NOChinese = CT.NOChinese = function (str) {
        var reg = /^[u4E00-u9FA5]+$/;
        if (str == "") {
            return false;
        }
        if (reg.test(str) == false) {
            return false;
        }
        return true;
    }

    /// <summary>
    /// 验证非空
    /// </summary>
    var ISNull = CT.ISNull = function (str) {
        if (str == null || str == undefined) {
            return false;
        }
        str = str.replace(/(^\s*)|(\s*$)/g, "");

        if (str.length == 0) {
            return false;
        }
        return true;
    }
    /// <summary>
    /// 验证微信号
    /// </summary>
    /// <param name="WeChat">微信号</param>
    var WeChat = CT.WeChat = function (WeChat) {
        var reg = /^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/;
        if (WeChat == "") {
            return false;
        }
        if (reg.test(WeChat) == false) {
            return false;
        }
        return true;
    }
    /// <summary>
    /// 验证手机
    /// </summary>
    /// <param name="Phone">手机</param>
    var Phone = CT.Phone = function (Phone) {
        var reg = /^1[3|4|5|7|8][0-9]\d{8}$/
        if (Phone == "") {
            return false;
        }
        if (reg.test(Phone) == false) {
            return false;
        }
        return true;
    }

    /// <summary>
    /// 验证座机
    /// </summary>
    /// <param name="Tel">座机</param>
    var Tel = CT.Tel = function (Tel) {
        var reg = /^0\d{2,3}-?\d{7,8}$/
        if (Tel == "") {
            return false;
        }
        if (reg.test(Tel) == false) {
            return false;
        }
        return true;
    }

    /// <summary>
    /// 验证手机或座机
    /// </summary>
    /// <param name="Tel">手机或座机</param>
    var TelOrPhone = CT.TelOrPhone = function (Tel) {
        var reg = /^0\d{2,3}-?\d{7,8}$/
        var reg1 = /^1[3|4|5|7|8][0-9]\d{8}$/
        if (Tel == "") {
            return false;
        }
        if (reg.test(Tel) == true || reg1.test(Tel) == true) {
            return true;
        }
        else {
            return false;
        }
    }

    /// <summary>
    /// 验证长度
    /// </summary>
    /// <param name="Str">字符串</param>
    /// <param name="Min">最短长度</param>
    /// <param name="Max">最长长度</param>
    /// <returns></returns>
    var Length = CT.Length = function (Str, Min, Max) {
        if (Str == null || Str == undefined) {
            return false;
        }
        Str = Str.replace(/(^\s*)|(\s*$)/g, "");
        if (Max < Min) {
            return false;
        }
        if (Str.length >= Min && Str.length <= Max) {
            return true;
        }
        else {
            return false;
        }
    }

    /// <summary>
    /// 验证邮箱
    /// </summary>
    /// <param name="Email">邮箱</param>
    var Email = CT.Email = function (Email) {
        var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/
        if (Email == "") {
            return false;
        }
        if (reg.test(Email) == false) {
            return false;
        }
        return true;
    }

    /// <summary>
    /// 验证密码(英文+数字)
    /// </summary>
    /// <param name="Pwd">密码</param>
    /// <param name="Min">最短长度</param>
    /// <param name="Max">最长长度</param>
    var Password = CT.Password = function (Pwd, Min, Max) {
        var reg = new RegExp("^[0-9|A-Z|a-z|_|.]{" + Min + "," + Max + "}$");
        if (Max < Min) {
            return false;
        }
        if (Pwd == "") {
            return false;
        }
        if (reg.test(Pwd) == false) {
            return false;
        }

        return true;
    }

    /// <summary>
    /// 验证密码(英文+数字,英文开头)
    /// </summary>
    /// <param name="Pwd">密码</param>
    /// <param name="Min">最短长度</param>
    /// <param name="Max">最长长度</param>
    var Password_0 = CT.Password_0 = function (Pwd, Min, Max) {
        var reg = new RegExp("^[A-Z|a-z][0-9|A-Z|a-z|_|.]{" + Min + "," + Max + "}$");
        Min--;
        if (Max < Min) {
            return false;
        }
        if (Pwd == "") {
            return false;
        }
        if (reg.test(Pwd) == false) {
            return false;
        }

        return true;
    }




    /// <summary>
    /// 匹配数子
    /// </summary>
    var Int = CT.Int = function (number) {
        var reg = /^[0-9]+.?[0-9]*$/
        if (reg.test(number) == false) {
            return false;
        }

        return true;
    }



    /// <summary>
    /// 匹配正整数
    /// </summary>
    var Int_0 = CT.Int_0 = function (number) {
        var reg = /^[1-9]\d*$/
        if (reg.test(number) == false) {
            return false;
        }

        return true;
    }

    /// <summary>
    /// 匹配负整数
    /// </summary>
    var Int_1 = CT.Int_1 = function (number) {
        var reg = /^-[1-9]\d*$/
        if (reg.test(number) == false) {
            return false;
        }

        return true;
    }

    /// <summary>
    /// 匹配整数
    /// </summary>
    var Int_2 = CT.Int_2 = function (number) {
        var reg = /^-?[1-9]\d*$/
        if (reg.test(number) == false) {
            return false;
        }

        return true;
    }

    /// <summary>
    /// 匹配非负整数（正整数 + 0）
    /// </summary>
    var Int_3 = CT.Int_3 = function (number) {
        var reg = /^[1-9]\d*|0$/
        if (reg.test(number) == false) {
            return false;
        }

        return true;
    }

    /// <summary>
    /// 匹配非正整数（负整数 + 0）
    /// </summary>
    var Int_4 = CT.Int_4 = function (number) {
        var reg = /^-[1-9]\d*|0$/
        if (reg.test(number) == false) {
            return false;
        }

        return true;
    }

    /// <summary>
    /// 匹配浮点数
    /// </summary>
    var isNumber = CT.isNumber = function (number) {
        if (parseFloat(number).toString() == "NaN") {
            return false;
        } else {
            return true;
        }
    }

    /// <summary>
    /// 匹配正浮点数
    /// </summary>
    var Double_0 = CT.Double_0 = function (number) {
        var reg = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/
        if (reg.test(number) == false) {
            return false;
        }

        return true;
    }

    /// <summary>
    /// 匹配负浮点数
    /// </summary>
    var Double_1 = CT.Double_1 = function (number) {
        var reg = /^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$/
        if (reg.test(number) == false) {
            return false;
        }

        return true;
    }

    /// <summary>
    /// 匹配浮点数
    /// </summary>
    var Double_2 = CT.Double_2 = function (number) {
        var reg = /^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$/
        if (reg.test(number) == false) {
            return false;
        }

        return true;
    }

    /// <summary>
    /// 匹配非负浮点数（正浮点数 + 0）
    /// </summary>
    var Double_3 = CT.Double_3 = function (number) {
        var reg = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0$/
        if (reg.test(number) == false) {
            return false;
        }

        return true;
    }

    /// <summary>
    /// 匹配非正浮点数（负浮点数 + 0）
    /// </summary>
    var Double_4 = CT.Double_4 = function (number) {
        var reg = /^(-([1-9]\d*\.\d*|0\.\d*[1-9]\d*))|0?\.0+|0$/
        if (reg.test(number) == false) {
            return false;
        }

        return true;
    }

    //json日期格式转换为正常格式
    var jsonDateTime = CT.jsonDateTime = function jsonDateFormat(jsonDate) {
        try {
            var date = new Date(parseInt(jsonDate.replace("/Date(", "").replace(")/", ""), 10));
            var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();
            var milliseconds = date.getMilliseconds();
            return date.getFullYear() + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
        } catch (ex) {
            return "";
        }
    }

    var IsCard = CT.IsCard = function (card) {
        var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (reg.test(card) === false) {
            return false;
        }
        return true;
    };



})(window);




(function () {
    window.F = window.F || {};
    var F = window.F;

    var formId;

    var install = F.install = function (id) {
        formId = id;
        return this;
    }

    var validateForm = F.validateForm = function () {
        var items = $(formId + " input[f-error],select[f-error]");
        for (var i = 0; i < items.length; i++) {
            var item = $(items[i]);
            var value = item.val();
            var error = item.attr('f-error');
            if (!CT.ISNull(value)) {
                tipts(item, error);
                return false;
            }
        }
        return true;
    }

    var formData = F.formData = function () {

        var data = {};
        var items = $(formId + " input[name],select[name]");
        for (var i = 0; i < items.length; i++) {
            var item = $(items[i]);
            var value = item.val();
            var name = item.attr('name');
            if (item.attr('type') == 'radio') {
                if (!item.is(':checked'))
                    continue;
            }

            data[name] = value;
        }
        return data;
    }

    var clear = F.clear = function () {
        var items = $(formId + " input[name]");
        for (var i = 0; i < items.length; i++) {
            var item = $(items[i]);
            if (item.attr('disabled') != 'disabled') {
                item.val('');
            }
        }
    }



})(window);


function ajaxSubimt(url, data, callBack) {
    openLoading();
    $.ajax({
        url: url,
        data: data,
        dataType: "JSON",
        type: "POST",
        success: function (obj) {
            closeLoading();
            callBack(obj);
        }, error: function () {
            closeLoading();
            layer.msg('提交数据异常', { icon: 5, time: 1000 });
        }
    });
}



var loading = 0;
function openLoading() {
    //加载层-风格4
    loading = layer.msg('Loading...', {
        icon: 16
      , shade: 0.01
    });
}
function closeLoading() {
    layer.close(loading);
}
var index = 0;
if (parent != null && parent.layer != null) {
    index = parent.layer.getFrameIndex(window.name); //获取窗口索引
}
function closewindow() {
    parent.layer.close(index);
}

function tipts(obj, message) {
    layer.tips(message, obj, {
        tips: [2, '#3595CC'],
        time: 4000,
        tipsMore: true
    });
}



//指定时间后执行
function sleepFunction(numberMillis, ff) {
    window.setTimeout(ff, numberMillis);
}


function openFrame(title, url, w, h) {
    layer.open({
        type: 2,
        skin: 'layui-layer-demo', //样式类名
        closeBtn: 1, //不显示关闭按钮
        anim: 2,
        title: title,
        shadeClose: true, //开启遮罩关闭
        content: url,
        area: [w, h], //宽高'
    });
}

function showMessage(msg, type) {
    layer.msg(msg, { icon: type, time: 4000 });
}

String.prototype.format = function () {
    if (arguments.length == 0) return this;
    for (var s = this, i = 0; i < arguments.length; i++)
        s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
    return s;
};