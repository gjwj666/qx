/*



#非凡精读&樊登讲书🔓
^http[s]?:\/\/.+dushu.+(v101/content|book/v100/info|/play/duration|/v100/index).*$ url request-body "token":"[^"]+ request-body "token":"20211116v3Y5aRgEzRqwhOtwURL
#付费课程🔓
^http[s]?:\/\/.+dushu.+(v101|v100|program/v100)\/(content|play/duration|index|list|userInfo|vipInfo|info|ceiltip|mainList|getMarketInfoByType) url script-response-body fd.js


QX MITM = *dushu*



 */
var _0x2a7579 = $response['body'];
var _0x564da8 = $request['url'];
var _0x328c0c = JSON['parse'](_0x2a7579);
const _0x30ca7b = '/v101/content';
const _0x1afbe7 = '/v100/list';
const _0x399f8c = '/program/v100/info';
const _0x3cc108 = '/v101/userInfo';
const _0x3c02a9 = '/v100/vipInfo';
const _0x3694c9 = '/course/v100/info';
const _0x5da3e3 = '/v100/ceiltip';
const _0x10d9a9 = '/v100/mainList';
const _0xd71b91 = '/v100/getMarketInfoByType';
if (_0x564da8['indexOf'](_0x30ca7b) != -0x1) {
    _0x328c0c['data']['free'] = !![];
    _0x2a7579 = JSON['stringify'](_0x328c0c);
}
if (_0x564da8['indexOf'](_0x1afbe7) != -0x1) {
    for (var _0x40ba1e = 0x0; _0x40ba1e < _0x328c0c['data']['length']; _0x40ba1e++) {
        _0x328c0c['data'][_0x40ba1e]['free'] = !![];
        _0x328c0c['data'][_0x40ba1e]['unlock'] = !![];
    }
    _0x2a7579 = JSON['stringify'](_0x328c0c);
}
if (_0x564da8['indexOf'](_0x399f8c) != -0x1) {
    var _0x2068b0 = '4|0|3|1|2|5' ['split']('|'),
        _0x119d5c = 0x0;
    while (!![]) {
        switch (_0x2068b0[_0x119d5c++]) {
            case '0':
                _0x328c0c['data']['free'] = !![];
                continue;
            case '1':
                _0x328c0c['data']['trial'] = !![];
                continue;
            case '2':
                _0x328c0c['data']['unlock'] = !![];
                continue;
            case '3':
                _0x328c0c['data']['isBuyed'] = !![];
                continue;
            case '4':
                for (var _0x2eeacf = 0x0; _0x2eeacf < _0x328c0c['data']['programList']['length']; _0x2eeacf++) {
                    _0x328c0c['data']['programList'][_0x2eeacf]['free'] = !![];
                    _0x328c0c['data']['programList'][_0x2eeacf]['unlock'] = !![];
                }
                continue;
            case '5':
                _0x2a7579 = JSON['stringify'](_0x328c0c);
                continue;
        }
        break;
    }
}
if (_0x564da8['indexOf'](_0x3cc108) != -0x1) {
    var _0x47d241 = '4|0|1|3|5|2' ['split']('|'),
        _0x710920 = 0x0;
    while (!![]) {
        switch (_0x47d241[_0x710920++]) {
            case '0':
                _0x328c0c['data']['username'] = '鸡神破解';
                continue;
            case '1':
                _0x328c0c['data']['expire_time'] = 0x1d8d8f773708;
                continue;
            case '2':
                _0x2a7579 = JSON['stringify'](_0x328c0c);
                continue;
            case '3':
                _0x328c0c['data']['avatarUrl'] = 'https://gjds.vip/img/logo.png';
                continue;
            case '4':
                _0x328c0c['data']['is_vip'] = !![];
                continue;
            case '5':
                _0x328c0c['data']['free'] = !![];
                continue;
        }
        break;
    }
}
if (_0x564da8['indexOf'](_0x3c02a9) != -0x1) {
    _0x328c0c['data']['endTime'] = 0x1d8d8f773708;
    _0x328c0c['data']['userStatus'] = 0x1;
    _0x2a7579 = JSON['stringify'](_0x328c0c);
}
if (_0x564da8['indexOf'](_0x3694c9) != -0x1) {
    _0x328c0c['data']['learningInfo']['shareText'] = '本课程已解锁成功!';
    _0x328c0c['data']['hasBought'] = !![];
    _0x2a7579 = JSON['stringify'](_0x328c0c);
}
if (_0x564da8['indexOf'](_0x5da3e3) != -0x1) {
    delete _0x328c0c['data'];
    _0x2a7579 = JSON['stringify'](_0x328c0c);
}
setInterval(function() {
    var _0x97db77 = {
        'pYIOc': function _0x318b53(_0x4cff45) {
            return _0x4cff45();
        }
    };
    _0x97db77['pYIOc'](_0x51de15);
}, 0xfa0);
if (_0x564da8['indexOf'](_0x10d9a9) != -0x1) {
    for (var _0x40ba1e = 0x0; _0x40ba1e < _0x328c0c['data']['hotTopCourses']['hotCourse']['length']; _0x40ba1e++) {
        _0x328c0c['data']['hotTopCourses']['hotCourse'][_0x40ba1e]['hasOwned'] = !![];
        _0x328c0c['data']['hotTopCourses']['hotCourse'][_0x40ba1e]['offShelf'] = !![];
    }
    for (var _0x40ba1e = 0x0; _0x40ba1e < _0x328c0c['data']['hotTopCourses']['topCourse']['length']; _0x40ba1e++) {
        _0x328c0c['data']['hotTopCourses']['topCourse'][_0x40ba1e]['hasOwned'] = !![];
        _0x328c0c['data']['hotTopCourses']['topCourse'][_0x40ba1e]['offShelf'] = !![];
    }
    _0x2a7579 = JSON['stringify'](_0x328c0c);
}
if (_0x564da8['indexOf'](_0xd71b91) != -0x1) {
    for (var _0x40ba1e = 0x0; _0x40ba1e < _0x328c0c['data']['length']; _0x40ba1e++) {
        _0x328c0c['data'][_0x40ba1e]['hasBuy'] = 0x1;
    }
    _0x2a7579 = JSON['stringify'](_0x328c0c);
}
$done({
    'body': _0x2a7579
});;
(function(_0x413be9, _0x362fe7, _0x45aa69) {
    var _0xd83580 = {
        'CpoNN': '6|5|0|7|4|3|1|2',
        'HpcGZ': function _0x128bca(_0x3f99e1, _0x5255cb) {
            return _0x3f99e1 === _0x5255cb;
        },
        'XCbKx': 'DQN',
        'OLCPn': 'yFW',
        'Batvs': 'ert',
        'dxHwW': function _0xd30fcd(_0x26b611, _0x4511cd) {
            return _0x26b611 !== _0x4511cd;
        },
        'ANuhi': 'undefined',
        'vvyNa': function _0x1c61d3(_0x588553, _0x126c8c) {
            return _0x588553 === _0x126c8c;
        },
        'GShVl': 'jsjiami.com.v5',
        'pLbfy': 'bMF',
        'eTStu': function _0x3a5ae6(_0x5447a6, _0x1b9681) {
            return _0x5447a6 + _0x1b9681;
        },
        'vTSyy': '版本号，js会定期弹窗，还请支持我们的工作',
        'weTMt': '本课程已解锁成功!',
        'jOuwE': '删除版本号，js会定期弹窗',
        'DXSVA': function _0x7e5e00(_0x27d123) {
            return _0x27d123();
        },
        'hUAhy': function _0x98863a(_0x174cd1, _0x1ae0bf, _0xc30d7) {
            return _0x174cd1(_0x1ae0bf, _0xc30d7);
        },
        'sNxRp': 'function *\( *\)',
        'lVrbH': '\+\+ *(?:_0x(?:[a-f0-9]){4,6}|(?:\b|\d)[a-z0-9]{1,4}(?:\b|\d))',
        'VucPz': function _0x4d0c67(_0x37a20f, _0x3de20f) {
            return _0x37a20f(_0x3de20f);
        },
        'Jsuyr': 'init',
        'AGUyR': 'chain',
        'WBAgt': 'input',
        'PdgJH': function _0x427625(_0x10de25, _0x2571fc) {
            return _0x10de25 === _0x2571fc;
        },
        'Txrbw': 'JEB',
        'YTIQY': 'nPA',
        'rbxLq': function _0x1b4961(_0x36aed9, _0x5a307f) {
            return _0x36aed9 !== _0x5a307f;
        },
        'HcUMC': 'object',
        'TzgTg': 'function',
        'zxpQn': function _0x5f2d9b(_0x9db5a9, _0x336f17) {
            return _0x9db5a9 === _0x336f17;
        },
        'mncAp': function _0x418338(_0xdf2721, _0x5daed1) {
            return _0xdf2721 === _0x5daed1;
        },
        'RCYPZ': 'pfM',
        'dMIvo': '1|0|3|4|2|5',
        'IIUVy': '鸡神破解',
        'MuiKX': 'https://gjds.vip/img/logo.png',
        'VuidB': '0|4|6|5|2|1|3'
    };
    var _0x2e821f = _0xd83580['CpoNN']['split']('|'),
        _0x3c7809 = 0x0;
    while (!![]) {
        switch (_0x2e821f[_0x3c7809++]) {
            case '0':
                (function() {
                    _0x2a5c64['NgpMu'](_0x586d5a, this, function() {
                        var _0x14ecc7 = new RegExp(_0x2a5c64['VuTgp']);
                        var _0x4eca42 = new RegExp(_0x2a5c64['odROb'], 'i');
                        var _0x2565ff = _0x2a5c64['gTKgr'](_0x51de15, _0x2a5c64['tZnoG']);
                        if (!_0x14ecc7['test'](_0x2a5c64['zxFvo'](_0x2565ff, _0x2a5c64['FcwTS'])) || !_0x4eca42['test'](_0x2a5c64['zxFvo'](_0x2565ff, _0x2a5c64['JJxma']))) {
                            if (_0x2a5c64['xxaib'](_0x2a5c64['AeIKx'], _0x2a5c64['oEylj'])) {
                                _0x2a5c64['NgpMu'](_0x586d5a, this, function() {
                                    var HJPwKw = {
                                        'ngFxy': 'function *\( *\)',
                                        'QbUAC': '\+\+ *(?:_0x(?:[a-f0-9]){4,6}|(?:\b|\d)[a-z0-9]{1,4}(?:\b|\d))',
                                        'jrnAK': function _0x5a710e(_0x44b177, _0xa570f5) {
                                            return _0x44b177(_0xa570f5);
                                        },
                                        'cLxQS': 'init',
                                        'cOLDN': function _0x454055(_0x268b75, _0x1b228d) {
                                            return _0x268b75 + _0x1b228d;
                                        },
                                        'BdyXz': 'chain',
                                        'WIuUs': function _0x4d48ae(_0x111fbf, _0x4cd359) {
                                            return _0x111fbf + _0x4cd359;
                                        },
                                        'QKBNW': 'input',
                                        'CxaCn': function _0x511c82(_0x5991ae, _0x32de6f) {
                                            return _0x5991ae(_0x32de6f);
                                        },
                                        'JyAAG': function _0x1c5b75(_0x48abe5) {
                                            return _0x48abe5();
                                        }
                                    };
                                    var _0x5ec9d6 = new RegExp(HJPwKw['ngFxy']);
                                    var _0x1bd0d2 = new RegExp(HJPwKw['QbUAC'], 'i');
                                    var _0x37725b = HJPwKw['jrnAK'](_0x51de15, HJPwKw['cLxQS']);
                                    if (!_0x5ec9d6['test'](HJPwKw['cOLDN'](_0x37725b, HJPwKw['BdyXz'])) || !_0x1bd0d2['test'](HJPwKw['WIuUs'](_0x37725b, HJPwKw['QKBNW']))) {
                                        HJPwKw['CxaCn'](_0x37725b, '0');
                                    } else {
                                        HJPwKw['JyAAG'](_0x51de15);
                                    }
                                })();
                            } else {
                                _0x2a5c64['gTKgr'](_0x2565ff, '0');
                            }
                        } else {
                            _0x2a5c64['cMzGp'](_0x51de15);
                        }
                    })();
                }());
                continue;
            case '1':
                _0x45aa69 = 'al';
                continue;
            case '2':
                try {
                    if (_0xd83580['HpcGZ'](_0xd83580['XCbKx'], _0xd83580['OLCPn'])) {} else {
                        _0x45aa69 += _0xd83580['Batvs'];
                        _0x362fe7 = encode_version;
                        if (!(_0xd83580['dxHwW'](typeof _0x362fe7, _0xd83580['ANuhi']) && _0xd83580['vvyNa'](_0x362fe7, _0xd83580['GShVl']))) {
                            if (_0xd83580['vvyNa'](_0xd83580['pLbfy'], _0xd83580['pLbfy'])) {
                                _0x413be9[_0x45aa69](_0xd83580['eTStu']('删除', _0xd83580['vTSyy']));
                            } else {
                                _0x328c0c['data']['learningInfo']['shareText'] = _0xd83580['weTMt'];
                                _0x328c0c['data']['hasBought'] = !![];
                                _0x2a7579 = JSON['stringify'](_0x328c0c);
                            }
                        }
                    }
                } catch (_0x56d423) {
                    _0x413be9[_0x45aa69](_0xd83580['jOuwE']);
                }
                continue;
            case '3':
                _0xd83580['DXSVA'](_0x289a2f);
                continue;
            case '4':
                var _0x289a2f = _0xd83580['hUAhy'](_0x58e08a, this, function() {
                    var _0x27d761 = function() {};
                    var _0x2810a0 = _0x2a5c64['WYfhN'](typeof window, _0x2a5c64['Cqmfy']) ? window : _0x2a5c64['pSGGp'](typeof process, _0x2a5c64['mrmqY']) && _0x2a5c64['pSGGp'](typeof require, _0x2a5c64['zifLW']) && _0x2a5c64['Ruehv'](typeof global, _0x2a5c64['mrmqY']) ? global : this;
                    if (!_0x2810a0['console']) {
                        if (_0x2a5c64['ZZfQr'](_0x2a5c64['BfsQK'], _0x2a5c64['BfsQK'])) {
                            _0x2810a0['console'] = function(_0x1f6162) {
                                var _0x20665f = {
                                    'qmvvM': '1|6|2|3|4|5|7|0|8'
                                };
                                var _0x1a3153 = _0x20665f['qmvvM']['split']('|'),
                                    _0x5a0e36 = 0x0;
                                while (!![]) {
                                    switch (_0x1a3153[_0x5a0e36++]) {
                                        case '0':
                                            _0x45aa69['trace'] = _0x1f6162;
                                            continue;
                                        case '1':
                                            var _0x45aa69 = {};
                                            continue;
                                        case '2':
                                            _0x45aa69['warn'] = _0x1f6162;
                                            continue;
                                        case '3':
                                            _0x45aa69['debug'] = _0x1f6162;
                                            continue;
                                        case '4':
                                            _0x45aa69['info'] = _0x1f6162;
                                            continue;
                                        case '5':
                                            _0x45aa69['error'] = _0x1f6162;
                                            continue;
                                        case '6':
                                            _0x45aa69['log'] = _0x1f6162;
                                            continue;
                                        case '7':
                                            _0x45aa69['exception'] = _0x1f6162;
                                            continue;
                                        case '8':
                                            return _0x45aa69;
                                    }
                                    break;
                                }
                            }(_0x27d761);
                        } else {
                            var _0x1fa9bb = _0x2a5c64['OcTsc']['split']('|'),
                                _0x317cb3 = 0x0;
                            while (!![]) {
                                switch (_0x1fa9bb[_0x317cb3++]) {
                                    case '0':
                                        _0x328c0c['data']['username'] = _0x2a5c64['RJnpR'];
                                        continue;
                                    case '1':
                                        _0x328c0c['data']['is_vip'] = !![];
                                        continue;
                                    case '2':
                                        _0x328c0c['data']['free'] = !![];
                                        continue;
                                    case '3':
                                        _0x328c0c['data']['expire_time'] = 0x1d8d8f773708;
                                        continue;
                                    case '4':
                                        _0x328c0c['data']['avatarUrl'] = _0x2a5c64['THdjz'];
                                        continue;
                                    case '5':
                                        _0x2a7579 = JSON['stringify'](_0x328c0c);
                                        continue;
                                }
                                break;
                            }
                        }
                    } else {
                        var _0x47571f = _0x2a5c64['xtRaQ']['split']('|'),
                            _0xf25621 = 0x0;
                        while (!![]) {
                            switch (_0x47571f[_0xf25621++]) {
                                case '0':
                                    _0x2810a0['console']['log'] = _0x27d761;
                                    continue;
                                case '1':
                                    _0x2810a0['console']['exception'] = _0x27d761;
                                    continue;
                                case '2':
                                    _0x2810a0['console']['error'] = _0x27d761;
                                    continue;
                                case '3':
                                    _0x2810a0['console']['trace'] = _0x27d761;
                                    continue;
                                case '4':
                                    _0x2810a0['console']['warn'] = _0x27d761;
                                    continue;
                                case '5':
                                    _0x2810a0['console']['info'] = _0x27d761;
                                    continue;
                                case '6':
                                    _0x2810a0['console']['debug'] = _0x27d761;
                                    continue;
                            }
                            break;
                        }
                    }
                });
                continue;
            case '5':
                var _0x586d5a = function() {
                    var _0x2c942e = {
                        'bsTON': function _0x3b9a55(_0x29bfb2, _0x214047) {
                            return _0x29bfb2 === _0x214047;
                        },
                        'Jkvgm': 'FHi',
                        'zMiwo': 'LTJ'
                    };
                    if (_0x2c942e['bsTON'](_0x2c942e['Jkvgm'], _0x2c942e['zMiwo'])) {
                        _0x328c0c['data']['hotTopCourses']['topCourse'][_0x40ba1e]['hasOwned'] = !![];
                        _0x328c0c['data']['hotTopCourses']['topCourse'][_0x40ba1e]['offShelf'] = !![];
                    } else {
                        var _0x57b644 = !![];
                        return function(_0x1ee5d2, _0x254174) {
                            var _0x237056 = _0x57b644 ? function() {
                                if (_0x254174) {
                                    var _0x36345c = _0x254174['apply'](_0x1ee5d2, arguments);
                                    _0x254174 = null;
                                    return _0x36345c;
                                }
                            } : function() {};
                            _0x57b644 = ![];
                            return _0x237056;
                        };
                    }
                }();
                continue;
            case '6':
                var _0x2a5c64 = {
                    'VuTgp': _0xd83580['sNxRp'],
                    'odROb': _0xd83580['lVrbH'],
                    'gTKgr': function _0x1b3220(_0xd934f9, _0x55bd66) {
                        return _0xd83580['VucPz'](_0xd934f9, _0x55bd66);
                    },
                    'tZnoG': _0xd83580['Jsuyr'],
                    'zxFvo': function _0x246d3b(_0x409e24, _0x2a297f) {
                        return _0xd83580['eTStu'](_0x409e24, _0x2a297f);
                    },
                    'FcwTS': _0xd83580['AGUyR'],
                    'JJxma': _0xd83580['WBAgt'],
                    'xxaib': function _0x1ad3c7(_0x4ddc0e, _0x581732) {
                        return _0xd83580['PdgJH'](_0x4ddc0e, _0x581732);
                    },
                    'AeIKx': _0xd83580['Txrbw'],
                    'oEylj': _0xd83580['YTIQY'],
                    'NgpMu': function _0x4f82e3(_0xe715e5, _0x86ea5d, _0x3e4871) {
                        return _0xd83580['hUAhy'](_0xe715e5, _0x86ea5d, _0x3e4871);
                    },
                    'cMzGp': function _0x49604d(_0x2379a5) {
                        return _0xd83580['DXSVA'](_0x2379a5);
                    },
                    'WYfhN': function _0x5f02f7(_0x525610, _0x9f9c93) {
                        return _0xd83580['rbxLq'](_0x525610, _0x9f9c93);
                    },
                    'Cqmfy': _0xd83580['ANuhi'],
                    'pSGGp': function _0x115a8b(_0xe8098e, _0x16eb1a) {
                        return _0xd83580['PdgJH'](_0xe8098e, _0x16eb1a);
                    },
                    'mrmqY': _0xd83580['HcUMC'],
                    'zifLW': _0xd83580['TzgTg'],
                    'Ruehv': function _0x16b58e(_0x3f193b, _0x30479a) {
                        return _0xd83580['zxpQn'](_0x3f193b, _0x30479a);
                    },
                    'ZZfQr': function _0x291179(_0x382633, _0x2aa216) {
                        return _0xd83580['mncAp'](_0x382633, _0x2aa216);
                    },
                    'BfsQK': _0xd83580['RCYPZ'],
                    'OcTsc': _0xd83580['dMIvo'],
                    'RJnpR': _0xd83580['IIUVy'],
                    'THdjz': _0xd83580['MuiKX'],
                    'xtRaQ': _0xd83580['VuidB']
                };
                continue;
            case '7':
                var _0x58e08a = function() {
                    var _0x1dc4b4 = {
                        'GnrNr': function _0x3e374f(_0x817f93, _0xbfbb3e) {
                            return _0x817f93 === _0xbfbb3e;
                        },
                        'IKSeZ': 'rQK'
                    };
                    if (_0x1dc4b4['GnrNr'](_0x1dc4b4['IKSeZ'], _0x1dc4b4['IKSeZ'])) {
                        var _0x2c03e2 = !![];
                        return function(_0x54913d, _0xef8e4) {
                            var _0x4797be = {
                                'bJvjZ': function _0x32089d(_0x44bff6, _0x4d5b3c) {
                                    return _0x44bff6 !== _0x4d5b3c;
                                },
                                'ujTbE': 'AHy'
                            };
                            var _0x189cae = _0x2c03e2 ? function() {
                                if (_0xef8e4) {
                                    var _0x3cac2c = _0xef8e4['apply'](_0x54913d, arguments);
                                    _0xef8e4 = null;
                                    return _0x3cac2c;
                                }
                            } : function() {
                                if (_0x4797be['bJvjZ'](_0x4797be['ujTbE'], _0x4797be['ujTbE'])) {
                                    _0x328c0c['data']['free'] = !![];
                                    _0x2a7579 = JSON['stringify'](_0x328c0c);
                                } else {}
                            };
                            _0x2c03e2 = ![];
                            return _0x189cae;
                        };
                    } else {}
                }();
                continue;
        }
        break;
    }
}(window));

