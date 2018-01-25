function jsonp(a) { a.data = a.data || {}, a.timeout = a.timeout || 0, a.callback = a.callback || "callback";
  var c = "jsonp_" + Math.random();
  c = c.replace(".", ""), window[c] = function(h) { clearTimeout(y), a.success && a.success(h), a.complete && a.complete(), v.removeChild(w), window[c] = null }, a.data[a.callback] = c;
  var h = [];
  for (var i in a.data) h.push(i + "=" + encodeURIComponent(a.data[i]));
  var g = "&" + h.join("&"),
    w = document.createElement("script");
  w.src = a.url + g;
  var v = document.getElementsByTagName("head")[0];
  if (v.appendChild(w), a.timeout) var y = setTimeout(function() { a.error && a.error(), a.complete && a.complete(), v.removeChild(w), window[c] = null }, a.timeout) }

function middleLogin() { url = "http://passport.sina.cn/signin/signin?entry=wapsso&vt=4&r=http%3A%2F%2Feuro.sina.com.cn%2Flottery%2F1617season_wap.html&amp;revalid=1", util.windowOpen(url, "_self") }

function getUserInfo() {
  if (window.userInfo) { util.wbId = userInfo.uid, $(".js-login").find("img").attr("src", userInfo.userface);
    var a = "SINA_WB_LOCAL_NICKNAME",
      c = "SINA_WB_LOCAL_NICKNAME_UID",
      h = "sina.com.cn";
    setSinaWbCookie(a, userInfo.uname, h, 0), setSinaWbCookie(c, userInfo.uid, h, 0) } else {
    var g = "https://passport.sina.cn/sso/islogin?"; - 1 == g.indexOf("?") && (g += "?");
    var w = new Date,
      v = { random: Math.random(), time: w.getTime() };
    jsonp({ success: function(a) { a.data = a.data || {}, a.data.uname = a.data.nick, a.data.userface = a.data.portrait_url, window.userInfo = a.data, util.wbId = a.data.uid, $(".js-login").find("img").attr("src", a.data.userface);
        var c = "SINA_WB_LOCAL_NICKNAME",
          h = "SINA_WB_LOCAL_NICKNAME_UID",
          g = "sina.com.cn";
        setSinaWbCookie(c, a.data.uname, g, 0), setSinaWbCookie(h, a.data.uid, g, 0) }, error: function() {}, url: g, data: v, timeout: 3e3 }) } }

function windowOpen(a, c) {
  var h = document.createElement("a");
  if (h.setAttribute("href", a), null == c && (c = "_blank"), h.setAttribute("target", c), document.body.appendChild(h), h.click) h.click();
  else try {
    var g = document.createEvent("Event");
    h.initEvent("click", !0, !0), h.dispatchEvent(g) } catch (e) { window.open(a) }
  document.body.removeChild(h) }

function setSinaWbCookie(a, c, h, g) {
  if (h = h || document.domain, "undefiend" == typeof g || null == g || "" == g) document.cookie = a + "=" + encodeURIComponent(c) + "; path=/; domain=" + h;
  else {
    var w = 1e3 * g,
      v = new Date;
    v.setTime(v.getTime() + w), document.cookie = a + "=" + encodeURIComponent(c) + ";expires=" + v.toGMTString() + "; path=/; domain=" + h } }

function getSinaWbCookieVal(a) {
  for (var c = document.cookie.replace(/\s/g, "").split(";"), i = 0; i < c.length; i++) {
    var h = c[i].split("=");
    if (h[0] == a) return decodeURIComponent(h[1]) }
  return null }

function getScrollTop(a) {
  var c = 0,
    h = document.getElementById(a);
  return document.documentElement && document.documentElement.scrollTop ? c = document.documentElement.scrollTop : document.body && (c = document.body.scrollTop), objHeight = (document.documentElement.clientHeight - h.offsetHeight) / 2 + c - 120 }

