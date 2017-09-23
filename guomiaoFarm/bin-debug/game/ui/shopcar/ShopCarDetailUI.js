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
        var ac = new eui.ArrayCollection();
        ac.addItem({});
        ac.addItem({});
        ac.addItem({});
        ac.addItem({});
        ac.addItem({});
        this.choosedList.dataProvider = ac;
        this.updateScroller();
    };
    /**初始监听 */
    ShopCarDetailUI.prototype.initListener = function () {
        this.registerEvent(this.shopcarImg, egret.TouchEvent.TOUCH_TAP, this.clickCar, this);
        this.registerEvent(this.payBtn, egret.TouchEvent.TOUCH_TAP, this.clickPay, this);
    };
    /**点击购物车 显示购物列表 */
    ShopCarDetailUI.prototype.clickCar = function () {
        if (!this.headGroup.visible) {
            var haveChoosed = true;
            if (haveChoosed) {
                this.headGroup.visible = true;
                this.scroller.visible = true;
            }
        }
        else {
            this.headGroup.visible = false;
            this.scroller.visible = false;
        }
    };
    /**去结算 */
    ShopCarDetailUI.prototype.clickPay = function () {
        UIManager.openUI(UIConst.PayUI);
    };
    /**动态刷新位置 如果购物项item满屏 才让滑动*/
    ShopCarDetailUI.prototype.updateScroller = function () {
        var _this = this;
        egret.callLater(function () {
            console.log('this.choosedList.height ' + _this.choosedList.height + " this.choosedList.height" + _this.choosedList.scrollRect.height);
            _this.scroller.height = _this.choosedList.height < 874 ? _this.choosedList.height : 874;
            _this.headGroup.bottom = _this.scroller.height + _this.scroller.bottom;
        }, this);
    };
    /**关闭界面 */
    ShopCarDetailUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return ShopCarDetailUI;
}(BaseUI));
__reflect(ShopCarDetailUI.prototype, "ShopCarDetailUI");
//# sourceMappingURL=ShopCarDetailUI.js.map