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
var ShopSeedItem = (function (_super) {
    __extends(ShopSeedItem, _super);
    function ShopSeedItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/shop_seedItem.exml";
        return _this;
    }
    ShopSeedItem.prototype.onAdd = function () {
        this.addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addToShopCar, this);
        this.reduceBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.removeFromShopCar, this);
    };
    ShopSeedItem.prototype.dataChanged = function () {
        var data = this.data;
        this.titleTxt.text = data.name;
        this.descTxt.text = data.desc;
        this.costTxt.text = data.sell_gold + "果喵币";
        // this.icon.source = data.id+"通过id去配置中寻找对应图片";
    };
    ShopSeedItem.prototype.addToShopCar = function () {
        var data = this.data;
        GameModel.getInstance().addShopCarData(data.id);
        this.reduceBtn.visible = true;
        this.numTxt.visible = true;
        var shopcardata = GameModel.getInstance().getShopCarData();
        this.numTxt.text = shopcardata[data.id];
    };
    ShopSeedItem.prototype.removeFromShopCar = function () {
        var data = this.data;
        GameModel.getInstance().reduceShopCarData(data.id);
        var shopcardata = GameModel.getInstance().getShopCarData();
        if (!shopcardata[data.id]) {
            this.reduceBtn.visible = false;
            this.numTxt.visible = false;
        }
        else {
            this.numTxt.text = shopcardata[data.id];
        }
    };
    ShopSeedItem.prototype.onRemove = function () {
        this.addBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.addToShopCar, this);
        this.reduceBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.removeFromShopCar, this);
    };
    return ShopSeedItem;
}(AItemRenderer));
__reflect(ShopSeedItem.prototype, "ShopSeedItem");
//# sourceMappingURL=ShopSeedItem.js.map