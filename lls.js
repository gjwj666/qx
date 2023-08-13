/******************************

脚本功能：流利说·阅读+解锁VIP

下载地址：https://is.gd/ANNpWW

TG频道群：https://t.me/iosapp

使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/vira\.llsapp\.com\/api\/v\d\/\w+\/\w+$ url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/lls.js


[mitm] 

hostname = vira.llsapp.com

*******************************/
var _0x5c3696=$response['body'];var _0x3d6a05=$request['url'];if(_0x3d6a05['indexOf']('/api/v2/member/subscription')!=-0x1){var _0xab86ec={};_0xab86ec['expiredAt']=0x70db6800;_0xab86ec['remainDays']=0x3e7;_0xab86ec['active']=!![];_0xab86ec['startedAt']=0x61ec29ff;var _0x57dba3=_0xab86ec;_0x5c3696=JSON['stringify'](_0x57dba3);var _0x41be63={};_0x41be63['body']=_0x5c3696;$done(_0x41be63);}else if(_0x3d6a05['indexOf']('/api/v2/user_goods_subscriptions/overall')!=-0x1){var _0x172290={};_0x172290['startedAt']=0x61e2ef80;_0x172290['category']=0x4;_0x172290['status']=0x2;_0x172290['expiredAt']=0x61ec29ff;_0x172290['goodsTitle']='member';_0x172290['remainDays']=0x3e7;_0x172290['goodsUid']='XnV1EW';_0x172290['firstStartedAt']=0x70db6800;var _0x21883a={};_0x21883a['items']=[_0x172290];var _0x57dba3=_0x21883a;_0x5c3696=JSON['stringify'](_0x57dba3);var _0x387301={};_0x387301['body']=_0x5c3696;$done(_0x387301);}$done();
