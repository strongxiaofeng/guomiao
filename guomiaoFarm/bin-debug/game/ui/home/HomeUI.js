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
var HomeUI = (function (_super) {
    __extends(HomeUI, _super);
    function HomeUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/home.exml";
        return _this;
    }
    /**初始界面 */
    HomeUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
        GameController.getInstance().getFarmInfo({ token: GameModel.getInstance().getToken() });
    };
    /**初始监听 */
    HomeUI.prototype.initListener = function () {
        console.log("initListener");
        this.registerEvent(this.headBg, egret.TouchEvent.TOUCH_TAP, this.clickHead, this);
        this.registerEvent(this.signBtn, egret.TouchEvent.TOUCH_TAP, this.clickSign, this);
        this.registerEvent(this.storeBtn, egret.TouchEvent.TOUCH_TAP, this.clickStore, this);
        this.registerEvent(this.btn_radio, egret.TouchEvent.TOUCH_TAP, this.clickRadio, this);
        this.registerEvent(this.btn_shop, egret.TouchEvent.TOUCH_TAP, this.clickShop, this);
        this.registerEvent(this.btn_charge, egret.TouchEvent.TOUCH_TAP, this.clickCharge, this);
        this.registerEvent(this.btn_rank, egret.TouchEvent.TOUCH_TAP, this.clickRank, this);
        this.registerEvent(this.btn_game, egret.TouchEvent.TOUCH_TAP, this.clickGame, this);
        this.registerEvent(this.btn_gift, egret.TouchEvent.TOUCH_TAP, this.clickGift, this);
        this.registerEvent(this.btn_weed, egret.TouchEvent.TOUCH_TAP, this.clickWeed, this);
        this.registerEvent(this.btn_fertilizer, egret.TouchEvent.TOUCH_TAP, this.clickFertilizer, this);
        this.registerEvent(this.btn_water, egret.TouchEvent.TOUCH_TAP, this.clickWater, this);
        this.registerEvent(this.btn_seed, egret.TouchEvent.TOUCH_TAP, this.clickSeed, this);
    };
    /**个人 */
    HomeUI.prototype.clickHead = function () {
        UIManager.openUI(UIConst.UserMenuUI);
        UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
    };
    /**签到 */
    HomeUI.prototype.clickSign = function () {
        UIManager.openUI(UIConst.SignUI, LayerManager.Layer_Tip);
    };
    /**仓库 */
    HomeUI.prototype.clickStore = function () {
        UIManager.openUI(UIConst.StoreUI, LayerManager.Layer_Tip);
    };
    /**广播 */
    HomeUI.prototype.clickRadio = function () {
        UIManager.openUI(UIConst.RadioUI);
        UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
    };
    /**商店 */
    HomeUI.prototype.clickShop = function () {
        UIManager.openUI(UIConst.ShopUI);
        UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
    };
    /**充值 */
    HomeUI.prototype.clickCharge = function () {
        UIManager.openUI(UIConst.ChargeUI);
        UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
    };
    /**排行 */
    HomeUI.prototype.clickRank = function () {
        UIManager.openUI(UIConst.RankFriendContributeUI);
        UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
    };
    /**小游戏 */
    HomeUI.prototype.clickGame = function () {
    };
    /**礼物呀 */
    HomeUI.prototype.clickGift = function () {
        UIManager.openUI(UIConst.GiftUI, LayerManager.Layer_Tip);
    };
    /**除草 */
    HomeUI.prototype.clickWeed = function () {
        console.log("clickWeed");
    };
    /**施肥 */
    HomeUI.prototype.clickFertilizer = function () {
    };
    /**浇水 */
    HomeUI.prototype.clickWater = function () {
        UIManager.openUI(UIConst.InviteWaterUI, LayerManager.Layer_Tip);
    };
    /**播种 */
    HomeUI.prototype.clickSeed = function () {
    };
    /**关闭界面 */
    HomeUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return HomeUI;
}(BaseUI));
__reflect(HomeUI.prototype, "HomeUI");
//# sourceMappingURL=HomeUI.js.map