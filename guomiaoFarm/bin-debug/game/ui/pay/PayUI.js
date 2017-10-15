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
var PayUI = (function (_super) {
    __extends(PayUI, _super);
    function PayUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/pay.exml";
        return _this;
    }
    /**初始界面 */
    PayUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
        var ac = new eui.ArrayCollection();
        ac.addItem({});
        ac.addItem({});
        ac.addItem({});
        ac.addItem({});
        this.buyList.itemRenderer = PayGoodsItem;
        this.buyList.dataProvider = ac;
        this.updateHeight();
    };
    /**初始监听 */
    PayUI.prototype.initListener = function () {
        this.registerEvent(this.payBtn, egret.TouchEvent.TOUCH_TAP, this.clickPay, this);
    };
    /**根据购物数量 刷新高度 */
    PayUI.prototype.updateHeight = function () {
        var _this = this;
        egret.callLater(function () {
            _this.buyListGroup.height = _this.buyList.height + 35;
            _this.payTypeGroup.y = _this.buyListGroup.y + _this.buyListGroup.height + 10;
            _this.leaveMsgGroup.y = _this.payTypeGroup.y + _this.payTypeGroup.height + 10;
            _this.scrollerGroup.height = _this.leaveMsgGroup.y + _this.leaveMsgGroup.height;
        }, this);
    };
    /**确认付款 */
    PayUI.prototype.clickPay = function () {
        // GameController.getInstance().sendOrder(2, [{item_id:100001,num:1}], "尽快送达");
        setTimeout(function () {
            GameController.getInstance().sendOrderPay(2);
        }, 1000);
    };
    /**关闭界面 */
    PayUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return PayUI;
}(BaseUI));
__reflect(PayUI.prototype, "PayUI");
//# sourceMappingURL=PayUI.js.map