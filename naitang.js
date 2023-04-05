
/**
[rewrite_local]


Tg频道:https://t.me/gjwj6

ios鸡神制作 

解锁vip



下载链接:
https://apps.apple.com/cn/app/%E4%B9%83%E7%B3%96%E5%B0%8F%E7%BB%84%E4%BB%B6-%E5%88%9B%E6%84%8F%E4%B8%BB%E9%A2%98%E5%A3%81%E7%BA%B8/id1544011866


^https://gw\.aoscdn\.com/base/vip/client/authorizations url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/naitang.js


[mitm]
hostname = gw.aoscdn.com

 */

let bodyJson = JSON.parse($response.body);
bodyJson.data = {
  "candy": 8888,
  "candy_expired_at": 9999999999,
  "pending": 0,
  "license_type": "free",
  "period_type": "trial",
  "expired_at": 0,
  "coin": 0,
  "limit": 1,
  "group_expired_at": 0,
  "is_tried": 1,
  "is_activated": 1,
  "allowed_device_count": 3,
  "durations": 10,
  "device_id": 123456789,
  "product_id": 428,
  "is_lifetime": 1,
  "has_present": 1,
  "vip_special": 1,
  "begin_activated_time": 1680624579,
  "remain_days": 365,
  "will_expire": 0,
  "has_buy_extend": 1,
  "expire_time": "2099-12-31 23:59:59"
};
$done({body: JSON.stringify(bodyJson)});
