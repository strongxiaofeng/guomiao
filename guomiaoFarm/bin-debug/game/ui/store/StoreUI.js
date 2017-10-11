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
        _this.skinName = "resource/skins/store.exml";
        return _this;
    }
    /**初始界面 */
    StoreUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
        GameController.getInstance().getStoreInfo();
    };
    /**初始监听 */
    StoreUI.prototype.initListener = function () {
        this.registerEvent(this.btn_close, egret.TouchEvent.TOUCH_TAP, this.clickClose, this);
        this.addRegister(NotifyConst.Notify_StoreInfo, this.onStoreInfo, this);
    };
    /**收到仓库信息 */
    StoreUI.prototype.onStoreInfo = function (info) {
        console.log("仓库ui收到仓库信息 ", info);
    };
    /**点击关闭 */
    StoreUI.prototype.clickClose = function () {
        UIManager.closeUI(UIConst.StoreUI);
    };
    /**关闭界面 */
    StoreUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.removeRegister(this);
    };
    return StoreUI;
}(BaseUI));
__reflect(StoreUI.prototype, "StoreUI");
//# sourceMappingURL=StoreUI.js.map