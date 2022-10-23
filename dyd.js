
/*

#懂阴帝

https:\/\/*.cmmsjbu\.com.+ url script-request-header https://raw.githubusercontent.com/gjwj666/qx/main/dyd.js

主机名MITM

*.cmmsjbu.*



*/



var gjwj = $request.headers;

     gjwj['authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJwdWJsaWMiLCJleHAiOjE2NjkwNTMzNDIsImlzc3VlciI6ImNvbS5idXR0ZXJmbHkiLCJzdWIiOiJhc2lnbiIsInVzZXJJZCI6NjYzNzUwNH0.7ZAMUsP8TKCe8TqhpNMZfzhOuKWnAVm39s1XFHxlozA';


$done({headers : gjwj}); 
