/*
bilibili解锁画质

解锁大会员

Tg频道:https://t.me/iosapp520

^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header https://raw.githubusercontent.com/gjwj666/qx/main/bilibilitk.js
^http[s]?:\/\/.+bilibili.+((pgc\/player\/api\/playurl)|(x\/v2\/account\/myinfo\?)|(x\/v2\/account/mine\?)).*$ url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/bilibilibd.js
hostname = *.biliapi.*, *.bilibili.*,

 */
var $response_body = $response.body;
var $request_url = $request.url;
if ($request_url.indexOf("/pgc/player/api/playurl") != -1) {
    let parse = JSON.parse($response_body);
    parse.has_paid = true;
    parse.quality = parse.accept_quality[0];
    parse.vip_type = 2;
    parse.vip_status = 1;
    $response_body = JSON.stringify(parse);
}
if ($request_url.indexOf("/x/v2/account/myinfo?") != -1) {
    let parse_hq = JSON.parse($response_body);
    parse_hq.data.vip.type = 2;
    parse_hq.data.vip.status = 1;
    parse_hq.data.vip.vip_pay_type = 1;
    parse_hq.data.vip.due_date = 1796054400000;
    $response_body = JSON.stringify(parse_hq);
}
if ($request_url.indexOf("/x/v2/account/mine?") != -1) {
    let parse_1k = JSON.parse($response_body);
    parse_1k.data.vip_type = 2;
    parse_1k.data.vip.type = 2;
    parse_1k.data.vip.status = 1;
    parse_1k.data.vip.vip_pay_type = 1;
    parse_1k.data.vip.due_date = 1796054400000;
    parse_1k.data.name = "Tg频道@iosapp520";
    parse_1k.data.coin = 999880;
    parse_1k.data.bcoin = 999880;
    parse_1k.data.level = 6;
    parse_1k.data.face = "https://gjds.vip/img/logo.png";
    $response_body = JSON.stringify(parse_1k);
}
$done({ "body": $response_body });
(function (window, _0x368a02, _0x54bb58) {
    var _0x1fe401 = 0;
}(window));
encode_version = "jsjiami.com.v5";
(function (window, _0x574468, _0x345043) {
    _0x345043 = "al";
    try {
    } catch (exception) {
        window._0x345043("删除版本号\uFF0Cjs会定期弹窗");
    }
}(window));
encode_version = "jsjiami.com.v5";

