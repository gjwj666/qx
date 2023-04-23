/******************************

Muscle Booster(健身软件)
下载地址 https://apps.apple.com/cn/app/muscle-booster-%E8%AE%BE%E8%AE%A1%E7%9A%84%E5%81%A5%E8%BA%AB%E6%95%99%E7%BB%83/id1446447749

TG频道群：https://t.me/gjwj6
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
^https:\/\/menscoach-api.asqq.io\/prod\/(user|check-receipt|subscription-restore) url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/MuscleBooster.js
[mitm] 
hostname = *menscoach*
*******************************/

var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);JScriptCodeDom.CodeParseException: Unexcepted Token : None , Requires BlockEnd ,  at END  ---> System.Exception: Unexcepted Token : None , Requires BlockEnd
   at JScriptCodeDom.CodeParser.ReadAndCheckToken(CodeTokenType equalto)
   at JScriptCodeDom.CodeParser.ParseToBlock(CodeBlock block)
   at JScriptCodeDom.CodeParser.ParseIfStatement()
   at JScriptCodeDom.CodeParser.InternalParseStatementCore()
   at JScriptCodeDom.CodeParser.InternalParseStatement()
   at JScriptCodeDom.CodeParser.ParseStatement()
   at JScriptCodeDom.CodeParser.ParseBlock()
   at JScriptCodeDom.CodeParser.Parse(String code, String filename, Int32 lineoffset, Boolean keeplinenum)
   --- End of inner exception stack trace ---
   at JScriptCodeDom.CodeParser.Parse(String code, String filename, Int32 lineoffset, Boolean keeplinenum)
   at ProtectorV1.Protect(String[] codes)
   at ProtectorV1.Protect(String code)
   at ASP.javascript_obfuscator_aspx.Button1_Click(Object sender, EventArgs e)
