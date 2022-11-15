/******************************

脚本功能：涩涩视频——去除所有广告
下载地址：https://48478.xyz/
网页在线:https://files.yuchenglw.com
TG频道群：https://t.me/gjwj6
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https://files.yuchenglw.com url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/sssp.js

[mitm] 

hostname = files.yuchenglw.com

*******************************/


var body=$response.body;
body = body.replace(/(<div class="banner">)[\s\S[\d\D]{0,1666}(<\/div>)/g,'<!--  -->');


body = body.replace(/(<div class="speaker">)[\s\S[\d\D]{0,345}(<\/div>)/g,'<!--  -->');


body = body.replace(/(<div id="popup">)[\s\S[\d\D]{0,1539}(<\/div>)/g,'<!--  -->');



body = body.replace(/(<div class="float-app">)[\s\S[\d\D]{0,345}(<\/div>)/g,'<!--  -->');



body = body.replace(/(<div id="carousel")[\s\S[\d\D]{0,1777}(<\/div>)/g,'<!--  -->');


body = body.replace(/(<div class="header fixed-top">)[\s\S[\d\D]{0,345}(<\/div>)/g,'<!--  -->');

body = body.replace(/(<div class="banner mt-3">)[\s\S[\d\D]{0,1480}(<\/div>)/g,'<!--  -->');


$done(body);
