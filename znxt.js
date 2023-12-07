/*

Sharp AI：https://apps.apple.com/app/id1622362309

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/znxt.js

[MITM]
hostname = api.revenuecat.com

*/
var iosjs = JSON.parse($response.body);
iosjs.subscriber.entitlements = {
  "pro": {
    "expires_date": "6666-06-06T06:06:06Z",
    "product_identifier": "ape.weekly.discount",
    "purchase_date": "2023-02-23T02:33:33Z"
  }
};
iosjs.subscriber.original_purchase_date = "2023-02-23T03:33:33Z";
iosjs.subscriber.subscriptions = {
  "ape.weekly.discount": {
    "expires_date": "6666-06-06T06:06:06Z",
    "original_purchase_date": "2023-02-23T02:33:33Z",
    "purchase_date": "2023-02-23T02:33:33Z",
    "ownership_type" : "PURCHASED",
    "store" : "app_store"
  }
};
$done({ body: JSON.stringify(iosjs) });
