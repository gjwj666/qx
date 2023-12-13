/*

微信小程序: 图趣Ai

作者:ios鸡神

频道: https://t.me/iosapp520

[rewrite_local]
https://restore.jianse.tv/api/users/loginUser url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/xcxtqai.js


[mitm]
hostname = restore.jianse.tv

*/


let body = JSON.parse($response.body);

body = {
  "vip": true,
  "storageSize": 0,
  "application": "TUQU_WX_APPLET",
  "id": 888888,
  "douyinOpenId": "oFcd564pj8hCf-yWF37_FtyTHIGk",
  "language": "zh_CN",
  "countryCode": "86",
  "regSubChannel": "wx",
  "loginSubChannel": "wx",
  "createTime": "2023-12-13T01:18:18",
  "lastLoginTime": "2023-12-13T12:56:22.962",
  "remoteIp": "218.20.61.90",
  "clientVersion": "8.0.42",
  "deviceModel": "iPhone 12<iPhone13,2>",
  "totalPayAmount": 0.0,
  "trialed": false,
  "deleted": false,
  "regChannel": "IOS",
  "loginChannel": "IOS",
  "hidden": false,
  "freeCount": 1,
  "diamonds": 99999999,
  "shareGenerateCount": 1,
  "shareDownloadCount": 1,
  "changePhotoCount": 1,
  "changeTemplateGenerate": 1,
  "_instanceName": "12,915,037 (+86)"
};

$done({body: JSON.stringify(body)});
