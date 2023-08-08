/* 

脚本功能：
解锁皮肤
解锁vip 
解锁svip 
解锁听书 
解锁无损 
解锁下载 
解锁所有音质 
解锁最新动漫背景皮肤
解锁付费下载专辑


TG频道:https://t.me/iosapp520

[rewrite_local]
^https?:\/\/.*\.(kuwo|lrts)\.(cn|me)\/(a\.p|music\.pay|(vip\/(v2|enc)\/(theme|user\/vip))|(EcomResource|(Mobile)?Ad)Serv(er|ice)).* url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/kwyy.js


[mitm] 

hostname=*kuwo*,*lrts*

***********************************/
var $request_url = $request.url;
var $response_body = $response.body;
const _0x21ada0 = "Vo4m6X2hTph/vfpPmau8PTT0sFN6JCgzxSLVH/u3sbEt7VniYsVHbRFgOgN+Uvs39rAI7R3C5HVpaSj8tr8U8dLYwYdDCjMILuUorh3z0BiQToiWxudHkcASIPHNrmZHZYC/yv3DP4b89hbzfqU5UUDUqaZpEBZr76sDF2wNPmYjUEFSVCMGyTl1F6j1DBmKJ1Tik0YuG/2UBa/Ilz12a1KneXsNs5x5EE41bXDke7EygIB3I+6SoITZXOLFAFQFZujdI0GzClNglDKtclpUxpjN3uVeJxHLU40FTwNWo3ZDNv8KSdZpYZ5BDEOCyZkifmHlf1wnocX2zTr2xRAM6JhAD2WaSSNQQVJUI5lv72QNZSN43Pj/qdzatHQP4Pp/H1YxyP36rv3qBcnnJy/55YouIczRc3eJjXExRgo54qdyTYRMYoS9GzNn/edR3hSNnMn9PnElBCfZhkL0R5kZ9JBFCM3vNOy7Cnp6RVyAG0GFHv/g2q1yqkJxibyDro5nlnnvHjhZrsOvSvTXI1BBUlQjGoRqqCTDUvHLoiNwWMoKKfxtswWQiXjoQ6mL5dazxjUsbsHzC1N8YNMVtzf8gBryr3nMWS44wyUpi1/0WhGTRW1wsCllO1DB24+ibTFH/yftWN+/apM9vbQAkc/J+aFy/01plK7rsGNwWYYKG0sr6CS8dGQzy0On6aFo07hiU+wjUEFSVCOf/wKzzX5Cn/OLMKeVa1BPDxV5tm39vCrsxIG6T29VHWx8ck93S/nXCm2dHfojuLySZKJ50B1FaN5uFIY+LA1RbO/0sL+CoSJhoNOLibzt75c5dleW+lbwxLAAdBh5AFq4Z1Uj8bPjm5mHcGWQuBAyZIO+ie8wP4yvWwQFf1ENJiNQQVJUIzwCo22cpAtoAzYZWm3XFPfSlov4G15JGaaHL2X5FG5BTeUwwbBiQfwUpcb6oT8dbIKh2SsUZCeJZW43lLI0UIo9u3y1+P4GMtOKEZ7Sx0aQ3ewknthU2tpL0gnykFtiEtKBxcfHjJEen158zVXrbxxC0W35SmaYOOwgAmEMfxwHI1BBUlQjhVUHnBabnJcnmXCICcyUBglrZkXcNLwg91p4889vKFTLlzROHTt20UzjfKWsNK3U8pYgKYXPbQtSzIuRheEEQDFhLvEhIGKaB6yDoacDLJZ0jgFRIKKFBkbK0VE4nIABi1qgQOXvq1sG4QeupjfEWYqMX8EyyqPHrsDiCltAF1wjUEFSVCNybeUusnxJF2zswj8xQtfPiwfDj3TwKWxKXCmkheqHy7/0Qpyc84xWvq+YXktsU97wUZLHrgJmARudJmQNEwAweIdHMafcwreBy731z6kGLojy5TLgTN7XSm5Ar+hgOW+1ZwkWLyrVvaCdO/8/zdYl1w/PQUCs6dw0ThIeahwjpQ==";
if ($request_url.indexOf("Serv") != -1 && _0xc5cbc6 == "GET") {
    var innerObject = {};
    $done(innerObject);
}
if ($request_url.indexOf("/a.p") != -1 && _0xc5cbc6 == "POST") {
    var $response_body = $response.body.replace(/"playright":\d+/g, "\"playright\":1").replace(/"downright":\d+/g, "\"downright\":1").replace(/"policytype":\d+/g, "\"policytype\":3").replace(/"policy":\d+/g, "\"policy\":5");
    var innerObject_pf = {};
    $done(innerObject_pf);
} else if ($request_url.indexOf("/a.p") != -1 && $request_url.indexOf("getvip") != -1) {
    var parse = JSON.parse($response_body);
    var innerObject_dz = {};
    parse.packs = innerObject_dz;
    $response_body = JSON.stringify(parse);
    var innerObject_tg = {};
    $done(innerObject_tg);
} else if ($request_url.indexOf("/a.p") != -1 && $request_url.indexOf("advertright") != -1) {
    $done({});
}
if ($request_url.indexOf("/vip/enc/user/vip") != -1 && _0xc5cbc6 == "GET") {
    var innerObject_et = {};
    $done(innerObject_et);
}
if ($request_url.indexOf("/vip/v2/user/vip") != -1 && $request_url.indexOf("op=ui") != -1) {
    var parse = JSON.parse($response_body);
    var innerObject_s8 = {};
    parse.data = innerObject_s8;
    $response_body = JSON.stringify(parse);
    var innerObject_c4 = {};
    $done(innerObject_c4);
} else if ($request_url.indexOf("/vip/v2/user/vip") != -1 && $request_url.indexOf("jsonpcallback") != -1) {
    $done({});
}
if ($request_url.indexOf("/music.pay") != -1 && _0xc5cbc6 == "POST") {
    if ($response_body.indexOf("audio") != -1) {
        var parse = JSON.parse($response_body);
        var _0x507dcb = parse.songs[0]["id"];
        var _0x20bb38 = parse.songs[0]["audio"][0]["pid"];
        var _0x5392b0 = parse.songs[0]["audio"][0]["price"];
        var _0x274ae8 = parse.songs[0]["audio"][0]["policy"];
        var _0x108023 = _0x274ae8 + "_1";
        var _0x20d61f = parse.songs[0]["audio"]["length"];
        for (var index = 0; index < _0x20d61f; index++) {
            parse.songs[0]["audio"][index]["st"] = 0;
        }
        var array_0 = parse.songs[0];
        var innerObject_4d = {};
        parse.user = [innerObject_4d];
        var innerObject_6r = {};
        $done(innerObject_6r);
    } else {
        $done({});
    }
} else if ($request_url.indexOf("/music.pay") != -1 && _0xc5cbc6 == "GET") {
    $done({});
}
if ($request_url.indexOf("/vip/v2/theme") != -1 && $request_url.indexOf("op=gd") != -1) {
    var parse = JSON.parse($response_body);
    parse.data["needBieds"] = null;
    var innerObject_q5 = {};
    $done(innerObject_q5);
}


