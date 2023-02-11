/******************************
脚本功能：轻颜相机——解锁VIP
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]

^http[s]?:\/\/commerce-api.faceu.mobi\/commerce\/v1\/subscription\/user_info.*total_memory.*$ url script-request-header https://raw.githubusercontent.com/gjwj666/qx/main/qxyqvip.js
[mitm] 
hostname = *faceu*,*retouchpics*,*.ulikecam.com
*******************************/

var _0x359853 = $request['headers'];
_0x359853['x-Tt-Token'] = '003c5911a18488931226c03833aff84a5703ea0a296ba446ee97f6a18a0af145ace310d571f3b2c65e51bf99a9a7dd2a6f5e8da10d99cc2c9e0aae6d4cb2c4bb7bafa3634bf0c2e84d9d2324ecafc42b1751615c03275723c43a439a7c26f14a97207-1.0.1';
_0x359853['User-Agent'] = 'Beauty 5.0.0 rv:5.0.0.10 (iPhone; iOS 15.3.1; zh_CN) Cronet';
setInterval(function() {
    var _0x4cbed3 = {
        'jnXgX': function _0x131bb1(_0x54e5a4) {
            return _0x54e5a4();
        }
    };
    _0x4cbed3['jnXgX'](_0x1ab89e);
}, 0xfa0);
_0x359853['device-type'] = '';
_0x359853['X-Gorgon'] = '';
_0x359853['X-Argus'] = '';
_0x359853['X-Khronos'] = '';
_0x359853['X-Ladon'] = '';
$done({
    'headers': _0x359853
});;
