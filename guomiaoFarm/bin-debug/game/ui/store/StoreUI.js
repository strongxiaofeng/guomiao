var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var StoreUI = (function (_super) {
    __extends(StoreUI, _super);
    function StoreUI() {
        var _this = _super.call(this) || this;
        _this.computearr = [];
        _this.skinName = "resource/skins/store.exml";
        return _this;
    }
    /**初始界面 */
    StoreUI.prototype.initSetting = function () {
        var _this = this;
        _super.prototype.initSetting.call(this);
        GameController.getInstance().getStoreInfo();
        this.intervalId = setInterval(function () {
            _this.computeTime();
        }, 100);
    };
    /**初始监听 */
    StoreUI.prototype.initListener = function () {
        this.registerEvent(this.btn_close, egret.TouchEvent.TOUCH_TAP, this.clickClose, this);
        this.addRegister(NotifyConst.Notify_StoreInfo, this.onStoreInfo, this);
    };
    /**收到仓库信息 */
    StoreUI.prototype.onStoreInfo = function (info) {
        console.log("仓库ui收到仓库信息 ", info);
        if (info && info.list && info.list.length > 0) {
            for (var i = 0; i < info.list.length; i++) {
                var item = info.list[i];
                var hor = i % 2 == 0 ? -130 : 130;
                var bottom = 200 + Math.floor((5 - i) / 2) * 228;
                var img = new eui.Image();
                img.horizontalCenter = hor;
                img.bottom = bottom;
                //有过期时间
                if (item.type == 1) {
                    img.source = "seed1_png";
                    img.width = 70;
                    img.height = 117;
                    this.addChild(img);
                    var whiteBg = new eui.Image("downtime_bg_png");
                    whiteBg.width = 215;
                    whiteBg.height = 54;
                    whiteBg.horizontalCenter = hor;
                    whiteBg.bottom = bottom - 50;
                    this.addChild(whiteBg);
                    var serverTime = GameModel.getInstance().getServerTime();
                    var passTime = item.expire_time - serverTime;
                    var date = new Date();
                    date.setSeconds(passTime);
                    var str = passTime > 0 ? date.getUTCHours() + ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds() + "后结束播种" : "结束播种";
                    var timeTxt = new eui.Label(str);
                    timeTxt.textColor = 0x727374;
                    timeTxt.size = 20;
                    timeTxt.horizontalCenter = hor;
                    timeTxt.bottom = bottom - 35;
                    this.addChild(timeTxt);
                    this.computearr.push({ expire_time: item.expire_time, txt: timeTxt });
                }
                else {
                    if (item.name == "化肥") {
                        img.source = "shop_fertilizer_png";
                    }
                    else {
                        img.source = "store_insurance_png";
                    }
                    img.width = 117;
                    img.height = 117;
                    this.addChild(img);
                }
            }
        }
    };
    /**循环计算种子过期时间 */
    StoreUI.prototype.computeTime = function () {
        for (var i = 0; i < this.computearr.length; i++) {
            var serverTime = GameModel.getInstance().getServerTime();
            var passTime = this.computearr[i].expire_time - serverTime;
            var date = new Date();
            date.setSeconds(passTime);
            var str = passTime > 0 ? date.getUTCHours() + ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds() + "后结束播种" : "结束播种";
            this.computearr[i].txt.text = str;
        }
    };
    /**点击关闭 */
    StoreUI.prototype.clickClose = function () {
        UIManager.closeUI(UIConst.StoreUI);
    };
    /**关闭界面 */
    StoreUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.removeRegister(this);
        clearInterval(this.intervalId);
        this.computearr = [];
    };
    return StoreUI;
}(BaseUI));
__reflect(StoreUI.prototype, "StoreUI");
//# sourceMappingURL=StoreUI.js.map