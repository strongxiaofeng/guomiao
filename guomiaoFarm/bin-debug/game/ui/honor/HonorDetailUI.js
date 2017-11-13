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
var HonorDetailUI = (function (_super) {
    __extends(HonorDetailUI, _super);
    function HonorDetailUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/honorDetail.exml";
        return _this;
    }
    /**初始界面 */
    HonorDetailUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
        var data = GameModel.getInstance().getHonorItemDetail();
        // this.icon.source = data.achievement_icon+"";
        this.nameTxt.text = data.name;
        this.timeTxt.text = data.name;
        this.countTxt.text = data.complete;
        this.descTxt.text = data.content;
        // this.powerTxt.text = data.name;
    };
    /**初始监听 */
    HonorDetailUI.prototype.initListener = function () {
        this.registerEvent(this.setSDefaultBtn, egret.TouchEvent.TOUCH_TAP, this.setDefault, this);
        this.registerEvent(this.shareBtn, egret.TouchEvent.TOUCH_TAP, this.share, this);
        this.registerEvent(this, egret.Event.ENTER_FRAME, this.onframe, this);
    };
    HonorDetailUI.prototype.onframe = function () {
        this.light.rotation += 1;
        if (this.light.rotation > 360)
            this.light.rotation -= 360;
    };
    HonorDetailUI.prototype.setDefault = function () {
        var data = GameModel.getInstance().getHonorItemDetail();
        GameController.getInstance().getHonorReward(data.id);
    };
    HonorDetailUI.prototype.share = function () {
    };
    HonorDetailUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return HonorDetailUI;
}(BaseUI));
__reflect(HonorDetailUI.prototype, "HonorDetailUI");
//# sourceMappingURL=HonorDetailUI.js.map