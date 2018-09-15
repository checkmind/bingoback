var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/*
**/
var GameConfig = (function () {
    function GameConfig() {
    }
    GameConfig.generatorBingos = function () {
    };
    GameConfig.createBitmapByName = function (name) {
        var url = GameConfig.domainUrl + name;
        var image = new eui.Image();
        egret.ImageLoader.crossOrigin = "anonymous";
        image.source = url;
        return image;
    };
    GameConfig.initData = function (data) {
        data = data.result;
        GameConfig.helperArr = data.helps;
        GameConfig.coin = data.coin;
        GameConfig.maxTax = data.maxTax;
        GameConfig.nowTax = GameConfig.maxTax;
    };
    GameConfig.initHelpArr = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = GameConfig;
                        return [4 /*yield*/, platform.getHelpStorage()];
                    case 1:
                        _a.helperArr = _b.sent();
                        if (!GameConfig.helperArr) {
                            GameConfig.helperArr = [1, 1, 1, 1, 1];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GameConfig.initCoin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = GameConfig;
                        return [4 /*yield*/, platform.getCoinStorage()];
                    case 1:
                        _a.coin = _b.sent();
                        if (!GameConfig.coin) {
                            GameConfig.coin = 0;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GameConfig.initTax = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = GameConfig;
                        return [4 /*yield*/, platform.getTax()];
                    case 1:
                        _a.maxTax = _b.sent();
                        GameConfig.nowTax = GameConfig.maxTax;
                        if (!GameConfig.maxTax) {
                            GameConfig.maxTax = 0;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GameConfig.setHelpArr = function (num, index) {
        GameConfig.helperArr[index] += num;
        platform.setHelpStorage(GameConfig.helperArr);
    };
    GameConfig.setCoin = function (num) {
        GameConfig.coin += num;
        platform.setCoinStorage(GameConfig.coin);
    };
    GameConfig.SectionToChinese = function (section) {
        var strIns = '', chnStr = '';
        var unitPos = 0;
        var zero = true;
        while (section > 0) {
            var v = section % 10;
            if (v === 0) {
                if (!zero) {
                    zero = true;
                    chnStr = GameConfig.chnNumChar[v] + chnStr;
                }
            }
            else {
                zero = false;
                strIns = GameConfig.chnNumChar[v];
                strIns += GameConfig.chnUnitChar[unitPos];
                chnStr = strIns + chnStr;
            }
            unitPos++;
            section = Math.floor(section / 10);
        }
        return chnStr;
    };
    GameConfig.domainUrl = 'https://cangnanshi.com/bingo/';
    //static domainUrl = 'https://qqqdu.oss-cn-beijing.aliyuncs.com/bingo/'
    /* 即使不能消除也能交换顺序 */
    GameConfig.canChange = false;
    GameConfig.canChangeTime = 10;
    // GameBody 占据的y和高度
    GameConfig.GameBodyY = 0;
    GameConfig.GameBodyH = 0;
    /* 当前状态
    * state :
    *   0 游戏还未开始
    *   1 游戏开始
    *   2 游戏结束
    *   3 游戏成功
    **/
    GameConfig.state = 0;
    // 道具 1，清除 2，乱序 3，增加步数
    GameConfig.helper = 0;
    /* 当前步数 */
    GameConfig.stepOnoff = true;
    GameConfig.maxStep = 20;
    // 金钱
    GameConfig.coin = 0;
    /* 道具数目 */
    GameConfig.helperArr = [1, 0, 0, 0, 0];
    GameConfig.helperPrice = [1999, 1999, 1999, 2888, 2888];
    GameConfig.helperSrc = ['1', 'hit', 'change', 'foot', 'time'];
    /* 星球种类 */
    GameConfig.bingosMax = 8;
    GameConfig.taxArr = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    // 无限模式初始化时间
    GameConfig.infiniteTime = 100;
    GameConfig.infiniteRow = 7;
    GameConfig.infiniteCol = 7;
    GameConfig.infiniteBingoType = 7;
    // 速度
    GameConfig.infiniteColV = 100;
    // 当前关卡
    GameConfig.nowTax = -1;
    // 当前最强关卡
    GameConfig.maxTax = 0;
    // 第一关限定步数
    GameConfig.taxConfig = [];
    GameConfig.chnNumChar = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
    GameConfig.chnUnitSection = ["", "万", "亿", "万亿", "亿亿"];
    GameConfig.chnUnitChar = ["", "十", "百", "千"];
    return GameConfig;
}());
__reflect(GameConfig.prototype, "GameConfig");
/*
    弹窗类
**/
var Progress = (function (_super) {
    __extends(Progress, _super);
    function Progress(x, y, width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        _this.x = width / 2 - _this.width / 2;
        _this.y = height / 2 - _this.height / 2;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addBar, _this);
        return _this;
    }
    Progress.prototype.addBar = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.addStoneBar();
                this.addStone();
                this.addText();
                return [2 /*return*/];
            });
        });
    };
    Progress.prototype.addText = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = this.stage.stageHeight / 2 + 60;
        this.textField.width = 480;
        this.textField.x = this.stage.stageWidth / 2 - 480 / 2;
        this.textField.height = 29;
        this.textField.textAlign = "center";
    };
    Progress.prototype.addStone = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // if(this.stone)
                        //     this.removeChild(this.stone);
                        _a = this;
                        return [4 /*yield*/, GameConfig.createBitmapByName("stone.png")];
                    case 1:
                        // if(this.stone)
                        //     this.removeChild(this.stone);
                        _a.stone = _b.sent();
                        this.stone.width = 314;
                        this.stone.height = 29;
                        this.stone.x = this.stage.stageWidth / 2 - this.stone.width / 2 - 5;
                        this.stone.y = this.stage.stageHeight / 2 - this.stone.height / 2;
                        this.addChild(this.stone);
                        this.stone.mask = this.addMask(0, 0);
                        return [2 /*return*/];
                }
            });
        });
    };
    Progress.prototype.addStoneBar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, GameConfig.createBitmapByName("stoneBar.png")];
                    case 1:
                        _a.stoneBar = _b.sent();
                        this.stoneBar.width = 374;
                        this.stoneBar.height = 48;
                        this.stoneBar.x = this.stage.stageWidth / 2 - this.stoneBar.width / 2;
                        this.stoneBar.y = this.stage.stageHeight / 2 - this.stoneBar.height / 2;
                        this.addChild(this.stoneBar);
                        return [2 /*return*/];
                }
            });
        });
    };
    Progress.prototype.addMask = function (width, height) {
        //画一个遮罩正方形
        if (this.maskBack) {
            this.removeChild(this.maskBack);
            this.maskBack = null;
        }
        this.maskBack = new egret.Shape();
        this.maskBack.graphics.beginFill(0x0000ff, 1);
        this.maskBack.graphics.drawRect(this.stone.x, this.stone.y, width, height);
        this.maskBack.graphics.endFill();
        this.addChild(this.maskBack);
        return this.maskBack;
    };
    Progress.prototype.setMask = function (current, total) {
        var price = 314 / total;
        if (this.stone) {
            this.stone.mask = this.addMask((current + 1) * price, 29);
        }
        var num = Math.floor(((current + 1) / total) * 100);
        if (num > 100)
            num = 100;
        this.textField.text = "\u6B63\u5728\u642C\u8FD0\u661F\u7403: " + num + "%";
    };
    return Progress;
}(egret.Sprite));
__reflect(Progress.prototype, "Progress");
/*
 * 页面路由
**/
var PageBus = (function () {
    function PageBus() {
    }
    PageBus.init = function (contain) {
        PageBus.contain = contain;
    };
    PageBus.pushPage = function (Obj) {
        if (PageBus.pages[Obj.router])
            return;
        PageBus.pages[Obj.router] = Obj;
    };
    PageBus.gotoPage = function (router) {
        if (!PageBus.nowPage) {
            PageBus.nowPage = PageBus.pages['index'];
        }
        PageBus.nowPage['page'].removeChildren();
        PageBus.contain.removeChild(PageBus.nowPage['page']);
        PageBus.contain.addChild(PageBus.pages[router]['page']);
        PageBus.nowPage = PageBus.pages[router];
    };
    PageBus.pages = {};
    return PageBus;
}());
__reflect(PageBus.prototype, "PageBus");
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.saveImg = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    // 分享小程序
    DebugPlatform.prototype.shareAppMessage = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    // 得到本地道具信息
    DebugPlatform.prototype.getHelpStorage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    // 储存本地道具信息
    DebugPlatform.prototype.setHelpStorage = function (obj) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    // 得到本地金钱信息
    DebugPlatform.prototype.getCoinStorage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    // 储存本地金钱信息
    DebugPlatform.prototype.setCoinStorage = function (num) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.saveData = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.createInnerAudioContext = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.playClearMusic = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.playButtonMusic = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.passTax = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.getTax = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
