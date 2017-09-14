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
        console.log("settinmg" + this.isShow);
    };
    /**初始监听 */
    RuleUI.prototype.initListener = function () {
    };
    /**关闭界面 */
    RuleUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return RuleUI;
}(BaseUI));
__reflect(RuleUI.prototype, "RuleUI");
//# sourceMappingURL=RuleUI.js.map