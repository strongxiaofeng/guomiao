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
var TopBarUI = (function (_super) {
    __extends(TopBarUI, _super);
    function TopBarUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/topbar.exml";
        return _this;
    }
    /**初始界面 */
    TopBarUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
        this.touchEnabled = false;
        this.touchChildren = true;
    };
    /**初始监听 */
    TopBarUI.prototype.initListener = function () {
        this.registerEvent(this.leftBtn, egret.TouchEvent.TOUCH_TAP, this.clickLeft, this);
        this.registerEvent(this.homeBtn, egret.TouchEvent.TOUCH_TAP, this.clickHome, this);
    };
    /**返回上一个界面 */
    TopBarUI.prototype.clickLeft = function () {
        //返回欢迎页
        if (UIManager.isUIOpen(UIConst.RuleUI) || UIManager.isUIOpen(UIConst.LastActivityUI)) {
            UIManager.closeUI(UIConst.TopBarUI);
            UIManager.openUI(UIConst.WelcomeUI);
        }
        else if (UIManager.isUIOpen(UIConst.PayUI)) {
            UIManager.openUI(UIConst.ShopUI);
        }
        else if (UIManager.isUIOpen(UIConst.ContributeDetailUI) || UIManager.isUIOpen(UIConst.CoinDetailUI)
            || UIManager.isUIOpen(UIConst.AddressManageUI) || UIManager.isUIOpen(UIConst.HonorWallUI)
            || UIManager.isUIOpen(UIConst.MyOrderUI) || UIManager.isUIOpen(UIConst.SetUI)) {
            UIManager.openUI(UIConst.UserMenuUI);
        }
        else if (UIManager.isUIOpen(UIConst.AddAddressUI)) {
            UIManager.openUI(UIConst.AddressManageUI);
        }
        else if (UIManager.isUIOpen(UIConst.UserMenuUI) || UIManager.isUIOpen(UIConst.RadioUI)
            || UIManager.isUIOpen(UIConst.ShopUI) || UIManager.isUIOpen(UIConst.ChargeUI) || UIManager.isUIOpen(UIConst.RankFriendContributeUI)) {
            UIManager.closeUI(UIConst.TopBarUI);
            UIManager.openUI(UIConst.HomeUI);
        }
    };
    /**返回主界面 */
    TopBarUI.prototype.clickHome = function () {
        UIManager.closeUI(UIConst.TopBarUI);
        if (UIManager.isUIOpen(UIConst.RuleUI)) {
            UIManager.openUI(UIConst.WelcomeUI);
        }
        else if (UIManager.isUIOpen(UIConst.LastActivityUI)) {
            UIManager.openUI(UIConst.HomeUI);
            UIManager.openUI(UIConst.LastHarvestRankUI, LayerManager.Layer_Tip);
        }
        else {
            UIManager.openUI(UIConst.HomeUI);
        }
    };
    /**关闭界面 */
    TopBarUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return TopBarUI;
}(BaseUI));
__reflect(TopBarUI.prototype, "TopBarUI");
//# sourceMappingURL=TopBarUI.js.map