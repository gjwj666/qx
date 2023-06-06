
/**

Tg频道:https://t.me/iosapp520

ios鸡神制作 

解锁vip



[rewrite_local]

^https://gw\.aoscdn\.com/base/vip/client/authorizations$ url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/Arsm.js

[mitm]
hostname = gw.aoscdn.com


下载地址:https://apps.apple.com/cn/app/%E5%82%B2%E8%BD%AF%E6%89%AB%E6%8F%8F-pdf%E6%89%AB%E6%8F%8F%E4%BB%AA-ocr%E5%9B%BE%E7%89%87%E8%BD%AC%E6%96%87%E5%AD%97/id1516561385

 */
var response = $response.body;
try {
    var obj = JSON.parse(response);
    if (obj && obj.status === 200) {
        obj.data.is_tried = 1;
        obj.data.is_activated = 1;
        obj.data.will_expire = 0;
        obj.data.remain_days = "365";
        obj.data.expire_time = "2024-04-04 00:00:00";
        $done({body: JSON.stringify(obj)});
    }
} catch(e) {
    console.log("Error:", e);
}