var lalala = (function (_super) {
    __extends(lalala, _super);
    function lalala() {
        var _this = _super.call(this) || this;
        _this._label = "";
        return _this;
    }
    Object.defineProperty(lalala.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            this._label = value;
            if (this.labelDisplay) {
                this.labelDisplay.text = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    lalala.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        if (this.labelDisplay) {
            this.labelDisplay.text = this._label;
        }
    };
    return lalala;
}(eui.Component));
__reflect(lalala.prototype, "lalala");
var TaxButton = (function (_super) {
    __extends(TaxButton, _super);
    function TaxButton() {
        var _this = _super.call(this) || this;
        _this._label = "";
        _this._label2 = "";
        return _this;
    }
    Object.defineProperty(TaxButton.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            this._label = value;
            if (this.labelDisplay) {
                this.labelDisplay.text = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaxButton.prototype, "label2", {
        get: function () {
            return this._label2;
        },
        set: function (value) {
            this._label2 = value;
            if (this.labelDisplay2) {
                this.labelDisplay2.text = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    TaxButton.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        if (this.labelDisplay) {
            this.labelDisplay.text = this._label;
        }
    };
    return TaxButton;
}(eui.Component));
__reflect(TaxButton.prototype, "TaxButton");
var TalkButton = (function (_super) {
    __extends(TalkButton, _super);
    function TalkButton() {
        var _this = _super.call(this) || this;
        _this._label = "";
        return _this;
    }
    Object.defineProperty(TalkButton.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            this._label = value;
            if (this.labelDisplay) {
                this.labelDisplay.text = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    TalkButton.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        if (this.labelDisplay) {
            this.labelDisplay.text = this._label;
        }
    };
    return TalkButton;
}(eui.Component));
__reflect(TalkButton.prototype, "TalkButton");
/*
    道具类
**/
var Background = (function (_super) {
    __extends(Background, _super);
    function Background(x, y, width, height) {
        var _this = _super.call(this) || this;
        _this.image = new egret.Bitmap();
        _this.x = x;
        _this.y = y;
        _this.width = width;
        _this.height = height;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addBack, _this);
        return _this;
    }
    Background.prototype.addBack = function () {
        return __awaiter(this, void 0, void 0, function () {
            var width, imgHeight, top, left, sky, fn, fn2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        width = this.width + 150;
                        imgHeight = width * 1.78;
                        top = imgHeight - this.height;
                        left = width - this.width;
                        return [4 /*yield*/, GameConfig.createBitmapByName("back_3.jpg")];
                    case 1:
                        sky = _a.sent();
                        sky.width = width;
                        sky.height = imgHeight;
                        this.addChild(sky);
                        //this.addStart();
                        this.addBoom();
                        fn = function () {
                            egret.Tween.get(sky)
                                .to({ y: -top, x: -left }, 8 * 4000, egret.Ease.sineIn).call(fn2);
                        };
                        fn2 = function () {
                            egret.Tween.get(sky)
                                .to({ y: 0, x: 0 }, 8 * 4000, egret.Ease.sineIn).call(fn);
                        };
                        fn();
                        return [2 /*return*/];
                }
            });
        });
    };
    Background.prototype.addSun = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sun, fn, fn2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, GameConfig.createBitmapByName("sun.png")];
                    case 1:
                        sun = _a.sent();
                        sun.height = sun.width = 200;
                        sun.x = 50;
                        sun.y = 80;
                        this.addChild(sun);
                        fn = function () {
                            egret.Tween.get(sun)
                                .to({ y: 90, x: 50 }, 4000, egret.Ease.sineIn).call(fn2);
                        };
                        fn2 = function () {
                            egret.Tween.get(sun)
                                .to({ y: 80, x: 50 }, 4000, egret.Ease.sineIn).call(fn);
                        };
                        fn();
                        return [2 /*return*/];
                }
            });
        });
    };
    Background.prototype.addStart = function () {
        var system = new particle.GravityParticleSystem(RES.getRes("newParticle_png"), RES.getRes("newParticle_json"));
        this.addChild(system);
        console.log(system);
        console.log('以上');
        system.start();
    };
    Background.prototype.addBoom = function () {
        var system = new particle.GravityParticleSystem(RES.getRes("newParticle2_png"), RES.getRes("newParticle2_json"));
        this.addChild(system);
        system.start();
        // let sky = this.createBitmapByName("boom_png",this.width-50,(this.width-50)/0.736);
        // this.addChild(sky);
        // sky.x = 150;
        // sky.y = 40;
        // sky.scaleX = 0.8;
        // sky.scaleY = 0.8;
        system.y = 200;
    };
    return Background;
}(egret.Sprite));
__reflect(Background.prototype, "Background");
/*
**/
var Bingo = (function (_super) {
    __extends(Bingo, _super);
    function Bingo(x, y, type, parent) {
        var _this = _super.call(this) || this;
        _this.width = GameBody.childW;
        _this.height = GameBody.childH;
        _this.image = new egret.Bitmap();
        _this.colors = [0x1ca5fc, 0x295c9d, 0x990000, 0x7f0000];
        _this.nowDrak = false;
        _this.x = x * (_this.width);
        _this.y = y * (_this.height);
        _this.parents = parent;
        _this.type = type;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.drawDoors, _this);
        return _this;
    }
    Bingo.prototype.drawDoors = function () {
        //this.addRect();
        //this.addMask()
        this.addImage();
        //this.addText();
        //this.addBlackHole();
    };
    Bingo.prototype.addMask = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, GameConfig.createBitmapByName("rect_2.png")];
                    case 1:
                        _a.rect = _b.sent();
                        this.rect.width = this.width;
                        this.rect.height = this.height;
                        this.addChild(this.rect);
                        return [2 /*return*/];
                }
            });
        });
    };
    Bingo.prototype.addRect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, GameConfig.createBitmapByName("rect.png")];
                    case 1:
                        _a.rect = _b.sent();
                        this.rect.width = this.width;
                        this.rect.height = this.height;
                        this.addChild(this.rect);
                        return [2 /*return*/];
                }
            });
        });
    };
    Bingo.prototype.addImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(this.type >= 100)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, GameConfig.createBitmapByName("100.png")];
                    case 1:
                        _a.img = _c.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        _b = this;
                        return [4 /*yield*/, GameConfig.createBitmapByName((this.type + 1) + ".png")];
                    case 3:
                        _b.img = _c.sent();
                        _c.label = 4;
                    case 4:
                        this.img.width = this.width;
                        this.img.height = this.height;
                        this.img.anchorOffsetX = this.width / 2;
                        this.img.anchorOffsetY = this.width / 2;
                        this.img.x = this.img.width / 2;
                        this.img.y = this.img.width / 2;
                        this.addChild(this.img);
                        return [2 /*return*/];
                }
            });
        });
    };
    Bingo.prototype.beDark = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ran, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        ran = Math.floor(Math.random() * 10);
                        if (!(ran === 5 && !this.nowDrak)) return [3 /*break*/, 2];
                        this.img.$parent && this.removeChild(this.img);
                        _a = this;
                        return [4 /*yield*/, GameConfig.createBitmapByName("dark.png")];
                    case 1:
                        _a.img = _b.sent();
                        this.img.width = this.width;
                        this.img.height = this.height;
                        this.nowDrak = true;
                        this.addChild(this.img);
                        return [2 /*return*/, false];
                    case 2:
                        this.removeChild(this.img);
                        this.nowDrak = false;
                        this.addImage();
                        return [2 /*return*/];
                }
            });
        });
    };
    Bingo.prototype.canClear = function () {
        var ran = Math.floor(Math.random() * 10);
        // 变换为黑色球的几率
        console.log(ran);
        if (ran > 7) {
            return true;
        }
        return false;
    };
    // 变成另外的星球
    Bingo.prototype.beType = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.changeBiong(function () {
                    if (_this.img.parent)
                        _this.removeChild(_this.img);
                    _this.type = type;
                    _this.addImage();
                });
                return [2 /*return*/];
            });
        });
    };
    Bingo.prototype.changeBiong = function (fn) {
        var sky = this.img;
        var iDirection = 1;
        var funcChange = function () {
            sky.rotation += 6 * iDirection;
        };
        egret.Tween.get(sky, { onChange: funcChange, onChangeObj: sky })
            .to({}, this.parents.speed, egret.Ease.sineIn).call(fn);
    };
    Bingo.prototype.addBlackHole = function (fn) {
        return __awaiter(this, void 0, void 0, function () {
            var sky, funcChange, iDirection, self;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.img)
                            return [2 /*return*/];
                        if (this.img.parent)
                            this.removeChild(this.img);
                        return [4 /*yield*/, GameConfig.createBitmapByName("blackhole.png")];
                    case 1:
                        sky = _a.sent();
                        sky.width = this.width;
                        sky.height = this.height;
                        sky.anchorOffsetX = this.width / 2;
                        sky.anchorOffsetY = this.width / 2;
                        sky.x = sky.width / 2;
                        sky.y = sky.width / 2;
                        funcChange = function () {
                            sky.rotation += 6 * iDirection;
                            if (sky.scaleX > 0.1) {
                                sky.scaleX -= 0.01;
                                sky.scaleY -= 0.01;
                            }
                        };
                        iDirection = 1;
                        this.addChild(sky);
                        self = this;
                        egret.Tween.get(sky, { onChange: funcChange, onChangeObj: sky })
                            .to({}, self.parents.speed, egret.Ease.sineIn).call(fn);
                        return [2 /*return*/];
                }
            });
        });
    };
    Bingo.prototype.onAddToStage = function (evt) {
    };
    Bingo.prototype.addText = function () {
        var text = new egret.TextField();
        // text.text = this.type;
        text.x = this.width / 2 - text.textWidth / 2;
        text.y = this.height / 2 - text.textHeight / 2;
        this.addChild(text);
    };
    Bingo.prototype.killSelf = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.addBlackHole(function () {
                _this.$parent && _this.$parent.removeChild(_this);
                resolve();
            });
        });
    };
    // 交换位置
    Bingo.prototype.moveToDirection = function (direction) {
        var _this = this;
        var that = this;
        return new Promise(function (resolve) {
            var fn = function () {
                that.removeChoosed();
                resolve(true);
            };
            switch (direction) {
                case 1:
                    egret.Tween.get(_this).to({ x: _this.x, y: _this.y - _this.height }, _this.parents.speed, egret.Ease.sineIn).call(fn);
                    break;
                case 2:
                    egret.Tween.get(_this).to({ x: _this.x + _this.width, y: _this.y }, _this.parents.speed, egret.Ease.sineIn).call(fn);
                    break;
                case 3:
                    egret.Tween.get(_this).to({ x: _this.x, y: _this.y + _this.height }, _this.parents.speed, egret.Ease.sineIn).call(fn);
                    break;
                default:
                    egret.Tween.get(_this).to({ x: _this.x - _this.width, y: _this.y }, _this.parents.speed, egret.Ease.sineIn).call(fn);
                    break;
            }
        });
    };
    Bingo.prototype.moveToBottom = function (j) {
        /*** 本示例关键代码段开始 ***/
        var distance = j * (this.height);
        egret.Tween.get(this)
            .to({ x: this.x, y: distance }, this.parents.speed, egret.Ease.sineIn);
    };
    Bingo.prototype.moveToSet = function (x, y) {
        y = y * (this.height);
        x = x * (this.width);
        egret.Tween.get(this)
            .to({ x: x, y: y }, this.parents.speed, egret.Ease.sineIn);
    };
    Bingo.prototype.chooseBingo = function () {
        if (this.choosed) {
            this.removeChoosed();
            return;
        }
        // this.borderShape = new egret.Shape()
        // this.borderShape.graphics.lineStyle(2, 0xffffff);
        // this.borderShape.graphics.drawRect(0, 0, this.width,this.height);
        // this.borderShape.graphics.endFill();
        // this.addChild(this.borderShape);
        this.addRect();
        this.choosed = true;
    };
    Bingo.prototype.removeChoosed = function () {
        if (!this.choosed)
            return;
        if (this.rect.$parent)
            this.removeChild(this.rect);
        this.choosed = false;
    };
    return Bingo;
}(egret.Sprite));
__reflect(Bingo.prototype, "Bingo");
var DateEvent = (function (_super) {
    __extends(DateEvent, _super);
    function DateEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        var _this = _super.call(this, type, bubbles, cancelable) || this;
        _this._type = '';
        _this._month = 0;
        _this._date = 0;
        _this._where = "";
        _this._todo = "";
        return _this;
    }
    DateEvent.DATE = "myPrivateEvent";
    return DateEvent;
}(egret.Event));
__reflect(DateEvent.prototype, "DateEvent");
/*
    游戏关卡页
**/
var GameGroup = (function (_super) {
    __extends(GameGroup, _super);
    function GameGroup(width, height, parent) {
        var _this = _super.call(this) || this;
        _this.image = new egret.Bitmap();
        _this.x = 0;
        _this.y = 0;
        _this.width = width;
        _this.height = height;
        _this.parents = parent;
        _this.group = new eui.Group();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addImage, _this);
        return _this;
    }
    GameGroup.prototype.addImage = function () {
        for (var i = 0; i < GameConfig.taxConfig.length; i++)
            this.meau(i);
        this.addScroll();
    };
    GameGroup.prototype.meau = function (num) {
        var button = new TaxButton();
        button.skinName = "resource/eui_skins/toastSkin.exml"; //假设Button.exml在resource文件夹下。
        button.label2 = "\u7B2C" + GameConfig.SectionToChinese(num + 1) + "\u5B87\u5B99";
        if (num > GameConfig.maxTax) {
            button.label = "  " + TalkConfig.lockLabel;
        }
        else {
            button.label = "  " + TalkConfig.taxLabel[num];
        }
        button.width = 226 * 2;
        button.height = 345 * 2;
        button.x = (button.width + 80) * num;
        button.y = (this.height - button.height) / 2;
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bindClickFn, this);
        this.group.addChild(button);
        if (num <= GameConfig.maxTax)
            return;
        var colorMatrix = [
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0, 0, 0, 1, 0
        ];
        var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
        button.filters = [colorFlilter];
    };
    GameGroup.prototype.addScroll = function () {
        this.myScroller = new eui.Scroller();
        this.myScroller;
        //注意位置和尺寸的设置是在Scroller上面，而不是容器上面
        this.myScroller.width = this.width;
        this.myScroller.height = this.height;
        this.myScroller.viewport = this.group;
        this.addChild(this.myScroller);
        var nowSet = (226 * 2 + 80) * GameConfig.nowTax - (this.width / 2 - 226);
        this.myScroller.viewport.scrollH = GameConfig.maxTax == 0 ? 0 : nowSet;
    };
    /* 给按钮绑定事件 */
    GameGroup.prototype.bindClickFn = function (ev) {
        var x = Math.floor((ev.stageX - this.x + this.myScroller.viewport.scrollH) / (452 + 80));
        //let y = Math.floor((ev.stageY-this.y)/(344*2));
        var buttonY = (this.height - 345 * 2) / 2;
        if (ev.stageY <= this.y || ev.stageY >= buttonY + 345 * 2)
            return;
        if (x > GameConfig.maxTax)
            return;
        platform.playButtonMusic();
        GameConfig.nowTax = x;
        PageBus.gotoPage("pageTax");
        GameConfig.state = 1;
    };
    GameGroup.prototype.createBitmapByName = function (name, width, height) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        if (width)
            result.width = width;
        if (height)
            result.height = height;
        return result;
    };
    return GameGroup;
}(eui.Group));
__reflect(GameGroup.prototype, "GameGroup");
/*
    游戏信息面板
**/
var GameInf = (function (_super) {
    __extends(GameInf, _super);
    function GameInf(width, height, parent) {
        var _this = _super.call(this) || this;
        _this.image = new egret.Bitmap();
        _this.myScore = 0;
        _this.propsArr = [];
        _this.backToPage = '';
        _this.hadProps = true;
        _this.x = 0;
        _this.y = 0;
        _this.width = width;
        _this.heights = height;
        _this.parents = parent;
        if (GameConfig.nowTax != -1)
            _this.maxStep = GameConfig.taxConfig[GameConfig.nowTax].step;
        else
            _this.maxStep = 0;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addImage, _this);
        return _this;
    }
    GameInf.prototype.addImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.addTaxNum();
                        this.updataScroe();
                        //this.updataStep();
                        return [4 /*yield*/, this.addBack()];
                    case 1:
                        //this.updataStep();
                        _a.sent();
                        this.addTimer();
                        this.addStep();
                        this.addProps();
                        //this.getProps(2);
                        this.myCoin();
                        this.myGoal();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 当前资金
    GameInf.prototype.myCoin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sprite, coin, height;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sprite = new egret.Sprite();
                        return [4 /*yield*/, GameConfig.createBitmapByName('coin.png')];
                    case 1:
                        coin = _a.sent();
                        coin.width = coin.height = 50;
                        height = this.height - coin.height - 50;
                        coin.x = 0;
                        coin.y = 0;
                        sprite.addChild(coin);
                        this.coinText = new egret.TextField();
                        this.coinText.width = 200;
                        this.coinText.x = 60;
                        this.coinText.y = 0 + 15;
                        this.coinText.text = GameConfig.coin + '';
                        this.coinText.textAlign = 'left';
                        this.coinText.size = 20;
                        sprite.x = 40;
                        sprite.y = height + 80;
                        sprite.addChild(this.coinText);
                        this.addChild(sprite);
                        this.changeCoin();
                        return [2 /*return*/];
                }
            });
        });
    };
    GameInf.prototype.changeCoin = function () {
        this.coinText.text = GameConfig.coin + "\u91D1";
    };
    // 重置各种 游戏信息
    GameInf.prototype.resetInf = function () {
        this.myScore = 0;
        this.updataScroe();
        if (GameConfig.nowTax == -1) {
            this.Timer.resetTime();
            this.propsArr.map(function (obj) {
                obj.init();
            });
            return;
        }
        if (GameConfig.taxConfig[GameConfig.nowTax].time != 0)
            this.Timer.resetTime();
        if (GameConfig.taxConfig[GameConfig.nowTax].step != 0)
            this.StepClass.resetStep();
    };
    // 随机生成道具
    GameInf.prototype.productHelper = function () {
    };
    // 得到道具
    GameInf.prototype.getProps = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var sprite, shape, img, hit, taxNum;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.hadProps) {
                            return [2 /*return*/];
                        }
                        sprite = new egret.Sprite();
                        shape = new egret.Shape();
                        shape.graphics.beginFill(0x333, 0.5);
                        shape.graphics.drawRect(0, 0, this.width, this.height + 100);
                        shape.graphics.endFill();
                        this.hadProps = false;
                        img = GameConfig.helperSrc[type];
                        return [4 /*yield*/, GameConfig.createBitmapByName(img + '.png')];
                    case 1:
                        hit = _a.sent();
                        hit.width = hit.height = 100;
                        hit.x = this.width / 2 - hit.width / 2;
                        hit.y = this.height / 2 - hit.height / 2 - 50;
                        taxNum = new TaxButton();
                        taxNum.skinName = "resource/eui_skins/GetHelper.exml";
                        taxNum.label = '您获得了一块：“二向箔”';
                        taxNum.label2 = '使用它可以对一个星球及其周围八个星球进行降维打击';
                        taxNum.x = this.width / 2 - taxNum.width / 2;
                        taxNum.y = this.height / 2 - taxNum.height / 2;
                        sprite.addChild(shape);
                        sprite.addChild(taxNum);
                        sprite.addChild(hit);
                        this.$parent.addChild(sprite);
                        this.$parent.setChildIndex(this, 99999);
                        taxNum.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                            GameConfig.helperArr[type] += 1;
                            _this.hadProps = true;
                            _this.propsArr[type].setNum();
                            if (sprite.$parent)
                                _this.$parent.removeChild(sprite);
                        }, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    GameInf.prototype.addProps = function () {
        var maxType = GameConfig.helperArr.length;
        // 整个盒子的宽度是  
        var moveX = this.width / 4 - 100 * maxType / 4 - 20;
        var self = this;
        function clickButton(index) {
            self.propsArr.forEach(function (prop, key) {
                // if(2 !== key) {
                prop.removeRect();
                // }
            });
        }
        for (var type = 0; type < maxType; type++) {
            var props = new Prop(moveX + 60 * type, this.height / 2 - 100, type, this, clickButton);
            this.propsArr.push(props);
            this.addChild(props);
        }
    };
    GameInf.prototype.addTimer = function () {
        if (GameConfig.nowTax !== -1 && GameConfig.taxConfig[GameConfig.nowTax].time === 0)
            return;
        this.Timer = new Timer(this.width, this.heights, this.width, this.height, this);
        this.addChild(this.Timer);
    };
    GameInf.prototype.addStep = function () {
        // 关卡不用限定步数
        if (this.maxStep === 0)
            return;
        this.StepClass = new StepClass(this.width, this.heights, this.width, this.height, this);
        this.addChild(this.StepClass);
        this.StepClass.changeStep(this.maxStep);
    };
    GameInf.prototype.checkGameover = function () {
        if (GameConfig.taxConfig[GameConfig.nowTax].myScore > this.myScore)
            this.gameOver();
        else
            this.parents.passTax();
    };
    GameInf.prototype.gameOver = function () {
        this.parents.gameOver();
    };
    GameInf.prototype.addBack = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var sky;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, GameConfig.createBitmapByName("back.png")];
                    case 1:
                        sky = _a.sent();
                        sky.width = sky.height = 40;
                        sky.x = 20;
                        sky.y = 50;
                        sky.touchEnabled = true;
                        sky.addEventListener('touchEnd', function () {
                            PageBus.gotoPage(_this.backToPage);
                            GameConfig.state = 0;
                        }, this);
                        this.addChild(sky);
                        return [2 /*return*/];
                }
            });
        });
    };
    GameInf.prototype.addTaxNum = function () {
        this.taxNum = new egret.TextField();
        this.taxNum.width = 200;
        this.taxNum.height = 50;
        if (GameConfig.nowTax === -1)
            this.taxNum.x = this.width / 2 - this.taxNum.width / 2;
        else
            this.taxNum.x = 140;
        this.taxNum.y = 60;
        this.taxNum.lineSpacing = 50;
        this.taxNum.text = '当前降熵：0';
        this.taxNum.size = 25;
        this.taxNum.textAlign = 'center';
        this.addChild(this.taxNum);
    };
    GameInf.prototype.myGoal = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (GameConfig.nowTax == -1)
                    return [2 /*return*/];
                this.goalText = new egret.TextField();
                this.goalText.width = 200;
                this.goalText.height = 50;
                this.goalText.lineSpacing = 50;
                this.goalText.x = 360;
                this.goalText.y = 60;
                this.goalText.text = "\u76EE\u6807\u71B5\u503C\uFF1A" + GameConfig.taxConfig[GameConfig.nowTax].myScore;
                this.goalText.textAlign = 'left';
                this.goalText.size = 25;
                this.addChild(this.goalText);
                return [2 /*return*/];
            });
        });
    };
    /* 更新成绩 */
    GameInf.prototype.updataScroe = function () {
        this.taxNum.text = "\u5F53\u524D\u964D\u71B5\uFF1A" + this.myScore;
    };
    /* 更新步数 */
    GameInf.prototype.updataStep = function (step) {
        if (GameConfig.nowTax === -1)
            return;
        if (!step)
            this.maxStep--;
        else
            this.maxStep += step;
        this.StepClass && this.StepClass.changeStep(this.maxStep);
    };
    /* 设置时间 */
    GameInf.prototype.setTime = function (num) {
        this.Timer.setTime(num);
    };
    return GameInf;
}(egret.Sprite));
__reflect(GameInf.prototype, "GameInf");
/**
 * 这个类用来加载一些资源文件，会返回当前加载进度
 */
