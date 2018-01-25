if (window.navigator.userAgent.toLowerCase().indexOf('micromessenger') >= 0) {
  var $wxbox = $(".wx_box");
  if($wxbox.length>0){
    $wxbox.show();
    $wxbox.on("click",function(){
      $wxbox.hide();
    })
  }
}

__inline('./lib/template.js');



// 手动控制区域

// 人工智能小炮VIP
__newseason.ns_01 = [{
  //不可修改 id
  id: 'ns_01_01',
  //不可修改
  name: '人工智能小炮VIP',
  //不可修改
  packname: '白金卡',
  //可修改 1为领取 2为已售罄 3已领取(3这个状态由账号来判断,不可填)
  status: '1',
  //不可修改 展示信息
  msg: ['', '立即抢购', '已售罄', '已购买'],
  //可修改 购买价格
  price: '3888',
  //可修改 划去的价格
  oldprice: '',
  //不可修改 玩法类型
  gameType: 'baijin',
  //不可修改 包类型id
  packType: 'vip',
  //剩余卡数量
  count: '188'
}, {
  //不可修改 id
  id: 'ns_01_02',
  //不可修改
  name: '人工智能小炮VIP',
  //不可修改
  packname: '金卡',
  //可修改 1为领取 2为已售罄   3已领取(3这个状态由账号来判断,不可填)
  status: '1',
  //不可修改 展示信息
  msg: ['', '立即抢购', '已售罄', '已购买'],
  //可修改 购买价格
  price: '888',
  //可修改 划去的价格
  oldprice: '',
  //不可修改 玩法类型
  gameType: 'jin',
  //不可修改 包类型id
  packType: 'vip',
  //剩余卡数量
  count: '888'
}, {
  //不可修改 id
  id: 'ns_01_03',
  //不可修改
  name: '人工智能小炮VIP',
  //不可修改
  packname: '银卡',
  //可修改 1为领取 2为已售罄   3已领取(3这个状态由账号来判断,不可填)
  status: '1',
  //不可修改 展示信息
  msg: ['', '立即抢购', '已售罄', '已购买'],
  //可修改 购买价格
  price: '188',
  //可修改 划去的价格
  oldprice: '',
  //不可修改 玩法类型
  gameType: 'yin',
  //不可修改 包类型id
  packType: 'vip',
  //剩余卡数量
  count: '8888'
}];

// 充值卡热促
__newseason.ns_02 = [{
  //不可修改 id
  id: 'ns_02_01',
  //不可修改
  name: '充值卡热促',
  //不可修改
  packname: '充值卡热促100',
  //可修改 1为领取 2为已结束   3已领取(3这个状态由账号来判断,不可填)
  status: '1',
  //不可修改 展示信息
  msg: ['', '立即抢购', '已结束', '已购买'],
  //可修改 购买价格
  price: '80',
  //可修改 划去的价格
  oldprice: '100',
  //不可修改 玩法类型
  gameType: 'c1',
  //不可修改 包类型id
  packType: 'cz',
  //剩余卡数量
  count: ''
}, {
  //不可修改 id
  id: 'ns_02_02',
  //不可修改
  name: '充值卡热促',
  //不可修改
  packname: '充值卡热促500',
  //可修改 1为领取 2为已结束   3已领取(3这个状态由账号来判断,不可填)
  status: '1',
  //不可修改 展示信息
  msg: ['', '立即抢购', '已结束', '已购买'],
  //可修改 购买价格
  price: '350',
  //可修改 划去的价格
  oldprice: '500',
  //不可修改 玩法类型
  gameType: 'c2',
  //不可修改 包类型id
  packType: 'cz',
  //剩余卡数量
  count: ''
}, {
  //不可修改 id
  id: 'ns_02_03',
  //不可修改
  name: '充值卡热促',
  //不可修改
  packname: '充值卡热促2000',
  //可修改 1为领取 2为已结束   3已领取(3这个状态由账号来判断,不可填)
  status: '1',
  //不可修改 展示信息
  msg: ['', '立即抢购', '已结束', '已购买'],
  //可修改 购买价格
  price: '1200',
  //可修改 划去的价格
  oldprice: '2000',
  //不可修改 玩法类型
  gameType: 'c3',
  //不可修改 包类型id
  packType: 'cz',
  //剩余卡数量
  count: ''
}, {
  //不可修改 id
  id: 'ns_02_04',
  //不可修改
  name: '充值卡热促',
  //不可修改
  packname: '充值卡热促5000',
  //可修改 1为领取 2为已结束   3已领取(3这个状态由账号来判断,不可填)
  status: '1',
  //不可修改 展示信息
  msg: ['', '立即抢购', '已结束', '已购买'],
  //可修改 购买价格
  price: '2500',
  //可修改 划去的价格
  oldprice: '5000',
  //不可修改 玩法类型
  gameType: 'c4',
  //不可修改 包类型id
  packType: 'cz',
  //剩余卡数量
  count: ''
}];


var tapClick = 'ontouchstart' in window ? "tap":"click";

var util = {};
util.debug = false;
util.log = function() {
  if (util.debug) {
    console.log.apply(console, arguments);
  }
}

util.getQueryString = function(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURIComponent(r[2]);
  return null;
}

util.windowOpen = function(url,target){
  var a = document.createElement("a");
  a.setAttribute("href", url);
  if(target == null){
    target = '_blank';
  }
  a.setAttribute("target", target);
  document.body.appendChild(a);
  if(a.click){
    a.click();
  }else{
    try{
      var evt = document.createEvent('Event');
      a.initEvent('click', true, true);
      a.dispatchEvent(evt);
    }catch(e){
      window.open(url);
    }
  }
  document.body.removeChild(a);
}

