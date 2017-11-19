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
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.index = 0;
        _this.skinName = "resource/skins/loadingSkin.exml";
        return _this;
    }
    /**初始界面 */
    LoadingUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
        UIManager.openUI(UIConst.TipErrorUI, LayerManager.Layer_Sys);
        UIManager.openUI(UIConst.TipGreenUI, LayerManager.Layer_Sys);
        // GameController.getInstance().getUserInfo(window["params"]); 
        GameController.getInstance().getUserInfo("token=26dd93fda42424624a5b2c8eab4f77ae");
        GameController.getInstance().getServerConfig();
        this.load();
        // var data = RES.getRes("loadingMovie_json");
        // var txtr = RES.getRes("loadingMovie_png");
        // var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, txtr );
        // var mc1:egret.MovieClip = new egret.MovieClip(mcFactory.generateMovieClipData("loading"));
        // mc1.x = 0;
        // mc1.y = 0;
        // mc1.width = 333;
        // mc1.height = 193;
        // this.addChild( mc1 );
        // mc1.gotoAndPlay(0);
        // console.log(mc1);
    };
    /**初始监听 */
    LoadingUI.prototype.initListener = function () {
        this.registerEvent(this, egret.Event.ENTER_FRAME, this.onframe, this);
        this.addRegister(NotifyConst.Notify_UserInfo, this.onUserInfo, this);
    };
    LoadingUI.prototype.load = function () {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
    };
    LoadingUI.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            UIManager.openUI(UIConst.WelcomeUI);
        }
    };
    LoadingUI.prototype.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.setProgress(event.itemsLoaded / event.itemsTotal);
        }
    };
    LoadingUI.prototype.onUserInfo = function (info) {
        console.log('收到了用户信息 ', info);
    };
    /**传入百分比 小数 */
    LoadingUI.prototype.setProgress = function (n) {
        this.bar.width = 898 * n + 64;
        this.txt.text = Math.ceil(n * 100) + "%";
    };
    LoadingUI.prototype.onframe = function () {
        this.index++;
        if (this.index >= 10)
            this.index = 0;
        this.mc.source = "loading" + (Math.floor(this.index / 2) + 1) + "_png";
    };
    /**关闭界面 */
    LoadingUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return LoadingUI;
}(BaseUI));
__reflect(LoadingUI.prototype, "LoadingUI");
//# sourceMappingURL=LoadingUI.js.map