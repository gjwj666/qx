/******************************
脚本功能：轻颜相机——解锁VIP
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]

^http[s]?:\/\/commerce-api.faceu.mobi\/commerce\/v1\/subscription\/user_info.*total_memory.*$ url script-request-header https://raw.githubusercontent.com/gjwj666/qx/main/qxyqvip.js
[mitm] 
hostname = commerce-api.faceu.mobi
*******************************/

var modifiedHeaders=$request['headers'];
modifiedHeaders['x-Tt-Token']='00a57ade3b97e8c4a2d921fb60b2f70b3a0410cd62ff31669bfd0741d756dee74438654e4582dd8436304dfd4ea006335caae44ff4e737584a8a465da9a79276760e7c3099838990eca235136270a8d77b4b375e07bbb63bcc94e9995056fa8dff964-1.0.1';
modifiedHeaders['User-Agent']='Beauty 5.1.0 rv:5.1.0.14 (iPhone; iOS 14.4; zh_CN) Cronet';
$done({'headers':modifiedHeaders});
