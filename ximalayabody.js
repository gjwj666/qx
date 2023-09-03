
/**************************
脚本功能：喜马拉雅 会员
下载地址：appstore下载
软件版本：所有
脚本作者：ios鸡神
TG频道群：https://t.me/iosapp520
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️




*********************************************

[rewrite_local]

^http[s]?:\/\/openapi\.mysteel\.com/v5/getAdv.htm url reject
^http[s]?.+ulogs.umeng.com url reject
^http[s]?.+gslbali.ximalaya.com url reject
^http[s]?.+adse.ximalaya.com url reject
^http[s]?.+gslbtx.ximalaya.com url reject
^http[s]?.+location.ximalaya.com url reject
^http[s]?.+passport.ximalaya.com url reject
^http[s]?.+adbehavior.ximalaya.com url reject
^http[s]?.+ad.ximalaya.com url reject
^http[s]?.+audid-api.taobao.com url reject
^http[s]?:\/\/((.+ximalaya.+)|(.+xmcdn.+))\/mobile-playpage\/track\/v3\/baseInfo\/ts url script-request-header https://raw.githubusercontent.com/gjwj666/qx/main/ximalayatk.js
^http[s]?:\/\/((.+ximalaya.+)|(.+xmcdn.+)).*\/(playpage\/tabs\/v2|v1\/album\/track\/ts|v1\/album\/price|v2\/homePage|business-vip-presale-mobile-web\/page\/ts|vip\/v1\/recommand|track\/v3\/baseInfo|v1\/module\/data\/dynamic|basicInfo\/dynamic\/ts).*$ url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/ximalayabody.js


[mitm]

hostname = 180.153.*.*,*xima*,*xmcdn*,*.ximalaya.com,*.xmcdn.com,180.153.255.*,180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.237,114.80.161.29,1.62.62.64,51*.com *.ximalaya.com, *.*.*.*

************************/





































var _0x5b537a = ["body", "url", "/mobile-playpage/playpage/tabs", "v1/album/track/ts", "business-vip-presale-mobile-web/page/ts", "/product/promotion/v1/album/price/ts", "mobile-user/v2/homePage/", "vip/v1/recommand", "/track/v3/baseInfo", "/product/detail/v1/module/data/dynamic", "/product/detail/v1/basicInfo/dynamic/ts", "indexOf", "\"url\":\"https://t.me/WeiRenQAQ/163", "replace", "\"isAuthorized\":true", "\"text\":\"☘️脚本由伟人免费提供!请点击此处获取最新JS。当前是体验[3]线路❤️", "\"isFree\":true", "\"sampleDuration\":99999", "\"isSample\":true", "\"isPaid\":false", "\"vipPurchaseUrl\":\"https://t.me/WeiRenQAQ", "\"vipPurchaseText\":\"点击添加作者TG频道", "\"url\\\":\\\"https://t.me/WeiRenQAQ\\", "\"buttonContent\\\":\\\"❤️❤️点击添加作者TG频道❤️❤️\\", "userLogoPic\":\"https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg", "userLevelIcon\":\"http://imagev2.xmcdn.com/group87/M09/0A/4E/wKg5IV8Pwjmw5My3AAASYbQa39Y768.png", "subtitle\":\"2999-09-09免费提供禁止贩卖", "vipStatus\":2", "nickName\":\"by~伟人", "parse", "action", "behaviors", "data", "https://t.me/WeiRenQAQ/163", "vipPurchaseText", "点击添加作者TG频道", "labelSubTitle", "添加频道获取最新脚本继续畅听！👉", "labelText", "出现了意外？这是付费节目？", "stringify", "nickname", "by~伟人", "isVip", "vipExpireTime", "vipStatus", "vipLevel", "anchorVipInfo", "vipInfo", "level", "mobileLargeLogo", "https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg", "mobileSmallLogo", "mobileMiddleLogo", "modules", "nickName", "msg", "我累了😭。请使用别的线路或者隔一天再来💔"],
  _0x3dc0bc = $response[_0x5b537a[0]],
  _0xbf2b54 = $request[_0x5b537a[1]];
const _0x52f021 = _0x5b537a[2];
const _0x213233 = _0x5b537a[3],
  _0x3c8bf6 = _0x5b537a[4],
  _0x16aade = _0x5b537a[5],
  _0x3ca014 = _0x5b537a[6],
  _0x47e4ac = _0x5b537a[7],
  _0x401cc2 = _0x5b537a[8],
  _0x1f90a3 = _0x5b537a[9],
  _0x16ac8e = _0x5b537a[10];
