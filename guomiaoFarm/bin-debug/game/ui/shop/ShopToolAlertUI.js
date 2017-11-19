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
var ShopToolAlertUI = (function (_super) {
    __extends(ShopToolAlertUI, _super);
    function ShopToolAlertUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/shop_toolAlert.exml";
        return _this;
    }
    /**初始界面 */
    ShopToolAlertUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
    };
    /**初始监听 */
    ShopToolAlertUI.prototype.initListener = function () {
        this.registerEvent(this.sureBtn, egret.TouchEvent.TOUCH_TAP, this.sure, this);
        this.registerEvent(this.closeBtn, egret.TouchEvent.TOUCH_TAP, this.dispose, this);
    };
    ShopToolAlertUI.prototype.sure = function () {
        // GameModel.getInstance().addShopCarData(GameModel.getInstance().curSeedDetailId);
        this.dispose();
    };
    /**关闭界面 */
    ShopToolAlertUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return ShopToolAlertUI;
}(BaseUI));
__reflect(ShopToolAlertUI.prototype, "ShopToolAlertUI");
//# sourceMappingURL=ShopToolAlertUI.js.map