util.dateFormatFmt = function (date, fmt) {
  if(Object.prototype.toString.call(date) == "[object String]"){
    date = date.replace(/-/g, '/');
  }
  date = new Date(date);
  var o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
  if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

util.byId = function(id) {
  return document.getElementById(id)
}
// jsonp
util.jsonp = function(url, callback, callbackName) {
  if (!url) {
    return;
  }
  var head = document.getElementsByTagName('head')[0];
  var ojs = util.byId(url);
  ojs && head.removeChild(ojs);
  if (url.indexOf('?') === -1) {
    url += '?callback=';
  } else {
    url += '&callback=';
  }
  url += callbackName;
  var remote_script = document.createElement('script');
  window[callbackName] = function(data) {
    callback && callback(data);
  }
  remote_script.src = url;
  remote_script.id = url;
  remote_script.type = 'text/javascript';
  remote_script.language = "javascript";
  head.appendChild(remote_script);
};
util.extend = function(target, source, deep) {
  target = target || {};
  var sType = typeof source,
    i = 1,
    options;
  if (sType === 'undefined' || sType === 'boolean') {
    deep = sType === 'boolean' ? source : false;
    source = target;
    target = this;
  }
  if (typeof source !== 'object' && Object.prototype.toString.call(source) !== '[object Function]') {
    source = {}
  }
  while (i <= 2) {
    options = i === 1 ? target : source;
    if (options !== null) {
      for (var name in options) {
        var src = target[name],
          copy = options[name];
        if (target === copy) {
          continue
        }
        if (deep && copy && typeof copy === 'object' && !copy.nodeType) {
          target[name] = this.extend(src || (copy.length !== null ? [] : {}), copy, deep)
        } else if (copy !== undefined) {
          target[name] = copy
        }
      }
    }
    i++
  }
  return target
}

util.viewData = function() {
  var e = 0, l = 0, i = 0, g = 0, f = 0, m = 0;
  var j = window, h = document, k = h.documentElement;
  e = k.clientWidth || h.body.clientWidth || 0;
  l = j.innerHeight || k.clientHeight || h.body.clientHeight || 0;
  g = h.body.scrollTop || k.scrollTop || j.pageYOffset || 0;
  i = h.body.scrollLeft || k.scrollLeft || j.pageXOffset || 0;
  f = Math.max(h.body.scrollWidth, k.scrollWidth || 0);
  m = Math.max(h.body.scrollHeight, k.scrollHeight || 0, l);
  return {scrollTop: g,scrollLeft: i,documentWidth: f,documentHeight: m,viewWidth: e,viewHeight: l};
};

util.cookie = (function(doc, win){
  return {
    getItem: function(key){
      var cookieKey = key + '=';
      var result = '';
      if(doc.cookie.length > 0){
        var index = doc.cookie.indexOf(cookieKey);
        if(index != -1){
          index += cookieKey.length;
          var lastIndex = doc.cookie.indexOf(';', index);
          if(lastIndex == -1){
            lastIndex = doc.cookie.length;
          }
          result = win.decodeURIComponent(doc.cookie.substring(index, lastIndex));
        }
      }
      return result;
    },
    setItem: function(key, value, expiresDays){
      var time = new Date();
      if(expiresDays){
        //将time设置为 expiresDays 天以后的时间
        time.setTime(time.getTime()+expiresDays*24*3600*1000);
      } else {
        time.setFullYear(time.getFullYear() + 1);
      }

      if (expiresDays == 0) {

        doc.cookie = key + '=' + win.encodeURIComponent(value) + ';';
      } else {

        doc.cookie = key + '=' + win.encodeURIComponent(value) + '; expires=' + time.toGMTString() + ';';
      }

    },
    removeItem: function(key){
      // alert(key);
      var time = new Date();
      time.setDate(time.getDate()-1);
      doc.cookie = key + '=0; expires=' + time.toGMTString();
      // alert(util.cookie.getItem("fstar_cityLoc"));
    //   var self = this;
    //   var exp = new Date();
    //   exp.setTime(exp.getTime() + (-1 * 24 * 60 * 60 * 1000));
    //   var cval = self.getItem(key);
    //   alert(cval);
    //   document.cookie = key + "=" + cval + "; expires=" + exp.toGMTString();
      // alert(key);
      // alert(util.cookie.getItem(key));
      var cval = util.cookie.getItem(key);
      if(cval){
        util.cookie.setItem(key, "0");
      }
    }
  };
})(document, window);

util.storage = (function(doc, win){
  var localStorage = window.localStorage;
  // 优先使用localStorage
  if(localStorage){
    return {
      getItem: function(key){
        return localStorage.getItem(key);
      },
      setItem: function(key, value){
        // 在一些设备下, setItem之前必须调用removeItem
        localStorage.removeItem(key);
        localStorage.setItem(key, value);
      },
      removeItem: function(key){
        localStorage.removeItem(key);
      }
    };
  } else {
    return {
      getItem: util.cookie.getItem,
      setItem: util.cookie.setItem,
      removeItem: util.cookie.removeItem
    };
  }
})(document, window);

util.setSinaWbCookie = function(name, value, domain, expires) {
  domain = domain || document.domain;
  if (typeof(expires) == 'undefiend' || expires == null || expires == '') {
    document.cookie = name + "=" + encodeURIComponent(value) + "; path=" + "/" + "; domain=" + domain;
  } else {
    var expTimes = expires * 1000;
    var expDate = new Date();
    expDate.setTime(expDate.getTime() + expTimes);
    document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + expDate.toGMTString() + "; path=" + "/" + "; domain=" + domain;
  }
}

util.getSinaWbCookieVal = function(name) {
  var cookieArr = document.cookie.replace(/\s/g, "").split(';');
  for (var i = 0; i < cookieArr.length; i++) {
    var tempObj = cookieArr[i].split('=');
    if (tempObj[0] == name)
      return decodeURIComponent(tempObj[1]);
  }
  return null;
}

function setSinaWbCookie (name, value, domain, expires) {
  domain = domain || document.domain;
  if (typeof(expires) == 'undefiend' || expires == null || expires == '') {
    document.cookie = name + "=" + encodeURIComponent(value) + "; path=" + "/" + "; domain=" + domain;
  } else {
    var expTimes = expires * 1000;
    var expDate = new Date();
    expDate.setTime(expDate.getTime() + expTimes);
    document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + expDate.toGMTString() + "; path=" + "/" + "; domain=" + domain;
  }
}

function getSinaWbCookieVal(name) {
  var cookieArr = document.cookie.replace(/\s/g, "").split(';');
  for (var i = 0; i < cookieArr.length; i++) {
    var tempObj = cookieArr[i].split('=');
    if (tempObj[0] == name)
      return decodeURIComponent(tempObj[1]);
  }
  return null;
}
util.jsonp1 = function (json) {
  json.data = json.data || {};
  json.timeout = json.timeout || 0;
  json.callback = json.callback || 'callback';
  var fnName = 'jsonp_' + Math.random();
  fnName = fnName.replace('.', '');
  window[fnName] = function(result) {
    jsonp_timer && clearTimeout(jsonp_timer);
    json.success && json.success(result);
    json.complete && json.complete();
    oHead.removeChild(oS);
    window[fnName] = null;
  };
  json.data[json.callback] = fnName;
  var arr = [];
  for (var i in json.data) {
    arr.push(i + '=' + encodeURIComponent(json.data[i]));
  }
  var sData = arr.join('&');
  var oS = document.createElement('script');
  oS.src = json.url + sData;
  var oHead = document.getElementsByTagName('head')[0];
  oHead.appendChild(oS);
  if (json.timeout) {
    var jsonp_timer = setTimeout(function() {
      json.error && json.error();
      json.complete && json.complete();
      oHead.removeChild(oS);
      window[fnName] = null;
    }, json.timeout);
  }
}

var $mask = document.getElementById("mask");
$mask && $mask.addEventListener("touchmove", function(e) {
  e.preventDefault()
}, false);
// 显示相应的弹层
function popupShow($layout) {
  var viewData = util.viewData();
  var layout = $layout[0];
  document.body.style.overflow = 'hidden';
  $popup_box.hide();
  $layout.show();
  layout.style.visibility = "hidden";
  var cHeight = layout.offsetHeight;
  layout.style.marginTop = (viewData.viewHeight / 2 - cHeight / 2 - 30) + 'px';
  $mask.show();
  layout.style.visibility = "visible";
};
// 隐藏弹层
function popupHide() {
  document.body.style.overflow = 'auto';
  $mask.hide();
  $popup_box.hide();
}

util.alert = function(msg){
  if($('#popup_msg').length > 0){
    $('#popup_msg').html(msg);
    popupShow($popup_msg);
  }
}

/**
 * 登录
 */
;(function(win, doc) {
  util.INTERFACE_HOME = 'http://euro.sina.com.cn/lottery/1617season_wap.html';
  util.INTERFACE_ORDER = 'http://ai.lottery.sina.com.cn/uc/m/myorder_m.shtml?from=euro';
  $(".js-login").attr("href", "http://passport.sina.cn/signin/signin?entry=wapsso&vt=4&r=http%3A%2F%2Feuro.sina.com.cn%2Flottery%2F1617season_wap.html&amp;revalid=1");
  $(".loginout").attr("href", "http://passport.sina.cn/sso/logout?entry=wapsso&vt=4&r=http%3A%2F%2Feuro.sina.com.cn%2Flottery%2F1617season_wap.html");

  var isLogin = window.checkLogin();
  if (!isLogin) {
    $('.js-login').removeClass('js-login-r');
    $('.loginout').hide();
  } else {
    $('.js-login').addClass('js-login-r');
    $('.loginout').show();
    $(".js-login").attr("href", "http://ai.lottery.sina.com.cn/uc/m/myorder_m.shtml?from=euro");
    getUserInfo();
  }

  $('.js-login-r').on("click", function() {
    var isLogin = window.checkLogin();
    if (isLogin) {
      window.location.href = util.INTERFACE_ORDER;
      return false;
    }
  });
})(window, document, undefined);


function middleLogin(msg) {
  var url = "http://passport.sina.cn/signin/signin?entry=wapsso&vt=4&r=http%3A%2F%2Feuro.sina.com.cn%2Flottery%2F1617season_wap.html&amp;revalid=1";
  window.location.href = url;
  return;
}

function getUserInfo() {
  if(window.userInfo){
    util.wbId = userInfo.uid;
    $(".js-login").find("img").attr("src",userInfo.userface);

    var ckName = 'SINA_WB_LOCAL_NICKNAME';
    var ckNameId = 'SINA_WB_LOCAL_NICKNAME_UID';
    var ckDomain = 'sina.com.cn';
    util.setSinaWbCookie(ckName, userInfo.uname, ckDomain, 0);
    util.setSinaWbCookie(ckNameId, userInfo.uid, ckDomain, 0);
    // 拿到购买数据
    if(ypObj && ypObj.getHasPurchase){
      ypObj.getHasPurchase();
    }
  } else {
    var url = 'https://passport.sina.cn/sso/islogin?';
    var oDate = new Date();
    var data = {
      random: Math.random(),
      time: oDate.getTime()
    }
    util.jsonp1({
      success: function(rs) {
        rs.data = rs.data || {};
        rs.data.uname = rs.data.nick;
        rs.data.userface = rs.data.portrait_url;
        window.userInfo = rs.data;
        util.wbId = rs.data.uid;
        $(".js-login").find("img").attr("src",rs.data.userface);

        var ckName = 'SINA_WB_LOCAL_NICKNAME';
        var ckNameId = 'SINA_WB_LOCAL_NICKNAME_UID';
        var ckDomain = 'sina.com.cn';
        util.setSinaWbCookie(ckName, userInfo.uname, ckDomain, 0);
        util.setSinaWbCookie(ckNameId, userInfo.uid, ckDomain, 0);
        // 拿到购买数据
        if(ypObj && ypObj.getHasPurchase){
          ypObj.getHasPurchase();
        }
      },
      error: function() {},
      url: url,
      data: data
    })
  }
}

/**
 *支付模块
 */
// 3种玩法 玩法类型:z_sx(上下盘) z_spf(胜平负) z_dx(大小球)  默认z_sx
// 转发到用户中心注册页面
function registerForm(wbId, nick, wbType) {
  alert(actionUrl + ':' + wbId + ':'+nick +':'+wbType);
  var actionUrl = 'http://ai.lottery.sina.com.cn//uc/m/phoneBind_m.shtml';
  var turnForm = document.createElement("form");
  //一定要加入到body中！！
  document.body.appendChild(turnForm);
  turnForm.method = 'post';
  turnForm.action = actionUrl;
  turnForm.id = 'jq_tmp_form';
  turnForm.target = '_blank';
  //创建隐藏表单
  var input1 = document.createElement("input");
  input1.setAttribute("name", "thirdId");
  input1.setAttribute("type", "hidden");
  input1.setAttribute("value", wbId);
  turnForm.appendChild(input1);

  //创建隐藏表单
  var input2 = document.createElement("input");
  input2.setAttribute("name", "thirdType");
  input2.setAttribute("type", "hidden");
  input2.setAttribute("value", wbType);
  turnForm.appendChild(input2);

  var input3 = document.createElement("input");
  input3.setAttribute("name", "nickName");
  input3.setAttribute("type", "hidden");
  input3.setAttribute("value", nick);
  turnForm.appendChild(input3);

  turnForm.submit();
  document.body.removeChild(turnForm);
}


window.batch_z5_sx_7 = function(){};
window.batch_z5_spf_7 = function(){};
window.batch_z5_dx_7 = function(){};
window.batch_z5_sx_8 = function(){};
window.batch_z5_spf_8 = function(){};
window.batch_z5_dx_8 = function(){};
window.batch_z5_sx_9 = function(){};
window.batch_z5_spf_9 = function(){};
window.batch_z5_dx_9 = function(){};
window.batch_z5_sx_10 = function(){};
window.batch_z5_spf_10 = function(){};
window.batch_z5_dx_10 = function(){};
window.ckCard = function(){};
window.checkVip0 = function(){};
window.checkVip1 = function(){};
window.checkVip2 = function(){};

window.whatPay = '';


// 用户id
var euro_memberid = '';
// 订单id
var euro_orderid= '';
// 当前购买套餐内容
var euro_edata = {
  gameType: '',
  packType: '',
  id: '',
  price: ''
};
// 微博id
window.check300=false;
// var util.wbId = '2007294495';
util.payduing={};
util.money = {};
var euro_vip= '';
util.yppay = {
  getwbid: function(){
    //判断登录状态
    var isLogin = window.checkLogin();
    if(!isLogin){
      return false;
    } else {
      var nickName = getSinaWbCookieVal('SINA_WB_LOCAL_NICKNAME');
      var uId = getSinaWbCookieVal('SINA_WB_LOCAL_NICKNAME_UID');
      if(uId === "undefined"){ uId = '';}
      util.wbId = util.wbId || uId || util.getQueryString('wbId');
      return util.wbId;
    }
  },
  checkwbid: function(){
    // 再次判断一次wbId
    if(util.wbId && util.wbId != "undefined"){
      return util.wbId;
    } else {
      var isLogin = window.checkLogin();
      if(!isLogin){
        util.alert('在购买前请先登录');
        return false;
      } else {
        var uId = util.getSinaWbCookieVal('SINA_WB_LOCAL_NICKNAME_UID');
        if(uId == "undefined"){ uId = '';}
        util.wbId = util.wbId || uId;
        if(!util.wbId || util.wbId == "undefined"){
          util.alert("登录账号异常，请重新登录");
          return false;
        }
        return util.wbId;
      }
    }
  },
  // step1 点击购买小炮预测验证比赛id  获取相应的数据
  payStep1: function(){
    var self = this;
    if(!self.checkwbid()){ return;};
    var thirdId = util.wbId;
    edata = euro_edata;
    var gameType = edata.gameType;
    var packType = edata.packType;
    var price = edata.price;
    if(gameType == 'z5_all'){ price = (price-0)*3;}
    var round = edata.round;
    var packname = edata.packname;


    $.ajax({
      url: 'http://ai.lottery.sina.com.cn/five/batch.htm?thirdId=' + thirdId + '&gameType=' + gameType + '&season=2016&packType=' + packType+'&round=' + round,
      dataType:'jsonp',
      data: {},
      cache: false,
      jsonpCallback:"batch_" + gameType + '_' + packType,
      type:"get",
      success: function(data) {
        // 200:有订单记录
        // 201:无订单记录
        // 300:未绑定手机号码
        util.log(data);
        var code = data.code;
        euro_orderid = '';

        if (code == 200) {
          euro_memberid = data.memberId;
          euro_orderid = data.orderLogNo;
          // 显示弹出层
          $(".popup_money").html('¥'+price+'元<span style="padding-left:20px;">('+packname+'第'+round+'轮)</span>');
          popupShow($popup);

        } else if(code == 201){
          euro_memberid = data.memberId;
          // 显示弹出层
          $(".popup_money").html('¥'+price+'元<span style="padding-left:20px;">('+packname+'第'+round+'轮)</span>');
          popupShow($popup);
        } else if (code == 300) { //未关联注册
          var nickName = getSinaWbCookieVal('SINA_WB_LOCAL_NICKNAME');
          registerForm(thirdId, nickName, 1); //转发到用户中心注册页面
        } else {
          util.alert(data.msg);
        }
      }
    });
  },
  // step2 点击弹出层立即支付按钮
  payStep2: function(){
    // alert('step2:'+euro_orderid);
    var self = this;
    if(!self.checkwbid()){ return;}
    var memberId = euro_memberid;
    var edata = euro_edata;
    var gameType = edata.gameType;
    var packType = edata.packType;
    var price = edata.price;
    if(gameType == 'z5_all'){ price = (price-0)*3;}
    var round = edata.round;
    if(euro_orderid){
      // alert('test:'+euro_orderid);
      // 已存在订单号  1.打开新开页面paypre.html  2.显示弹出层 我已支付成功
      self.payStepToPaypre();
      // popupShow($popup_canpay);
      return;
    }

    var hasVip = '';
    if(euro_vip){
      hasVip = '&vip='+ euro_vip
    }
    // alert('http://odds.sports.sina.com.cn/odds/giftpay/batchToPay?memberId=' + memberId + '&gameType=' + gameType + '&season=2016&packType=' + packType + '&price=' + price + '&format=json');
    $.ajax({
      url: 'http://odds.sports.sina.com.cn/odds/giftpay/batchToPay?memberId=' + memberId + '&gameType=' + gameType + '&season=2016&packType=' + packType + '&price=' + price + '&round=' + round+hasVip+'&format=json',
      dataType:'jsonp',
      data: {},
      cache: false,
      jsonpCallback:"batchToPay_"+memberId+"_"+gameType+"_"+packType,
      type:"get",
      success: function(data) {
        // alert(JSON.stringify(data));
        var code = data.code;
        if(code && code == "200"){
          euro_orderid = data.orderLogNo;
          self.payStepToPaypre();
          popupShow($popup_canpay);
        }else if (code == 300) { //未关联注册
          var nickName = getSinaWbCookieVal('SINA_WB_LOCAL_NICKNAME');
          registerForm(thirdId, nickName, 1); //转发到用户中心注册页面
        } else {
          util.alert(data.msg);
        }
      }
    });
  },

  payStepToPaypre: function() {
    var self = this;
    if(util.wbId && util.wbId != "undefined"){

    } else {
      util.alert("登录账号异常，请重新登录");
      return;
    }
    var param_data = {};
    param_data.memberId = euro_memberid;
    param_data.wbId = util.wbId;
    param_data.orderLogNo = euro_orderid;

    param_data.packname = euro_edata.packname;
    param_data.gameType = euro_edata.gameType;
    var info = JSON.stringify(param_data);

    var thirdId = util.wbId;
    var price = euro_edata.price;
    if(euro_edata.gameType == 'z5_all'){ price = (price-0)*3;}
    var packnameObj = {
      '淘汰赛礼包': '1',
      '全赛事礼包': '2',
      '小组赛礼包': '3',
      '德甲': '4',
      '英超': '5',
      '意甲': '6',
      '西甲': '7',
      '法甲': '8',
      '欧冠': '9',
      '白金卡': '11',
      '金卡': '12',
      '银卡': '13',
      '充值卡热促100': '14',
      '充值卡热促500': '15',
      '充值卡热促2000': '16',
      '充值卡热促5000': '17'
    };
    // packnameArr = ['','淘汰赛礼包','全赛事礼包','小组赛礼包','德甲首轮尝鲜礼包','英超首轮尝鲜礼包','意甲首轮尝鲜礼包','西甲首轮尝鲜礼包','','','','白金卡','金卡','银卡','充值卡热促100','充值卡热促500','充值卡热促2000','充值卡热促5000'];
    var pname = packnameObj[euro_edata.packname];

    var actionUrl = 'http://odds.sports.sina.com.cn/uefa/prePayPack?memberId=' + param_data.memberId + '&wbId=' + param_data.wbId + '&orderLogNo=' + param_data.orderLogNo + '&packname=' + param_data.packname + '&gameType=' + param_data.gameType + '&thirdId=' + thirdId + '&price=' + price + '&pname=' + pname;
    // alert(actionUrl);
    // alert(window.newWin.location.href);
    // window.newWin.location.replace(actionUrl);
    window.location.href = actionUrl;
  },
  // step5 弹出层 我已支付成功按钮
  payStep5: function(){
    var self = this;
    if(!self.checkwbid()){ return;};
    var url = '';
    if (euro_orderid) {
      url = 'http://ai.lottery.sina.com.cn/five/batchSuc.htm?orderNo=' + euro_orderid + '&memberId=' + euro_memberid + '&gameType=' + euro_edata.gameType + '&season=2016&packType=' + euro_edata.packType + '&round=' + edata.round;
    } else {
      url = 'http://ai.lottery.sina.com.cn/five/batchSuc.htm?orderNo=' + '&memberId=' + euro_memberid + '&gameType=' + euro_edata.gameType + '&season=2016&packType=' + euro_edata.packType + '&round=' + edata.round;
    }
    $.ajax({
      url:url,
      dataType:'jsonp',
      data: {},
      cache: false,
      jsonpCallback:"dcSuc_"+euro_edata.gameType+"_"+euro_edata.packType,
      type:"get",
      success: function(data) {
        var code = data.code;
        if(code == 200){
          location.reload(true);
        }  else if (code == 300) { //未关联注册
          var nickName = getSinaWbCookieVal('SINA_WB_LOCAL_NICKNAME');
          registerForm(thirdId, nickName, 1); //转发到用户中心注册页面
        } else {
          util.alert(data.msg);
        }
      }
    });
  },

  openPage: function(){
    var self = this;
    if(!self.checkwbid()){ return;}
    if (whatPay == 'b0' || whatPay == 'b1') {
      // window.newWin = window.open('http://sports.sina.com.cn/js/euro2016_lottery/pay_mid_page.html', '_blank');
      if(window.check300){
        util.alert("未绑定手机号");
        var nickName = getSinaWbCookieVal('SINA_WB_LOCAL_NICKNAME');
        registerForm(util.wbId, nickName, 1);
        //转发到用户中心注册页面
      }else{
        cardPay.payToNew(whatPay);
      }
    } else {
      // window.newWin = window.open('http://sports.sina.com.cn/js/euro2016_lottery/pay_mid_page.html', '_blank');
      util.yppay.payStep2();
    }
  }
}

// vip和充值卡支付模块
var cardPay = {
  payToNew: function (type) {
    var self = this;
    var param_data = {};
    param_data.memberId = euro_memberid;
    param_data.wbId = util.wbId;
    param_data.orderLogNo = euro_orderid;

    param_data.packname = euro_edata.packname;
    param_data.gameType = euro_edata.gameType;
    var info = JSON.stringify(param_data);

    var thirdId = util.wbId;
    var price = euro_edata.price;
    var packnameObj = {
      '淘汰赛礼包': '1',
      '全赛事礼包': '2',
      '小组赛礼包': '3',
      '德甲': '4',
      '英超': '5',
      '意甲': '6',
      '西甲': '7',
      '白金卡': '11',
      '金卡': '12',
      '银卡': '13',
      '充值卡热促100': '14',
      '充值卡热促500': '15',
      '充值卡热促2000': '16',
      '充值卡热促5000': '17'
    };
    // packnameArr = ['','淘汰赛礼包','全赛事礼包','小组赛礼包','德甲首轮尝鲜礼包','英超首轮尝鲜礼包','意甲首轮尝鲜礼包','西甲首轮尝鲜礼包','','','','白金卡','金卡','银卡','充值卡热促100','充值卡热促500','充值卡热促2000','充值卡热促5000'];
    var pname = packnameObj[euro_edata.packname];

    var vipMask = $("#popup_layout_canpay_vip");
    var czMask = $("#popup_layout_canpay_cz");
    if (type == "b0") {
      var actionUrl = 'http://odds.sports.sina.com.cn/uefa/prePayCard?memberId=' + "" + '&wbId=' + param_data.wbId + '&orderLogNo=' + "" + '&packname=' + param_data.packname + '&gameType=' + "" + '&thirdId=' + thirdId + '&amount=' + price + '&pname=' + pname + '&type=vipCard';
      // window.open(actionUrl, "_blank");
      window.location.href = actionUrl;
      popupShow(vipMask);
    } else if (type == "b1") {
      var actionUrl = 'http://odds.sports.sina.com.cn/uefa/prePayCard?memberId=' + "" + '&wbId=' + param_data.wbId + '&orderLogNo=' + "" + '&packname=' + param_data.packname + '&gameType=' + "" + '&thirdId=' + thirdId + '&amount=' + price + '&pname=' + pname + '&type=chgCard';
      // window.open(actionUrl, "_blank");
      window.location.href = actionUrl;
      popupShow(czMask);
    }
  }
};

var ypObj = {
  getHasPurchase: function() {
    // 已经购买
    var self = this;
    if (!util.yppay.getwbid()) {
      return;
    }
    var data_01 = __newseason.ns_01;
    for(var i=0,len=data_01.length; i<len; i++){
      (function(ii){
        var item = data_01[ii];
        var price = item['price'];
        $.ajax({
          url: 'http://odds.sports.sina.com.cn/odds/giftpay/vipCardCheck?thirdId=' + util.wbId + '&amount='+price+'&hdCode=16001&format=json',
          dataType: 'jsonp',
          data: {},
          jsonpCallback: "checkVip"+ii,
          type: "get",
          cache: false,
          success: function(data) {
            // data ={"result":"error","code":400,"msg":"您已购买过金卡VIP卡了"}
            if(data.code==300){
              //未关联注册
              window.check300=true;
            }

            if (data.code == 400) {
              if(data.msg.indexOf('白金VIP卡')>-1){
                data_01[ii].status = 3;
                $("#nsbox_card_01").removeClass('yp_pay').find(".nsbox_card_btn").html(data_01[0]['msg'][3]).show();
                $("#nsbox_card_02").removeClass('yp_pay').find(".nsbox_card_btn").html(data_01[1]['msg'][1]).show();
                $("#nsbox_card_03").removeClass('yp_pay').find(".nsbox_card_btn").html(data_01[2]['msg'][1]).show();
              }
              if(data.msg.indexOf('金卡VIP卡')>-1){
                data_01[ii].status = 3;
                $("#nsbox_card_01").removeClass('yp_pay').find(".nsbox_card_btn").html(data_01[0]['msg'][1]).show();
                $("#nsbox_card_02").removeClass('yp_pay').find(".nsbox_card_btn").html(data_01[1]['msg'][3]).show();
                $("#nsbox_card_03").removeClass('yp_pay').find(".nsbox_card_btn").html(data_01[2]['msg'][1]).show();
              }
              if(data.msg.indexOf('银卡VIP卡')>-1){
                data_01[ii].status = 3;
                $("#nsbox_card_01").removeClass('yp_pay').find(".nsbox_card_btn").html(data_01[0]['msg'][1]).show();
                $("#nsbox_card_02").removeClass('yp_pay').find(".nsbox_card_btn").html(data_01[1]['msg'][1]).show();
                $("#nsbox_card_03").removeClass('yp_pay').find(".nsbox_card_btn").html(data_01[2]['msg'][3]).show();
              }
            }
          }
        });
      })(i);
    }

    window["checkPack"] = function(){};
    var data_03 = __newseason.ns_03;
    var rndString= '';
    var item;
    for(var j=0,len=data_03.length; j<len; j++){
      item = data_03[j];
      rndString += ('|'+item.packType +'_'+ item.round);
    }
    var rndStr= rndString.substring(1);
    $.ajax({
      url: 'http://ai.lottery.sina.com.cn/five/psn/ckPack.htm?thirdId=' + util.wbId + '&season=2016&rndStr='+rndStr,
      dataType: 'jsonp',
      data: {},
      jsonpCallback: "checkPack",
      type: "get",
      cache: false,
      success: function(data) {
        // data = {
        //   "result":"success",
        //   "code":200,
        //   "deJia1":[],
        //   "yinChao1":["z5_all"],
        //   "yiJia1":["z5_dx","z5_spf"],
        //   "xiJia1":[],
        //   "memberId":519613
        // }
        if (data.code == 200) {
          if (data.deJia && data.deJia.length > 0) {
            self.hasPurchase(__newseason.ns_03[0],data.deJia);
          }
          if (data.yinChao && data.yinChao.length > 0) {
            self.hasPurchase(__newseason.ns_03[1],data.yinChao);
          }
          if (data.xiJia && data.xiJia.length > 0) {
            self.hasPurchase(__newseason.ns_03[2],data.xiJia);
          }
          if (data.yiJia && data.yiJia.length > 0) {
            self.hasPurchase(__newseason.ns_03[3],data.yiJia);
          }

          if (data.faJia && data.faJia.length > 0) {
            self.hasPurchase(__newseason.ns_03[4],data.faJia);
          }
          if (data.ouGuan && data.ouGuan.length > 0) {
            self.hasPurchase(__newseason.ns_03[5],data.ouGuan);
          }
        }
        self.render();
      }
    });
  },
  hasPurchase: function(ypdata, yparr) {
    if (yparr.length  > 2) {
      ypdata['z_all'] = '3';
      ypdata['z_sx'] = '3';
      ypdata['z_spf'] = '3';
      ypdata['z_dx'] = '3';
      ypdata['status'] = '3';
      return false;
    }
    for (var i = 0, len = yparr.length; i < len; i++) {
      if (yparr[i] == 'z5_sx') {
        ypdata['z_sx'] = '3';
        ypdata['z_all'] = '2';
      } else if (yparr[i] == 'z5_spf') {
        ypdata['z_spf'] = '3';
        ypdata['z_all'] = '2';
      } else if (yparr[i] == 'z5_dx') {
        ypdata['z_dx'] = '3';
        ypdata['z_all'] = '2';
      } else if (yparr[i] == 'z5_all') {
        ypdata['z_all'] = '3';
        ypdata['z_sx'] = '3';
        ypdata['z_spf'] = '3';
        ypdata['z_dx'] = '3';
        ypdata['status'] = '3';
      }
    }
  },
  render: function(data) {
    var self = this;
    // 人工智能小炮VIP
    $.ajax({
      url: 'http://ai.lottery.sina.com.cn/gift/vipCardInfo.htm?hdCode=16001',
      dataType: 'jsonp',
      data: {},
      jsonpCallback: "ckCard",
      type: "get",
      cache: false,
      success: function(data) {
        // var data = {
        //   "白金VIP卡":0,
        //   "金卡VIP卡":0,
        //   "银卡VIP卡":0,
        //   "result":"success",
        //   "code":200
        // }
        data['card0'] = data["白金VIP卡"];
        data['card1'] = data["金卡VIP卡"];
        data['card2'] = data["银卡VIP卡"];

        var data_01 = __newseason.ns_01;
        for(var i=0,len=data_01.length; i<len; i++){
          var item = data_01[i];
          item["count"] = data["card"+i];
          $("#ns_count_0"+i).html(item["count"]);
          if(item["count"] <=0 && data_01[i].status != 3){
            data_01[i].status = 2;
            $("#nsbox_card_0"+ (i+1)).removeClass('yp_pay').find(".nsbox_card_btn").html(data_01[i]['msg'][2]).show();
          }
        }
      }
    });

    // 首轮尝鲜礼包
    template.helper("getFlag", function(imgSign,packname){
      return '<img src="http://n.sinaimg.cn/sports/lottseason1617/pc/i/yp_newSeason/icon_games_'+imgSign+'.png" alt="'+packname+'">';
    });
    template.helper("getTeamLi", function(status){
      return status == 3? 'nsm_haspay':'nsm_radio';
    });
    template.helper("getMsg", function(data){
      return data.msg[data.status];
    });
    template.helper("getTeamBtn", function(status){
      return status == 1? 'yp_pay nsm_bottom':'nsm_bottom bggray';
    });
    template.helper("getPackageAll", function(status){
      return status == 2? 'nsm_radio_all_no':'nsm_radio_all';
    });
    template.helper("getPriceAll", function(price){
      return (price-0)*3;
    });

    var data_03 = __newseason.ns_03;
    var html = template('ns_03_tmp', { data: data_03 });
    $("#ns_matches")[0].innerHTML = html;
    $("#ns_matches").find(".ns_match").each(function(index, el) {
      $(this).find(".nsm_radio").eq(0).addClass("selected");
    });
    for(var i=0,len=data_03.length; i<len; i++){
      var item = data_03[i];
      if(item.status == '3'){
        var $match = $("#ns_matches").find('.ns_match').eq(i);
        $match.find('.nsm_st0').hide();
        $match.find('.nsm_st1').show();
      }
    }
  },
  bindEvent: function() {
    // 展开更多
    $(".nsbox_detail_icon").on("click", function(){
      var $detail = $(this).closest(".nsbox_detail");
      $(this).hide();
      $detail.find(".nsbox_detail_more").show();
    });
    // 尝鲜包
    var $match,$selectedPackage,splen;
    $("#ns_matches").on("click",".nsm_radio",function(){
      $match = $(this).closest(".ns_match");
      $match.find('.nsm_radio').removeClass("selected");
      $(this).addClass("selected");

      $match.find('.nsm_st1').hide();
      $match.find('.nsm_st0').show();
    });

    $("#ns_matches").on("click",".nsm_radio_all",function(){
      $match = $(this).closest(".ns_match");
      $match.find('.nsm_radio').addClass("selected");
      $match.find('.nsm_st0').hide();
      $match.find('.nsm_st1').show();
    });

    $("body").on("click", ".yp_pay", function() {
      //判断登录状态
      var isLogin = checkLogin();
      if (!isLogin) {
        middleLogin();
      } else {
        var obj = $(this).data("box");
        var idx = $(this).data("idx");
        euro_edata = __newseason[obj][idx];
        if(obj == 'ns_03'){
          var $matchSelect = $(this).closest('.ns_match').find('.selected');
          if($matchSelect.length > 1){
            euro_edata.gameType = 'z5_all';
          } else {
            euro_edata.gameType = $matchSelect.data("type");
          }
          // console.log(euro_edata.gameType);
          // return;
          window.whatPay = "b2";
          util.yppay.payStep1();
        } else if(obj == 'ns_01' || obj == 'ns_02') {
          if(obj == 'ns_01'){
            window.whatPay = "b0";
          }
          if(obj == 'ns_02'){
            window.whatPay = "b1";
          }
          $(".popup_money").html('¥'+euro_edata.price+"元");
          popupShow($popup);
        }

      }
    });
    window.$mask = $("#mask");
    // 所有弹出层容器
    window.$popup_box = $(".popup_box");
    // 支付容器
    window.$popup = $("#popup_layout_pay");
    // 支付应该成功容器
    window.$popup_canpay = $("#popup_layout_canpay");
    // 未支付容器
    window.$popup_nopay = $("#popup_layout_nopay");
    // 没有预测数据的提示容器
    window.$popup_msg = $("#popup_layout_msg");

    // 弹层层隐藏按钮
    $(".popup_btn_close").on("click", function() {
      // 隐藏弹出层
      popupHide();
    });

    //弹出层 支付按钮
    // $(".popup_btn_pay").click(function() {
    // 先验证是否存在订单号
    //   util.yppay.payStep2();
    // });

    //提示信息按钮:知道了  取消
    $(".popup_btn_know").on('click', function(event) {
      // 隐藏弹出层
      // popupHide();
      if($('#popup_msg').text().indexOf('未绑定手机号') > '-1'){
        location.reload(true);
      } else {
        popupHide();
      }
    });
    $(".popup_btn_cancel").on('click', function(event) {
      // 隐藏弹出层
      popupHide();
    });

    //支付成功确认
    $(".popup_btn_canpay").on('click', function() {
      // 隐藏弹出层
      popupHide();
      // 支付是否成功验证
      util.yppay.payStep5();
    });

  },
  init: function() {
    var self = this;
    if (util.yppay.getwbid()) {
      self.getHasPurchase();
    } else {
      self.render();
    }
    self.bindEvent();
  }
};
ypObj.init();

