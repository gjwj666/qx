/******************************

[rewrite_local]

https:\/\/29xx\.top\/index.*$ url script-request-header https://raw.githubusercontent.com/gjwj666/qx/main/jiuye.js

[mitm] 

hostname = 29xx.top

*******************************/

var modifiedHeaders=$request['headers'];
modifiedHeaders['appid']='8857065256369871';
modifiedHeaders['accessToken']='be8c7d41e6dbbfdbada7de061f45fa32';
modifiedHeaders['token']='77855';
modifiedHeaders['User-Agent']='Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1';
modifiedHeaders['request-token']='5f9f48a2c034a1028abdc131cec8d665860ec8f2';
$done({
    'headers': modifiedHeaders
});
