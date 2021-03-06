/*
* http://n.sinaimg.cn/sports/lotteuro2016/wap/j/payprepack.js
* module name：payprepack.js
* author：niujy
* date：2016年05月26日18:02:56
*/

//全站级脚本的调用入口模块
(function(){
  var isWx = false;
  if (window.navigator.userAgent.toLowerCase().indexOf('micromessenger') >= 0) {
    var $wxbox = $(".wx_box");
    if($wxbox.length>0){
      $wxbox.show();
      $wxbox.on("click",function(){
        $wxbox.hide();
      })
    }
    isWx = true;
  }


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

  //提示信息按钮:知道了  取消
  $(".popup_btn_know").on('click', function(event) {
    // 隐藏弹出层
    popup.hide();
    popupHide();
  });
  $(".popup_btn_close").on('click', function(event) {
    // 隐藏弹出层
    popup.hide();
    popupHide();
  });
  $("#mask").on('click', function(event) {
    // 隐藏弹出层
    popup.hide();
    popupHide();
  });

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
        euro_wbId = util.wbId || uId || util.getQueryString('wbId');  
        return euro_wbId;
      }
    },
    checkwbid: function(){
      // 再次判断一次wbId
      if(euro_wbId){
        return euro_wbId;
      } else {
        var isLogin = window.checkLogin();
        if(!isLogin){
          util.alert('在购买前请先登录');
          return false;
        } else {
          var uId = getSinaWbCookieVal('SINA_WB_LOCAL_NICKNAME_UID');
          if(uId == "undefined"){ uId = '';}
          euro_wbId = util.wbId || uId || util.getQueryString('wbId');
          if(!euro_wbId){
            util.alert("登录账号异常，请重新登录");
            return false;
          }
          return euro_wbId;
        }
      }
    },
    // step4 在新页面 http://ai.lottery.sina.com.cn//nba/payweb/pre.htm 立即支付按钮
    payStep4: function(orderNo,memberId,chargeWay,gameType){
      var self = this;
      if(!self.checkwbid()){ return;};
      var url = 'http://ai.lottery.sina.com.cn/zc/order/batchPay.htm?memberId=' + memberId + '&orderNo=' + orderNo + '&chargeWay=' + chargeWay;
      if(gameType.indexOf("z5_") > -1){
        url = 'http://ai.lottery.sina.com.cn/five/batchPay.htm?orderNo=' + orderNo + '&memberId=' + memberId + '&chargeWay=' + chargeWay;

        if($("#client").length > 0 && $("#client").val() == 'wap'){
          url = 'http://ai.lottery.sina.com.cn/five/wapPkgPay.htm?orderNo='+orderNo+'&memberId='+memberId+'&chargeWay='+ chargeWay;
        }
      }

      $.ajax({
        url:url,
        dataType:'jsonp',
        data: {},
        cache: true,
        jsonpCallback:"dcPay_"+orderNo,
        type:"get",
        success: function(data) {
          var code = data.code;
          // util.windowOpen("http://ai.lottery.daily.2caipiao.com/sina-payment/charge.do?gameType=z_dx&amount=29.00&clientType=4&chargeWay=4&matchId=139180&memberId=519526&sign=99db726978f67fd12d8ebcf89f12c20f&orderNo=D1605261057018327995",'_self');
          if(code && code == "200"){
            // 跳转到真正的支付页面
            window.location.href = data.redirectURL;
          } else {
            util.alert(data.msg);
          }
        }
      });
    }
  }
  
  // 同意阅读点击
  var payBtn = $('#pre_pay_btn');
  var popup = $('#pre_popup');
  var mask = $('#mask');
  $("#pre_hasRead").on('click',function() {
    if (this.checked) {
      payBtn.prop('hasRead', true).css('backgroundColor', '#ff5500');
    } else {
      payBtn.prop('hasRead', false).css('backgroundColor', '#aaa');
    }
  });
  $(".pre_pay label").on('click',function() {
    popup.show();
    mask.show();
  });
  $("#pre_close").on('click',function() {
    popup.hide();
    mask.hide();
  });
  payBtn.prop('hasRead', true).css('backgroundColor', '#ff5500');
  $(".pre_way").on("click",".pre_way_btn",function(){
    $(".pre_way_btn").removeClass("pre_way_cur");
    $(this).addClass("pre_way_cur");
  });
  payBtn.on('click',function() {
    if(isWx){
      $wxbox.show();
      return;
    }
    var hasRead = $(this).prop('hasRead');  
    if (hasRead) {
      var orderNo = $("#orderNo").val();
      var memberId = $("#memberId").val();
      var matchId = $("#matchId").val();
      var chargeWay = $(".pre_way_cur").data("way");
      var gameType = $("#gameType").val();
      if(!gameType){
        gameType = util.getQueryString("gameType");
      }
      // console.log(orderNo+";"+ memberId+";"+ matchId+";"+  chargeWay);
      util.yppay.payStep4(orderNo,memberId,chargeWay,gameType);
    } else {
      util.alert("请先阅读《新浪智能付费/免费服务使用协议》");
    }
  });

})();
