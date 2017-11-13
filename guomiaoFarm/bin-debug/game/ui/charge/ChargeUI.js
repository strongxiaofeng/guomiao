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
var ChargeUI = (function (_super) {
    __extends(ChargeUI, _super);
    function ChargeUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/charge.exml";
        return _this;
    }
    /**初始界面 */
    ChargeUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
    };
    /**初始监听 */
    ChargeUI.prototype.initListener = function () {
        console.log('init charge listener');
        this.registerEvent(this.choice1, egret.TouchEvent.TOUCH_TAP, this.clickChoice1, this);
        this.registerEvent(this.choice2, egret.TouchEvent.TOUCH_TAP, this.clickChoice2, this);
        this.registerEvent(this.choice3, egret.TouchEvent.TOUCH_TAP, this.clickChoice3, this);
        this.registerEvent(this.inputMoney, egret.TouchEvent.TOUCH_TAP, this.changeInput, this);
        this.registerEvent(this.sureBtn, egret.TouchEvent.TOUCH_TAP, this.sure, this);
    };
    ChargeUI.prototype.changeInput = function () {
        this.chargeNum = parseInt(this.inputMoney.text);
        this.choice1.source = "chargeChoiceBg_png";
        this.choice2.source = "chargeChoiceBg_png";
        this.choice3.source = "chargeChoiceBg_png";
        this.choiceTxt1.textColor = 0x888888;
        this.choiceTxt2.textColor = 0x888888;
        this.choiceTxt3.textColor = 0x888888;
    };
    ChargeUI.prototype.clickChoice1 = function () {
        this.chargeNum = 100;
        this.choice1.source = "chargeChoiceBg_s_png";
        this.choice2.source = "chargeChoiceBg_png";
        this.choice3.source = "chargeChoiceBg_png";
        this.choiceTxt1.textColor = 0xffffff;
        this.choiceTxt2.textColor = 0x888888;
        this.choiceTxt3.textColor = 0x888888;
    };
    ChargeUI.prototype.clickChoice2 = function () {
        this.chargeNum = 300;
        this.choice1.source = "chargeChoiceBg_png";
        this.choice2.source = "chargeChoiceBg_s_png";
        this.choice3.source = "chargeChoiceBg_png";
        this.choiceTxt1.textColor = 0x888888;
        this.choiceTxt2.textColor = 0xffffff;
        this.choiceTxt3.textColor = 0x888888;
    };
    ChargeUI.prototype.clickChoice3 = function () {
        this.chargeNum = 500;
        this.choice1.source = "chargeChoiceBg_png";
        this.choice2.source = "chargeChoiceBg_png";
        this.choice3.source = "chargeChoiceBg_s_png";
        this.choiceTxt1.textColor = 0x888888;
        this.choiceTxt2.textColor = 0x888888;
        this.choiceTxt3.textColor = 0xffffff;
    };
    ChargeUI.prototype.sure = function () {
        console.log("确定充值 " + this.chargeNum);
    };
    /**关闭界面 */
    ChargeUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return ChargeUI;
}(BaseUI));
__reflect(ChargeUI.prototype, "ChargeUI");
//# sourceMappingURL=ChargeUI.js.map