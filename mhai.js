/******************************

微信小程序: 梦幻Ai 

App下载: 梦幻Ai绘画

作者:ios鸡神

频道: https://t.me/iosapp520




[rewrite_local]

^https:\/\/aiservice\.xsdr\.top\/expression\/api\/.*$ url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/mhai.js

[mitm] 

hostname = aiservice.xsdr.top

*******************************/
var body = $response.body;
body = body.replace(/"gold":\d+/g, '"gold":99999999999999999');
$done({ body });
