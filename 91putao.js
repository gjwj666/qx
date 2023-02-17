




/******************************

[rewrite_local]

https:\/\/gateway\.h84ug5\.com\/member\/memberInfo\/.*$ url script-request-header https://raw.githubusercontent.com/gjwj666/qx/main/91putao.js

[mitm] 

hostname = *.h84ug5.*

*******************************/
var modifiedHeaders=$request['headers'];
modifiedHeaders['Authorization']= 'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjoxMTA0NzAyLCJ1c2VyX2tleSI6ImVlODkzNmU0LTExMzQtNGI0OS04OTY2LTIzMDlkNDcxMGZiYiJ9.bbd5bYbjZe80ZXZP7XB-lbHthE6EmTuWalZpaVS9PAJMV8ClN1RNYon4j1jqPyh0-75kxXoSZUYHRx0ZgYlZFA';
$done({'headers':modifiedHeaders});
