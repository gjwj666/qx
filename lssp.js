/******************************

脚本功能：乐刷短剧——解锁VIP
下载地址：https://is.gd/8Jyeww
TG频道群：https://t.me/iosapp520
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

[rewrite_local]

http:\/\/akdj\.lunlunkj\.vip\/api\/v1\/user\/account\/info url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/lssp.js

[mitm] 

hostname = akdj.lunlunkj.vip

*/

var objc = JSON.parse($response.body);

    objc = 
{
  "msg": "操作成功！",
  "code": 0,
  "data": {
    "id": "1220255",
    "mobile": "",
    "nickName": "ios鸡神-破解",
    "avatar": "https://telegraph-image.pages.dev/file/96e6df6742143f155159e.jpg",
    "sex": 1,
    "birthday": "1989-10-10",
    "points": null,
    "account": {
      "id": "1220255",
      "redChange": 24.00,
      "smallChange": 128.00,
      "cashChange": 0.00
    },
    "vipInfo": {
      "id": "1220255",
      "startTime": "2023-09-13 10:19:32",
      "endTime": "9999-09-14 10:19:32",
      "vipType": 1,
      "updateTime": "2023-09-13 10:19:32",
      "state": 0,
      "leftDays": 0
    },
    "ucLevel": 1,
    "createTime": "Wed Sep 13 10:15:12 CST 2023",
    "preId": null,
    "auctionNum": null,
    "couponNum": null,
    "giftOrderNum": null,
    "mallOrderNum": null,
    "adviceNum": null,
    "vipEnabled": true,
    "vipBanner": "http://file.meetboxs.com/common/bg_fen_vip.png"
  },
  "success": true
}

$done({body : JSON.stringify(objc)});
