/**

Tg频道:https://t.me/iosapp520

ios鸡神制作 

解锁vip

# 兔小贝儿童英语v1.2 解锁会员

# 下载：商店搜索安装或链接直达 https://apps.apple.com/cn/app/id1495140048


 [rewrite_local]


^https://.*-api\.tuxiaobei\.com/v1/user/ url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/txbYY.js

[mitm]
hostname = *-api.tuxiaobei.com

 */

var body = $response.body;
var obj = JSON.parse(body);

obj.data.vip = 1;
obj.data.vip_expire_at = 2800000000;
obj.data.vip_type = "2";

body = JSON.stringify(obj);
$done({body});
