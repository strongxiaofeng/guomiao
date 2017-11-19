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
        this.addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickAdd, this);
        // var data = <vo.Item_listItem>this.data; 
        // var shopCarData = GameModel.getInstance().getShopCarData();
        // if(data)
        // {
        // 	this.updateShopCarData(shopCarData);
        // }
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
            this.costTxt.text = (data.buy_gold ? data.buy_gold : 0) + "果喵币";
            // this.icon.source = data.id+"通过id去配置中寻找对应图片";
            var shopCarData = GameModel.getInstance().getShopCarData();
            // this.updateShopCarData(shopCarData);
        }
    };
    ShopToolItem.prototype.clickAdd = function () {
        // var data = <vo.Item_listItem>this.data;
        // GameModel.getInstance().addShopCarData(data.id);
        var data = this.data;
        GameModel.getInstance().curSeedDetailId = data.id;
        UIManager.openUI(UIConst.ShopToolAlertUI, LayerManager.Layer_Tip);
    };
    /**当购物车数据发生变化 */
    // public updateShopCarData(shopcarData:any)
    // {
    // 	var data = <vo.Item_listItem>this.data;
    // 	if(!data) return;//更多工具页 没有数据
    // 	var count = 0;
    // 	if(shopcarData[data.id]) count = shopcarData[data.id];
    // 	if(count)
    // 	{
    // 		this.numTxt.text = count+"";
    // 		this.numTxt.visible = true;
    // 		this.reduceBtn.visible = true;  
    // 	}
    // 	else{
    // 		this.numTxt.text = "0";
    // 		this.numTxt.visible = false;
    // 		this.reduceBtn.visible = false;  
    // 	}
    // }
    ShopToolItem.prototype.onRemove = function () {
        this.addBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickAdd, this);
        // this.reduceBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.removeFromShopCar, this);
    };
    return ShopToolItem;
}(AItemRenderer));
__reflect(ShopToolItem.prototype, "ShopToolItem");
//# sourceMappingURL=ShopToolItem.js.map