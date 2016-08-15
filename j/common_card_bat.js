/*
 * http://n.sinaimg.cn/sports/lotteuro2016/wap/j/lib/common.js
*/ 

var util = {};
util.debug = false;
util.log = function() {
  if (util.debug) {
    console.log.apply(console, arguments);
  }
}
var ypObj;
util.getQueryString = function(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURIComponent(r[2]);
  return null;
}
function jsonp(json) {
    json.data = json.data || {};
    json.timeout = json.timeout || 0;
    json.callback = json.callback || 'callback';
    var fnName = 'jsonp_' + Math.random();
    fnName = fnName.replace('.', '');
    window[fnName] = function(result) {
        clearTimeout(jsonp_timer);
        json.success && json.success(result);
        json.complete && json.complete();
        oHead.removeChild(oS);
        window[fnName] = null ;
    };
    json.data[json.callback] = fnName;
    var arr = [];
    for (var i in json.data) {
        arr.push(i + '=' + encodeURIComponent(json.data[i]));
    }
    var sData = '&' + arr.join('&');
    var oS = document.createElement('script');
    oS.src = json.url + sData;
    var oHead = document.getElementsByTagName('head')[0];
    oHead.appendChild(oS);
    if (json.timeout) {
        var jsonp_timer = setTimeout(function() {
            json.error && json.error();
            json.complete && json.complete();
            oHead.removeChild(oS);
            window[fnName] = null ;
        }, json.timeout);
    }
}


/**
 *支付模块
 */
// 3种玩法 玩法类型:z_sx(上下盘) z_spf(胜平负) z_dx(大小球)  默认z_sx

var euro_gameType = 'z_sx';
var euro_gameTypeArr = ['z_sx','z_spf','z_dx'];
var euro_pankou = '';
var euro_hostTeam = '';
var euro_awayTeam = '';
var euro_matchTime = '';
// 用户id nba_-param_sm
var euro_memberid = '';
// 订单id nba_-param_so
var euro_orderid= '';
// 比赛id nba_-param_sb
var euro_matchid= '';

window.euro_wbId = '';

util.wbId = '';
util.payduing={};
util.money = {};


/**
 * 登录
 */
// var tapclick = 'ontouchstart' in window ? "tap" : "click";
;(function(win, doc) {
  util.INTERFACE_ORDER = 'http://ai.lottery.sina.com.cn/uc/m/myorder_m.shtml?from=euro';
  util.INTERFACE_HOME = 'http://euro.sina.com.cn/lottery/1617season_wap.html';
  util.INTERFACE_USER = 'http://passport.sina.cn/signin/signin?entry=wapsso&vt=4&r=http%3A%2F%2Fai.lottery.sina.com.cn%2Fuc%2Fm%2Fmyorder_m.shtml&amp;revalid=1';

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
  url = "http://passport.sina.cn/signin/signin?entry=wapsso&vt=4&r=http%3A%2F%2Feuro.sina.com.cn%2Flottery%2F1617season_wap.html&amp;revalid=1";
  util.windowOpen(url,"_self");
}
function getUserInfo() {
  if(window.userInfo){
    util.wbId = userInfo.uid;
    $(".js-login").find("img").attr("src",userInfo.userface);

    var ckName = 'SINA_WB_LOCAL_NICKNAME';
    var ckNameId = 'SINA_WB_LOCAL_NICKNAME_UID';
    var ckDomain = 'sina.com.cn';
    setSinaWbCookie(ckName, userInfo.uname, ckDomain, 0);
    setSinaWbCookie(ckNameId, userInfo.uid, ckDomain, 0);

  } else {
    var url = 'https://passport.sina.cn/sso/islogin?';
    if (url.indexOf('?') == -1) {
      url = url + '?';
    }
    var oDate = new Date();
    var data = {
      random: Math.random(),
      time: oDate.getTime()
    }
    jsonp({
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
        setSinaWbCookie(ckName, rs.data.uname, ckDomain, 0);
        setSinaWbCookie(ckNameId, rs.data.uid, ckDomain, 0);
      },
      error: function() {

      },
      url: url,
      data: data,
      timeout: 3000
    })
  }
}


function windowOpen(url, target) {
  var a = document.createElement("a");
  a.setAttribute("href", url);
  if (target == null) {
    target = '_blank';
  }
  a.setAttribute("target", target);
  document.body.appendChild(a);
  if (a.click) {
    a.click();
  } else {
    try {
      var evt = document.createEvent('Event');
      a.initEvent('click', true, true);
      a.dispatchEvent(evt);
    } catch (e) {
      window.open(url);
    }
  }
  document.body.removeChild(a);
}

function setSinaWbCookie(name, value, domain, expires) {
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

//获取定位的top值
function getScrollTop(id) {
  var topHeight = 0;
  var scrollTop = 0;

  var obj = document.getElementById(id);
  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.scrollTop;
  } else if (document.body) {
    scrollTop = document.body.scrollTop;
  }

  objHeight = (document.documentElement.clientHeight - obj.offsetHeight) / 2 + scrollTop - 120;
  return objHeight;
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


util.alert = function(msg){
  $('#popup_msg').html(msg);
  popupShow($popup_msg);
}

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
// 转发到用户中心注册页面
function registerForm(wbId, nick, wbType) {
  var actionUrl = 'http://ai.lottery.sina.com.cn//uc/m/phoneBind_m.shtml?from=euro';
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
