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
var WelcomeUI = (function (_super) {
    __extends(WelcomeUI, _super);
    function WelcomeUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/startUI.exml";
        return _this;
    }
    /**初始界面 */
    WelcomeUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
        UIManager.openUI(UIConst.TipErrorUI, LayerManager.Layer_Sys);
        UIManager.openUI(UIConst.TipGreenUI, LayerManager.Layer_Sys);
        GameController.getInstance().getUserInfo(window["params"]);
        GameController.getInstance().getServerConfig();
        this.load();
    };
    /**初始监听 */
    WelcomeUI.prototype.initListener = function () {
        this.registerEvent(this.btn_myFarm, egret.TouchEvent.TOUCH_TAP, this.clickFarm, this);
        this.registerEvent(this.btn_lastActivity, egret.TouchEvent.TOUCH_TAP, this.clickActivity, this);
        this.registerEvent(this.btn_rule, egret.TouchEvent.TOUCH_TAP, this.clickRule, this);
        this.addRegister(NotifyConst.Notify_UserInfo, this.onUserInfo, this);
    };
    WelcomeUI.prototype.load = function () {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
    };
    WelcomeUI.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.btns.visible = true;
            this.loadGroup.visible = false;
        }
    };
    WelcomeUI.prototype.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.rect.width = Math.ceil(240 * event.itemsLoaded / event.itemsTotal);
            this.progressTxt.text = "果喵正在加载中。。" + Math.ceil((event.itemsLoaded / event.itemsTotal) * 100) + "%";
        }
    };
    WelcomeUI.prototype.onUserInfo = function (info) {
        console.log('收到了用户信息 ', info);
    };
    /**我的农场 */
    WelcomeUI.prototype.clickFarm = function () {
        // if(GameModel.getInstance().getToken())
        // {
        UIManager.openUI(UIConst.HomeUI);
        // }
        // else{
        // 	NotifyManager.getInstance().sendNotify(NotifyConst.Notify_Error, "获取用户信息失败");
        // }
    };
    /**往期活动 */
    WelcomeUI.prototype.clickActivity = function () {
        // if(GameModel.getInstance().getToken())
        // {
        UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
        UIManager.openUI(UIConst.LastActivityUI);
        // }
        // else{
        // 	NotifyManager.getInstance().sendNotify(NotifyConst.Notify_Error, "获取用户信息失败");
        // }
    };
    /**规则 */
    WelcomeUI.prototype.clickRule = function () {
        UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
        UIManager.openUI(UIConst.RuleUI);
    };
    /**关闭界面 */
    WelcomeUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.removeRegister(this);
    };
    return WelcomeUI;
}(BaseUI));
__reflect(WelcomeUI.prototype, "WelcomeUI");
//# sourceMappingURL=WelcomeUI.js.map