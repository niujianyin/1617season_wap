
# 

标签（空格分隔）： 新浪彩通

---

[TOC]

##项目： 新赛季_人工智能小炮VIP_新浪彩通

```
newseason.js 需要中修改项：
1.util.INTERFACE_HOME ，登录后跳转页面，登出后跳转页面  都修改为当前的页面的url
2.openPage 中打开页面换为空白页面 http://sports.sina.com.cn/js/euro2016_lottery/pay_mid_page.html
3.util.jsonp1 去掉timeout 使用浏览器默认的请求超时时间

```
##url
```
PC:http://euro.sina.com.cn/lottery/1617season.html
wap:http://euro.sina.com.cn/lottery/1617season_wap.html
```


```
<script type="text/javascript">
  if(navigator.userAgent.match(/(iPhone|iPod|Android|ios|BlackBerry|IEMobile)/i)){
    window.location.replace('http://euro.sina.com.cn/lottery/1617season_wap.html?from=wap')
  }
</script>

```



