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
var ShopToolItem = (function (_super) {
    __extends(ShopToolItem, _super);
    function ShopToolItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/shop_toolItem.exml";
        return _this;
    }
    ShopToolItem.prototype.onAdd = function () {
        this.addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addToShopCar, this);
        this.reduceBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.removeFromShopCar, this);
    };
    ShopToolItem.prototype.dataChanged = function () {
        var data = this.data;
        if (!data) {
            this.moreToolTip.visible = true;
        }
        else {
            this.moreToolTip.visible = false;
            this.titleTxt.text = data.name;
            this.descTxt.text = data.desc;
            this.costTxt.text = data.sell_gold + "果喵币";
            // this.icon.source = data.id+"通过id去配置中寻找对应图片";
        }
    };
    ShopToolItem.prototype.addToShopCar = function () {
        var data = this.data;
        GameModel.getInstance().addShopCarData(data.id);
        this.reduceBtn.visible = true;
        this.numTxt.visible = true;
        var shopcardata = GameModel.getInstance().getShopCarData();
        this.numTxt.text = shopcardata[data.id];
    };
    ShopToolItem.prototype.removeFromShopCar = function () {
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
    ShopToolItem.prototype.onRemove = function () {
        this.addBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.addToShopCar, this);
        this.reduceBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.removeFromShopCar, this);
    };
    return ShopToolItem;
}(AItemRenderer));
__reflect(ShopToolItem.prototype, "ShopToolItem");
//# sourceMappingURL=ShopToolItem.js.map