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
var TipGreenUI = (function (_super) {
    __extends(TipGreenUI, _super);
    function TipGreenUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/tipGreen.exml";
        return _this;
    }
    TipGreenUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
        this.txt.text = "";
    };
    /**初始监听 */
    TipGreenUI.prototype.initListener = function () {
        this.addRegister(NotifyConst.Notify_Green, this.showGreen, this);
    };
    TipGreenUI.prototype.showGreen = function (data) {
        var _this = this;
        egret.Tween.removeTweens(this.txt);
        this.txt.text = data;
        this.txt.verticalCenter = 0;
        egret.Tween.get(this.txt)
            .to({ verticalCenter: -50 }, 1000)
            .call(function () {
            _this.txt.text = "";
            _this.txt.verticalCenter = 0;
            egret.Tween.removeTweens(_this.txt);
        });
    };
    return TipGreenUI;
}(BaseUI));
__reflect(TipGreenUI.prototype, "TipGreenUI");
//# sourceMappingURL=TipGreenUI.js.map