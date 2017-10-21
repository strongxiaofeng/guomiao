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
var ContributeDetailUI = (function (_super) {
    __extends(ContributeDetailUI, _super);
    function ContributeDetailUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/contributeDetail.exml";
        return _this;
    }
    /**初始界面 */
    ContributeDetailUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
        var ac = new eui.ArrayCollection();
        ac.addItem({ num: 2000, date: "2017-09-30" });
        ac.addItem({ num: 502132132, date: "2017-08-31" });
        ac.addItem({ num: 5, date: "2017-07-02" });
        ac.addItem({ num: 20, date: "2017-09-30" });
        ac.addItem({ num: 800, date: "2017-09-30" });
        ac.addItem({ num: 6595, date: "2017-09-30" });
        ac.addItem({ num: 20, date: "2017-09-30" });
        ac.addItem({ num: 800, date: "2017-09-30" });
        ac.addItem({ num: 6595, date: "2017-09-30" });
        this.attriDetailList.itemRenderer = ContriButeDetailItem;
        this.attriDetailList.useVirtualLayout = false;
        this.attriDetailList.dataProvider = ac;
    };
    /**初始监听 */
    ContributeDetailUI.prototype.initListener = function () {
        this.registerEvent(this.leftBtn, egret.TouchEvent.TOUCH_TAP, this.goCoinDetail, this);
        this.registerEvent(this.descIcon, egret.TouchEvent.TOUCH_TAP, this.goContriDetailDesc, this);
        this.registerEvent(this.detailTxt, egret.TouchEvent.TOUCH_TAP, this.goContriDetailDesc, this);
    };
    /**去果喵币明细 */
    ContributeDetailUI.prototype.goCoinDetail = function () {
        UIManager.openUI(UIConst.CoinDetailUI);
    };
    /**去贡献度明细说明 */
    ContributeDetailUI.prototype.goContriDetailDesc = function () {
        UIManager.openUI(UIConst.ContributeDetailDescUI, LayerManager.Layer_Tip);
    };
    /**关闭界面 */
    ContributeDetailUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return ContributeDetailUI;
}(BaseUI));
__reflect(ContributeDetailUI.prototype, "ContributeDetailUI");
//# sourceMappingURL=ContributeDetailUI.js.map