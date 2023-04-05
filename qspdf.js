


/**************************************


Tg频道:https://t.me/gjwj6

ios鸡神制作 

解锁vip


[rewrite_local]

https://awvp.aoscdn.com/base/vip/client/authorizations url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/qspdf.js



[mitm]
hostname = awvp.aoscdn.com


下载链接:https://apps.apple.com/cn/app/%E8%BD%BB%E9%97%AApdf-%E5%9C%A8%E7%BA%BFpdf%E7%BC%96%E8%BE%91%E9%98%85%E8%AF%BB%E7%AD%BE%E5%90%8D/id1622949837



***************************************/

const body = $response.body;
const obj = JSON.parse(body);
obj.data = {
  "candy": 1,
  "candy_expired_at": 3900000000,
  "pending": 1,
  "license_type": "vip",
  "period_type": "trial",
  "expired_at": 3900000000,
  "coin": 986536,
  "limit": 875664,
  "group_expired_at": 3900000000,
  "is_tried": 1,
  "is_activated": 1,
  "allowed_device_count": 1,
  "durations": 9888,
  "device_id": 0,
  "product_id": 495,
  "is_lifetime": 1,
  "has_present": 1,
  "vip_special": 1,
  "begin_activated_time": 1680433117,
  "remain_days": 999866686,
  "will_expire": 1,
  "has_buy_extend": 1,
  "expire_time": "2099-09-01 00:00:01"
};
$done({body: JSON.stringify(obj)});
