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
var LastHarvestRankUI = (function (_super) {
    __extends(LastHarvestRankUI, _super);
    function LastHarvestRankUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/lastHarvestRank.exml";
        return _this;
    }
    /**初始界面 */
    LastHarvestRankUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
    };
    /**初始监听 */
    LastHarvestRankUI.prototype.initListener = function () {
        this.registerEvent(this.btn_close, egret.TouchEvent.TOUCH_TAP, this.clickClose, this);
    };
    /**点击关闭按钮 */
    LastHarvestRankUI.prototype.clickClose = function () {
        UIManager.closeUI(UIConst.LastHarvestRankUI);
    };
    /**关闭界面 */
    LastHarvestRankUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return LastHarvestRankUI;
}(BaseUI));
__reflect(LastHarvestRankUI.prototype, "LastHarvestRankUI");
