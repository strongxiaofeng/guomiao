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
        // this.addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    };
    ShopSeedItem.prototype.dataChanged = function () {
        if (!this.data) {
            this.contentGroup.visible = false;
            this.emptyGroup.visible = true;
            this.height = this.emptyGroup.height;
        }
        else {
            this.contentGroup.visible = true;
            this.emptyGroup.visible = false;
            this.height = this.contentGroup.height;
            var data = this.data;
            this.titleTxt.text = data.name;
            this.descTxt.text = data.desc;
            this.costTxt.text = (data.buy_gold ? data.buy_gold : 0) + "果喵币";
            // this.icon.source = data.id+"通过id去配置中寻找对应图片";
            var shopCarData = GameModel.getInstance().getShopCarData();
            // this.updateShopCarData(shopCarData);
        }
    };
    ShopSeedItem.prototype.onClick = function (e) {
        // if(e.target == this.addBtn)
        // {
        // 	this.addToShopCar();
        // }
        // else{
        this.showSeedDetail();
        // }
    };
    ShopSeedItem.prototype.showSeedDetail = function () {
        var data = this.data;
        GameModel.getInstance().curSeedDetailId = data.id;
        UIManager.openUI(UIConst.ShopSeedAlertUI, LayerManager.Layer_Tip);
    };
    ShopSeedItem.prototype.removeFromShopCar = function () {
        var data = this.data;
        GameModel.getInstance().reduceShopCarData(data.id);
    };
    // /**当购物车数据发生变化 */
    // public updateShopCarData(shopcarData:any)
    // {
    // 	var data = <vo.Item_listItem>this.data;
    // 	if(shopcarData[data.id] > 0)
    // 	{
    // 		this.addBtn.enabled = false;
    // 	}
    // 	else
    // 	{
    // 		this.addBtn.enabled = true;
    // 	}
    // }
    ShopSeedItem.prototype.onRemove = function () {
        // this.addBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.addToShopCar, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    };
    return ShopSeedItem;
}(AItemRenderer));
__reflect(ShopSeedItem.prototype, "ShopSeedItem");
//# sourceMappingURL=ShopSeedItem.js.map