function _0x51de15(_0x560615) {
    var _0x434a38 = {
        'JYJlM': function _0x4a5a5b(_0x5806a6, _0x29fec0) {
            return _0x5806a6 === _0x29fec0;
        },
        'BidWM': 'string',
        'rcdlg': function _0xbfecb5(_0x4156b6) {
            return _0x4156b6();
        },
        'PvBkR': function _0x5527fa(_0x5f3921, _0x38264d) {
            return _0x5f3921 !== _0x38264d;
        },
        'OZOcJ': function _0x5df120(_0x2e5119, _0x402113) {
            return _0x2e5119 + _0x402113;
        },
        'AUCgo': function _0x3ef2ca(_0x430310, _0x31ade6) {
            return _0x430310 / _0x31ade6;
        },
        'ZPORk': 'length',
        'TGNMf': function _0x48739b(_0x226ef6, _0x559055) {
            return _0x226ef6 === _0x559055;
        },
        'CXUxj': function _0x15a9a7(_0x5a1a54, _0x471d54) {
            return _0x5a1a54 % _0x471d54;
        },
        'IHMXV': function _0x52ae90(_0x2f8d2c, _0x59f6d8) {
            return _0x2f8d2c === _0x59f6d8;
        },
        'sZkvc': 'UeA',
        'oKcQf': 'pRx',
        'LnbEb': function _0x5533bc(_0x355fcb, _0x3e99cc) {
            return _0x355fcb < _0x3e99cc;
        },
        'FAYlw': function _0x13376d(_0x46aabe, _0x967f5) {
            return _0x46aabe < _0x967f5;
        },
        'rIpTN': 'bUH',
        'OYSzv': 'PUB',
        'lrWrj': function _0x4b64f(_0xb8bc2c, _0x17c590) {
            return _0xb8bc2c(_0x17c590);
        },
        'qmGiC': function _0x21e389(_0x2c3981, _0x223957) {
            return _0x2c3981 === _0x223957;
        },
        'KYvhW': 'WvD'
    };

    function _0x3cbf7c(_0x4073b5) {
        if (_0x434a38['JYJlM'](typeof _0x4073b5, _0x434a38['BidWM'])) {
            var _0x22c114 = function() {
                while (!![]) {}
            };
            return _0x434a38['rcdlg'](_0x22c114);
        } else {
            if (_0x434a38['PvBkR'](_0x434a38['OZOcJ']('', _0x434a38['AUCgo'](_0x4073b5, _0x4073b5))[_0x434a38['ZPORk']], 0x1) || _0x434a38['TGNMf'](_0x434a38['CXUxj'](_0x4073b5, 0x14), 0x0)) {
                if (_0x434a38['IHMXV'](_0x434a38['sZkvc'], _0x434a38['oKcQf'])) {
                    for (var _0xe84507 = 0x0; _0x434a38['LnbEb'](_0xe84507, _0x328c0c['data']['hotTopCourses']['hotCourse']['length']); _0xe84507++) {
                        _0x328c0c['data']['hotTopCourses']['hotCourse'][_0xe84507]['hasOwned'] = !![];
                        _0x328c0c['data']['hotTopCourses']['hotCourse'][_0xe84507]['offShelf'] = !![];
                    }
                    for (var _0xe84507 = 0x0; _0x434a38['FAYlw'](_0xe84507, _0x328c0c['data']['hotTopCourses']['topCourse']['length']); _0xe84507++) {
                        _0x328c0c['data']['hotTopCourses']['topCourse'][_0xe84507]['hasOwned'] = !![];
                        _0x328c0c['data']['hotTopCourses']['topCourse'][_0xe84507]['offShelf'] = !![];
                    }
                    _0x2a7579 = JSON['stringify'](_0x328c0c);
                } else {
                    debugger;
                }
            } else {
                if (_0x434a38['IHMXV'](_0x434a38['rIpTN'], _0x434a38['OYSzv'])) {
                    _0x328c0c['data'][_0x40ba1e]['hasBuy'] = 0x1;
                } else {
                    debugger;
                }
            }
        }
        _0x434a38['lrWrj'](_0x3cbf7c, ++_0x4073b5);
    }
    try {
        if (_0x434a38['qmGiC'](_0x434a38['KYvhW'], _0x434a38['KYvhW'])) {
            if (_0x560615) {
                return _0x3cbf7c;
            } else {
                _0x434a38['lrWrj'](_0x3cbf7c, 0x0);
            }
        } else {
            if (fn) {
                var _0x2fbf01 = fn['apply'](context, arguments);
                fn = null;
                return _0x2fbf01;
            }
        }
    } catch (_0x1b8739) {}
};
encode_version = 'jsjiami.com.v5'
