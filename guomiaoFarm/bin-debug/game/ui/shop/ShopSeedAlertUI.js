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
var ShopSeedAlertUI = (function (_super) {
    __extends(ShopSeedAlertUI, _super);
    function ShopSeedAlertUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/shop_seedAlert.exml";
        return _this;
    }
    /**初始界面 */
    ShopSeedAlertUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
    };
    /**初始监听 */
    ShopSeedAlertUI.prototype.initListener = function () {
        this.registerEvent(this.addBtn, egret.TouchEvent.TOUCH_TAP, this.add, this);
        this.registerEvent(this.closeBtn, egret.TouchEvent.TOUCH_TAP, this.dispose, this);
    };
    ShopSeedAlertUI.prototype.add = function () {
        GameModel.getInstance().addShopCarData(GameModel.getInstance().curSeedDetailId);
        this.dispose();
    };
    /**关闭界面 */
    ShopSeedAlertUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return ShopSeedAlertUI;
}(BaseUI));
__reflect(ShopSeedAlertUI.prototype, "ShopSeedAlertUI");
//# sourceMappingURL=ShopSeedAlertUI.js.map