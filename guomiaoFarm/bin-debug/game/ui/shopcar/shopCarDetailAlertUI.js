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
var shopCarDetailAlertUI = (function (_super) {
    __extends(shopCarDetailAlertUI, _super);
    function shopCarDetailAlertUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/shopCarDetailAlert.exml";
        return _this;
    }
    /**初始界面 */
    shopCarDetailAlertUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
    };
    /**初始监听 */
    shopCarDetailAlertUI.prototype.initListener = function () {
        this.registerEvent(this.sureBtn, egret.TouchEvent.TOUCH_TAP, this.sure, this);
        this.registerEvent(this.cancelBtn, egret.TouchEvent.TOUCH_TAP, this.dispose, this);
    };
    shopCarDetailAlertUI.prototype.sure = function () {
        // GameModel.getInstance().addShopCarData(GameModel.getInstance().curSeedDetailId);
        GameModel.getInstance().clearShopCar();
        this.dispose();
    };
    /**关闭界面 */
    shopCarDetailAlertUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return shopCarDetailAlertUI;
}(BaseUI));
__reflect(shopCarDetailAlertUI.prototype, "shopCarDetailAlertUI");
//# sourceMappingURL=shopCarDetailAlertUI.js.map