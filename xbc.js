
/*

Tg频道:https://t.me/gjwj6

脚本制作:ios鸡神

脚本作用:打飞机专用

地址：   

xbc1.live

注册邀请码：206898



[rewrite_local]


https:\/\/api101\.xbcapp\.xyz\/api\/tiny-shop\/v1.*$ url script-request-header https://raw.githubusercontent.com/gjwj666/qx/main/xbc.js

[mitm] 

hostname= api101.xbcapp.xyz



*/

var gjwj = $request.headers;

     gjwj['x-api-key'] = '5sx_rJM7wTzbfQE1VuOeaIpT7SzU-jP4_1675072798';
     gjwj['device-id'] = 'a254b22e173042d1dcba46b093b8425b';
     gjwj['mc'] =
'TIiSmFFoTZfMsxvCYZRODJaDqFTyP9Y5S6wxt74BLn8%3D';
     gjwj['User-Agent'] =
'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1';
$done({headers : gjwj}); 
