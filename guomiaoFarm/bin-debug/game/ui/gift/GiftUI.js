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
var GiftUI = (function (_super) {
    __extends(GiftUI, _super);
    function GiftUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/gift.exml";
        return _this;
    }
    /**初始界面 */
    GiftUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
        this.list.itemRenderer = GiftItem;
        this.list.useVirtualLayout = false;
        var data = GameModel.getInstance().getGift();
        var ac = new eui.ArrayCollection();
        for (var key in data) {
            var item = data[key];
            ac.addItem(item);
        }
        this.list.dataProvider = ac;
    };
    /**初始监听 */
    GiftUI.prototype.initListener = function () {
        this.registerEvent(this.btn_close, egret.TouchEvent.TOUCH_TAP, this.clickClose, this);
        this.registerEvent(this.leftBtn, egret.TouchEvent.TOUCH_TAP, this.clickleft, this);
        this.registerEvent(this.rightBtn, egret.TouchEvent.TOUCH_TAP, this.clickRight, this);
        this.registerEvent(this.inviteBtn, egret.TouchEvent.TOUCH_TAP, this.invite, this);
    };
    GiftUI.prototype.invite = function () {
        UIManager.openUI(UIConst.RankFriendContributeUI);
        UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
        this.dispose();
    };
    GiftUI.prototype.getGift = function () {
        UIManager.openUI(UIConst.TipGetCoinUI, LayerManager.Layer_Tip);
    };
    GiftUI.prototype.clickleft = function () {
        if (this.scroller.viewport.scrollH - 100 >= 0)
            this.scroller.viewport.scrollH -= 100;
    };
    GiftUI.prototype.clickRight = function () {
        if (this.scroller.viewport.scrollH + 100 < this.scroller.viewport.contentWidth - 502) {
            this.scroller.viewport.scrollH += 100;
        }
    };
    /**点击关闭按钮 */
    GiftUI.prototype.clickClose = function () {
        UIManager.closeUI(UIConst.GiftUI);
    };
    /**关闭界面 */
    GiftUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return GiftUI;
}(BaseUI));
__reflect(GiftUI.prototype, "GiftUI");
//# sourceMappingURL=GiftUI.js.map