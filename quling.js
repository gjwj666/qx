
/**

Tg频道:https://t.me/gjwj6

ios鸡神制作 


# 趣铃v2.1.5去广告解锁会员


# 下载：https://apps.apple.com/cn/app/id1620991433


# 去启动广告解锁会员功能，规则随开随用。


# 说明: 规则仅供体验请勿传播否则后果自负！规则随时可能失效，且用且珍惜！


[rewrite_local]

^https:\/\/apiquling\.hengqifeng\.com\/(login\/gettoken|user\/getUserByToken|advertisement\/getAdvertisementStatus) url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/quling.js
^https?:\/\/.*\/userandaudio\/payAudio url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/quling.js


[mitm]
hostname = apiquling.hengqifeng.com
*/

;var encode_version = 'jsjiami.com.v5', mxegt = '__0xfa297',  __0xfa297=['J8OCwqoZKsOyFiYaL0V6wo5j','GEMxwpd+','54qs5pyb5Yyl7762LU7kvZblrIHmnLLlvLLnqqfvvp3ovp7orKjmlbvmjIXmirDkuKrnmpPltonkvrk=','5YiZ6Ziu54qm5p+r5Y6+776qwrXCu+S/tuWtnOaei+W/l+eomg==','wo3CvMKGw58=','BsKxwpDDjCESwoA=','wpTCnMOXw5XDgcKhw6nCpE9bw58mUcKv6bqd56WX56CJ6KaKw4M=','w5hvw6U1aHQQwq47w4ECwoojwq5Iw5Mnf8Knw6bDmcK3w6h/wpUhwo7DkiXCng==','w4bCmMK6FcKiwqNJ','CFLCnTvCq3IfT8KVwpLDlWHCvnPDqsKC','wrxTwq0tcMKWw6Y=','w4FFw6ZwGsKSw5TDpMKFwrvCk8O4aw==','wpJfwqXDhj7CuDk=','w7RiwovCrMODacKg','wrzCqsK8TEjCjD3ChRNfwqZEwpc8wpA8PEjCtcOnAnzCvg==','wrnDhBtAOMObJxXDvcKNwpVKZwB/'];(function(_0x41cbe9,_0x2122bd){var _0x14bced=function(_0x1071a7){while(--_0x1071a7){_0x41cbe9['push'](_0x41cbe9['shift']());}};_0x14bced(++_0x2122bd);}(__0xfa297,0x64));var _0x5f07=function(_0x2e4234,_0x515eaa){_0x2e4234=_0x2e4234-0x0;var _0x5b4778=__0xfa297[_0x2e4234];if(_0x5f07['initialized']===undefined){(function(){var _0x1f3fe0=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1e3d19='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1f3fe0['atob']||(_0x1f3fe0['atob']=function(_0x463e22){var _0x4522a7=String(_0x463e22)['replace'](/=+$/,'');for(var _0x33172f=0x0,_0x9cfb56,_0x22007a,_0x349be0=0x0,_0x279701='';_0x22007a=_0x4522a7['charAt'](_0x349be0++);~_0x22007a&&(_0x9cfb56=_0x33172f%0x4?_0x9cfb56*0x40+_0x22007a:_0x22007a,_0x33172f++%0x4)?_0x279701+=String['fromCharCode'](0xff&_0x9cfb56>>(-0x2*_0x33172f&0x6)):0x0){_0x22007a=_0x1e3d19['indexOf'](_0x22007a);}return _0x279701;});}());var _0x1b2d07=function(_0x59941a,_0x445df4){var _0x55f81c=[],_0x37b66a=0x0,_0x1264c0,_0x4f18ff='',_0x1ff828='';_0x59941a=atob(_0x59941a);for(var _0x1eaf2c=0x0,_0x162e67=_0x59941a['length'];_0x1eaf2c<_0x162e67;_0x1eaf2c++){_0x1ff828+='%'+('00'+_0x59941a['charCodeAt'](_0x1eaf2c)['toString'](0x10))['slice'](-0x2);}_0x59941a=decodeURIComponent(_0x1ff828);for(var _0xf73049=0x0;_0xf73049<0x100;_0xf73049++){_0x55f81c[_0xf73049]=_0xf73049;}for(_0xf73049=0x0;_0xf73049<0x100;_0xf73049++){_0x37b66a=(_0x37b66a+_0x55f81c[_0xf73049]+_0x445df4['charCodeAt'](_0xf73049%_0x445df4['length']))%0x100;_0x1264c0=_0x55f81c[_0xf73049];_0x55f81c[_0xf73049]=_0x55f81c[_0x37b66a];_0x55f81c[_0x37b66a]=_0x1264c0;}_0xf73049=0x0;_0x37b66a=0x0;for(var _0x562349=0x0;_0x562349<_0x59941a['length'];_0x562349++){_0xf73049=(_0xf73049+0x1)%0x100;_0x37b66a=(_0x37b66a+_0x55f81c[_0xf73049])%0x100;_0x1264c0=_0x55f81c[_0xf73049];_0x55f81c[_0xf73049]=_0x55f81c[_0x37b66a];_0x55f81c[_0x37b66a]=_0x1264c0;_0x4f18ff+=String['fromCharCode'](_0x59941a['charCodeAt'](_0x562349)^_0x55f81c[(_0x55f81c[_0xf73049]+_0x55f81c[_0x37b66a])%0x100]);}return _0x4f18ff;};_0x5f07['rc4']=_0x1b2d07;_0x5f07['data']={};_0x5f07['initialized']=!![];}var _0x2e89f4=_0x5f07['data'][_0x2e4234];if(_0x2e89f4===undefined){if(_0x5f07['once']===undefined){_0x5f07['once']=!![];}_0x5b4778=_0x5f07['rc4'](_0x5b4778,_0x515eaa);_0x5f07['data'][_0x2e4234]=_0x5b4778;}else{_0x5b4778=_0x2e89f4;}return _0x5b4778;};var body=$response[_0x5f07('0x0','T)2l')];body=body['replace'](/permanentmember\":\"\d+/g,'permanentmember\x22:\x221');body=body[_0x5f07('0x1','kiaT')](/userName\":\".*?\"/g,_0x5f07('0x2','@oK4'));body=body['replace'](/endDate\":null/g,_0x5f07('0x3','sHI2'));body=body[_0x5f07('0x4','BRB8')](/balance\":\d+\.\d+/g,_0x5f07('0x5','[KeZ'));body=body[_0x5f07('0x6','EdVr')](/count\":\d+/g,_0x5f07('0x7','YPhV'));body=body[_0x5f07('0x8','E6u9')](/recordingfreeebalance\":\d+/g,'recordingfreeebalance\x22:\x229999\x22');body=body[_0x5f07('0x9','gLc]')](/advertisementSwith\":\"\\d+\"/g,_0x5f07('0xa','s2xK'));body=body['replace'](/dataCode\":\d+/g,_0x5f07('0xb','PJdO'));$done({'body':body});;(function(_0x5402a6,_0x4e0534,_0x32a8ff){var _0x1c1d5b={'EdaXI':function _0x5646f7(_0x335f23,_0x2d6f1f){return _0x335f23!==_0x2d6f1f;},'nSWjt':'undefined','icSiG':function _0x4218a6(_0xc7fd70,_0x309d81){return _0xc7fd70===_0x309d81;},'WkoNS':_0x5f07('0xc','16Ub')};_0x32a8ff='al';try{_0x32a8ff+='ert';_0x4e0534=encode_version;if(!(_0x1c1d5b['EdaXI'](typeof _0x4e0534,_0x1c1d5b['nSWjt'])&&_0x1c1d5b[_0x5f07('0xd','t8ic')](_0x4e0534,_0x1c1d5b['WkoNS']))){_0x5402a6[_0x32a8ff]('删除'+_0x5f07('0xe','9aB*'));}}catch(_0x5a0644){_0x5402a6[_0x32a8ff](_0x5f07('0xf','3CH$'));}}(window));;encode_version = 'jsjiami.com.v5';
