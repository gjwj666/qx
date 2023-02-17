/*

TG频道:https://t.me/gjwj6

ios鸡神破解

不显示会员 但是可以用所有vip
看直播等等…

[rewrite_local]

#鲍鱼盒子🚗

^http[s]?:\/\/.+\/api(\/video\/report_item?|\/live\/room\/detail?|\/video\/related?|\/video\/detail|\/social\/posts_info).*$ url script-request-header https://raw.githubusercontent.com/gjwj666/qx/main/baoyu.js

[mitm]
hostname = 42.157.*.*

*/
var modifiedHeaders=$request['headers'];
modifiedHeaders['authorization']= 'bearer 3897b719461e549a4cfd0b32ab25eaf4'; 
$done({'headers':modifiedHeaders});
