/******************************

Muscle Booster(健身软件)
下载地址 https://apps.apple.com/cn/app/muscle-booster-%E8%AE%BE%E8%AE%A1%E7%9A%84%E5%81%A5%E8%BA%AB%E6%95%99%E7%BB%83/id1446447749

TG频道群：https://t.me/gjwj6
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
^https:\/\/menscoach-api.asqq.io\/prod\/(user|check-receipt|subscription-restore) url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/MuscleBooster.js
[mitm] 
hostname = *menscoach*
*******************************/

var body = $response.body;
var url = $request.url;
var parse = JSON.parse(body);
var is_validation_success = /"is_validation_success":\s+\w+/g;
var is_paid = /"is_paid":\s+\w+/g;
var name = /"name":\s+".*?"/g;

if (url.indexOf("subscription-restore") != -1) {

body = body.replace(is_validation_success,'"is_validation_success":true');

$notify("-Muscle Booster 🏊","*************","永久vip破解成功‼️");

$done({
    body
});
}

if (url.indexOf("user") != -1) {

body = body.replace(is_paid,'"is_paid":true').replace(name,'"name":"iOs鸡神🐔"');

$done({
    body
});
}

if (url.indexOf("check-receipt") != -1) {

body = body.replace(is_paid,'"is_paid":true').replace(name,'"name":"Ios鸡神🐔"');

$notify("-Muscle Booster 🏊","*************","永久vip破解成功‼️");

$done({
    body
});
}
