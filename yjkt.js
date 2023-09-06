
/******************************
脚本功能：一键抠图解锁

脚本发布：https://t.me/iosapp520

脚本作者: ios-🐔神
*******************************
[rewrite_local]
# > 一键抠图解锁永久会员
^https?:\/\/api\.mattingm\.com\/receipt_api\/user\/info url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/yjkt.js
[mitm] 
hostname = api.mattingm.com

*******************************/

var iosjs = JSON.parse($response.body);

iosjs.data.expire_at = "2099-09-09 09:09:09";
iosjs.data.state = 3;

$done({body : JSON.stringify(iosjs)});
