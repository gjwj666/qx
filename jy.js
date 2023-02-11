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
var modifiedHeaders=$request['headers'];modifiedHeaders['x-Tt-Token']='009dbd19d8088d64d22cf86fc93cc3352003e6cc268bf62c2409becd86f588dbfaca731992b5881ec0b81a99ab8bc7ccb9762ea141114b9878f691a497176f0b27ee06b7f2ed5e7cddf751fb4e4d679746f0ae6b26139561fa3deaf790401c01af14d-1.0.1';modifiedHeaders['User-Agent']='Retouch 6.8.0 rv:6.8.0.31 (iPhone; iOS 15.3.1; zh_CN) Cronet';$done({'headers':modifiedHeaders});
