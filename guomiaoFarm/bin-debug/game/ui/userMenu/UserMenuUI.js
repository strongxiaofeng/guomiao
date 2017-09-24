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
var UserMenuUI = (function (_super) {
    __extends(UserMenuUI, _super);
    function UserMenuUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/userMenu.exml";
        return _this;
    }
    /**初始界面 */
    UserMenuUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
    };
    /**初始监听 */
    UserMenuUI.prototype.initListener = function () {
        console.log("initListener");
        this.registerEvent(this.attributeTxt, egret.TouchEvent.TOUCH_TAP, this.goContributeDetail, this);
        this.registerEvent(this.attributeTxtBg, egret.TouchEvent.TOUCH_TAP, this.goContributeDetail, this);
        this.registerEvent(this.coinTxt, egret.TouchEvent.TOUCH_TAP, this.goCoinDetail, this);
        this.registerEvent(this.coinTxtBg, egret.TouchEvent.TOUCH_TAP, this.goCoinDetail, this);
        this.registerEvent(this.btn_charge, egret.TouchEvent.TOUCH_TAP, this.goCharge, this);
        this.registerEvent(this.btn_shop, egret.TouchEvent.TOUCH_TAP, this.goShop, this);
        this.registerEvent(this.btn_address, egret.TouchEvent.TOUCH_TAP, this.goAddress, this);
        this.registerEvent(this.btn_order, egret.TouchEvent.TOUCH_TAP, this.goOrder, this);
        this.registerEvent(this.btn_store, egret.TouchEvent.TOUCH_TAP, this.goStore, this);
        this.registerEvent(this.btn_rank, egret.TouchEvent.TOUCH_TAP, this.goRank, this);
        this.registerEvent(this.btn_coinCharge, egret.TouchEvent.TOUCH_TAP, this.goCharge, this);
        this.registerEvent(this.btn_honor, egret.TouchEvent.TOUCH_TAP, this.goHonor, this);
        this.registerEvent(this.btn_radio, egret.TouchEvent.TOUCH_TAP, this.goRadio, this);
        this.registerEvent(this.btn_set, egret.TouchEvent.TOUCH_TAP, this.goSet, this);
    };
    /**贡献明细 */
    UserMenuUI.prototype.goContributeDetail = function () {
        console.log("goigog");
        UIManager.openUI(UIConst.ContributeDetailUI);
    };
    /**果喵币明细 */
    UserMenuUI.prototype.goCoinDetail = function () {
        UIManager.openUI(UIConst.CoinDetailUI);
    };
    /**商店 */
    UserMenuUI.prototype.goShop = function () {
        UIManager.openUI(UIConst.ShopUI);
    };
    /**地址管理 */
    UserMenuUI.prototype.goAddress = function () {
        UIManager.openUI(UIConst.AddressManageUI);
    };
    /**订单 */
    UserMenuUI.prototype.goOrder = function () {
        UIManager.openUI(UIConst.MyOrderUI);
    };
    /**仓库 */
    UserMenuUI.prototype.goStore = function () {
        UIManager.openUI(UIConst.StoreUI, LayerManager.Layer_Tip);
    };
    /**排行 */
    UserMenuUI.prototype.goRank = function () {
        UIManager.openUI(UIConst.RankFriendContributeUI);
    };
    /**充值 */
    UserMenuUI.prototype.goCharge = function () {
        UIManager.openUI(UIConst.ChargeUI);
    };
    /**勋章墙 */
    UserMenuUI.prototype.goHonor = function () {
        UIManager.openUI(UIConst.HonorWallUI);
    };
    /**广播 */
    UserMenuUI.prototype.goRadio = function () {
        UIManager.openUI(UIConst.RadioUI);
    };
    /**设置 */
    UserMenuUI.prototype.goSet = function () {
        UIManager.openUI(UIConst.SetUI);
    };
    /**关闭界面 */
    UserMenuUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return UserMenuUI;
}(BaseUI));
__reflect(UserMenuUI.prototype, "UserMenuUI");
//# sourceMappingURL=UserMenuUI.js.map