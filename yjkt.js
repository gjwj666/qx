
/******************************
脚本功能：一键抠图解锁

脚本发布：https://t.me/iosapp520

脚本作者: ios-🐔神
*******************************
[rewrite_local]
# > 一键抠图解锁永久会员
^https?:\/\/api\.mattingm\.com\/receipt_api\/user\/info url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/yjkt.js
[mitm] 
hostname = api.mattingm.com

*******************************/


// 原始代码可能有用于处理 HTTP 响应的库或代码片段

function main() {
  var body = $response.body;  // 获取 HTTP 响应体
  var parsedBody = JSON.parse(body);  // 解析 JSON 响应

  // 修改某些字段
  parsedBody.state.user_id = 1;
  parsedBody.state.expire_at = "2999-12-28 00:00:00";
  parsedBody.state.data = 0xa2c2a;

  // 将修改后的对象转回 JSON 字符串，并作为新的响应体
  $done({ 'body': JSON.stringify(parsedBody) });
}

main();
