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
var MyOrderListItem = (function (_super) {
    __extends(MyOrderListItem, _super);
    function MyOrderListItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/myOrderItem.exml";
        return _this;
    }
    MyOrderListItem.prototype.onAdd = function () {
        this.payBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.pay, this);
        this.lookBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.look, this);
        this.sureBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sure, this);
        this.deleteOrderBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.delete, this);
    };
    MyOrderListItem.prototype.dataChanged = function () {
        var _this = this;
        var data = this.data.itemData;
        var status = this.data.status;
        var time = new Date();
        time.setMilliseconds(data.created_at);
        this.timeTxt.text = time.getFullYear() + "-" + time.getMonth() + "-" + time.getDate();
        this.totalCountTxt.text = "共" + data.list.length + "件商品";
        this.totalCostTxt.text = "￥" + data.price;
        //待付款
        if (status == 0) {
            this.timeTxt.visible = false;
            this.payBtn.visible = true;
            this.lookBtn.visible = false;
            this.sureBtn.visible = false;
            this.deleteOrderBtn.visible = false;
            this.totalCostTipTxt.text = "需付款:";
        }
        //待收货
        if (status == 1) {
            this.timeTxt.visible = false;
            this.payBtn.visible = false;
            this.lookBtn.visible = true;
            this.sureBtn.visible = true;
            this.deleteOrderBtn.visible = false;
            ;
            this.totalCostTipTxt.text = "需付款:";
        }
        //已收货
        if (status == 2) {
            this.timeTxt.visible = true;
            this.payBtn.visible = false;
            this.lookBtn.visible = false;
            this.sureBtn.visible = false;
            this.deleteOrderBtn.visible = true;
            ;
            this.totalCostTipTxt.text = "共计:";
        }
        // 刷新item数据显示
        var ac = new eui.ArrayCollection();
        var list = data.list;
        for (var i = 0; i < list.length; i++) {
            ac.addItem(list[i]);
        }
        this.oneOrderList.itemRenderer = MyOrderListOneItem;
        this.oneOrderList.useVirtualLayout = false;
        this.oneOrderList.dataProvider = ac;
        egret.callLater(function () {
            _this.bottomGroup.y = _this.oneOrderList.y + _this.oneOrderList.height;
            _this.rect.height = _this.bottomGroup.y + _this.bottomGroup.height;
            _this.height = _this.rect.height + 10;
        }, this);
    };
    /**支付 */
    MyOrderListItem.prototype.pay = function () {
        var data = this.data.itemData;
        GameController.getInstance().sendOrderPay(data.id);
    };
    /**查看物流 */
    MyOrderListItem.prototype.look = function () {
    };
    /**确认收货 */
    MyOrderListItem.prototype.sure = function () {
        var data = this.data.itemData;
        GameController.getInstance().sendSureReceive(data.id);
    };
    /**删除订单 */
    MyOrderListItem.prototype.delete = function () {
        var data = this.data.itemData;
        GameController.getInstance().sendDeleteReceivedOrder(data.id);
    };
    MyOrderListItem.prototype.onRemove = function () {
        this.payBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.pay, this);
        this.lookBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.look, this);
        this.sureBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.sure, this);
        this.deleteOrderBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.delete, this);
    };
    return MyOrderListItem;
}(AItemRenderer));
__reflect(MyOrderListItem.prototype, "MyOrderListItem");
//# sourceMappingURL=MyOrderListItem.js.map