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
var ShopFruitItem = (function (_super) {
    __extends(ShopFruitItem, _super);
    function ShopFruitItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/shop_fruitItem.exml";
        return _this;
    }
    ShopFruitItem.prototype.onAdd = function () {
        this.addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addToShopCar, this);
        var data = this.data;
        var shopCarData = GameModel.getInstance().getShopCarData();
    };
    ShopFruitItem.prototype.dataChanged = function () {
        var data = this.data;
        this.titleTxt.text = data.name;
        this.costTxt.text = data.sell_gold + "";
        var gold = (data.sell_gold ? data.sell_gold : 0);
        this.coseMoneyTxt.text = '(价值' + gold / 100 + '元)';
        // this.icon.source = data.id+"通过id去配置中寻找对应图片";
        var shopCarData = GameModel.getInstance().getShopCarData();
    };
    ShopFruitItem.prototype.addToShopCar = function () {
        var data = this.data;
        GameModel.getInstance().addShopCarData(data.id);
    };
    ShopFruitItem.prototype.removeFromShopCar = function () {
        var data = this.data;
        GameModel.getInstance().reduceShopCarData(data.id);
    };
    ShopFruitItem.prototype.onRemove = function () {
        this.addBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.addToShopCar, this);
    };
    return ShopFruitItem;
}(AItemRenderer));
__reflect(ShopFruitItem.prototype, "ShopFruitItem");
//# sourceMappingURL=ShopFruitItem.js.map