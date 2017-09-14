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
    };
    /**初始监听 */
    TopBarUI.prototype.initListener = function () {
        this.registerEvent(this.leftBtn, egret.TouchEvent.TOUCH_TAP, this.clickLeft, this);
        this.registerEvent(this.homeBtn, egret.TouchEvent.TOUCH_TAP, this.clickHome, this);
    };
    /**返回上一个界面 */
    TopBarUI.prototype.clickLeft = function () {
        console.log("clickLeft");
        if (UIManager.isUIOpen(UIConst.RuleUI)) {
            UIManager.closeUI(UIConst.TopBarUI);
            UIManager.openUI(UIConst.FirstUI);
        }
    };
    /**返回主界面 */
    TopBarUI.prototype.clickHome = function () {
        console.log("clickHome");
        if (UIManager.isUIOpen(UIConst.RuleUI)) {
            UIManager.closeUI(UIConst.TopBarUI);
            UIManager.openUI(UIConst.FirstUI);
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