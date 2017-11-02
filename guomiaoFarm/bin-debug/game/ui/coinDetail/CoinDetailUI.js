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
var CoinDetailUI = (function (_super) {
    __extends(CoinDetailUI, _super);
    function CoinDetailUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/coinDetail.exml";
        return _this;
    }
    /**初始界面 */
    CoinDetailUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
        var ac = new eui.ArrayCollection();
        ac.addItem({ type: "充值", num: 2000, date: "2017-09-30" });
        ac.addItem({ type: "充值", num: 502132132, date: "2017-08-31" });
        ac.addItem({ type: "充值", num: 50, date: "2017-07-02" });
        ac.addItem({ type: "充值", num: 20, date: "2017-09-30" });
        ac.addItem({ type: "充值", num: 800, date: "2017-09-30" });
        ac.addItem({ type: "充值", num: 6595, date: "2017-09-30" });
        ac.addItem({ type: "充值", num: 6595, date: "2017-09-30" });
        ac.addItem({ type: "充值", num: 6595, date: "2017-09-30" });
        ac.addItem({ type: "充值", num: 6595, date: "2017-09-30" });
        this.coinDetailList.itemRenderer = CoinDetailItem;
        this.coinDetailList.useVirtualLayout = false;
        this.coinDetailList.dataProvider = ac;
        ac.refresh();
    };
    /**初始监听 */
    CoinDetailUI.prototype.initListener = function () {
        this.registerEvent(this.rightBtn, egret.TouchEvent.TOUCH_TAP, this.goContributeDetail, this);
        this.registerEvent(this.detailTxtIcon, egret.TouchEvent.TOUCH_TAP, this.goCoinDetailDesc, this);
        this.registerEvent(this.detailTxt, egret.TouchEvent.TOUCH_TAP, this.goCoinDetailDesc, this);
    };
    CoinDetailUI.prototype.goContributeDetail = function () {
        UIManager.openUI(UIConst.ContributeDetailUI);
    };
    CoinDetailUI.prototype.goCoinDetailDesc = function () {
        UIManager.openUI(UIConst.CoinDetailDescUI, LayerManager.Layer_Tip);
    };
    /**关闭界面 */
    CoinDetailUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return CoinDetailUI;
}(BaseUI));
__reflect(CoinDetailUI.prototype, "CoinDetailUI");
//# sourceMappingURL=CoinDetailUI.js.map