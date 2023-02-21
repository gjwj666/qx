/******************************

[rewrite_local]

^http[s]?:\/\/api\.domain\.liuniukeji\.heshuangde\.com\/index\.php\/App.*$ url script-request-header https://raw.githubusercontent.com/gjwj666/qx/main/shenhu.js

[mitm] 

hostname = api.domain.liuniukeji.heshuangde.com

*******************************/
var modifiedHeaders=$request['headers'];
modifiedHeaders['user-info']= '100018106';
modifiedHeaders['uid']= '100018106';
modifiedHeaders['system']= '{"name":"aVBob25l","systemName":"iOS","systemVersion":"14.4","model":"iPhone","localizedModel":"iPhone","identifierForVendor":"935CD856-9A2C-4D14-80E4-C821F25B93B0","isPhysicalDevice":true,"isTF":"1","bundleID":"jp.kobe.liveapp"}';
modifiedHeaders['token']= 'ecbcbff74c05224cc4f46926477f0e28';
$done({'headers':modifiedHeaders});