_0xbf2b54[_0x5b537a[11]](_0x52f021) != -1 && (_0x3dc0bc = _0x3dc0bc[_0x5b537a[13]](/"sampleDuration":\d/g, _0x5b537a[17])[_0x5b537a[13]](/"isFree":\w+/g, _0x5b537a[16])[_0x5b537a[13]](/"text":"[^"]+/g, _0x5b537a[15])[_0x5b537a[13]](/"isAuthorized":\w+/g, _0x5b537a[14])[_0x5b537a[13]](/"url":"[^"]+/g, _0x5b537a[12]));
_0xbf2b54[_0x5b537a[11]](_0x213233) != -1 && (_0x3dc0bc = _0x3dc0bc[_0x5b537a[13]](/"isFree":\w+/g, _0x5b537a[16])[_0x5b537a[13]](/"isPaid":\w+/g, _0x5b537a[19])[_0x5b537a[13]](/"isSample":\w+/g, _0x5b537a[18])[_0x5b537a[13]](/"isAuthorized":\w+/g, _0x5b537a[14]));
_0xbf2b54[_0x5b537a[11]](_0x1f90a3) != -1 && (_0x3dc0bc = _0x3dc0bc[_0x5b537a[13]](/"isFree":\w+/g, _0x5b537a[16])[_0x5b537a[13]](/"isPaid":\w+/g, _0x5b537a[19])[_0x5b537a[13]](/"isAuthorized":\w+/g, _0x5b537a[14])[_0x5b537a[13]](/"isSample":\w+/g, _0x5b537a[18])[_0x5b537a[13]](/"vipPurchaseText":"[^"]+/g, _0x5b537a[21])[_0x5b537a[13]](/"vipPurchaseUrl":"[^"]+/g, _0x5b537a[20]));
_0xbf2b54[_0x5b537a[11]](_0x16ac8e) != -1 && (_0x3dc0bc = _0x3dc0bc[_0x5b537a[13]](/"buttonContent\\":\\"[^"]+/g, _0x5b537a[23])[_0x5b537a[13]](/"url\\":\\"[^"]+/g, _0x5b537a[22])[_0x5b537a[13]](/"isFree":\w+/g, _0x5b537a[16])[_0x5b537a[13]](/"isPaid":\w+/g, _0x5b537a[19])[_0x5b537a[13]](/"isAuthorized":\w+/g, _0x5b537a[14])[_0x5b537a[13]](/"isSample":\w+/g, _0x5b537a[18]));
_0xbf2b54[_0x5b537a[11]](_0x3c8bf6) != -1 && (_0x3dc0bc = _0x3dc0bc[_0x5b537a[13]](/nickName":"[^"]+/g, _0x5b537a[28])[_0x5b537a[13]](/vipStatus":\d/g, _0x5b537a[27])[_0x5b537a[13]](/subtitle":"[^"]+/g, _0x5b537a[26])[_0x5b537a[13]](/userLevelIcon":"[^"]+/g, _0x5b537a[25])[_0x5b537a[13]](/userLogoPic":"[^"]+/g, _0x5b537a[24]));
var _0x3573a6 = JSON[_0x5b537a[29]](_0x3dc0bc);
if (_0xbf2b54[_0x5b537a[11]](_0x16aade) != -1) {
  _0x3573a6[_0x5b537a[32]][_0x5b537a[31]][0][_0x5b537a[30]][_0x5b537a[1]] = _0x5b537a[33];
  _0x3573a6[_0x5b537a[32]][_0x5b537a[31]][0][_0x5b537a[34]] = _0x5b537a[35];
  _0x3573a6[_0x5b537a[32]][_0x5b537a[31]][0][_0x5b537a[36]] = _0x5b537a[37];
  _0x3573a6[_0x5b537a[32]][_0x5b537a[31]][0][_0x5b537a[38]] = _0x5b537a[39];
  _0x3dc0bc = JSON[_0x5b537a[40]](_0x3573a6);
}
if (_0xbf2b54[_0x5b537a[11]](_0x3ca014) != -1) {
  _0x3573a6[_0x5b537a[32]][_0x5b537a[41]] = _0x5b537a[42];
  _0x3573a6[_0x5b537a[32]][_0x5b537a[43]] = true;
  _0x3573a6[_0x5b537a[32]][_0x5b537a[44]] = 32493834549000;
  _0x3573a6[_0x5b537a[32]][_0x5b537a[45]] = 2;
  _0x3573a6[_0x5b537a[32]][_0x5b537a[46]] = 5;
  _0x3573a6[_0x5b537a[32]][_0x5b537a[47]][_0x5b537a[43]] = true;
  _0x3573a6[_0x5b537a[32]][_0x5b537a[48]][_0x5b537a[43]] = true;
  _0x3573a6[_0x5b537a[32]][_0x5b537a[48]][_0x5b537a[49]] = 5;
  _0x3573a6[_0x5b537a[32]][_0x5b537a[50]] = _0x5b537a[51];
  _0x3573a6[_0x5b537a[32]][_0x5b537a[52]] = _0x5b537a[51];
  _0x3573a6[_0x5b537a[32]][_0x5b537a[53]] = _0x5b537a[51];
  _0x3dc0bc = JSON[_0x5b537a[40]](_0x3573a6);
}
_0xbf2b54[_0x5b537a[11]](_0x47e4ac) != -1 && (delete _0x3573a6[_0x5b537a[32]][_0x5b537a[54]], _0x3573a6[_0x5b537a[32]][_0x5b537a[45]] = 2, _0x3573a6[_0x5b537a[32]][_0x5b537a[55]] = _0x5b537a[42], _0x3dc0bc = JSON[_0x5b537a[40]](_0x3573a6));
_0xbf2b54[_0x5b537a[11]](_0x401cc2) != -1 && (_0x3573a6[_0x5b537a[56]] = _0x5b537a[57], _0x3dc0bc = JSON[_0x5b537a[40]](_0x3573a6));
const _0x313274 = {
  "body": _0x3dc0bc
};
$done(_0x313274);
