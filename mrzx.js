/*

每日占星：https://apps.apple.com/app/id909048916

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/mrzx.js

[MITM]
hostname = api.revenuecat.com

*/
var iosjs = JSON.parse($response.body);
iosjs.subscriber.entitlements = {
  "Premium": {
    "expires_date": "6666-06-06T06:06:06Z",
    "product_identifier": "com.rk.horoscope.month12",
    "purchase_date": "2023-02-23T02:33:33Z"
  }
};
iosjs.subscriber.original_purchase_date = "2023-02-23T03:33:33Z";
iosjs.subscriber.subscriptions = {
  "com.rk.horoscope.month12": {
    "expires_date": "6666-06-06T06:06:06Z",
    "original_purchase_date": "2023-02-23T02:33:33Z",
    "purchase_date": "2023-02-23T02:33:33Z",
    "ownership_type" : "PURCHASED",
    "store" : "app_store"
  }
};
$done({ body: JSON.stringify(iosjs) });
