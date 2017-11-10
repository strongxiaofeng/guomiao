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
var TipErrorUI = (function (_super) {
    __extends(TipErrorUI, _super);
    function TipErrorUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/tipError.exml";
        return _this;
    }
    TipErrorUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
        this.errorTxt.text = "";
    };
    /**初始监听 */
    TipErrorUI.prototype.initListener = function () {
        this.addRegister(NotifyConst.Notify_Error, this.showError, this);
    };
    TipErrorUI.prototype.showError = function (data) {
        var _this = this;
        egret.Tween.removeTweens(this.errorTxt);
        this.errorTxt.text = data;
        this.errorTxt.alpha = 1;
        egret.Tween.get(this.errorTxt)
            .to({ alpha: 0 }, 1000)
            .call(function () {
            _this.errorTxt.alpha = 1;
            _this.errorTxt.text = "";
            egret.Tween.removeTweens(_this.errorTxt);
        });
    };
    return TipErrorUI;
}(BaseUI));
__reflect(TipErrorUI.prototype, "TipErrorUI");
//# sourceMappingURL=TipErrorUI.js.map