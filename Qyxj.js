/******************************
脚本功能：轻颜相机——解锁VIP
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]

^http[s]?:\/\/commerce-api.faceu.mobi\/commerce\/v1\/subscription\/user_info.*total_memory.*$ url script-request-header https://raw.githubusercontent.com/gjwj666/qx/main/qxyq.js
[mitm] 
hostname = *faceu*,*retouchpics*
*******************************/

var _0x359853 = $request['headers'];
_0x359853['x-Tt-Token'] = '00437e85bb6121b10cc190233d180cfc6e060f91f5de63e790edf50de59095c423bb82d7a397d50c7c1f71478ae442f974024074c59d232c64ec6d08ce8f9b02b9d51fe4ad81c530159f626c56ac306f4c2889718c27cef2ef8e01174df3bb9464dd6-1.0.1';
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
