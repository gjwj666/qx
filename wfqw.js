/*******************************

脚本名称:悟饭

下载地址:https://apps.apple.com/cn/app/id1549154479

Tg频道:https://t.me/gjwj6

*******************************
[rewrite_local]

^http[s]?:\/\/.+user/ios_store_pay_edition.+(check_members_identity_v2|get_member_info) url script-response-body wfqw.js
[mitm] 
hostname = iosv2.cjapi.wufan88.com

*******************************/
var obj = JSON.parse($response.body); 

obj ={
  "error": 0,
  "data": {
    "error_msg": "",
    "is_success": true,
    "user_info": {
      "is_vip": "9A0684792021D73BE42B71491469ADFA",
      "expired_time": 0,
      "member_state": 2
    },
    "error_code": "",
    "data_info": []
  }
}

$done({body:JSON.stringify(obj)});
// 
