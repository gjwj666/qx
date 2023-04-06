/******************************

脚本功能：发财tv（18+）+解锁VIP会员

TG群：https://t.me/gjwj6

在线地址：https://fctv111.com

https://fctv222.com

https://fctv333.com

https://fctv444.com

https://fctv555.com

美队下载https://bxzb.lanzouh.com/s/mgdz123
后台地址:http://mgdzapi.com/video/login

邀请码206898

使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

/******************************

[rewrite_local]

^https:\/\/mdapi\.zhbt01\.com\/api\/video\/user\/info url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/Fctv.js

[mitm] 
hostname = mdapi.zhbt01.com

*******************************/

var body = $response['body'];
let obj = JSON['parse']($response['body']);
obj = { "msg" : "成功", "data" : "9+5b72ccLbOPx2AJ/rMwnDrUBt0XNfeiVmUN38Gx87j8r2kK22xmQNzs9F/oEpkvuLhSOeYbAyGBUBQXib1diLaRR3S5acnWsH3E1rjOths3bkCFMN7f0Br6TNfB9z0dbo10jIjzegjj1nJXQ79luXblH1jkgikp0MRrBg8ua4kjfgglBMviUmwwJAWaaBSqPd/MVMouqVC6Yi/1+UIPRS+nmm5yHHUM1QIbS5soqOf7rNT5DvPbm1ehsJmk6qBE", "code" : 200 }
;
$done({body:JSON.stringify(obj)});






