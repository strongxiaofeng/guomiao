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
var ContributeDetailDescUI = (function (_super) {
    __extends(ContributeDetailDescUI, _super);
    function ContributeDetailDescUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/contributeDetailDesc.exml";
        return _this;
    }
    /**初始界面 */
    ContributeDetailDescUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
    };
    /**初始监听 */
    ContributeDetailDescUI.prototype.initListener = function () {
        this.registerEvent(this.closeBtn, egret.TouchEvent.TOUCH_TAP, this.close, this);
    };
    /**贡献度明细说明 */
    ContributeDetailDescUI.prototype.close = function () {
        UIManager.closeUI(UIConst.ContributeDetailDescUI);
    };
    /**关闭界面 */
    ContributeDetailDescUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return ContributeDetailDescUI;
}(BaseUI));
__reflect(ContributeDetailDescUI.prototype, "ContributeDetailDescUI");
//# sourceMappingURL=ContributeDetailDescUI.js.map