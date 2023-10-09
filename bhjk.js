/*

薄荷健康

下载：https://apps.apple.com/cn/app/id457856023


规则随开随用。
功能：解锁超级会员，去广告|解锁音频课程| 薄荷电台|图文课程等。

Tg频道 https://t.me/iosapp520

作者: ios鸡神


[rewrite]
# 会员
^https:\/\/api\.boohee\.com\/app-interface\/v1\/user\/user_info url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/bhjk.js
# 广告
^https://api\.boohee\.com/app-interface/v1/ad/info url 302 & request-header Connection: close


[mitm]
hostname = api.boohee.com

*/
let body = $response.body;
let obj = JSON.parse(body);

obj.data = {
  "code": 0,
  "message": "0",
  "now": 1696828109,
  "data": {
    "user": {
      "user_key": "072ea330-fd27-4059-8866-8266eb2dddb9",
      "user_name": "BH969368620",
      "cellphone": "132****5223",
      "email": "",
      "role": 0,
      "user_type": 1,
      "cellphone_state": true,
      "gender": "",
      "birthday": "2000-01-01",
      "height": 0,
      "avatar_url": "https://one.boohee.cn/beauty/uploads/asserts/20200819114402/default_female_avatar.png"
    },
    "vip": {
      "is_member": true,
      "state": "1",
      "remain_day": 0,
      "started_at": "",
      "expired_at": "2199-01-01 00:00:00",
      "integral_member": {
        "integral": 0,
        "level": 1,
        "level_name": "蓝钻会员"
      },
      "app_vip_banner_url": "https://up.boohee.cn/house/u/one/easy_member/homepage_ad2.png",
      "notices_tips": ["购买年会员券额返券", "联合会员买一得三"],
      "member_center_url": "https://member.boohee.com/easy/index",
      "member_active_url": "https://member.boohee.com/easy/active",
      "member_sale_url": "https://member.boohee.com/easy/introduce",
      "union_member_url": "https://member.boohee.com/associate-member/member-index",
      "super_member_url": "https://member.boohee.com/super-member",
      "common_member_url": "https://member.boohee.com/multiply-channel",
      "bind_cellphone_url": "https://member.boohee.com/easy/index",
      "colum_list": [{
        "title": "智能方案",
        "sub_title": "量身定制专属饮食方案",
        "link_url": "https://member.boohee.com/member-sale?type=intelligent&page_from=App_mine"
      }, {
        "title": "饮食建议",
        "sub_title": "多维度营养分析 实时点评&建议",
        "link_url": "https://member.boohee.com/member-sale?type=diet&page_from=App_mine"
      }],
      "icon_title": "了解更多",
      "not_vip_tips": "量身定制方案，助力轻松减脂",
      "notices": []
    },
    "find_tab_ab_test": 1,
    "is_new_weight": true
  }
};

$done({ body: JSON.stringify(obj) });