function popupShow(a) {
  var c = util.viewData(),
    h = a[0];
  document.body.style.overflow = "hidden", $popup_box.hide(), a.show(), h.style.visibility = "hidden";
  var g = h.offsetHeight;
  h.style.marginTop = c.viewHeight / 2 - g / 2 - 30 + "px", $mask.show(), h.style.visibility = "visible" }

function popupHide() { document.body.style.overflow = "auto", $mask.hide(), $popup_box.hide() }

function registerForm(a, c, h) {
  var g = "http://ai.lottery.sina.com.cn//uc/m/phoneBind_m.shtml?from=euro",
    w = document.createElement("form");
  document.body.appendChild(w), w.method = "post", w.action = g, w.id = "jq_tmp_form", w.target = "_blank";
  var v = document.createElement("input");
  v.setAttribute("name", "thirdId"), v.setAttribute("type", "hidden"), v.setAttribute("value", a), w.appendChild(v);
  var y = document.createElement("input");
  y.setAttribute("name", "thirdType"), y.setAttribute("type", "hidden"), y.setAttribute("value", h), w.appendChild(y);
  var _ = document.createElement("input");
  _.setAttribute("name", "nickName"), _.setAttribute("type", "hidden"), _.setAttribute("value", c), w.appendChild(_), w.submit(), document.body.removeChild(w) }
var util = {};
util.debug = !1, util.log = function() { util.debug && console.log.apply(console, arguments) };
var ypObj;
util.getQueryString = function(a) {
  var c = new RegExp("(^|&)" + a + "=([^&]*)(&|$)"),
    r = window.location.search.substr(1).match(c);
  return null != r ? decodeURIComponent(r[2]) : null };
var euro_gameType = "z_sx",
  euro_gameTypeArr = ["z_sx", "z_spf", "z_dx"],
  euro_pankou = "",
  euro_hostTeam = "",
  euro_awayTeam = "",
  euro_matchTime = "",
  euro_memberid = "",
  euro_orderid = "",
  euro_matchid = "";
