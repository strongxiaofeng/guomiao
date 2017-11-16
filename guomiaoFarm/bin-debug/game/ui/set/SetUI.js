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
var SetUI = (function (_super) {
    __extends(SetUI, _super);
    function SetUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/set.exml";
        return _this;
    }
    /**初始界面 */
    SetUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
        this.check_leaveMsg.source = GameModel.getInstance().check_leaveMsg ? "opend_png" : "closed_png";
        this.check_radio.source = GameModel.getInstance().check_radio ? "opend_png" : "closed_png";
        this.check_weather.source = GameModel.getInstance().check_weather ? "opend_png" : "closed_png";
        this.check_report.source = GameModel.getInstance().check_report ? "opend_png" : "closed_png";
        this.check_steal.source = GameModel.getInstance().check_steal ? "opend_png" : "closed_png";
        this.check_bgm.source = GameModel.getInstance().check_bgm ? "opend_png" : "closed_png";
        this.check_effectSound.source = GameModel.getInstance().check_effectSound ? "opend_png" : "closed_png";
        this.skinList.itemRenderer = SkinItem;
        this.skinList.useVirtualLayout = false;
        var ac = new eui.ArrayCollection();
        ac.addItem({ name: "默认", isDefault: true });
        ac.addItem({ name: "皮肤名称", isDefault: false });
        ac.addItem({ name: "皮肤名称", isDefault: false });
        ac.addItem({ name: "皮肤名称", isDefault: false });
        ac.addItem({ name: "皮肤名称", isDefault: false });
        ac.addItem({ name: "皮肤名称", isDefault: false });
        ac.addItem({ name: "皮肤名称", isDefault: false });
        this.skinList.dataProvider = ac;
        // this.clickMsgSet();
    };
    /**初始监听 */
    SetUI.prototype.initListener = function () {
        this.registerEvent(this.check_leaveMsg, egret.TouchEvent.TOUCH_TAP, this.clickCheckleaveMsg, this);
        this.registerEvent(this.check_radio, egret.TouchEvent.TOUCH_TAP, this.clickCheckradio, this);
        this.registerEvent(this.check_weather, egret.TouchEvent.TOUCH_TAP, this.clickCheckweather, this);
        this.registerEvent(this.check_report, egret.TouchEvent.TOUCH_TAP, this.clickCheckreport, this);
        this.registerEvent(this.check_steal, egret.TouchEvent.TOUCH_TAP, this.clickChecksteal, this);
        this.registerEvent(this.check_bgm, egret.TouchEvent.TOUCH_TAP, this.clickCheckbgm, this);
        this.registerEvent(this.check_effectSound, egret.TouchEvent.TOUCH_TAP, this.clickCheckeffectSound, this);
    };
    /**开关 留言 */
    SetUI.prototype.clickCheckleaveMsg = function () {
        GameModel.getInstance().check_leaveMsg = !GameModel.getInstance().check_leaveMsg;
        this.check_leaveMsg.source = GameModel.getInstance().check_leaveMsg ? "opend_png" : "closed_png";
    };
    SetUI.prototype.clickCheckradio = function () {
        GameModel.getInstance().check_radio = !GameModel.getInstance().check_radio;
        this.check_radio.source = GameModel.getInstance().check_radio ? "opend_png" : "closed_png";
    };
    SetUI.prototype.clickCheckweather = function () {
        GameModel.getInstance().check_weather = !GameModel.getInstance().check_weather;
        this.check_weather.source = GameModel.getInstance().check_weather ? "opend_png" : "closed_png";
    };
    SetUI.prototype.clickCheckreport = function () {
        GameModel.getInstance().check_report = !GameModel.getInstance().check_report;
        this.check_report.source = GameModel.getInstance().check_report ? "opend_png" : "closed_png";
    };
    SetUI.prototype.clickChecksteal = function () {
        GameModel.getInstance().check_steal = !GameModel.getInstance().check_steal;
        this.check_steal.source = GameModel.getInstance().check_steal ? "opend_png" : "closed_png";
    };
    SetUI.prototype.clickCheckbgm = function () {
        GameModel.getInstance().check_bgm = !GameModel.getInstance().check_bgm;
        this.check_bgm.source = GameModel.getInstance().check_bgm ? "opend_png" : "closed_png";
    };
    SetUI.prototype.clickCheckeffectSound = function () {
        GameModel.getInstance().check_effectSound = !GameModel.getInstance().check_effectSound;
        this.check_effectSound.source = GameModel.getInstance().check_effectSound ? "opend_png" : "closed_png";
    };
    // private clickMsgSet()
    // {
    // 	this.msgSetGroup.visible = true;
    // 	this.landSetGroup.visible = false;
    // 	this.landSetBtn.y = this.msgSetGroup.y +this.msgSetGroup.height +10;
    // }
    // private clickLandSet()
    // {
    // 	this.msgSetGroup.visible = false;
    // 	this.landSetGroup.visible = true;
    // 	this.landSetBtn.y = this.msgSetBtn.y+ this.msgSetBtn.height+ 10;
    // 	this.landSetGroup.y = this.landSetBtn.y + this.landSetBtn.height +10;
    // 	console.log(this.landSetGroup)
    // }
    /**关闭界面 */
    SetUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return SetUI;
}(BaseUI));
__reflect(SetUI.prototype, "SetUI");
//# sourceMappingURL=SetUI.js.map