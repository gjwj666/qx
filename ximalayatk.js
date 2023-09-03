var modifiedHeaders = $request['headers'];
modifiedHeaders['Cookie'] = 'channel=ios-b1; 1&_device=iPhone&B65F9F9D-AB62-4E15-8815-D8A5D0E36B10&9.1.42; impl=com.gemd.iting; c-oper=%E7%94%B5%E4%BF%A1; net-mode=5G; res=1170%2C2532; 1&_token=483818325&D09DB4F0340C3EA47BBFD3259A763ED6A9F3FDDC2A4A7247B9D2F1596683059E560B33DED576121M5D28851ABB033E3_; idfa=B65F9F9D-AB62-4E15-8815-D8A5D0E36B10; device_model=iPhone%2012%20Pro; XD=MLWBt9QyvUucifxUg0TSATBTe4NbpfPKlagjhAJSLndSWTEqsqYbf+Y94rHVCh3JBafpWZr9uS2AvPGCos8IOA==; fp=009427647x2322q22164v0502300000220221200200000002202541000000; pcdnFree=1';
modifiedHeaders['User-Agent'] = 'ting_v9.1.33_c5(CFNetwork, iOS 14.4, iPhone13,2)';
$done({
    'headers': modifiedHeaders
});;
