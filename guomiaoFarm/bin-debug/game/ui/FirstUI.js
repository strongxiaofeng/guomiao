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
var FirstUI = (function (_super) {
    __extends(FirstUI, _super);
    function FirstUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/startUI.exml";
        return _this;
    }
    /**初始界面 */
    FirstUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
        console.log("initSetting");
    };
    /**初始监听 */
    FirstUI.prototype.initListener = function () {
        console.log("注册事件");
        this.registerEvent(this.btn_myFarm, egret.TouchEvent.TOUCH_TAP, this.clickFarm, this);
        this.registerEvent(this.btn_lastActivity, egret.TouchEvent.TOUCH_TAP, this.clickActivity, this);
        this.registerEvent(this.btn_rule, egret.TouchEvent.TOUCH_TAP, this.clickRule, this);
    };
    /**我的农场 */
    FirstUI.prototype.clickFarm = function () {
    };
    /**往期活动 */
    FirstUI.prototype.clickActivity = function () {
    };
    /**规则 */
    FirstUI.prototype.clickRule = function () {
        console.log("clickRule");
        UIManager.addUI(UIConst.RuleUI);
    };
    /**关闭界面 */
    FirstUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return FirstUI;
}(BaseUI));
__reflect(FirstUI.prototype, "FirstUI");
//# sourceMappingURL=FirstUI.js.map