var loadImages = (function () {
    function loadImages(callback) {
        // 当前加载百分比
        this.cont = 0;
        this.callback = callback;
        this.loadMethod();
    }
    // 加载所有图片
    loadImages.prototype.loadMethod = function () {
        var _this = this;
        this.setImageArr();
        this.totalCont = this.imgArr.length;
        this.imgArr.map(function (url) {
            _this.loadImage(url);
        });
    };
    // 设置图片列表
    loadImages.prototype.setImageArr = function () {
        this.imgArr = [];
        this.setBingoImage();
        this.setPropImage();
    };
    loadImages.prototype.setBingoImage = function () {
        for (var i = 1; i < 10; i++) {
            this.imgArr.push(GameConfig.domainUrl + i + ".png");
        }
    };
    loadImages.prototype.setPropImage = function () {
        var _this = this;
        GameConfig.helperSrc.map(function (val) {
            _this.imgArr.push(GameConfig.domainUrl + val + ".png");
        });
    };
    loadImages.prototype.loadImage = function (url) {
        var imgLoader = new egret.ImageLoader();
        imgLoader.crossOrigin = "anonymous"; // 跨域请求
        imgLoader.load(url); // 去除链接中的转义字符‘\’        
        imgLoader.once(egret.Event.COMPLETE, function (evt) {
            if (this.cont < this.totalCont) {
                this.cont++;
                this.callback();
            }
        }, this);
    };
    return loadImages;
}());
__reflect(loadImages.prototype, "loadImages");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createView, _this);
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.addBack();
        this.addBar();
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = this.stage.stageHeight / 2 + 60;
        this.textField.width = 480;
        this.textField.x = this.stage.stageWidth / 2 - 480 / 2;
        this.textField.height = 29;
        this.textField.textAlign = "center";
        // #a31818
    };
    LoadingUI.prototype.addBar = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.addStoneBar();
                this.addStone();
                return [2 /*return*/];
            });
        });
    };
    LoadingUI.prototype.addStone = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // if(this.stone)
                        //     this.removeChild(this.stone);
                        _a = this;
                        return [4 /*yield*/, this.getUrl("stone.png")];
                    case 1:
                        // if(this.stone)
                        //     this.removeChild(this.stone);
                        _a.stone = _b.sent();
                        this.stone.width = 314;
                        this.stone.height = 29;
                        this.stone.x = this.stage.stageWidth / 2 - this.stone.width / 2 - 5;
                        this.stone.y = this.stage.stageHeight / 2 - this.stone.height / 2;
                        this.addChild(this.stone);
                        this.stone.mask = this.addMask(0, 0);
                        return [2 /*return*/];
                }
            });
        });
    };
    LoadingUI.prototype.addBack = function () {
        var back = new egret.Shape();
        back.graphics.beginFill(0x666666);
        back.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
        back.graphics.endFill();
        this.addChild(back);
    };
    LoadingUI.prototype.addMask = function (width, height) {
        //画一个遮罩正方形
        if (this.maskBack) {
            this.removeChild(this.maskBack);
            this.maskBack = null;
        }
        this.maskBack = new egret.Shape();
        this.maskBack.graphics.beginFill(0x1c1833, 1);
        this.maskBack.graphics.drawRect(this.stone.x, this.stone.y, width, height);
        this.maskBack.graphics.endFill();
        this.addChild(this.maskBack);
        return this.maskBack;
    };
    LoadingUI.prototype.addStoneBar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getUrl("stoneBar.png")];
                    case 1:
                        _a.stoneBar = _b.sent();
                        this.stoneBar.width = 374;
                        this.stoneBar.height = 48;
                        this.stoneBar.x = this.stage.stageWidth / 2 - this.stoneBar.width / 2;
                        this.stoneBar.y = this.stage.stageHeight / 2 - this.stoneBar.height / 2;
                        this.addChild(this.stoneBar);
                        return [2 /*return*/];
                }
            });
        });
    };
    LoadingUI.prototype.getUrl = function (url) {
        var textTrue = new egret.Texture();
        var il = new egret.ImageLoader();
        il.crossOrigin = 'anonymous';
        il.load(GameConfig.domainUrl + url);
        return new Promise(function (resolve) {
            il.once(egret.Event.COMPLETE, function (event) {
                var imageLoader = event.currentTarget;
                var texture = new egret.Texture();
                texture._setBitmapData(imageLoader.data);
                var bmp = new egret.Bitmap(texture);
                resolve(bmp);
            }, false);
        });
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        var price = 314 / total;
        if (this.stone) {
            this.stone.mask = this.addMask((current + 1) * price, 29);
        }
        console.log(price);
        console.log(current);
        console.log(this.stone);
        var num = Math.floor(((current + 1) / total) * 100);
        if (num > 100)
            num = 100;
        this.textField.text = "\u6B63\u5728\u642C\u8FD0\u661F\u7403: " + num + "%";
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
/*
    道具类
**/
var MonsterClass = (function (_super) {
    __extends(MonsterClass, _super);
    function MonsterClass(x, y, width, height) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.width = width;
        _this.height = height;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.drawProps, _this);
        return _this;
    }
    MonsterClass.prototype.drawProps = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.load(this.initMovieClip);
                return [2 /*return*/];
            });
        });
    };
    MonsterClass.prototype.moveRandom = function () {
        var _this = this;
        var fn = function () {
            var random = Math.floor(Math.random() * 1000) * 2;
            egret.Tween
                .get(_this.role)
                .to(_this.generateStyle(), 10 * random, egret.Ease.sineIn).call(function () {
                if (GameConfig.state === 0 || GameConfig.state === 2) {
                    return;
                }
                fn();
            });
        };
        fn();
    };
    MonsterClass.prototype.ran = function (end, start) {
        return Math.floor(Math.random() * (end - start) + start);
    };
    MonsterClass.prototype.generateStyle = function () {
        var minWidth = 100;
        var maxWidth = 300;
        var height = this.ran(maxWidth, minWidth);
        var width = height;
        var maxX = this.width - width;
        var maxY = this.height - height;
        var minX = this.x;
        var minY = this.y - 200;
        var x = this.ran(maxX, minX);
        var y = this.ran(maxY, minY);
        return {
            x: x, y: y, width: width, height: height
        };
    };
    MonsterClass.prototype.initMovieClip = function () {
        /*** 本示例关键代码段开始 ***/
        console.log(this._mcData, this._mcTexture);
        var mcDataFactory = new egret.MovieClipDataFactory(this._mcData, this._mcTexture);
        this.role = new egret.MovieClip(mcDataFactory.generateMovieClipData("monster"));
        this.role.x = this.generateStyle().x;
        this.role.y = this.generateStyle().y;
        this.role.frameRate = 5;
        this.addChild(this.role);
        this.role.gotoAndPlay(0, -1);
        this.moveRandom();
    };
    MonsterClass.prototype.load = function (callback) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var count, self, check, url, imgLoader;
            return __generator(this, function (_a) {
                count = 0;
                self = this;
                check = function () {
                    count++;
                    if (count == 2) {
                        callback.call(self);
                    }
                };
                url = GameConfig.domainUrl + 'monster.png';
                imgLoader = new egret.ImageLoader();
                imgLoader.crossOrigin = "anonymous"; // 跨域请求
                imgLoader.load(url); // 去除链接中的转义字符‘\’        
                imgLoader.once(egret.Event.COMPLETE, function (evt) {
                    if (evt.currentTarget.data) {
                        egret.log("加载头像成功: " + evt.currentTarget.data);
                        var texture = new egret.Texture();
                        texture.bitmapData = evt.currentTarget.data;
                        self._mcTexture = texture;
                        check();
                        console.log(texture);
                    }
                }, this);
                RES.getResByUrl('monster_json', function (ev) {
                    _this._mcData = ev;
                    check();
                }, this, RES.ResourceItem.TYPE_JSON);
                return [2 /*return*/];
            });
        });
    };
    MonsterClass.prototype.createBitmapByName = function (name, callback) {
        var url = GameConfig.domainUrl + name;
        var image = new eui.Image();
        image.addEventListener(egret.Event.COMPLETE, function (ev) {
            console.log('callback');
            callback(image);
        }, image);
        image.source = url;
        egret.ImageLoader.crossOrigin = "anonymous";
        return image;
    };
    return MonsterClass;
}(egret.Sprite));
__reflect(MonsterClass.prototype, "MonsterClass");
/*
    道具类
**/
var MovieClass = (function (_super) {
    __extends(MovieClass, _super);
    function MovieClass(x, y, width, height, movieName, rotate) {
        var _this = _super.call(this) || this;
        _this.image = new egret.Bitmap();
        _this.x = x;
        _this.y = y;
        _this.width = width;
        _this.height = height;
        _this.movieName = movieName;
        _this.rotate = rotate;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.drawProps, _this);
        return _this;
    }
    MovieClass.prototype.drawProps = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.load(this.initMovieClip);
                return [2 /*return*/];
            });
        });
    };
    MovieClass.prototype.moveRandom = function () {
        var _this = this;
        var fn = function () {
            var random = Math.floor(Math.random() * 1000) * 2;
            egret.Tween
                .get(_this.role)
                .to(_this.generateStyle(), 10 * random, egret.Ease.sineIn).call(function () {
                if (GameConfig.state === 0 || GameConfig.state === 2) {
                    return;
                }
                fn();
            });
        };
        fn();
    };
    MovieClass.prototype.ran = function (end, start) {
        return Math.floor(Math.random() * (end - start) + start);
    };
    MovieClass.prototype.generateStyle = function () {
        var minWidth = 100;
        var maxWidth = 300;
        var height = this.ran(maxWidth, minWidth);
        var width = height;
        var maxX = this.width - width;
        var maxY = this.height - height;
        var minX = this.x;
        var minY = this.y - 200;
        var x = this.ran(maxX, minX);
        var y = this.ran(maxY, minY);
        return {
            x: x, y: y, width: width, height: height
        };
    };
    MovieClass.prototype.initMovieClip = function () {
        /*** 本示例关键代码段开始 ***/
        console.log(this._mcData, this._mcTexture);
        var mcDataFactory = new egret.MovieClipDataFactory(this._mcData, this._mcTexture);
        this.role = new egret.MovieClip(mcDataFactory.generateMovieClipData(this.movieName));
        this.role.width = this.width;
        this.role.height = this.height;
        this.role.scaleX = this.role.scaleY = .5;
        this.role.x = -this.width / 2;
        this.role.y = -this.height / 2;
        this.role.rotation = this.rotate;
        this.role.frameRate = 60;
        this.addChild(this.role);
    };
    MovieClass.prototype.playMovie = function () {
        this.role.gotoAndPlay(0, 1);
        this.role.addEventListener(egret.Event.COMPLETE, function (e) {
            if (this.parent)
                this.parent.removeChild(this);
        }, this);
    };
    MovieClass.prototype.load = function (callback) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var count, self, check, url, imgLoader;
            return __generator(this, function (_a) {
                count = 0;
                self = this;
                check = function () {
                    count++;
                    if (count == 2) {
                        callback.call(self);
                    }
                };
                url = GameConfig.domainUrl + this.movieName + '.png';
                imgLoader = new egret.ImageLoader();
                imgLoader.crossOrigin = "anonymous"; // 跨域请求
                imgLoader.load(url); // 去除链接中的转义字符‘\’        
                imgLoader.once(egret.Event.COMPLETE, function (evt) {
                    if (evt.currentTarget.data) {
                        var texture = new egret.Texture();
                        texture.bitmapData = evt.currentTarget.data;
                        self._mcTexture = texture;
                        check();
                        console.log(texture);
                    }
                }, this);
                RES.getResByUrl(GameConfig.domainUrl + this.movieName + '.json', function (ev) {
                    _this._mcData = ev;
                    _this.initMovieClip();
                    check();
                }, this, 'json');
                return [2 /*return*/];
            });
        });
    };
    return MovieClass;
}(egret.Sprite));
__reflect(MovieClass.prototype, "MovieClass");
/*
    弹窗类
**/
var PopClass = (function (_super) {
    __extends(PopClass, _super);
    /**
     * type: 0 成功
     * type: 1 失败
     */
    function PopClass(x, y, width, height, type, label1, label2) {
        var _this = _super.call(this) || this;
        _this.image = new egret.Bitmap();
        _this.buttonWidth = 47;
        _this.width = 502;
        _this.height = 658;
        _this.x = width / 2 - _this.width / 2;
        _this.y = height / 2 - _this.height / 2;
        _this.type = type;
        _this.label1 = label1;
        _this.label2 = label2;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.drawProps, _this);
        return _this;
    }
    PopClass.prototype.drawProps = function () {
        if (this.hadConstructor)
            return;
        this.hadConstructor = true;
        this.taxNum = new TaxButton();
        this.taxNum.skinName = "resource/eui_skins/EndingSkin.exml";
        this.taxNum.label = this.label1;
        this.taxNum.label2 = this.label2;
        this.addChild(this.taxNum);
        if (this.type === 0)
            this.nextTax();
        else
            this.shareFriend();
        this.againGame();
        this.homeGame();
    };
    //下一关
    PopClass.prototype.nextTax = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var sky, fn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, GameConfig.createBitmapByName("next.png")];
                    case 1:
                        sky = _a.sent();
                        sky.width = sky.height = this.buttonWidth;
                        sky.x = this.x + this.width - 117 - sky.width;
                        sky.y = this.height - 120;
                        this.addChild(sky);
                        fn = function () {
                            var dataEvent = new DateEvent('myPrivateEvent');
                            dataEvent._type = 'next';
                            console.log("点击下一次了");
                            _this.dispatchEvent(dataEvent);
                        };
                        sky.addEventListener('touchEnd', fn, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    PopClass.prototype.shareFriend = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var sky;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, GameConfig.createBitmapByName("share.png")];
                    case 1:
                        sky = _a.sent();
                        sky.width = sky.height = this.buttonWidth;
                        sky.x = this.width / 2 - sky.width / 2;
                        sky.y = this.height - 120;
                        this.addChild(sky);
                        sky.addEventListener('touchEnd', function () {
                            var dataEvent = new DateEvent('myPrivateEvent');
                            dataEvent._type = 'share';
                            console.log("share");
                            _this.dispatchEvent(dataEvent);
                        }, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    PopClass.prototype.homeGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var sky;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, GameConfig.createBitmapByName("home.png")];
                    case 1:
                        sky = _a.sent();
                        sky.width = sky.height = this.buttonWidth;
                        sky.x = 60;
                        sky.y = this.height - 120;
                        this.addChild(sky);
                        sky.addEventListener('touchEnd', function () {
                            var dataEvent = new DateEvent('myPrivateEvent');
                            dataEvent._type = 'home';
                            console.log("next");
                            _this.dispatchEvent(dataEvent);
                        }, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    PopClass.prototype.againGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var sky;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, GameConfig.createBitmapByName("again.png")];
                    case 1:
                        sky = _a.sent();
                        sky.width = sky.height = this.buttonWidth;
                        if (this.type === 0)
                            sky.x = this.width / 2 - sky.width / 2;
                        else
                            sky.x = this.x + this.width - 117 - sky.width;
                        sky.y = this.height - 120;
                        this.addChild(sky);
                        sky.addEventListener('touchEnd', function () {
                            var dataEvent = new DateEvent('myPrivateEvent');
                            dataEvent._type = 'again';
                            console.log("next");
                            _this.dispatchEvent(dataEvent);
                        }, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    return PopClass;
}(egret.Sprite));
__reflect(PopClass.prototype, "PopClass");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 2:
                        result = _a.sent();
                        return [4 /*yield*/, platform.login()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 4:
                        userInfo = _a.sent();
                        /* 初始化 */
                        GameConfig.initData(userInfo);
                        platform.createInnerAudioContext();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, it, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        console.log("loading 1");
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        console.log("loading 2");
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        it = _a.sent();
                        console.log("loading 3");
                        this.stage.removeChild(loadingView);
                        console.log("oading 4");
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                console.log("加载成功");
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createGameScene = function () {
        var sky = this.createBitmapByName("bg_png");
        this.addChild(sky);
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        /* 背景色设置 */
        var shape = new egret.Shape;
        shape.graphics.beginFill(0x000000, 1);
        shape.graphics.lineStyle(1, 0x000000);
        shape.graphics.drawRect(0, 0, stageW, stageH);
        shape.graphics.endFill();
        this.addChild(shape);
        sky.width = stageW;
        sky.height = stageH;
        var pageTax = new TaxPage(stageW, stageH);
        var entryGame = new EntryGame(stageW, stageH, this);
        var gameTax = new GameTax(stageW, stageH, this);
        var taxInfinite = new TaxInfinite(stageW, stageH);
        var taxTimerFast = new TaxTimerFast(stageW, stageH);
        var gameShop = new GameShop(stageW, stageH);
        this.addChild(entryGame);
        PageBus.init(this);
        /* 放入路由 */
        // 主页面
        PageBus.pushPage({ page: entryGame, router: 'index' });
        // 商店
        PageBus.pushPage({ page: gameShop, router: 'gameShop' });
        // 关卡页面
        PageBus.pushPage({ page: pageTax, router: 'pageTax' });
        // 关卡游戏页面
        PageBus.pushPage({ page: gameTax, router: 'gameTax' });
        // 无限模式
        PageBus.pushPage({ page: taxInfinite, router: 'infinite' });
        //时间模式
        PageBus.pushPage({ page: taxTimerFast, router: 'TaxTimerFast' });
        // 商店
        // 加载配置
        var objs = RES.getRes("tax_json");
        GameConfig.taxConfig = objs;
        TalkConfig.npcTalk = objs.map(function (val) {
            return val.npcTalk;
        });
        TalkConfig.setTaxlabel();
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
/*
    道具类
**/
var Prop = (function (_super) {
    __extends(Prop, _super);
    function Prop(x, y, type, parents, callback, buy) {
        var _this = _super.call(this) || this;
        _this.width = 80;
        _this.height = 80;
        _this.image = new egret.Bitmap();
        _this.propName = ['星球锁定', '降维打击', '粒子交换', '增加步数', '增加时间'];
        _this.vertexSrc = "attribute vec2 aVertexPosition;\n" +
            "attribute vec2 aTextureCoord;\n" +
            "attribute vec2 aColor;\n" +
            "uniform vec2 projectionVector;\n" +
            "varying vec2 vTextureCoord;\n" +
            "varying vec4 vColor;\n" +
            "const vec2 center = vec2(-1.0, 1.0);\n" +
            "void main(void) {\n" +
            "   gl_Position = vec4( (aVertexPosition / projectionVector) + center , 0.0, 1.0);\n" +
            "   vTextureCoord = aTextureCoord;\n" +
            "   vColor = vec4(aColor.x, aColor.x, aColor.x, aColor.x);\n" +
            "}";
        _this.fragmentSrc1 = "precision lowp float;\n" +
            "varying vec2 vTextureCoord;\n" +
            "varying vec4 vColor;\n" +
            "uniform sampler2D uSampler;\n" +
            "uniform float customUniform;\n" +
            "void main(void) {\n" +
            "vec2 uvs = vTextureCoord.xy;\n" +
            "vec4 fg = texture2D(uSampler, vTextureCoord);\n" +
            "fg.rgb += sin(customUniform + uvs.x * 2. + uvs.y * 2.) * 0.2;\n" +
            "gl_FragColor = fg * vColor;\n" +
            "}";
        //当前道具还剩下多少
        _this.nowNum = null;
        _this.x = x;
        _this.y = y;
        _this.parents = parents;
        _this.type = type;
        _this.callback = callback;
        _this.buy = buy ? true : false;
        console.log("type");
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.drawProps, _this);
        return _this;
    }
    //  增加渐变
    Prop.prototype.addShader = function (rect) {
        if (GameConfig.helperArr[this.type] <= 0) {
            return;
        }
        var customFilter1 = new egret.CustomFilter(this.vertexSrc, this.fragmentSrc1, {
            customUniform: 0
        });
        this.rect_2.filters = [customFilter1];
        this.addEventListener(egret.Event.ENTER_FRAME, function () {
            customFilter1.uniforms.customUniform += 0.1;
            if (customFilter1.uniforms.customUniform > Math.PI * 2) {
                customFilter1.uniforms.customUniform = 0.0;
            }
        }, this);
    };
    // 增加底部道具名称
    Prop.prototype.addPropIntro = function (sprite) {
        this.propIntro = new egret.TextField();
        if (GameConfig.helperArr[this.type] > 0 && !this.buy)
            this.propIntro.text = this.propName[this.type];
        else
            this.propIntro.text = "\u552E: " + GameConfig.helperPrice[this.type] + "\u91D1";
        this.propIntro.width = 100;
        this.propIntro.y = 75;
        this.propIntro.size = 16;
        this.propIntro.textAlign = 'center';
        sprite.addChild(this.propIntro);
    };
    Prop.prototype.drawProps = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var sprite, _a, hit, shape;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        sprite = new egret.Sprite();
                        _a = this;
                        return [4 /*yield*/, GameConfig.createBitmapByName('rect_2.png')];
                    case 1:
                        _a.rect_2 = _b.sent();
                        return [4 /*yield*/, GameConfig.createBitmapByName(GameConfig.helperSrc[this.type] + ".png")];
                    case 2:
                        hit = _b.sent();
                        this.addPropIntro(sprite);
                        this.rect_2.height = this.rect_2.width = 100;
                        hit.width = hit.height = 70;
                        hit.x = (this.rect_2.width - hit.width) / 2;
                        sprite.addChild(this.rect_2);
                        this.addShader(this.rect_2);
                        sprite.addChild(hit);
                        sprite.x = this.x;
                        sprite.y = this.y;
                        shape = new egret.Shape();
                        shape.graphics.beginFill(0xff0000, 1);
                        shape.graphics.drawCircle(this.rect_2.width - 15, 20, 20);
                        shape.graphics.endFill();
                        this.text = new egret.TextField();
                        this.text.text = '' + GameConfig.helperArr[this.type];
                        this.text.width = 40;
                        this.text.x = this.rect_2.width - 35;
                        this.text.size = 20;
                        this.text.y = 10;
                        this.text.textAlign = 'center';
                        sprite.addChild(shape);
                        sprite.addChild(this.text);
                        this.addChild(sprite);
                        this.touchEnabled = true;
                        this.nowNum = GameConfig.helperArr[this.type];
                        this.addEventListener("touchEnd", function () {
                            // 如果是购买道具就返回
                            if (_this.buy) {
                                _this.callback(_this.type);
                                _this.addRect();
                                return;
                            }
                            //道具使用无效
                            if (_this.type === 2 && GameConfig.canChange) {
                                return;
                            }
                            _this.callback(_this.type);
                            // 如果点的是当前道具
                            if (_this.type + 1 === +GameConfig.helper) {
                                //移除方框
                                console.log('在这消失1');
                                GameConfig.helper = 0;
                                _this.removeRect();
                                return;
                            }
                            platform.playButtonMusic();
                            // 在游戏过程中购买道具
                            if (GameConfig.helperArr[_this.type] <= 0) {
                                _this.buyProp();
                                _this.propIntro.text = _this.propName[_this.type];
                                return;
                            }
                            GameConfig.helper = _this.type + 1;
                            _this.addRect();
                            //this.setNum();
                            // 根据不同类型调用不同事件
                            switch (_this.type) {
                                // 如果是任意交换道具
                                case 2:
                                    if (!GameConfig.canChange)
                                        _this.changeProp();
                                    GameConfig.setHelpArr(-1, _this.type);
                                    _this.setNum();
                                    break;
                                // 增加步数道具
                                case 3:
                                    console.log(GameConfig.nowTax);
                                    if (GameConfig.nowTax == -1 || GameConfig.taxConfig[GameConfig.nowTax].step === 0) {
                                        _this.unshowWords();
                                        return;
                                    }
                                    //this.unshowWords('我两秒钟后就消失掉了');
                                    GameConfig.helper = 0;
                                    GameConfig.setHelpArr(-1, _this.type);
                                    _this.setNum();
                                    _this.parents.updataStep(5);
                                    break;
                                //增加时间道具
                                case 4:
                                    if (GameConfig.nowTax != -1 && GameConfig.taxConfig[GameConfig.nowTax].time === 0) {
                                        //this.unshowWords('在此场景是无用道具哦~~');                        
                                        return;
                                    }
                                    _this.unshowWords();
                                    GameConfig.helper = 0;
                                    GameConfig.setHelpArr(-1, _this.type);
                                    _this.parents.setTime(10);
                                    _this.setNum();
                                    break;
                                default:
                                    return;
                            }
                        }, this);
                        this.addFilter();
                        return [2 /*return*/];
                }
            });
        });
    };
    Prop.prototype.buyProp = function () {
        if (GameConfig.coin < GameConfig.helperPrice[this.type]) {
            GameConfig.helperPrice[this.type];
            this.addTimeWords("\u91D1\u5E01\u4E0D\u591F\uFF0C\u53EF\u4EE5\u53BB\u65F6\u95F4\u6A21\u5F0F\u5237\u91D1\u5E01\u54E6~~");
            this.removePropText();
            return;
        }
        this.addShader(this.rect_2);
        GameConfig.setHelpArr(1, this.type);
        GameConfig.setCoin(-GameConfig.helperPrice[this.type]);
        this.parents.changeCoin();
        this.setNum();
        this.addTimeWords("\u60A8\u82B1\u8D39\u4E86" + GameConfig.helperPrice[this.type] + "\u8D2D\u4E70\u9053\u5177\u6210\u529F");
        return;
    };
    Prop.prototype.setNum = function (save) {
        if (this.nowNum === GameConfig.helperArr[this.type]) {
            return;
        }
        !save && this.removeRect();
        this.text.text = '' + GameConfig.helperArr[this.type];
        if (GameConfig.helperArr[this.type] > 0 && !this.buy)
            this.propIntro.text = this.propName[this.type];
        else
            this.propIntro.text = "\u552E: " + GameConfig.helperPrice[this.type] + "\u91D1";
        this.nowNum = GameConfig.helperArr[this.type];
        this.addFilter();
    };
    Prop.prototype.addRect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, GameConfig.createBitmapByName("rect_pop.png")];
                    case 1:
                        _a.rect = _b.sent();
                        this.rect.width = this.rect.height = 120;
                        this.rect.x = this.x - 10;
                        this.rect.y = this.y - 10;
                        this.addChild(this.rect);
                        this.propTextMethods(TalkConfig.propTalk[this.type]);
                        return [2 /*return*/];
                }
            });
        });
    };
    Prop.prototype.propTextMethods = function (words) {
        if (this.propText && this.propText.$parent) {
            this.removeChild(this.propText);
        }
        this.propText = new egret.TextField();
        this.propText.width = this.stage.stageWidth - 80;
        this.propText.y = this.y + 130;
        this.propText.text = words;
        this.propText.textAlign = 'center';
        this.propText.size = 20;
        this.propText.lineSpacing = 23;
        this.propText.x = -this.x + 40;
        if (this.timeWordsText && this.timeWordsText.$parent)
            this.removeChild(this.timeWordsText);
        this.addChild(this.propText);
    };
    Prop.prototype.addTimeWords = function (words) {
        var _this = this;
        if (this.timeWordsText && this.timeWordsText.$parent)
            this.removeChild(this.timeWordsText);
        this.timeWordsText = new egret.TextField();
        this.timeWordsText.width = this.stage.stageWidth - 80;
        this.timeWordsText.y = this.y + 130;
        this.timeWordsText.text = words;
        this.timeWordsText.textAlign = 'center';
        this.timeWordsText.size = 20;
        this.timeWordsText.lineSpacing = 23;
        this.timeWordsText.x = -this.x + 40;
        var timer = setTimeout(function () {
            clearTimeout(timer);
            if (_this.timeWordsText.$parent)
                _this.removeChild(_this.timeWordsText);
        }, 1000);
        this.addChild(this.timeWordsText);
    };
    //初始化道具
    Prop.prototype.init = function () {
        GameConfig.helper = 0;
        this.removeRect();
        // this.removeBar();
    };
    // 两秒钟后消失的话
    Prop.prototype.unshowWords = function () {
        var _this = this;
        setTimeout(function () {
            _this.removeRect();
        }, 2000);
    };
    //  任意交换道具方法
    Prop.prototype.changeProp = function () {
        var _this = this;
        var time = GameConfig.canChangeTime;
        this.setNum(true);
        GameConfig.helper = 0;
        GameConfig.canChange = true;
        this.addBar();
        var inter = setInterval(function () {
            time--;
            if (_this.stone) {
                _this.stone.mask = _this.addMask((90 - (time) * 10), 10);
            }
            if (time === 0) {
                GameConfig.canChange = false;
                clearInterval(inter);
                _this.removeBar();
                _this.removeRect();
            }
        }, 1000);
    };
    Prop.prototype.addBar = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.addStoneBar();
                this.addStone();
                return [2 /*return*/];
            });
        });
    };
    Prop.prototype.removeBar = function () {
        if (this.stone && this.stone.$parent)
            this.removeChild(this.stone);
        if (this.stoneBar && this.stoneBar.$parent)
            this.removeChild(this.stoneBar);
    };
    Prop.prototype.addStoneBar = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.stoneBar = new egret.Shape();
                this.stoneBar.graphics.beginFill(0xdc5354 + Math.floor(Math.random() * 100) * (0xffffff / 100), 1);
                this.stoneBar.graphics.lineStyle(2, 0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100));
                this.stoneBar.graphics.drawRect(this.x + 5, this.y + 60, 90, 10);
                this.stoneBar.graphics.endFill();
                this.addChild(this.stoneBar);
                return [2 /*return*/];
            });
        });
    };
    Prop.prototype.addStone = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.stone = new egret.Shape();
                this.stone.graphics.beginFill(0xff0000);
                this.stone.graphics.drawRect(this.x + 5, this.y + 60, 90, 10);
                this.stone.graphics.endFill();
                this.addChild(this.stone);
                this.stone.mask = this.addMask(0, 0);
                return [2 /*return*/];
            });
        });
    };
    Prop.prototype.addMask = function (width, height) {
        //画一个遮罩正方形
        if (this.maskBack) {
            this.removeChild(this.maskBack);
            this.maskBack = null;
        }
        this.maskBack = new egret.Shape();
        this.maskBack.graphics.beginFill(0x000000, 1);
        this.maskBack.graphics.drawRect(this.x + 5, this.y + 60, width, height);
        this.maskBack.graphics.endFill();
        this.addChild(this.maskBack);
        return this.maskBack;
    };
    Prop.prototype.removePropText = function () {
        if (this.propText && this.propText.$parent)
            this.removeChild(this.propText);
    };
    Prop.prototype.removeRect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.rect && this.rect.$parent)
                    this.removeChild(this.rect);
                this.removePropText();
                return [2 /*return*/];
            });
        });
    };
    Prop.prototype.addFilter = function () {
        if (GameConfig.helperArr[this.type] > 0) {
            this.filters = null;
            return;
        }
        if (this.rect_2)
            this.rect_2.filters = null;
        var colorMatrix = [
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0, 0, 0, 1, 0
        ];
        var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
        this.filters = [colorFlilter];
    };
    return Prop;
}(egret.Sprite));
__reflect(Prop.prototype, "Prop");
var Rock = (function (_super) {
    __extends(Rock, _super);
    function Rock(obj) {
        var _this = _super.call(this) || this;
        _this.x2 = 400;
        _this.y2 = 300;
        _this.rotate = 0;
        _this.isOne = false;
        Object.keys(obj).map(function (val) {
            _this[val] = obj[val];
        });
        _this.ballsSet = {
            x1: _this.x1,
            y1: _this.y1,
            x2: _this.x2,
            y2: _this.y2,
            x3: _this.x3,
            y3: _this.y3
        };
        console.log(_this.ballsSet);
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.drawProps, _this);
        return _this;
    }
    Rock.prototype.drawProps = function () {
        // setTimeout(()=>{
        //     let movie = new MovieClass(this.x3, this.y3,42,100,'rank',this.rotate)
        //     movie.width = 42
        //     movie.height = 100;
        //     movie.x = this.x3
        //     movie.y = this.y3
        //     this.addChild(movie)
        // },this.time)
    };
    Object.defineProperty(Rock.prototype, "factor", {
        get: function () {
            return 0;
        },
        set: function (value) {
            var oldx = this.ball.x;
            var oldy = this.ball.y;
            var ballSet = this.ballsSet;
            var x = (1 - value) * (1 - value) * ballSet.x1 + 2 * value * (1 - value) * ballSet.x2 + value * value * ballSet.x3;
            var y = (1 - value) * (1 - value) * ballSet.y1 + 2 * value * (1 - value) * ballSet.y2 + value * value * ballSet.y3;
            if (x === this.ball.x && y === this.ball.y)
                return;
            this.ball.x = x;
            this.ball.y = y;
            this.ball.rotation = this.getAngle(oldx, oldy, this.ball.x, this.ball.y);
            this.rotate = this.ball.rotation;
        },
        enumerable: true,
        configurable: true
    });
    Rock.prototype.getAngle = function (px, py, mx, my) {
        var x = Math.abs(px - mx);
        var y = Math.abs(py - my);
        var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        var cos = y / z;
        var radina = Math.acos(cos); //用反三角函数求弧度
        var angle = Math.floor(180 / (Math.PI / radina)); //将弧度转换成角度
        if (mx > px && my > py) {
            angle = 180 - angle;
        }
        if (mx == px && my > py) {
            angle = 180;
        }
        if (mx > px && my == py) {
            angle = 90;
        }
        if (mx < px && my > py) {
            angle = 180 + angle;
        }
        if (mx < px && my == py) {
            angle = 270;
        }
        if (mx < px && my < py) {
            angle = 360 - angle;
        }
        return angle;
    };
    Rock.prototype.shoot = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.ball = new MovieClass(this.x3, this.y3, 42, 100, 'rank', this.rotate);
                this.ball.width = 42;
                this.ball.height = 100;
                this.ball.x = this.x3;
                this.ball.y = this.y3;
                this.addChild(this.ball);
                egret.Tween.get(this, { loop: false }, false, false).to({ factor: 1 }, this.time).call(function () {
                    console.log('ok');
                    _this.ball.x = _this.x3;
                    _this.ball.y = _this.y3;
                    _this.ball.playMovie();
                });
                return [2 /*return*/];
            });
        });
    };
    return Rock;
}(egret.Sprite));
__reflect(Rock.prototype, "Rock");
/*
    步数
**/
var StepClass = (function (_super) {
    __extends(StepClass, _super);
    function StepClass(x, y, width, height, parents) {
        var _this = _super.call(this) || this;
        _this.image = new egret.Bitmap();
        _this.step = 0;
        _this.x = width / 2 - 236 / 2;
        _this.y = y - 100;
        _this.step = GameConfig.taxConfig[GameConfig.nowTax].step;
        _this.parents = parents;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addImage, _this);
        return _this;
    }
    StepClass.prototype.addImage = function () {
        this.taxNum = new TalkButton();
        this.taxNum.skinName = "resource/eui_skins/timerSkin.exml";
        this.taxNum.width = 236;
        this.taxNum.height = 281;
        this.addChild(this.taxNum);
    };
    StepClass.prototype.resetStep = function () {
        this.step = GameConfig.taxConfig[GameConfig.nowTax].step;
    };
    StepClass.prototype.changeStep = function (step) {
        if (step === 0) {
            this.parents.checkGameover();
        }
        var str = "\u6B65\u6570\uFF1A" + step;
        this.taxNum.label = str;
    };
    return StepClass;
}(eui.Group));
__reflect(StepClass.prototype, "StepClass");
/*
    人物对话页面
**/
var TalkContent = (function (_super) {
    __extends(TalkContent, _super);
    function TalkContent(width, height, parents) {
        var _this = _super.call(this) || this;
        _this.image = new egret.Bitmap();
        _this.nowWords = 0;
        _this.x = 0;
        _this.y = 0;
        _this.width = width;
        _this.height = height;
        _this.parents = parents;
        _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.mouseDown, _this);
        return _this;
    }
    TalkContent.prototype.mouseDown = function () {
        this.nowWords++;
        var arr;
        if (GameConfig.nowTax != -1)
            arr = TalkConfig.npcTalk[GameConfig.nowTax];
        else
            arr = TalkConfig.talkInfinite;
        this.showWhich(arr[this.nowWords]);
    };
    TalkContent.prototype.init = function () {
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addImage, this);
    };
    TalkContent.prototype.addImage = function () {
        // this.addBack();
        if (GameConfig.nowTax != -1)
            this.showWhich(TalkConfig.npcTalk[GameConfig.nowTax][this.nowWords]);
        else
            this.showWhich(TalkConfig.talkInfinite[this.nowWords]);
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addImage, this);
    };
    TalkContent.prototype.addGameBody = function () {
    };
    TalkContent.prototype.addBack = function () {
        /* 背景色设置 */
        var shape = new egret.Shape;
        shape.graphics.beginFill(0x000000, 0.9);
        shape.graphics.lineStyle(1, 0x000000);
        shape.graphics.drawRect(0, 0, this.width, this.height);
        shape.graphics.endFill();
        this.addChild(shape);
    };
    TalkContent.prototype.showWhich = function (obj) {
        if (!obj) {
            this.parents.success();
            this.removeChildren();
            if (this.$parent)
                this.parents.removeChild(this);
            return;
        }
        if (obj.type !== 1) {
            this.addNpc_2(obj.text);
        }
        else {
            this.addNpc_1(obj.text);
        }
    };
    TalkContent.prototype.addNpc_1 = function (words) {
        this.clearNpc();
        if (this.npc_1) {
            this.npc_1.label = words;
            this.addChild(this.npc_1);
            return;
        }
        this.npc_1 = new TaxButton();
        this.npc_1.skinName = "resource/eui_skins/TalkSkin.exml"; //假设Button.exml在resource文件夹下。
        this.npc_1.label = words;
        this.npc_1.y = this.height - this.npc_1.height;
        this.addChild(this.npc_1);
    };
    TalkContent.prototype.addNpc_2 = function (words) {
        this.clearNpc();
        if (this.npc_2) {
            this.npc_2.label = words;
            this.addChild(this.npc_2);
            return;
        }
        this.npc_2 = new TaxButton();
        this.npc_2.skinName = "resource/eui_skins/TalkSkin2.exml"; //假设Button.exml在resource文件夹下。
        this.npc_2.label = words;
        this.npc_2.y = this.height - this.npc_2.height;
        this.addChild(this.npc_2);
    };
    TalkContent.prototype.clearNpc = function () {
        this.npc_2 && this.npc_2.parent && this.npc_2.parent.removeChild(this.npc_2);
        this.npc_1 && this.npc_1.parent && this.npc_1.parent.removeChild(this.npc_1);
    };
    TalkContent.prototype.updataStep = function () {
    };
    TalkContent.prototype.createBitmapByName = function (name, width, height) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        if (width)
            result.width = width;
        if (height)
            result.height = height;
        return result;
    };
    return TalkContent;
}(egret.Sprite));
__reflect(TalkContent.prototype, "TalkContent");
/*
    定时器
**/
var Timer = (function (_super) {
    __extends(Timer, _super);
    function Timer(x, y, width, height, parents) {
        var _this = _super.call(this) || this;
        _this.image = new egret.Bitmap();
        _this.time = GameConfig.infiniteTime;
        _this.x = width / 2 - 236 / 2;
        _this.y = y - 100;
        _this.parents = parents;
        if (GameConfig.nowTax != -1)
            _this.time = GameConfig.taxConfig[GameConfig.nowTax].time;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addImage, _this);
        return _this;
    }
    Timer.prototype.addImage = function () {
        this.taxNum = new TalkButton();
        this.taxNum.skinName = "resource/eui_skins/timerSkin.exml";
        this.taxNum.width = 236;
        this.taxNum.height = 281;
        this.changeTimer();
        this.addChild(this.taxNum);
    };
    Timer.prototype.resetTime = function () {
        clearInterval(this.timer);
        if (GameConfig.nowTax != -1)
            this.time = GameConfig.taxConfig[GameConfig.nowTax].time;
        else
            this.time = GameConfig.infiniteTime;
        this.changeTimer();
    };
    Timer.prototype.setTime = function (num) {
        if (this.time)
            this.time += num;
        this.taxNum.label = "\u65F6\u95F4\uFF1A" + this.time--;
    };
    Timer.prototype.changeTimer = function () {
        var _this = this;
        var str = "\u65F6\u95F4\uFF1A" + this.time;
        this.taxNum.label = str;
        this.timer = setInterval(function () {
            if (GameConfig.state != 1) {
                clearInterval(_this.timer);
                return;
            }
            if (_this.time === 0) {
                clearInterval(_this.timer);
                if (GameConfig.nowTax === -1) {
                    _this.parents.gameOver();
                    return;
                }
                _this.parents.checkGameover();
            }
            var str = "\u65F6\u95F4\uFF1A" + _this.time--;
            _this.taxNum.label = str;
        }, 1000);
    };
    return Timer;
}(eui.Group));
__reflect(Timer.prototype, "Timer");
/*
**/
var Wall = (function (_super) {
    __extends(Wall, _super);
    function Wall(x, y, type, parent) {
        var _this = _super.call(this) || this;
        _this.width = GameBody.childW;
        _this.height = GameBody.childH;
        _this.image = new egret.Bitmap();
        _this.colors = [0x1ca5fc, 0x295c9d, 0x990000, 0x7f0000];
        _this.x = x * (_this.width);
        _this.y = y * (_this.height);
        _this.parents = parent;
        _this.type = type;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.drawDoors, _this);
        return _this;
    }
    Wall.prototype.drawDoors = function () {
        //this.addImage();
    };
    Wall.prototype.addImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, GameConfig.createBitmapByName("rect.png")];
                    case 1:
                        _a.img = _b.sent();
                        this.img.width = this.width;
                        this.img.height = this.height;
                        this.addChild(this.img);
                        return [2 /*return*/];
                }
            });
        });
    };
    return Wall;
}(egret.Sprite));
__reflect(Wall.prototype, "Wall");
/*
**/
var GameBody = (function (_super) {
    __extends(GameBody, _super);
    function GameBody(width, height, gameInf, parents) {
        var _this = _super.call(this) || this;
        _this.image = new egret.Bitmap();
        _this.bingos = [];
        _this.row = 2;
        _this.col = 10;
        _this.clears = [];
        // 事件锁，需控制的事件完成后才能继续进行
        _this.lock = true;
        _this.loack_2 = false;
        _this.clickLock = false;
        _this.padding = 50;
        _this.bingoType = 4;
        // 游戏是否结束
        _this.game = true;
        // 交换栈
        _this.stackArr = [];
        // 产生新的bingos
        _this.newBingos = [];
        _this.lastX = null;
        _this.lastY = null;
        _this.matrixes = [];
        _this.lockCheck = false;
        // 已经奖励过了
        _this.hadBingo = false;
        /************* 检查游戏函数ending************* */
        /*
         这列已经为空了，直接创建新的bingos。然后移动到对应位置
        **/
        _this.maxUncommon = 0;
        _this.width = width;
        _this.parents = parents;
        if (GameConfig.nowTax !== -1) {
            GameBody.childH = GameBody.childW = (_this.width - _this.padding) / GameConfig.taxConfig[GameConfig.nowTax].row;
            _this.row = GameConfig.taxConfig[GameConfig.nowTax].row;
            _this.col = GameConfig.taxConfig[GameConfig.nowTax].col;
            _this.bingoType = GameConfig.taxConfig[GameConfig.nowTax].bingoType;
            _this.speed = 300;
        }
        else {
            GameBody.childH = GameBody.childW = (_this.width - _this.padding) / GameConfig.infiniteRow;
            _this.row = GameConfig.infiniteRow;
            _this.col = GameConfig.infiniteCol;
            _this.bingoType = GameConfig.infiniteBingoType;
            _this.speed = GameConfig.infiniteColV;
        }
        _this.gameInf = gameInf;
        //this.x = (this.width - this.row*GameBody.childH) / 2
        _this.x = _this.padding / 2;
        _this.height = _this.col * GameBody.childH + 80;
        _this.y = height / 2 - _this.height / 2 - 80;
        //this.y = 100;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.drawDoors, _this);
        _this.touchEnabled = true;
        _this.addEventListener(egret.TouchEvent.TOUCH_END, _this.mouseDown, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.mouseTap, _this);
        return _this;
    }
    GameBody.prototype.initWinnerConfig = function () {
        var type = GameConfig.taxConfig[GameConfig.nowTax].checkType;
    };
    GameBody.prototype.mouseDown = function (ev) {
        var x = Math.floor((ev.stageX - this.x) / GameBody.childW);
        var y = Math.floor((ev.stageY - this.y) / GameBody.childH);
        var diffX = ev.stageX - this.lastX;
        var diffY = ev.stageY - this.lastY;
        console.log(diffX, diffY);
        var lastBingo = this.getObjSet(this.stackArr[0]);
        if (this.lock || this.loack_2)
            return;
        if (Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 0) {
                x = lastBingo.x + 1;
            }
            else if (diffX < 0) {
                x = lastBingo.x - 1;
            }
        }
        else if (Math.abs(diffX) < Math.abs(diffY)) {
            if (diffY > 0) {
                y = lastBingo.y + 1;
            }
            else if (diffY < 0) {
                y = lastBingo.y - 1;
            }
        }
        if (this.exitObj(this.bingos, x, y)) {
            // 栈里面已经有bingo了
            if (this.stackArr[0] && this.stackArr[0] !== this.bingos[x][y]) {
                if (this.checkChange(this.stackArr[0], this.bingos[x][y])) {
                    this.stackArr[0].chooseBingo();
                    this.bingos[x][y].chooseBingo();
                    this.stackArr.length = 0;
                }
            }
        }
    };
    /* 事件捕捉 */
    GameBody.prototype.mouseTap = function (ev) {
        var x = Math.floor((ev.stageX - this.x) / GameBody.childW);
        var y = Math.floor((ev.stageY - this.y) / GameBody.childH);
        this.lastX = ev.stageX;
        this.lastY = ev.stageY;
        if (this.lock || this.loack_2)
            return;
        if (this.exitObj(this.bingos, x, y)) {
            if (GameConfig.helper !== 0) {
                this.useHlper(x, y);
                return;
            }
            this.bingos[x][y].chooseBingo();
            // 栈里面已经有bingo了
            if (this.stackArr[0] && this.stackArr[0] !== this.bingos[x][y]) {
                if (this.checkChange(this.stackArr[0], this.bingos[x][y])) {
                    this.stackArr[0].chooseBingo();
                    this.bingos[x][y].chooseBingo();
                    this.stackArr.length = 0;
                }
                else {
                    this.stackArr[0].removeChoosed();
                    this.stackArr.length = 0;
                    this.stackArr.push(this.bingos[x][y]);
                }
            }
            else if (this.stackArr[0] && this.stackArr[0] === this.bingos[x][y]) {
                this.stackArr.length = 0;
            }
            else {
                this.stackArr.push(this.bingos[x][y]);
            }
        }
    };
    GameBody.prototype.useHlper = function (x, y) {
        if (GameConfig.helperArr[GameConfig.helper - 1] === 0) {
            GameConfig.helper = 0;
            return;
        }
        if (GameConfig.helperArr[GameConfig.helper - 1] >= 1) {
            GameConfig.setHelpArr(-1, GameConfig.helper - 1);
        }
        switch (GameConfig.helper) {
            // 清除相同的所有类别
            case 1:
                this.clearCommonBingo(x, y);
                this.gameInf.propsArr[GameConfig.helper - 1].setNum();
                break;
            // 清除九宫格 
            case 2:
                this.clearHelper(x, y);
                this.gameInf.propsArr[GameConfig.helper - 1].setNum();
                break;
            default:
                return true;
        }
        this.checkFun();
        GameConfig.helper = 0;
        return false;
    };
    // 道具1
    GameBody.prototype.clearHelper = function (x, y) {
        var _this = this;
        this.saveClears(x + "," + y);
        this.bingos.map(function (val, j) {
            return val.map(function (val2, i) {
                if (Math.abs(x - j) === 1 && Math.abs(y - i) <= 1) {
                    _this.saveClears(j + "," + i);
                }
                if (Math.abs(y - i) === 1 && Math.abs(x - j) <= 1) {
                    _this.saveClears(j + "," + i);
                }
                return val2;
            });
        });
    };
    // 道具2
    GameBody.prototype.clearCommonBingo = function (x, y) {
        var _this = this;
        this.saveClears(x + "," + y);
        var type = this.bingos[x][y].type;
        this.bingos.map(function (val, j) {
            return val.map(function (val2, i) {
                if (_this.bingos[j][i] && _this.bingos[j][i].type === type) {
                    _this.saveClears(j + "," + i);
                }
                return val2;
            });
        });
    };
    // 判断是否可以交换
    GameBody.prototype.checkChange = function (object_1, object_2) {
        var coord_1 = this.getObjSet(object_1);
        var coord_2 = this.getObjSet(object_2);
        var x = Math.abs(coord_1.x - coord_2.x);
        var y = Math.abs(coord_1.y - coord_2.y);
        // 两个在同一横线上
        if (x === 1 && y === 0) {
            // 一在二的右边
            if (coord_1.x - coord_2.x > 0) {
                this.changeObj(object_1, object_2, 4, 2);
                return true;
                // 一在二的左边
            }
            else {
                this.changeObj(object_1, object_2, 2, 4);
                return true;
            }
        }
        // 两个在同一竖线上
        if (y === 1 && x === 0) {
            // 一在二的下边
            if (coord_1.y - coord_2.y > 0) {
                this.changeObj(object_1, object_2, 1, 3);
                return true;
                // 一在二的上边
            }
            else {
                this.changeObj(object_1, object_2, 3, 1);
                return true;
            }
        }
        return false;
    };
    // 交换两个对象 direction是方向 1 2 3 4对应上右下左 onoff 是否做监测
    GameBody.prototype.changeObj = function (object_1, object_2, dir_1, dir_2, onoff) {
        var _this = this;
        this.loack_2 = true;
        var coord_1 = this.getObjSet(object_1);
        var coord_2 = this.getObjSet(object_2);
        var obj = this.bingos[coord_1.x][coord_1.y];
        this.bingos[coord_1.x][coord_1.y] = this.bingos[coord_2.x][coord_2.y];
        this.bingos[coord_2.x][coord_2.y] = obj;
        var p1 = object_1.moveToDirection(dir_1);
        var p2 = object_2.moveToDirection(dir_2);
        Promise.all([p1, p2]).then(function () {
            if (!onoff && !_this.checkFun() && !GameConfig.canChange) {
                _this.changeObj(object_2, object_1, dir_1, dir_2, true);
                return;
            }
            _this.loack_2 = false;
            _this.gameInf.updataStep();
        });
    };
    GameBody.prototype.drawDoors = function () {
        //this.addBack();
        this.drawBingo();
        this.gameInf.updataScroe();
        // this.gameInf.updataStep();
        this.addMask();
        if (GameConfig.nowTax != -1) {
            this.addDark();
            this.addType();
        }
    };
    GameBody.prototype.addBack = function () {
        /* 背景色设置 */
        var shape = new egret.Shape;
        shape.graphics.beginFill(0x000000, .7);
        shape.graphics.lineStyle(1, 0x000000);
        shape.graphics.drawRect(0, 0, this.width - this.padding, this.col * GameBody.childH);
        shape.graphics.endFill();
        this.addChild(shape);
    };
    GameBody.prototype.addMask = function () {
        //画一个遮罩正方形
        var circle = new egret.Shape();
        circle.graphics.beginFill(0x0000ff);
        circle.graphics.drawRect(this.x, this.y, this.width, this.col * GameBody.childH + 80);
        circle.graphics.endFill();
        this.$parent.addChild(circle);
        this.mask = circle;
    };
    // 星球变暗色 每隔三秒遍历一次
    GameBody.prototype.addDark = function () {
        var _this = this;
        if (!GameConfig.taxConfig[GameConfig.nowTax]["darkTime"]) {
            return;
        }
        var timer = setInterval(function () {
            if (GameConfig.state == 2 || GameConfig.state == 0) {
                clearInterval(timer);
            }
            _this.bingos.forEach(function (val) {
                val.forEach(function (val2) {
                    val2 && val2.beDark();
                });
            });
        }, 5000);
    };
    // 星球变成其他类型
    GameBody.prototype.addType = function () {
        var _this = this;
        if (!GameConfig.taxConfig[GameConfig.nowTax]["changeTime"]) {
            return;
        }
        var timer = setInterval(function () {
            if (GameConfig.state == 2 || GameConfig.state == 0) {
                clearInterval(timer);
            }
            if (_this.lock || _this.loack_2)
                return;
            _this.bingos.forEach(function (val) {
                val.forEach(function (val2) {
                    if (Math.floor(Math.random() * 10) === 2) {
                        val2 && val2.beType(_this.ran());
                        setTimeout(function () {
                            _this.checkFun();
                        }, _this.speed + 1);
                    }
                });
            });
            _this.checkFun();
        }, 5000);
    };
    GameBody.prototype.drawBingo = function () {
        for (var i = 0; i < this.row; i++) {
            var arrs = [];
            for (var j = 0; j < this.col; j++) {
                arrs.push(null);
                if (!this.judegeMatrix(i, j)) {
                    var wall = new Wall(i, j, 0, this);
                    this.matrixes.push(wall);
                    this.addChildAt(wall, 9);
                }
            }
            this.bingos.push(arrs);
        }
        //this.checkFun();
        this.updataGame();
    };
    GameBody.prototype.addBingo = function () {
        if (this.bingos[0])
            for (var k = 0; k < this.bingos[0].length; k++) {
                if (this.bingos[0][k]) {
                    this.game = false;
                    // return false;
                }
            }
        for (var i = 0; i < this.row; i++) {
            var ran = this.ran();
            var bingo = new Bingo(i, -1, ran, this);
            this.addChildAt(bingo, 0);
            this.newBingos.push(bingo);
        }
        this.moveToBottom();
    };
    GameBody.prototype.moveToBottom = function () {
        var _this = this;
        // 移动到的坐标
        var x, y;
        this.newBingos.map(function (val, index) {
            x = index;
            var bottomCoord = _this.getMyBottom(x, 0);
            if (bottomCoord) {
                y = bottomCoord.j;
            }
            else {
                y = _this.col;
            }
            if (y >= 1)
                val.moveToBottom(y - 1);
            _this.bingos[x][y - 1] = val;
        });
        this.newBingos.length = 0;
        this.checkFun();
    };
    GameBody.prototype.checkFun = function () {
        var _this = this;
        if (GameConfig.state !== 1)
            return;
        this.checkBingos();
        if (this.clears.length === 0) {
            this.lock = false;
            this.checkGameOver();
            return false;
        }
        this.lock = true;
        this.clearAll(function () {
            _this.updataGame();
        });
        return true;
    };
    GameBody.prototype.ran = function () {
        var end = 0;
        var start = this.bingoType;
        return Math.floor(Math.random() * (end - start) + start);
    };
    /* 检测是否能消除 */
    GameBody.prototype.checkBingos = function () {
        var that = this;
        this.bingos.forEach(function (val, x) {
            var onoff = false;
            val.forEach(function (vals, y) {
                that.checkAround({ x: x, y: y }, false);
            });
        });
    };
    /* 检测周围有没有相同色号,第二个参数限定反向 1,2,3,4 t r b l */
    GameBody.prototype.checkAround = function (coord, direction) {
        var x = coord.x, y = coord.y;
        var obj = this.bingos[x][y];
        if (!obj)
            return;
        var type = obj.type;
        if (type >= 100)
            return;
        if (!direction) {
            /* 检测四个方向 */
            if (this.exitObj(this.bingos, x, y - 1) && this.bingos[x][y - 1].type === type) {
                if (this.checkAround({ x: x, y: y - 1 }, 1)) {
                    this.saveClears(x + "," + y);
                    this.saveClears(x + "," + (y - 1));
                }
            }
            if (this.exitObj(this.bingos, x + 1, y) && this.bingos[x + 1][y].type === type) {
                if (this.checkAround({ x: x + 1, y: y }, 2)) {
                    this.saveClears(x + "," + y);
                    this.saveClears((x + 1) + "," + y);
                }
            }
            if (this.exitObj(this.bingos, x, y + 1) && this.bingos[x][y + 1].type === type) {
                if (this.checkAround({ x: x, y: y + 1 }, 3)) {
                    this.saveClears(x + "," + y);
                    this.saveClears(x + "," + (y + 1));
                }
            }
            if (this.exitObj(this.bingos, x - 1, y) && this.bingos[x - 1][y].type === type) {
                if (this.checkAround({ x: x - 1, y: y }, 4)) {
                    this.saveClears(x + "," + y);
                    this.saveClears((x - 1) + "," + y);
                }
            }
            return;
        }
        switch (direction) {
            case 1:
                if (this.exitObj(this.bingos, x, y - 1) && type === this.bingos[x][y - 1].type) {
                    this.saveClears(x + "," + (y - 1));
                    return true;
                }
                break;
            case 2:
                if (this.exitObj(this.bingos, x + 1, y) && type === this.bingos[x + 1][y].type) {
                    this.saveClears((x + 1) + "," + y);
                    return true;
                }
                break;
            case 3:
                if (this.exitObj(this.bingos, x, y + 1) && type === this.bingos[x][y + 1].type) {
                    this.saveClears(x + "," + (y + 1));
                    return true;
                }
                break;
            case 4:
                if (this.exitObj(this.bingos, x - 1, y) && type === this.bingos[x - 1][y].type) {
                    this.saveClears((x - 1) + "," + y);
                    return true;
                }
                break;
            default:
                return false;
        }
    };
    /* 判断对象是否存在 */
    GameBody.prototype.exitObj = function (obj, x, y) {
        if (x < 0 || y < 0 || x > this.row || y > this.col || !obj[x] || !obj[x][y]) {
            return false;
        }
        return true;
    };
    /* 清除栈 */
    GameBody.prototype.saveClears = function (string) {
        for (var i = 0; i < this.clears.length; i++) {
            if (this.clears[i] === string)
                return;
        }
        this.clears.push(string);
    };
    /* 清除函数 */
    GameBody.prototype.clearAll = function (fn) {
        var _this = this;
        var pros = [];
        if (this.clears.length !== 0) {
            platform.playClearMusic();
        }
        this.clears.map(function (val) {
            var i = +val.split(",")[0];
            var j = +val.split(",")[1];
            if (_this.bingos[i] && _this.bingos[i][j]) {
                pros.push(_this.bingos[i][j].killSelf());
                _this.gameInf.myScore += 50;
                delete _this.bingos[i][j];
            }
        });
        // 如果当前消除的个数大于7，则有几率触发道具生成
        if (this.clears.length >= 7 && GameConfig.nowTax === -1) {
            this.gameInf.productHelper();
        }
        this.clears.length = 0;
        return Promise.all(pros).then(function () {
            fn();
            _this.gameInf.updataScroe();
        });
    };
    GameBody.prototype.judegeMatrix = function (i, j) {
        var satus = true;
        if (GameConfig.nowTax === -1) {
            return true;
        }
        GameConfig.taxConfig[GameConfig.nowTax].matrix.map(function (val) {
            if (val.x === i && val.y === j) {
                satus = false;
            }
        });
        return satus;
    };
    /* 更新函数 */
    GameBody.prototype.updataGame = function () {
        var _this = this;
        // 游戏结束
        if (GameConfig.state == 2 || GameConfig.state == 0) {
            return;
        }
        for (var i = 0; i < this.bingos.length; i++) {
            var now = this.bingos[i];
            var num = undefined; //这个参数记录当前j，辅助计算createNewBingos的下降距离
            for (var j = this.col - 1; j >= 0; j--) {
                // 当前没有方块，去上级拿
                if (!now[j] && this.judegeMatrix(i, j)) {
                    var topBingo = this.getMyTop(i, j - 1);
                    if (topBingo) {
                        topBingo.moveToBottom(j);
                        this.deleteBingos(topBingo);
                        this.bingos[i][j] = topBingo;
                    }
                    else {
                        if (isNaN(num)) {
                            num = j;
                            this.createNewBingos(i, j, 1);
                            // 如果num是数字，说明前面有num下来.
                        }
                        else {
                            // 这列第一个需要重新产生的
                            if (num === j)
                                this.createNewBingos(i, j, 1);
                            else {
                                this.createNewBingos(i, j, num - j + 1);
                            }
                        }
                        continue;
                    }
                    // 当前有方块，记录下坐标
                }
                else {
                }
            }
            num = undefined;
        }
        setTimeout(function () {
            _this.checkFun();
        }, this.speed);
    };
    /* 檢查游戲是否真的結束包括时间、熵值、无解 */
    GameBody.prototype.checkGameOver = function () {
        var _this = this;
        /* 如果不在运行中，就结束游戏 */
        if (GameConfig.state !== 1) {
            return;
        }
        console.log('判断有没有解法');
        // 這邊簡單記錄一下bingos 没有解法了，就乱序
        if (!this.cloneBingos()) {
            this.sortBingos();
            setTimeout(function () {
                _this.checkFun();
            }, this.speed);
            return;
        }
        if (GameConfig.nowTax !== -1 && this.gameInf.myScore >= GameConfig.taxConfig[GameConfig.nowTax].myScore) {
            if (this.hadBingo) {
                this.parents.passTax(this.gameInf.myScore);
                GameConfig.state = 2;
            }
            else {
                this.shootBingos();
                this.lock = true;
                this.hadBingo = true;
            }
        }
    };
    GameBody.prototype.shootBingos = function () {
        var _this = this;
        var set = [];
        this.bingos.forEach(function (val, x) {
            val.forEach(function (val2, y) {
                var exit = _this.exitObj(_this.bingos, x, y);
                if (exit && val2.canClear()) {
                    set.push({
                        x: x,
                        y: y
                    });
                }
            });
        });
        setTimeout(function () {
            _this.checkFun();
        }, 3000);
        set.map(function (val, index) {
            var arr = [{ x: 0, y: 1 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 1 },];
            var obj = _this.bingos[val.x][val.y];
            _this.saveClears(val.x + "," + val.y);
            _this.parents.shootRock({
                x: obj.x + _this.x + GameBody.childW / 2,
                y: obj.y + _this.y + GameBody.childH / 2,
            });
        });
    };
    GameBody.prototype.sortBingos = function () {
        var _this = this;
        var arr = [], set = [];
        this.bingos.forEach(function (val, x) {
            val.forEach(function (val2, y) {
                if (val2) {
                    arr.push(val2);
                    set.push({
                        x: x,
                        y: y
                    });
                }
            });
        });
        arr.sort(function () {
            return Math.random() > .5 ? -1 : 1;
        });
        var i = 0;
        this.bingos.forEach(function (val, x) {
            val.forEach(function (val2, y) {
                if (arr[i] && _this.judegeMatrix(x, y)) {
                    _this.bingos[x][y] = arr[i];
                    _this.bingos[x][y].moveToSet(set[i].x, set[i].y);
                    i++;
                }
            });
        });
    };
    GameBody.prototype.cloneBingos = function () {
        var arr = [];
        var bingos = this.bingos;
        for (var i = 0; i < bingos.length; i++) {
            var arr_1 = [];
            for (var j = 0; j < bingos[i].length; j++) {
                if (!this.judegeMatrix(i, j)) {
                    console.log('这个元素不用去检测');
                    console.log(i, j);
                    console.log(bingos[i][j]);
                    console.log(bingos);
                    break;
                }
                if (this.checkLineExis(i, j))
                    return true;
            }
            arr.push(arr_1);
        }
        return false;
    };
    // 检查一行内三个对象是否存在 direction 对应0 1 2 3 上右下左
    GameBody.prototype.checkLineExis = function (i, j) {
        var _this = this;
        // 以下是根目录的地图编辑器生成
        var AllCoord = [
            // 向下交换后检测数组
            [{ i: i - 2, j: j + 1 }, { i: i - 1, j: j + 1 }, { i: i, j: j }, { i: i + 1, j: j + 1 }, { i: i + 2, j: j + 1 }],
            [{ i: i - 2, j: j }, { i: i - 1, j: j }, { i: i, j: j + 1 }, { i: i + 1, j: j }, { i: i + 2, j: j }],
            [{ i: i, j: j - 2 }, { i: i, j: j - 1 }, { i: i, j: j + 1 }],
            [{ i: i, j: j }, { i: i, j: j + 2 }, { i: i, j: j + 3 }],
            // 向右交换
            [{ i: i, j: j - 2 }, { i: i, j: j - 1 }, { i: i + 1, j: j }, { i: i, j: j + 1 }, { i: i, j: j + 2 }],
            [{ i: i + 1, j: j - 2 }, { i: i + 1, j: j - 1 }, { i: i, j: j }, { i: i + 1, j: j + 1 }, { i: i + 1, j: j + 2 }],
            [{ i: i - 2, j: j }, { i: i - 1, j: j }, { i: i + 1, j: j }],
            [{ i: i, j: j }, { i: i + 2, j: j }, { i: i + 3, j: j }]
        ];
        var checkType = function (arr) {
            var now, add = 1, can = false;
            arr.map(function (val, index) {
                var i = val.i, j = val.j;
                var exitObj = _this.exitObj(_this.bingos, i, j);
                if (index !== 0) {
                    // now属于不能被消除的100
                    if (exitObj && now < 100 && now === _this.bingos[i][j].type)
                        add++;
                    else
                        add = 1;
                }
                now = exitObj ? _this.bingos[i][j].type : null;
                if (add >= 3)
                    can = true;
            });
            return can;
        };
        for (var num = 0; num < 4; num++) {
            var judege = this.judegeMatrix(i + 1, j);
            // 要交换的元素不存在
            if (judege) {
                if (checkType(AllCoord[num]))
                    return true;
            }
        }
        for (var num = 4; num < AllCoord.length; num++) {
            var judege = this.judegeMatrix(i, j + 1);
            // 要交换的元素不存在
            if (judege) {
                if (checkType(AllCoord[num]))
                    return true;
            }
        }
        return false;
    };
    GameBody.prototype.createNewBingos = function (i, j, set) {
        var arr = [];
        var ran = this.ran();
        // config类型
        var config = GameConfig.taxConfig[GameConfig.nowTax];
        if (GameConfig.nowTax !== -1 && config.checkType === 'uncommon' && ran === 3) {
            if (this.maxUncommon < config['uncommon']) {
                ran = 100;
                this.maxUncommon++;
            }
        }
        // 注释
        var bingo = new Bingo(i, -set, ran, this);
        this.addChildAt(bingo, 0);
        bingo.moveToBottom(j);
        this.bingos[i][j] = bingo;
    };
    /* 得到上级方块 */
    GameBody.prototype.getMyTop = function (i, j) {
        if (this.bingos[i][j]) {
            return this.bingos[i][j];
        }
        if (j < 0)
            return false;
        return this.getMyTop(i, j - 1);
    };
    /* 得到下级方块 */
    GameBody.prototype.getMyBottom = function (i, j) {
        if (this.bingos[i][j]) {
            return { i: i, j: j };
        }
        if (j > this.col)
            return false;
        return this.getMyBottom(i, j + 1);
    };
    /* 删除bingos里面的对象 */
    GameBody.prototype.deleteBingos = function (obj) {
        var _this = this;
        this.bingos.map(function (val, index) {
            val.map(function (val2, index2) {
                if (val2 === obj) {
                    delete _this.bingos[index][index2];
                }
            });
        });
    };
    // 得到对象当前在二维数组的位置
    GameBody.prototype.getObjSet = function (obj) {
        var x, y;
        this.bingos.map(function (val, index) {
            val.map(function (val2, index2) {
                if (val2 === obj) {
                    x = index;
                    y = index2;
                }
            });
        });
        return {
            x: x, y: y
        };
    };
    GameBody.childW = 90;
    GameBody.childH = 90;
    return GameBody;
}(egret.Sprite));
__reflect(GameBody.prototype, "GameBody");
/*
**/
var TalkConfig = (function () {
    function TalkConfig() {
    }
    TalkConfig.setTaxlabel = function () {
        TalkConfig.npcTalk.map(function (val) {
            var arr = '';
            val.forEach(function (talk) {
                arr += talk.text + '\n';
            });
            arr = arr.slice(0, 90) + '......';
            TalkConfig.taxLabel.push(arr);
        });
    };
    TalkConfig.taxArr = ['一', '二', '三', '四', '五', '六', '七', '八'];
    TalkConfig.lockLabel = '探测器还未到达此区域，未知的世界太危险了，先解锁前面的区域吧';
    TalkConfig.taxLabel = [];
    TalkConfig.propTalk = ['消灭指定的所有星球类型',
        '消灭指定星球及其周围的八颗星球',
        "\u5F53\u524D\u4F60\u53EF\u4EE5\u4EA4\u6362\u4EFB\u610F\u4E24\u4E2A\u661F\u7403\u7684\u4F4D\u7F6E\uFF0C\u6301\u7EED" + GameConfig.canChangeTime + "s",
        '当前增加五步，限关卡模式',
        '使用时间机器，增加10s时间',];
    /* npc台词 */
    TalkConfig.talkInfinite = [{
            type: 1,
            text: '这里是时间模式，你只有100s的时间，人品与技术的双重考验，你只需记住三点：快！快！快！'
        }];
    TalkConfig.npcTalk = [];
    TalkConfig.failWords = ['失败了？没关系再来一次！？', '除了实力还需要运气', '宇宙的熵越来越高了，降熵的速度都赶不上增熵了！', '运用你的智慧......'];
    return TalkConfig;
}());
__reflect(TalkConfig.prototype, "TalkConfig");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
/*
**/
var EntryGame = (function (_super) {
    __extends(EntryGame, _super);
    function EntryGame(width, height, parent) {
        var _this = _super.call(this) || this;
        _this.image = new egret.Bitmap();
        /**
         * 创建场景界面
         * Create scene interface
         */
        // protected createGameScene(): void {
        //     this.btnClose = new eui.Button();
        //     this.btnClose.label = "btnClose!";
        //     this.btnClose.y = 35;
        //     this.btnClose.horizontalCenter = 0;
        //     this.addChild(this.btnClose);
        //     this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
        //     // /**
        //     //  * 当前按钮会退出小游戏线程
        //     //  */
        //     // let close = new eui.Button();
        //     // close.y = 135;
        //     // close.label = '退出';
        //     // this.addChild(close);
        //     // close.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
        //     //     wx.exitMiniProgram({
        //     //         success: (res) => {
        //     //             console.log('退出成功', res);
        //     //         },
        //     //         fail: (err) => {
        //     //             console.log('退出失败', err);
        //     //         },
        //     //         complete: (res) => {
        //     //         }
        //     //     })
        //     // }, this);
        //     this.addEventListener(egret.TouchEvent.TOUCH_TAP, (evt: egret.TouchEvent) => {
        //         console.log('输出主域点击事件');
        //     }, this)
        // }
        _this.isdisplay = false;
        _this.x = 0;
        _this.y = 0;
        _this.width = width;
        _this.height = height;
        _this.parents = parent;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addImage, _this);
        return _this;
    }
    EntryGame.prototype.addImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        back = new Background(0, 0, this.width, this.height);
                        this.addChild(back);
                        return [4 /*yield*/, this.addTitle()];
                    case 1:
                        _a.sent();
                        this.addNPC();
                        return [4 /*yield*/, this.addStarLand()];
                    case 2:
                        _a.sent();
                        this.meau();
                        this.shootRock({
                            x: 200,
                            y: 200
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    EntryGame.prototype.shootRock = function (bingo) {
        var rock = new Rock({
            x1: this.width / 2,
            y1: this.height,
            x3: bingo.x,
            y3: bingo.y,
            width: this.width,
            height: this.height,
            time: 1000
        });
        this.addChild(rock);
    };
    /**
     * 关闭按钮和分享按钮
    */
    EntryGame.prototype.drawButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, GameConfig.createBitmapByName("share.png")];
                    case 1:
                        _a.shareButton = _d.sent();
                        //this.addChild(this.shareButton);
                        this.shareButton.width = 207;
                        this.shareButton.height = 80;
                        this.shareButton.x = 20;
                        this.shareButton.y = this.height - this.shareButton.height - 20;
                        this.shareButton.addEventListener("touchEnd", function () {
                            wx.shareAppMessage({
                                title: "大夏天的，来消除几颗星球吧",
                                imageUrl: '',
                                query: '22',
                                success: function () {
                                },
                                fail: function () {
                                },
                                complete: function () {
                                }
                            });
                        });
                        _b = this;
                        return [4 /*yield*/, GameConfig.createBitmapByName("share.png")];
                    case 2:
                        _b.shareMyCirle = _d.sent();
                        //this.addChild(this.shareMyCirle);
                        this.shareMyCirle.width = 207;
                        this.shareMyCirle.height = 80;
                        this.shareMyCirle.x = this.width - this.shareMyCirle.width - 20;
                        this.shareMyCirle.y = this.height - this.shareMyCirle.height - 20;
                        this.shareMyCirle.addEventListener("touchEnd", function () {
                            platform.shareAppMessage("\u5FEB\u6765\u548C\u6211\u4E00\u7EDD\u9AD8\u4E0B\u5427\uFF0C\u6211\u5DF2\u7ECF\u95EF\u5230\u7B2C" + GameConfig.maxTax + "\u5173\u4E86!");
                        });
                        _c = this;
                        return [4 /*yield*/, GameConfig.createBitmapByName("close.png")];
                    case 3:
                        _c.closeButton = _d.sent();
                        this.closeButton.width = 80;
                        this.closeButton.height = 80;
                        this.closeButton.x = this.width / 2 - this.closeButton.width / 2;
                        this.closeButton.y = this.height - this.closeButton.height - 20;
                        this.closeButton.addEventListener('touchEnd', function () {
                            _this.isdisplay = true;
                            _this.onButtonClick();
                        }, this);
                        this.addChild(this.closeButton);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 点击按钮
     * Click the button
     */
    EntryGame.prototype.onButtonClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var openDataContext, bitmapdata_1, texture;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        openDataContext = wx.getOpenDataContext();
                        if (!this.isdisplay) return [3 /*break*/, 1];
                        this.bitmap.parent && this.bitmap.parent.removeChild(this.bitmap);
                        this.rankingListMask.parent && this.rankingListMask.parent.removeChild(this.rankingListMask);
                        this.isdisplay = false;
                        this.removeChild(this.closeButton);
                        return [3 /*break*/, 3];
                    case 1:
                        // 增加关闭按钮和分享按钮
                        //处理遮罩，避免开放数据域事件影响主域。
                        this.rankingListMask = new egret.Shape();
                        this.rankingListMask.graphics.beginFill(0x000000, 1);
                        this.rankingListMask.graphics.drawRect(0, 0, this.stage.width, this.stage.height);
                        this.rankingListMask.graphics.endFill();
                        this.rankingListMask.alpha = 0.5;
                        this.rankingListMask.touchEnabled = true;
                        this.addChild(this.rankingListMask);
                        openDataContext.postMessage({
                            text: 'refresh',
                            year: (new Date()).getFullYear()
                        });
                        return [4 /*yield*/, this.drawButton()];
                    case 2:
                        _a.sent();
                        bitmapdata_1 = new egret.BitmapData(window["sharedCanvas"]);
                        bitmapdata_1.$deleteSource = false;
                        texture = new egret.Texture();
                        texture._setBitmapData(bitmapdata_1);
                        this.bitmap = new egret.Bitmap(texture);
                        this.bitmap.width = this.stage.stageWidth;
                        this.bitmap.height = this.stage.stageHeight;
                        this.addChild(this.bitmap);
                        egret.startTick(function (timeStarmp) {
                            egret.WebGLUtils.deleteWebGLTexture(bitmapdata_1.webGLTexture);
                            bitmapdata_1.webGLTexture = null;
                            return false;
                        }, this);
                        //主要示例代码结束            
                        this.isdisplay = true;
                        _a.label = 3;
                    case 3:
                        //发送消息
                        console.log("发送消息");
                        openDataContext.postMessage({
                            isDisplay: this.isdisplay,
                            text: 'hello',
                            year: (new Date()).getFullYear()
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    EntryGame.prototype.addNPC = function () {
        var _this = this;
        var sky = this.createBitmapByName("npc_1_png", 256, 282);
        this.addChild(sky);
        sky.x = 100;
        sky.y = this.height - sky.height / 0.75;
        var fn = function () {
            egret.Tween.get(sky)
                .to({ y: _this.height - sky.height / 0.7 }, 3000, egret.Ease.sineIn).call(fn2);
        };
        var fn2 = function () {
            egret.Tween.get(sky)
                .to({ y: _this.height - sky.height / 0.75 }, 3000, egret.Ease.sineIn).call(fn);
        };
        fn();
    };
    EntryGame.prototype.addTitle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sky;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, GameConfig.createBitmapByName("title.png")];
                    case 1:
                        sky = _a.sent();
                        sky.width = sky.height = 500;
                        this.addChild(sky);
                        sky.x = this.width / 2 - 300;
                        sky.y = 90;
                        return [2 /*return*/];
                }
            });
        });
    };
    EntryGame.prototype.addBoom = function () {
        var system = new particle.GravityParticleSystem(RES.getRes("newParticle2_png"), RES.getRes("newParticle2_json"));
        this.addChild(system);
        system.start();
        // let sky = this.createBitmapByName("boom_png",this.width-50,(this.width-50)/0.736);
        // this.addChild(sky);
        // sky.x = 150;
        // sky.y = 40;
        // sky.scaleX = 0.8;
        // sky.scaleY = 0.8;
        system.y = 200;
    };
    EntryGame.prototype.addBlackHead = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sky, funcChange, iDirection, fn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, GameConfig.createBitmapByName("black2.png")];
                    case 1:
                        sky = _a.sent();
                        sky.width = 480;
                        sky.height = 485;
                        this.addChild(sky);
                        funcChange = function () {
                            sky.rotation += 1 * iDirection;
                        };
                        iDirection = 1;
                        //egret.Tween.get( sky ).to( {width:0,height:0}, 600, egret.Ease.sineIn )
                        sky.x = this.width / 2 - sky.width / 1.5;
                        sky.y = 40;
                        sky.anchorOffsetX = sky.width / 2;
                        sky.anchorOffsetY = sky.height / 2;
                        this.addChild(sky);
                        fn = function () {
                            egret.Tween.get(sky, { onChange: funcChange, onChangeObj: sky })
                                .to({}, 20000, egret.Ease.sineIn).call(fn);
                        };
                        fn();
                        return [2 /*return*/];
                }
            });
        });
    };
    EntryGame.prototype.addStarLand = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sky;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, GameConfig.createBitmapByName("starLand.png")];
                    case 1:
                        sky = _a.sent();
                        sky.width = this.width;
                        sky.height = this.width / 1.812;
                        this.addChild(sky);
                        sky.scaleY = 1.5;
                        sky.scaleX = 1.5;
                        sky.y = this.height - sky.height * 1.5;
                        return [2 /*return*/];
                }
            });
        });
    };
    EntryGame.prototype.meau = function () {
        var _this = this;
        var skins = ['ButtonModel1', 'ButtonModel2', 'ButtonMore', 'ButtonHelp'];
        var labelText = ['剧情模式', '时间模式', '商店', '排行榜'];
        var _loop_1 = function (i) {
            var button = new eui.Button();
            button.touchEnabled = true;
            button.x = this_1.width / 2;
            button.label = labelText[i];
            button.width = 236;
            button.height = 81;
            button.y = i * 90 + this_1.height / 2;
            //button.rotation = 10+i*2;
            button.enabled = true;
            this_1.addChild(button);
            button.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.bindClickFn(i);
                platform.playButtonMusic();
            }, this_1, false, i);
        };
        var this_1 = this;
        for (var i = 0; i < skins.length; i++) {
            _loop_1(i);
        }
    };
    EntryGame.prototype.saveData = function () {
        var openDataContext = wx.getOpenDataContext();
        openDataContext.postMessage({
            array: [1, 23],
            type: 'save',
            year: (new Date()).getFullYear()
        });
    };
    /* 给按钮绑定事件 */
    EntryGame.prototype.bindClickFn = function (i) {
        console.log(i);
        switch (i) {
            case 0:
                PageBus.gotoPage("gameTax");
                break;
            case 1:
                GameConfig.nowTax = -1;
                GameConfig.state = 1;
                PageBus.gotoPage("infinite");
                break;
            case 2:
                PageBus.gotoPage("gameShop");
                break;
            case 3:
                this.onButtonClick();
                break;
            default:
                GameConfig.setHelpArr(1, 0);
                return;
        }
    };
    EntryGame.prototype.createBitmapByName = function (name, width, height) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        if (width)
            result.width = width;
        if (height)
            result.height = height;
        return result;
    };
    return EntryGame;
}(egret.Sprite));
__reflect(EntryGame.prototype, "EntryGame");
/*
    无尽模式
**/
var GameShop = (function (_super) {
    __extends(GameShop, _super);
    function GameShop(width, height) {
        var _this = _super.call(this) || this;
        _this.image = new egret.Bitmap();
        _this.check = 0;
        _this.propsArr = [];
        _this.x = 0;
        _this.y = 0;
        _this.width = width;
        _this.height = height;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addImage, _this);
        return _this;
    }
    GameShop.prototype.addImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.addBackground();
                this.addProps();
                this.myCoin();
                this.addBack();
                this.addButton();
                return [2 /*return*/];
            });
        });
    };
    GameShop.prototype.addButton = function () {
        var _this = this;
        var button = new eui.Button();
        button.touchEnabled = true;
        button.label = '购买';
        button.width = 236;
        button.x = this.width / 2 - button.width / 2;
        button.height = 81;
        button.y = this.height - 200;
        //button.rotation = 10+i*2;
        button.enabled = true;
        this.addChild(button);
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.propsArr[_this.check].buyProp();
            platform.playButtonMusic();
        }, this, false);
    };
    GameShop.prototype.addProps = function () {
        var maxType = GameConfig.helperArr.length;
        // 整个盒子的宽度是  
        var moveX = this.width / 4 - 100 * maxType / 4 - 20;
        var self = this;
        function clickButton(index) {
            self.propsArr.forEach(function (prop, key) {
                prop.removeRect();
            });
            self.check = index;
        }
        for (var type = 0; type < maxType; type++) {
            var props = new Prop(moveX + 60 * type, 100, type, this, clickButton, true);
            this.propsArr.push(props);
            this.addChild(props);
        }
        this.propsArr[0].addRect();
    };
    GameShop.prototype.addBack = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sky;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, GameConfig.createBitmapByName("back.png")];
                    case 1:
                        sky = _a.sent();
                        sky.width = sky.height = 40;
                        sky.x = 20;
                        sky.y = 50;
                        sky.touchEnabled = true;
                        sky.addEventListener('touchEnd', function () {
                            PageBus.gotoPage('index');
                            GameConfig.state = 0;
                        }, this);
                        this.addChild(sky);
                        return [2 /*return*/];
                }
            });
        });
    };
    GameShop.prototype.addBackground = function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                back = new Background(0, 0, this.width, this.height);
                this.addChild(back);
                return [2 /*return*/];
            });
        });
    };
    GameShop.prototype.myCoin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sprite, coin, height;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sprite = new egret.Sprite();
                        return [4 /*yield*/, GameConfig.createBitmapByName('coin.png')];
                    case 1:
                        coin = _a.sent();
                        coin.width = coin.height = 50;
                        height = this.height - coin.height - 50;
                        coin.x = 0;
                        coin.y = 0;
                        sprite.addChild(coin);
                        this.coinText = new egret.TextField();
                        this.coinText.width = 200;
                        this.coinText.x = 60;
                        this.coinText.y = 0 + 15;
                        this.coinText.text = GameConfig.coin + '';
                        this.coinText.textAlign = 'left';
                        this.coinText.size = 20;
                        sprite.x = 40;
                        sprite.y = height;
                        sprite.addChild(this.coinText);
                        this.addChild(sprite);
                        this.changeCoin();
                        return [2 /*return*/];
                }
            });
        });
    };
    GameShop.prototype.changeCoin = function () {
        this.coinText.text = GameConfig.coin + "\u91D1";
    };
    return GameShop;
}(egret.Sprite));
__reflect(GameShop.prototype, "GameShop");
/*
    游戏关卡页
**/
var GameTax = (function (_super) {
    __extends(GameTax, _super);
    function GameTax(width, height, parent) {
        var _this = _super.call(this) || this;
        _this.image = new egret.Bitmap();
        _this.x = 0;
        _this.y = 0;
        _this.width = width;
        _this.height = height;
        _this.parents = parent;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addImage, _this);
        return _this;
    }
    GameTax.prototype.addImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.addBack();
                this.addGroup();
                this.addReturn();
                return [2 /*return*/];
            });
        });
    };
    GameTax.prototype.shootRock = function (bingo) {
        var rock = new Rock({
            x1: this.width / 2,
            y1: this.height,
            x3: bingo.x,
            y3: bingo.y,
            width: 42,
            height: 100,
            time: 4000
        });
        this.addChildAt(rock, 9);
        rock.shoot();
    };
    GameTax.prototype.addGroup = function () {
        var gameGroup = new GameGroup(this.width, this.height, this);
        this.addChild(gameGroup);
    };
    GameTax.prototype.addBack = function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                back = new Background(0, 0, this.width, this.height);
                this.addChild(back);
                return [2 /*return*/];
            });
        });
    };
    GameTax.prototype.addReturn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sky;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, GameConfig.createBitmapByName("back.png")];
                    case 1:
                        sky = _a.sent();
                        sky.width = sky.height = 40;
                        sky.x = 20;
                        sky.y = 50;
                        sky.touchEnabled = true;
                        sky.addEventListener('touchEnd', function () {
                            PageBus.gotoPage('index');
                        }, this);
                        this.addChild(sky);
                        return [2 /*return*/];
                }
            });
        });
    };
    return GameTax;
}(egret.Sprite));
__reflect(GameTax.prototype, "GameTax");
/*
    无尽模式
**/
var TaxInfinite = (function (_super) {
    __extends(TaxInfinite, _super);
    function TaxInfinite(width, height) {
        var _this = _super.call(this) || this;
        _this.image = new egret.Bitmap();
        _this.x = 0;
        _this.y = 0;
        _this.width = width;
        _this.height = height;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addProgress, _this);
        return _this;
    }
    TaxInfinite.prototype.addImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addBack()];
                    case 1:
                        _a.sent();
                        this.success = function () {
                            _this.removeChild(_this.talkContent);
                            _this.addGameInf();
                            _this.addGameBody();
                        };
                        this.addTalk();
                        return [2 /*return*/];
                }
            });
        });
    };
    TaxInfinite.prototype.addProgress = function () {
        var _this = this;
        var progress = new Progress(this.x, this.y, this.width, this.height);
        var loadImage = new loadImages(function () {
            console.log(loadImage.cont, loadImage.totalCont);
            progress.setMask(loadImage.cont, loadImage.totalCont);
            if (loadImage.cont === loadImage.totalCont) {
                _this.removeChild(progress);
                _this.addImage();
            }
        });
        this.addChild(progress);
    };
    TaxInfinite.prototype.addBack = function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                back = new Background(0, 0, this.width, this.height);
                this.addChild(back);
                return [2 /*return*/];
            });
        });
    };
    TaxInfinite.prototype.addGameBody = function () {
        this.gameBody = new GameBody(this.width, this.height, this.gameInf, this);
        this.addChild(this.gameBody);
        //this.addMonster();
    };
    TaxInfinite.prototype.addTalk = function () {
        this.talkContent = new TalkContent(this.width, this.height, this);
        this.talkContent.init();
        this.addChild(this.talkContent);
    };
    TaxInfinite.prototype.gameOver = function () {
        var score = this.gameInf.myScore;
        if (score >= 2000) {
            this.addPopClass(1, "\u4F60\u8868\u73B0\u7684\u8FD8\u53EF\u4EE5\uFF0Cemmmm\uFF0C\u90A3\u5C31\u5956\u52B1\u4F60" + score / 2 + "\u91D1", '游戏结束');
            GameConfig.setCoin(score / 2);
            this.gameInf.changeCoin();
        }
        else
            this.addPopClass(1, "\u7EE7\u7EED\u52A0\u6CB9\u5427\uFF0C\u6CE8\u610F\u8981\u7ECF\u5E38\u4F7F\u7528\u9053\u5177\u54E6", '游戏结束');
        if (this.gameBody && this.gameBody.$parent)
            this.removeChild(this.gameBody);
    };
    /**
     * type 弹窗类型
     */
    TaxInfinite.prototype.addPopClass = function (type, label1, label2) {
        var _this = this;
        if (this.pop && this.pop.$parent) {
            this.removeChild(this.pop);
        }
        this.pop = new PopClass(0, 50, this.width, this.height, type, label1, label2);
        this.addChild(this.pop);
        this.pop.addEventListener(DateEvent.DATE, function (ev) { _this.popMethods(ev); }, this);
    };
    TaxInfinite.prototype.popMethods = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var type, _a, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        type = ev._type;
                        _a = type;
                        switch (_a) {
                            case 'home': return [3 /*break*/, 1];
                            case 'again': return [3 /*break*/, 2];
                            case 'share': return [3 /*break*/, 3];
                        }
                        return [3 /*break*/, 5];
                    case 1:
                        PageBus.gotoPage("index");
                        return [3 /*break*/, 6];
                    case 2:
                        console.log('again');
                        GameConfig.state = 1;
                        if (this.gameBody && this.gameBody.$parent)
                            this.removeChild(this.gameBody);
                        console.log('初始化信息');
                        this.gameInf.resetInf();
                        this.addGameBody();
                        return [3 /*break*/, 6];
                    case 3:
                        console.log('分享');
                        return [4 /*yield*/, platform.shareAppMessage()];
                    case 4:
                        res = _b.sent();
                        console.log(res);
                        if (res.success) {
                            console.log('分享成功奖励1000金');
                            GameConfig.setCoin(1000);
                            this.gameInf.changeCoin();
                        }
                        return [3 /*break*/, 6];
                    case 5: return [2 /*return*/];
                    case 6:
                        if (this.pop.$parent)
                            this.removeChild(this.pop);
                        return [2 /*return*/];
                }
            });
        });
    };
    // 点击完对话后的场景
    TaxInfinite.prototype.success = function () {
        this.removeChild(this.talkContent);
        this.addGameInf();
        this.addGameBody();
    };
    TaxInfinite.prototype.addGameInf = function () {
        this.gameInf = new GameInf(this.width, this.height, this);
        this.addChild(this.gameInf);
        this.gameInf.backToPage = 'index';
    };
    TaxInfinite.prototype.updataStep = function () {
        // this.gameInf.updataStep();
    };
    return TaxInfinite;
}(egret.Sprite));
__reflect(TaxInfinite.prototype, "TaxInfinite");
/*
    游戏页面
**/
var TaxPage = (function (_super) {
    __extends(TaxPage, _super);
    function TaxPage(width, height) {
        var _this = _super.call(this) || this;
        _this.image = new egret.Bitmap();
        _this.x = 0;
        _this.y = 0;
        _this.width = width;
        _this.height = height;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addProgress, _this);
        return _this;
    }
    TaxPage.prototype.ran = function (start, end) {
        return Math.floor(Math.random() * (end - start) + start);
    };
    TaxPage.prototype.shootRock = function (bingo) {
        var rock = new Rock({
            x1: this.width / 2,
            y1: this.height,
            x2: this.ran(0, this.width),
            y2: this.height / 2,
            x3: bingo.x,
            y3: bingo.y,
            width: 42,
            height: 100,
            time: 3000
        });
        this.addChildAt(rock, 9);
        rock.shoot();
    };
    TaxPage.prototype.addImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.addBack();
                this.addTalk();
                return [2 /*return*/];
            });
        });
    };
    TaxPage.prototype.addProgress = function () {
        var _this = this;
        var progress = new Progress(this.x, this.y, this.width, this.height);
        var loadImage = new loadImages(function () {
            console.log(loadImage.cont, loadImage.totalCont);
            progress.setMask(loadImage.cont, loadImage.totalCont);
            if (loadImage.cont === loadImage.totalCont) {
                _this.removeChild(progress);
                _this.addImage();
            }
        });
        this.addChild(progress);
    };
    TaxPage.prototype.addBack = function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                back = new Background(0, 0, this.width, this.height);
                this.addChild(back);
                return [2 /*return*/];
            });
        });
    };
    TaxPage.prototype.addGameBody = function () {
        this.gameBody = new GameBody(this.width, this.height, this.gameInf, this);
        this.addChild(this.gameBody);
        console.log("关卡怪物");
        console.log(GameConfig.taxConfig[GameConfig.nowTax]["monster"]);
        if (GameConfig.taxConfig[GameConfig.nowTax]["monster"])
            this.addMonster();
    };
    TaxPage.prototype.addTalk = function () {
        if (this.talkContent && this.talkContent.$parent) {
            this.removeChild(this.talkContent);
        }
        this.talkContent = new TalkContent(this.width, this.height, this);
        this.talkContent.init();
        this.addChild(this.talkContent);
    };
    TaxPage.prototype.addHore = function () {
        return __awaiter(this, void 0, void 0, function () {
            var img, button;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, GameConfig.createBitmapByName('success.png')];
                    case 1:
                        img = _a.sent();
                        img.width = 300 * 1.7;
                        img.height = 391 * 1.7;
                        img.x = this.width / 2 - img.width / 2;
                        img.y = this.height / 2 - img.height / 2;
                        this.addChild(img);
                        button = new eui.Button();
                        button.label = '分享朋友圈';
                        button.width = 236;
                        button.x = this.width / 2 - button.width / 2;
                        button.y = img.y + img.height + 20;
                        button.addEventListener('touchEnd', function () {
                            platform.saveImg();
                        }, this);
                        this.addChild(button);
                        return [2 /*return*/];
                }
            });
        });
    };
    TaxPage.prototype.passTax = function (score) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (GameConfig.nowTax === GameConfig.taxConfig.length - 1) {
                    this.addHore();
                    return [2 /*return*/];
                }
                if (GameConfig.nowTax === GameConfig.maxTax) {
                    GameConfig.maxTax++;
                    platform.passTax(GameConfig.maxTax);
                    platform.saveData(GameConfig.maxTax);
                }
                this.addPopClass(0, "\u6311\u6218\u4E0B\u4E00\u5173\u5427\uFF0C\u5956\u52B1\u4F60" + score / 2 + "\u91D1", '游戏通关');
                GameConfig.setCoin(score / 2);
                this.gameInf.changeCoin();
                if (this.gameBody && this.gameBody.$parent)
                    this.removeChild(this.gameBody);
                return [2 /*return*/];
            });
        });
    };
    TaxPage.prototype.gameOver = function (num) {
        console.log('结束了');
        this.addPopClass(1, '游戏失败了', '重新来一把吧');
        if (this.gameBody && this.gameBody.$parent)
            this.removeChild(this.gameBody);
        // this.success = ()=>{
        //     this.removeChildren();
        //     this.addImage();
        // }
    };
    /**
     * type 弹窗类型
     */
    TaxPage.prototype.addPopClass = function (type, label1, label2) {
        var _this = this;
        if (this.pop && this.pop.$parent) {
            this.removeChild(this.pop);
        }
        this.pop = new PopClass(0, 50, this.width, this.height, type, label1, label2);
        this.addChild(this.pop);
        this.pop.addEventListener(DateEvent.DATE, function (ev) { _this.popMethods(ev); }, this);
    };
    TaxPage.prototype.popMethods = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var type, _a, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        type = ev._type;
                        _a = type;
                        switch (_a) {
                            case 'home': return [3 /*break*/, 1];
                            case 'next': return [3 /*break*/, 2];
                            case 'again': return [3 /*break*/, 3];
                            case 'share': return [3 /*break*/, 4];
                        }
                        return [3 /*break*/, 6];
                    case 1:
                        PageBus.gotoPage("index");
                        return [3 /*break*/, 7];
                    case 2:
                        GameConfig.nowTax++;
                        console.log(GameConfig.nowTax);
                        this.removeChildren();
                        GameConfig.state = 1;
                        this.addImage();
                        return [3 /*break*/, 7];
                    case 3:
                        console.log('again');
                        GameConfig.state = 1;
                        if (this.gameBody && this.gameBody.$parent)
                            this.removeChild(this.gameBody);
                        this.gameInf.resetInf();
                        this.addGameBody();
                        return [3 /*break*/, 7];
                    case 4:
                        console.log('分享');
                        return [4 /*yield*/, platform.shareAppMessage()];
                    case 5:
                        res = _b.sent();
                        console.log(res);
                        if (res.success) {
                            console.log('分享成功奖励1000金');
                            GameConfig.setCoin(1000);
                            this.gameInf.changeCoin();
                        }
                        return [3 /*break*/, 7];
                    case 6: return [2 /*return*/];
                    case 7:
                        if (this.pop.$parent)
                            this.removeChild(this.pop);
                        return [2 /*return*/];
                }
            });
        });
    };
    TaxPage.prototype.addMonster = function () {
        if (this.monsterClass && this.monsterClass.$parent)
            this.removeChild(this.monsterClass);
        this.monsterClass = new MonsterClass(this.gameBody.x, this.gameBody.y, this.gameBody.width, this.gameBody.height);
        // 放到顶部
        this.addChild(this.monsterClass);
        this.setChildIndex(this.monsterClass, 99999);
    };
    // 点击完对话后的场景
    TaxPage.prototype.success = function () {
        this.removeChild(this.talkContent);
        this.addGameInf();
        this.addGameBody();
    };
    TaxPage.prototype.addGameInf = function () {
        this.gameInf = new GameInf(this.width, this.height, this);
        this.addChild(this.gameInf);
        this.gameInf.backToPage = 'gameTax';
    };
    TaxPage.prototype.updataStep = function () {
        // this.gameInf.updataStep();
    };
    return TaxPage;
}(egret.Sprite));
__reflect(TaxPage.prototype, "TaxPage");
/*
    时间模式
**/
var TaxTimerFast = (function (_super) {
    __extends(TaxTimerFast, _super);
    function TaxTimerFast(width, height) {
        var _this = _super.call(this) || this;
        _this.image = new egret.Bitmap();
        _this.x = 0;
        _this.y = 0;
        _this.width = width;
        _this.height = height;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addImage, _this);
        return _this;
    }
    TaxTimerFast.prototype.addImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.addBack();
                this.success = function () {
                    _this.removeChild(_this.talkContent);
                    _this.addGameBody();
                };
                this.addGameInf();
                this.addTalk();
                return [2 /*return*/];
            });
        });
    };
    TaxTimerFast.prototype.addBack = function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                back = new Background(0, 0, this.width, this.height);
                this.addChild(back);
                return [2 /*return*/];
            });
        });
    };
    TaxTimerFast.prototype.addGameBody = function () {
        this.gameBody = new GameBody(this.width, this.height, this.gameInf, this);
        this.addChild(this.gameBody);
        //this.addMonster();
    };
    TaxTimerFast.prototype.addTalk = function () {
        this.talkContent = new TalkContent(this.width, this.height, this);
        this.talkContent.init();
        this.addChild(this.talkContent);
    };
    TaxTimerFast.prototype.gameOver = function () {
        this.addPopClass(1, '游戏失败了', '重新来一把吧');
        if (this.gameBody && this.gameBody.$parent)
            this.removeChild(this.gameBody);
    };
    /**
     * type 弹窗类型
     */
    TaxTimerFast.prototype.addPopClass = function (type, label1, label2) {
        var _this = this;
        if (this.pop && this.pop.$parent) {
            this.removeChild(this.pop);
        }
        this.pop = new PopClass(0, 50, this.width, this.height, type, label1, label2);
        this.addChild(this.pop);
        this.pop.addEventListener(DateEvent.DATE, function (ev) { _this.popMethods(ev); }, this);
    };
    TaxTimerFast.prototype.popMethods = function (ev) {
        var type = ev._type;
        switch (type) {
            case 'home':
                PageBus.gotoPage("index");
                break;
            case 'again':
                console.log('again');
                GameConfig.state = 1;
                if (this.gameBody && this.gameBody.$parent)
                    this.removeChild(this.gameBody);
                this.gameInf.resetInf();
                this.addGameBody();
                break;
            default:
                return;
        }
        if (this.pop.$parent)
            this.removeChild(this.pop);
    };
    // 点击完对话后的场景
    TaxTimerFast.prototype.success = function () {
        this.removeChild(this.talkContent);
        this.addGameInf();
        this.addGameBody();
    };
    TaxTimerFast.prototype.addGameInf = function () {
        this.gameInf = new GameInf(this.width, this.height, this);
        this.addChild(this.gameInf);
        this.gameInf.backToPage = 'index';
    };
    TaxTimerFast.prototype.updataStep = function () {
        // this.gameInf.updataStep();
    };
    return TaxTimerFast;
}(egret.Sprite));
__reflect(TaxTimerFast.prototype, "TaxTimerFast");
;window.Main = Main;