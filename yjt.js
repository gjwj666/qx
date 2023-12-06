/*

易截图2：https://apps.apple.com/app/id1633186528

[rewrite_local]
^https?:\/\/(jietu6|1jietu)\.com\/apiv2\/user url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/yjt.js

[MITM]
hostname = jietu6.com, 1jietu.com

*/
var iosjs = JSON.parse($response.body);
iosjs.info.group_id = "3";
iosjs.info.vip = "1";
iosjs.info.group = "你死了之后就到期";
iosjs.info.nickname = "ios-🐔神";
$done({ body: JSON.stringify(iosjs) });
