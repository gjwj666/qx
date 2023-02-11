/******************************

脚本功能：剪映——解锁VIP

下载地址：https://is.gd/2nSvVO

软件：6.9.1

TG频道群：https://t.me/gjwj6

使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/commerce-api-.*\.faceu\.mobi\/commerce\/v1\/.*$ url script-request-header https://raw.githubusercontent.com/gjwj666/qx/main/jy.js

[mitm] 

hostname = *faceu*,*retouchpics*

*******************************/

var _0x18b3f8 = $request['headers'];
_0x18b3f8['x-Tt-Token'] = '008b669a103f1dc7b4edbe2b4fe455be2c00c53a9d16370b753f466c85de0e7a1ed6ec6545e6e2417d8109a7e09c0122754a0a9a7073e8c670b3162023d2f62c4470135070c30aebf5a4512588a441a11c6c2ee91ce3565cb310f45cbb66a902f950f-1.0.1';
_0x18b3f8['User-Agent'] = 'VideoFusion 9.5.2 rv:9.5.2.10 (iPhone; iOS 15.3.1; zh_CN) Cronet';
_0x18b3f8['device-type'] = '';
_0x18b3f8['X-Gorgon'] = '';
_0x18b3f8['X-Argus'] = '';
_0x18b3f8['X-Khronos'] = '';
_0x18b3f8['X-Ladon'] = '';
$done({
    'headers': _0x18b3f8
});;
