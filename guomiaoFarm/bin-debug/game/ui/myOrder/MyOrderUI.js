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
var MyOrderUI = (function (_super) {
    __extends(MyOrderUI, _super);
    function MyOrderUI() {
        var _this = _super.call(this) || this;
        /**当前选择是哪个标签 */
        _this.curChoose = 0;
        _this.skinName = "resource/skins/myOrder.exml";
        return _this;
    }
    /**初始界面 */
    MyOrderUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
        this.choose0();
        // GameController.getInstance().sendSureReceive(2);
    };
    /**初始监听 */
    MyOrderUI.prototype.initListener = function () {
        this.registerEvent(this.tabImg0, egret.TouchEvent.TOUCH_TAP, this.choose0, this);
        this.registerEvent(this.tabImg1, egret.TouchEvent.TOUCH_TAP, this.choose1, this);
        this.registerEvent(this.tabImg2, egret.TouchEvent.TOUCH_TAP, this.choose2, this);
        this.addRegister(NotifyConst.Notify_OrderList, this.onOrderList, this);
        this.addRegister(NotifyConst.Notify_OrderPayResult, this.onPay, this);
        this.addRegister(NotifyConst.Notify_SureReceiveResult, this.onSure, this);
        this.addRegister(NotifyConst.Notify_DeleteReceivedOrderResult, this.onDelete, this);
    };
    /**选择 待付款 */
    MyOrderUI.prototype.choose0 = function () {
        this.curChoose = 0;
        this.tabImg0.source = "rank_tab_select_png";
        this.tabImg0.source = "rank_tab_noselect_png";
        this.tabImg0.source = "rank_tab_noselect_png";
        GameController.getInstance().getOrderList(this.curChoose, 0, 10);
    };
    /**选择 待收货 */
    MyOrderUI.prototype.choose1 = function () {
        this.curChoose = 1;
        this.tabImg0.source = "rank_tab_noselect_png";
        this.tabImg0.source = "rank_tab_select_png";
        this.tabImg0.source = "rank_tab_noselect_png";
        GameController.getInstance().getOrderList(this.curChoose, 0, 10);
    };
    /**选择 已收货 */
    MyOrderUI.prototype.choose2 = function () {
        this.curChoose = 2;
        this.tabImg0.source = "rank_tab_noselect_png";
        this.tabImg0.source = "rank_tab_noselect_png";
        this.tabImg0.source = "rank_tab_select_png";
        GameController.getInstance().getOrderList(this.curChoose, 0, 10);
    };
    /**收到订单列表返回 */
    MyOrderUI.prototype.onOrderList = function (data) {
        console.log("订单信息 ", data);
        this.ac = new eui.ArrayCollection();
        this.list.itemRenderer = MyOrderListItem;
        this.list.useVirtualLayout = false;
        if (data && data.list && data.list.length > 0) {
            var list = data.list;
            for (var i = 0; i < list.length; i++) {
                this.ac.addItem({ itemData: list[i], status: list[i].status });
            }
        }
        this.list.dataProvider = this.ac;
    };
    /**支付返回 */
    MyOrderUI.prototype.onPay = function () {
        this.choose0();
    };
    /**确认收货返回 */
    MyOrderUI.prototype.onSure = function () {
        this.choose1();
    };
    /**删除订单返回 */
    MyOrderUI.prototype.onDelete = function () {
        this.choose2();
    };
    /**关闭界面 */
    MyOrderUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.removeRegister(this);
    };
    return MyOrderUI;
}(BaseUI));
__reflect(MyOrderUI.prototype, "MyOrderUI");
//# sourceMappingURL=MyOrderUI.js.map