window.euro_wbId = "", util.wbId = "", util.payduing = {}, util.money = {},
  function() { util.INTERFACE_ORDER = "http://ai.lottery.sina.com.cn/uc/m/myorder_m.shtml?from=euro", util.INTERFACE_HOME = "http://euro.sina.com.cn/lottery/1617season_wap.html", util.INTERFACE_USER = "http://passport.sina.cn/signin/signin?entry=wapsso&vt=4&r=http%3A%2F%2Fai.lottery.sina.com.cn%2Fuc%2Fm%2Fmyorder_m.shtml&amp;revalid=1", $(".js-login").attr("href", "http://passport.sina.cn/signin/signin?entry=wapsso&vt=4&r=http%3A%2F%2Feuro.sina.com.cn%2Flottery%2F1617season_wap.html&amp;revalid=1"), $(".loginout").attr("href", "http://passport.sina.cn/sso/logout?entry=wapsso&vt=4&r=http%3A%2F%2Feuro.sina.com.cn%2Flottery%2F1617season_wap.html");
    var a = window.checkLogin();
    a ? ($(".js-login").addClass("js-login-r"), $(".loginout").show(), $(".js-login").attr("href", "http://ai.lottery.sina.com.cn/uc/m/myorder_m.shtml?from=euro"), getUserInfo()) : ($(".js-login").removeClass("js-login-r"), $(".loginout").hide()), $(".js-login-r").on("click", function() {
      var a = window.checkLogin();
      return a ? (window.location.href = util.INTERFACE_ORDER, !1) : void 0 }) }(window, document, void 0), util.windowOpen = function(a, c) {
    var h = document.createElement("a");
    if (h.setAttribute("href", a), null == c && (c = "_blank"), h.setAttribute("target", c), document.body.appendChild(h), h.click) h.click();
    else try {
      var g = document.createEvent("Event");
      h.initEvent("click", !0, !0), h.dispatchEvent(g) } catch (e) { window.open(a) }
    document.body.removeChild(h) }, util.dateFormatFmt = function(a, c) { "[object String]" == Object.prototype.toString.call(a) && (a = a.replace(/-/g, "/")), a = new Date(a);
    var o = { "M+": a.getMonth() + 1, "d+": a.getDate(), "h+": a.getHours(), "m+": a.getMinutes(), "s+": a.getSeconds(), "q+": Math.floor((a.getMonth() + 3) / 3), S: a.getMilliseconds() }; /(y+)/.test(c) && (c = c.replace(RegExp.$1, (a.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var h in o) new RegExp("(" + h + ")").test(c) && (c = c.replace(RegExp.$1, 1 == RegExp.$1.length ? o[h] : ("00" + o[h]).substr(("" + o[h]).length)));
    return c }, util.byId = function(a) {
    return document.getElementById(a) }, util.jsonp = function(a, c, h) {
    if (a) {
      var g = document.getElementsByTagName("head")[0],
        w = util.byId(a);
      w && g.removeChild(w), a += -1 === a.indexOf("?") ? "?callback=" : "&callback=", a += h;
      var v = document.createElement("script");
      window[h] = function(a) { c && c(a) }, v.src = a, v.id = a, v.type = "text/javascript", v.language = "javascript", g.appendChild(v) } }, util.extend = function(a, c, h) { a = a || {};
    var g, w = typeof c,
      i = 1;
    for (("undefined" === w || "boolean" === w) && (h = "boolean" === w ? c : !1, c = a, a = this), "object" != typeof c && "[object Function]" !== Object.prototype.toString.call(c) && (c = {}); 2 >= i;) {
      if (g = 1 === i ? a : c, null !== g)
        for (var v in g) {
          var y = a[v],
            _ = g[v];
          a !== _ && (h && _ && "object" == typeof _ && !_.nodeType ? a[v] = this.extend(y || (null !== _.length ? [] : {}), _, h) : void 0 !== _ && (a[v] = _)) }
      i++ }
    return a }, util.viewData = function() {
    var e = 0,
      l = 0,
      i = 0,
      a = 0,
      f = 0,
      m = 0,
      c = window,
      h = document,
      g = h.documentElement;
    return e = g.clientWidth || h.body.clientWidth || 0, l = c.innerHeight || g.clientHeight || h.body.clientHeight || 0, a = h.body.scrollTop || g.scrollTop || c.pageYOffset || 0, i = h.body.scrollLeft || g.scrollLeft || c.pageXOffset || 0, f = Math.max(h.body.scrollWidth, g.scrollWidth || 0), m = Math.max(h.body.scrollHeight, g.scrollHeight || 0, l), { scrollTop: a, scrollLeft: i, documentWidth: f, documentHeight: m, viewWidth: e, viewHeight: l } }, util.cookie = function(a, c) {
    return { getItem: function(h) {
        var g = h + "=",
          w = "";
        if (a.cookie.length > 0) {
          var v = a.cookie.indexOf(g);
          if (-1 != v) { v += g.length;
            var y = a.cookie.indexOf(";", v); - 1 == y && (y = a.cookie.length), w = c.decodeURIComponent(a.cookie.substring(v, y)) } }
        return w }, setItem: function(h, g, w) {
        var v = new Date;
        w ? v.setTime(v.getTime() + 24 * w * 3600 * 1e3) : v.setFullYear(v.getFullYear() + 1), a.cookie = 0 == w ? h + "=" + c.encodeURIComponent(g) + ";" : h + "=" + c.encodeURIComponent(g) + "; expires=" + v.toGMTString() + ";" }, removeItem: function(c) {
        var h = new Date;
        h.setDate(h.getDate() - 1), a.cookie = c + "=0; expires=" + h.toGMTString();
        var g = util.cookie.getItem(c);
        g && util.cookie.setItem(c, "0") } } }(document, window), util.storage = function() {
    var a = window.localStorage;
    return a ? { getItem: function(c) {
        return a.getItem(c) }, setItem: function(c, h) { a.removeItem(c), a.setItem(c, h) }, removeItem: function(c) { a.removeItem(c) } } : { getItem: util.cookie.getItem, setItem: util.cookie.setItem, removeItem: util.cookie.removeItem } }(document, window), util.alert = function(a) { $("#popup_msg").html(a), popupShow($popup_msg) },
  function() {
    var a = !1;
    if (window.navigator.userAgent.toLowerCase().indexOf("micromessenger") >= 0) {
      var c = $(".wx_box");
      c.length > 0 && (c.show(), c.on("click", function() { c.hide() })), a = !0 }
    window.$mask = $("#mask"), window.$popup_box = $(".popup_box"), window.$popup = $("#popup_layout_pay"), window.$popup_canpay = $("#popup_layout_canpay"), window.$popup_nopay = $("#popup_layout_nopay"), window.$popup_msg = $("#popup_layout_msg"), $(".popup_btn_know").on("click", function() { g.hide(), popupHide() }), $(".popup_btn_close").on("click", function() { g.hide(), popupHide() }), $("#mask").on("click", function() { g.hide(), popupHide() }), util.yppay = { checkwbid: function() {
        if (euro_wbId) return euro_wbId;
        var a = window.checkLogin();
        if (a) {
          var c = getSinaWbCookieVal("SINA_WB_LOCAL_NICKNAME_UID");
          return "undefined" == c && (c = !1), euro_wbId = util.wbId || c || util.getQueryString("wbId"), euro_wbId ? euro_wbId : (util.alert("登录账号异常，请重新登录"), !1) }
        return util.alert("在购买前请先登录"), !1 }, payStep4: function(a, c, h) {
        var g = this;
        if (g.checkwbid()) {
          var w = ""; "vipCard" == h ? w = "http://odds.sports.sina.com.cn/odds/giftpay/vipCardPay?thirdId=" + euro_wbId + "&amount=" + a + "&hdCode=16001&chargeWay=" + c + "&type=vipCard&format=json&client=wap" : "chgCard" == h && (w = "http://odds.sports.sina.com.cn/odds/giftpay/chgCardPay?thirdId=" + euro_wbId + "&amount=" + a + "&hdCode=16001&chargeWay=" + c + "&type=chgCard&format=json&client=wap"), $.ajax({ url: w, dataType: "jsonp", data: {}, cache: !0, jsonpCallback: h + "_" + parseInt(a), type: "get", success: function(a) {
              var c = a.code;
              c && "200" == c ? window.location.href = a.redirectURL : util.alert(a.msg) } }) } } };
    var h = $("#pre_pay_btn"),
      g = $("#pre_popup"),
      w = $("#mask");
    $("#pre_hasRead").on("click", function() { this.checked ? h.prop("hasRead", !0).css("backgroundColor", "#ff5500") : h.prop("hasRead", !1).css("backgroundColor", "#aaa") }), $(".pre_pay label").on("click", function() { g.show(), w.show() }), $("#pre_close").on("click", function() { g.hide(), w.hide() }), h.prop("hasRead", !0).css("backgroundColor", "#ff5500"), $(".pre_way").on("click", ".pre_way_btn", function() { $(".pre_way_btn").removeClass("pre_way_cur"), $(this).addClass("pre_way_cur") }), h.on("click", function() {
      if (a) return void c.show();
      var h = $(this).prop("hasRead");
      if (h) {
        var g = $("#amount").val(),
          w = $("#type").val(),
          v = $(".pre_way_cur").data("way");
        util.yppay.payStep4(g, v, w) } else util.alert("请先阅读《新浪智能付费/免费服务使用协议》") }) }();
