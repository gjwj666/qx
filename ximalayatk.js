var modifiedHeaders = $request['headers'];
modifiedHeaders['Cookie'] = 'channel=ios-b1; 1&_device=iPhone&357632B9-0C63-402D-8342-EF245AC89E49&9.1.60; impl=com.gemd.iting; c-oper=%E8%81%94%E9%80%9A; net-mode=4G; res=1170%2C2532; 1&_token=266466557&C3B6AC20140CFC9D7F2FD821A01EFBFB9586153EED1E277B6A1462977DE5BA462C58183092D111M7933F44B93F862D_; idfa=357632B9-0C63-402D-8342-EF245AC89E49; device_model=iPhone%2012; XD=yV4NhZwdkgaTUozFf6dHpxxiU9xVbuRmOSxK0KMRVjt9OkDWnsX9roXeLNnd8LWUmb5Fq+LKz1TzpmDYywZ2GQ==; fp=00931265732022b2256490231b0030a120211100100000011101411000041';
modifiedHeaders['User-Agent'] = 'ting_v9.1.33_c5(CFNetwork, iOS 14.4, iPhone13,2)';
$done({
    'headers': modifiedHeaders
});;
