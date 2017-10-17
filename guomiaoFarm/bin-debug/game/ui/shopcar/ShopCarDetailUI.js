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
var ShopCarDetailUI = (function (_super) {
    __extends(ShopCarDetailUI, _super);
    function ShopCarDetailUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/shopCarDetail.exml";
        return _this;
    }
    /**初始界面 */
    ShopCarDetailUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
        this.headGroup.visible = false;
        this.scroller.visible = false;
        this.choosedList.itemRenderer = ShopCarDetailItem;
        this.ac = new eui.ArrayCollection();
        this.choosedList.dataProvider = this.ac;
        this.choosedList.useVirtualLayout = false;
    };
    /**初始监听 */
    ShopCarDetailUI.prototype.initListener = function () {
        this.registerEvent(this.shopcarImg, egret.TouchEvent.TOUCH_TAP, this.clickCar, this);
        this.registerEvent(this.payBtn, egret.TouchEvent.TOUCH_TAP, this.clickPay, this);
        this.registerEvent(this.clearBtn, egret.TouchEvent.TOUCH_TAP, this.clickClearCar, this);
        this.addRegister(NotifyConst.Notify_ShopCar, this.updateShopCar, this);
    };
    /**刷新购物车 */
    ShopCarDetailUI.prototype.updateShopCar = function () {
        var data = GameModel.getInstance().getShopCarData();
        console.log("updateShopCar ", data);
        this.ac.removeAll();
        var count = 0;
        var cost = 0;
        for (var key in data) {
            var item = GameModel.getInstance().getItemById(parseInt(key));
            if (item) {
                count += data[key];
                cost += item.sell_gold;
                this.ac.addItem({ id: key, name: item.name, cost: item.sell_gold, count: data[key] });
            }
        }
        this.ac.refresh();
        this.updateScroller();
        this.shopCountTxt.text = count + "";
        this.payCountTxt.text = cost + "";
    };
    /**点击购物车 显示购物列表 */
    ShopCarDetailUI.prototype.clickCar = function () {
        if (!this.headGroup.visible) {
            this.headGroup.visible = true;
            this.scroller.visible = true;
            this.updateShopCar();
        }
        else {
            this.headGroup.visible = false;
            this.scroller.visible = false;
        }
    };
    /**清空购物车 */
    ShopCarDetailUI.prototype.clickClearCar = function () {
        GameModel.getInstance().clearShopCar();
    };
    /**去结算 */
    ShopCarDetailUI.prototype.clickPay = function () {
        UIManager.openUI(UIConst.PayUI);
    };
    /**动态刷新位置 如果购物项item满屏 才让滑动*/
    ShopCarDetailUI.prototype.updateScroller = function () {
        var _this = this;
        if (!this.scroller.visible)
            return;
        egret.callLater(function () {
            var height = 874;
            if (_this.ac.length <= 8) {
                height = _this.ac.length * 100;
            }
            _this.scroller.height = height < 874 ? height : 874;
            _this.headGroup.bottom = _this.scroller.height + _this.scroller.bottom;
        }, this);
    };
    /**关闭界面 */
    ShopCarDetailUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.removeRegister(this);
    };
    return ShopCarDetailUI;
}(BaseUI));
__reflect(ShopCarDetailUI.prototype, "ShopCarDetailUI");
//# sourceMappingURL=ShopCarDetailUI.js.map