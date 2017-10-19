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
        _this.sendPayData = [];
        _this.skinName = "resource/skins/pay.exml";
        return _this;
    }
    /**初始界面 */
    PayUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
        //默认地址
        var defaultAddress = GameModel.getInstance().getDefaultAddress();
        if (defaultAddress) {
            this.addressNameTxt.text = defaultAddress.realname;
            this.addressNumTxt.text = defaultAddress.phone;
            this.addressDetailTxt.text = defaultAddress.address;
        }
        else {
            this.addressNameTxt.text = "您还没有添加地址";
            this.addressNumTxt.text = "";
            this.addressDetailTxt.text = "";
        }
        //选中的物品
        var items = GameModel.getInstance().getShopCarData();
        var ac = new eui.ArrayCollection();
        this.sendPayData = [];
        for (var id in items) {
            var itemdata = GameModel.getInstance().getItemById(parseInt(id));
            ac.addItem({ itemdata: itemdata, count: items[id] });
            this.sendPayData.push({ item_id: id, num: items[id] });
        }
        this.buyList.itemRenderer = PayGoodsItem;
        this.buyList.dataProvider = ac;
        this.updateHeight();
    };
    /**初始监听 */
    PayUI.prototype.initListener = function () {
        this.registerEvent(this.payBtn, egret.TouchEvent.TOUCH_TAP, this.clickPay, this);
        this.registerEvent(this.moreAddressBtn, egret.TouchEvent.TOUCH_TAP, this.clickMoreAddress, this);
        this.addRegister(NotifyConst.Notify_OrderResult, this.onPay, this);
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
    /**选择默认 地址 */
    PayUI.prototype.clickMoreAddress = function () {
        UIManager.openUI(UIConst.AddressManageUI, LayerManager.Layer_UI);
    };
    /**提交订单 */
    PayUI.prototype.clickPay = function () {
        var defaultAddress = GameModel.getInstance().getDefaultAddress();
        var addressid = defaultAddress ? defaultAddress.id : 0;
        GameController.getInstance().sendOrder(addressid, this.sendPayData, this.leaveMsgInput.text);
        // setTimeout(function() {
        // 	GameController.getInstance().sendOrderPay(2);
        // }, 1000);
    };
    /**提交订单返回 */
    PayUI.prototype.onPay = function (obj) {
        if (obj.status > 0) {
            //提交订单失败
        }
        else {
            //提交订单成功 到我的订单
            GameModel.getInstance().clearShopCar();
            UIManager.openUI(UIConst.MyOrderUI);
        }
    };
    /**关闭界面 */
    PayUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.removeRegister(this);
    };
    return PayUI;
}(BaseUI));
__reflect(PayUI.prototype, "PayUI");
//# sourceMappingURL=PayUI.js.map