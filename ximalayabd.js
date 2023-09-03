
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
^http[s]?:\/\/((.+ximalaya.+)|(.+xmcdn.+)).*\/(playpage\/tabs\/v2|v1\/album\/track\/ts|v1\/album\/price|v2\/homePage|business-vip-presale-mobile-web\/page\/ts|vip\/v1\/recommand|track\/v3\/baseInfo|v1\/module\/data\/dynamic|basicInfo\/dynamic\/ts).*$ url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/ximalayabd.js


[mitm]

hostname = 180.153.*.*,*xima*,*xmcdn*,*.ximalaya.com,*.xmcdn.com,180.153.255.*,180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.237,114.80.161.29,1.62.62.64,51*.com

************************/





































body = $response.body,
url = $request.url;

url.indexOf('/mobile-playpage/playpage/tabs') != -1 && (body = body.replace(/"sampleDuration":\d/g, '"sampleDuration":99999').replace(/"isFree":\w+/g, '"isFree":true').replace(/"text":"[^"]+/g, '"text":"脚本由ios鸡神免费提供!请点击此处获取最新JS。').replace(/"isAuthorized":\w+/g, '"isAuthorized":true').replace(/"url":"[^"]+/g, '"url":"https://t.me/iosapp520'));

url.indexOf('v1/album/track/ts') != -1 && (body = body.replace(/"isFree":\w+/g, '"isFree":true').replace(/"isPaid":\w+/g, '"isPaid":false').replace(/"isSample":\w+/g, '"isSample":true').replace(/"isAuthorized":\w+/g, '"isAuthorized":true'));

url.indexOf('/product/detail/v1/module/data/dynamic') != -1 && (body = body.replace(/"isFree":\w+/g, '"isFree":true').replace(/"isPaid":\w+/g, '"isPaid":false').replace(/"isAuthorized":\w+/g, '"isAuthorized":true').replace(/"isSample":\w+/g, '"isSample":true').replace(/"vipPurchaseText":"[^"]+/g, '"vipPurchaseText":"点击添加鸡神TG频道').replace(/"vipPurchaseUrl":"[^"]+/g, '"vipPurchaseUrl":"https://t.me/iosapp520'));

url.indexOf('/product/detail/v1/basicInfo/dynamic/ts') != -1 && (body = body.replace(/"buttonContent\\":\\"[^"]+/g, '"buttonContent\":\"点击添加作者TG频道\').replace(/"url\\":\\"[^"]+/g, '"url\":\"https://t.me/iosapp520\').replace(/"isFree":\w+/g, '"isFree":true').replace(/"isPaid":\w+/g, '"isPaid":false').replace(/"isAuthorized":\w+/g, '"isAuthorized":true').replace(/"isSample":\w+/g, '"isSample":true'));

url.indexOf('business-vip-presale-mobile-web/page/ts') != -1 && (body = body.replace(/nickName":"[^"]+/g, 'nickName":"ios鸡神').replace(/vipStatus":\d/g, 'vipStatus":2').replace(/subtitle":"[^"]+/g, 'subtitle":"2999-09-09免费提供禁止贩卖').replace(/userLevelIcon":"[^"]+/g, 'userLevelIcon":"https://telegraph-image.pages.dev/file/f94bec4f7439340d5c179.jpg').replace(/userLogoPic":"[^"]+/g, 'userLogoPic":"https://telegraph-image.pages.dev/file/f94bec4f7439340d5c179.jpg'));

var obj = JSON.parse(body);
if (url.indexOf('/product/promotion/v1/album/price/ts') != -1) {
    obj.data.behaviors[0].action.url = 'https://t.me/iosapp520';
    obj.data.behaviors[0].vipPurchaseText = '点击添加鸡神TG频道';
    obj.data.behaviors[0].labelSubTitle = '添加频道获取最新脚本继续畅听!';
    obj.data.behaviors[0].labelText = '出现了意外?这是付费节目?';
    body = JSON.stringify(obj);
}
if (url.indexOf('mobile-user/v2/homePage/') != -1) {
    obj.data.nickname = 'ios鸡神';
    obj.data.isVip = true;
    obj.data.vipExpireTime = 32493834549000;
    obj.data.vipStatus = 2;
    obj.data.vipLevel = 5;
    obj.data.anchorVipInfo.isVip = true;
    obj.data.vipInfo.isVip = true;
    obj.data.vipInfo.level = 5;
    obj.data.mobileLargeLogo = 'https://telegraph-image.pages.dev/file/f94bec4f7439340d5c179.jpg';
    obj.data.mobileSmallLogo = 'https://telegraph-image.pages.dev/file/f94bec4f7439340d5c179.jpg';
    obj.data.mobileMiddleLogo = 'https://telegraph-image.pages.dev/file/f94bec4f7439340d5c179.jpg';
    body = JSON.stringify(obj);
}

url.indexOf('vip/v1/recommand') != -1 && (delete obj.data.modules, obj.data.vipStatus = 2, obj.data.nickName = 'ios鸡神', body = JSON.stringify(obj));
url.indexOf('/track/v3/baseInfo') != -1 && (obj.msg = '我累了。等鸡哥修复好再用吧', body = JSON.stringify(obj));

$done({
    "body": body
});
