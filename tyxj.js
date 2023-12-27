/******************************

脚本功能：甜盐相机——解锁会员
下载地址：https://is.gd/QcGrYH
脚本作者：鸡神
更新时间：2024-12-27
TG频道群：https://t.me/iosapp520
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/purchase-tianyan-api.tianyancam.com/v1/purchase/subscription/subscriber/status url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/tyxj.js

[mitm] 

hostname = purchase-tianyan-api.tianyancam.com


********************************/

var objc = JSON.parse($response.body);

    objc = {"result":{"activated":true,"products":[{"productId":"com.yiruike.sodacn.subscribe.oneyear","startDate":1673549875000,"expireDate":4674154670000,"managed":false,"status":"ACTIVE"}]}}
$done({body : JSON.stringify(objc)});
