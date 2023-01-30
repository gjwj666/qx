/******************************
脚本功能：69av破解永久vip

下载地址：https://www.69av.live

注册码206898

TG频道群：https://t.me/gjwj6

[rewrite_local]

^https:\/\/jiekou1\.shijiujin\.com\/Login\/info url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/69sp.js

[mitm] 
hostname = jiekou1.shijiujin.com

******************************/

var obj = JSON.parse($response.body); 

obj = {
  "msg" : "成功",
  "data" : {
    "end_time" : 235456,
    "is_end" : 1,
    "look_end" : 1,
    "nickname" : "13900139000",
    "level" : 5,
    "agent_url" : "0000",
    "agent_phone" : "0000",
    "agent_mobile" : "0000",
    "card_str" : "128830"
  },
  "code" : 200
}
$done({body:JSON.stringify(obj)});
// 
