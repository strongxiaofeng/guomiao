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
var SignUI = (function (_super) {
    __extends(SignUI, _super);
    function SignUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/sign.exml";
        return _this;
    }
    /**初始界面 */
    SignUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
    };
    /**初始监听 */
    SignUI.prototype.initListener = function () {
        this.registerEvent(this.btn_close, egret.TouchEvent.TOUCH_TAP, this.clickClose, this);
    };
    /**点击关闭 */
    SignUI.prototype.clickClose = function () {
        UIManager.closeUI(UIConst.SignUI);
    };
    /**关闭界面 */
    SignUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return SignUI;
}(BaseUI));
__reflect(SignUI.prototype, "SignUI");
