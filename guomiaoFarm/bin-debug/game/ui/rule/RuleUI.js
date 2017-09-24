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
var RuleUI = (function (_super) {
    __extends(RuleUI, _super);
    function RuleUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/rule.exml";
        return _this;
    }
    /**初始界面 */
    RuleUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
        this.clickLeft();
    };
    /**初始监听 */
    RuleUI.prototype.initListener = function () {
        this.registerEvent(this.leftBtn, egret.TouchEvent.TOUCH_TAP, this.clickLeft, this);
        this.registerEvent(this.rightBtn, egret.TouchEvent.TOUCH_TAP, this.clickRight, this);
    };
    RuleUI.prototype.clickLeft = function () {
        this.ruleGroup.visible = true;
        this.descGroup.visible = false;
        this.leftBtn.enabled = false;
        this.rightBtn.enabled = true;
    };
    RuleUI.prototype.clickRight = function () {
        this.ruleGroup.visible = false;
        this.descGroup.visible = true;
        this.leftBtn.enabled = true;
        this.rightBtn.enabled = false;
    };
    /**关闭界面 */
    RuleUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return RuleUI;
}(BaseUI));
__reflect(RuleUI.prototype, "RuleUI");
//# sourceMappingURL=RuleUI.js.map