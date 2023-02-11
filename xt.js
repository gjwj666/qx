/******************************

脚本功能：醒图——解锁VIP

下载地址：https://is.gd/2nSvVO

软件版本：6.9.1

TG频道群：https://t.me/gjwj6

使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/commerce-api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info url script-request-header https://raw.githubusercontent.com/gjwj666/qx/main/xt.js

[mitm] 

hostname = *faceu*,*retouchpics*

*******************************/
var modifiedHeaders=$request['headers'];modifiedHeaders['x-Tt-Token']='000c48bc08c756797a420ebdd83a382832033780f55f3cd319b452e3db9aa14d76cced1ce6821a5805a3bc7d9bbadf8b22f12426e26a02e9947a4430331c32fc876a9e5313be2b1a2ddd6db2122792ce02087d14d9946cef6ac982068fd458ee705f9-1.0.1';modifiedHeaders['User-Agent']='Retouch 6.8.0 rv:6.8.0.31 (iPhone; iOS 15.3.1; zh_CN) Cronet';$done({'headers':modifiedHeaders});
