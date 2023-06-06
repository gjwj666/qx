
/*

Tg频道:https://t.me/iosapp520

ios鸡神制作 

# 兔小贝拼音v3.0 解锁会员

# 下载：复制链接浏览器直达 https://apps.apple.com/cn/app/id1321808354

# 功能: 解锁会员

 [rewrite_local]


^https://.*-api\.tuxiaobei\.com/v1/ url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/txbpy.js

[mitm]
hostname = *-api.tuxiaobei.com

 */

var body = $response.body;
var obj = JSON.parse(body);

obj.data.vip = 1;
obj.data.expire_time = 2800000000;
obj.data.err_code = 0;

body = JSON.stringify(obj);
$done({body});
