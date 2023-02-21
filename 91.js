
/************************


#91视频-下载地址：https://t.me/gjwj6/1074

#tg频道: https://t.me/gjwj6


[rewrite_local]

^http[s]?:\/\/*.*.*\/m_user\/info.*$ url script-request-header https://raw.githubusercontent.com/gjwj666/qx/main/91.js


[mitm]

hostname = api.czbt.cc,api.jinhuachuangxin.com,

*****************************/

var modifiedHeaders=$request['headers'];
modifiedHeaders['X-AUTH-TOKEN']= 'eyJhbGciOiJIUzUxMiIsImlhdCI6MTY3Njk2NDUxOCwiZXhwIjoxNjkyNTE2NTE4fQ.eyJpZCI6ODY0NDExNzl9.WkvvKv6KwHMxx0jLowZEhQOYR_VqmZJZHnVFvtFB8swuaErFkVk8eMQxSgTNe5E9dz27pyjyZzfW95mhmZf1EQ';
modifiedHeaders['User-Agent']= 'videoap/1.0.0 (iPhone; iOS 14.4; Scale/3.00)';
modifiedHeaders['X-Device-ID']= '357632B9-0C63-402D-8342-EF245AC89E49';
$done({'headers':modifiedHeaders});
