/*
喜马拉雅解锁全局会员 

Tg频道:https://t.me/gjwj6

添加了远程js 修改内容会失效

^http[s]?:\/\/((.+ximalaya.+)|(.+xmcdn.+)) url script-request-header https://raw.githubusercontent.com/gjwj666/qx/main/xmly.js

hostname = *.ximalaya.com, *.*.*.*

*/
var gjwj = $request.headers;

     gjwj['Cookie'] = 'channel=ios-b1; 1&_device=iPhone&357632B9-0C63-402D-8342-EF245AC89E49&9.0.70; impl=com.gemd.iting; c-oper=%E8%81%94%E9%80%9A; net-mode=WIFI; res=1170%2C2532; 1&_token=266466557&D2F015A0340C7DBABC1130A87A970A323CE1B8C0747F346BE942145D103D8AA2C5400EF0A6D9168M7933F448E8F7F1A_; idfa=357632B9-0C63-402D-8342-EF245AC89E49; device_model=iPhone%2012; XD=yV4NhZwdkgaTUozFf6dHpxxiU9xVbuRmOSxK0KMRVjuZOGi3Q5KPBlNT2xry6VC1Tuc+LyKgJeobXm7qHRu9tg==; fp=00921264732222b22v649023110030a22021120010000001110143100003; pcdnFree=1';


$done({headers : gjwj}); 
