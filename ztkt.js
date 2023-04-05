
/**

Tg频道:https://t.me/gjwj6

ios鸡神制作 

解锁vip


下载链接:https://apps.apple.com/cn/app/%E4%BD%90%E7%B3%96-%E4%B8%80%E9%94%AE%E6%8A%A0%E5%9B%BE%E6%8D%A2%E8%83%8C%E6%99%AF%E7%A5%9E%E5%99%A8/id1609584814



[rewrite_local]
^https:\/\/awvp\.aoscdn\.com\/base\/vip\/v2\/vips$ url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/ztkt.js

[mitm]
hostname = *.aoscdn.*


 */

let body = $response.body;
let obj = JSON.parse(body);

// VIP规则
obj["data"]["candy"] = 888888;
obj["data"]["candy_expired_at"] = 3900000000;
obj["data"]["pending"] = 0;
obj["data"]["status"] = 1;
obj["data"]["license_type"] = "vip";
obj["data"]["period_type"] = "trial";
obj["data"]["max_devices"] = 5;
obj["data"]["quota"] = 88888;
obj["data"]["expired_at"] = 3900000000;
obj["data"]["remained_seconds"] = 98;
obj["data"]["coin"] = 8877;
obj["data"]["limit"] = 99;
obj["data"]["group_expired_at"] = 3900000000;
obj["data"]["is_tried"] = 1;

$done({body: JSON.stringify(obj)});
