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
var ShopUI = (function (_super) {
    __extends(ShopUI, _super);
    function ShopUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/shop.exml";
        return _this;
    }
    /**初始界面 */
    ShopUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
        UIManager.openUI(UIConst.ShopCarDetailUI, LayerManager.Layer_Tip);
        this.ac_seed = new eui.ArrayCollection;
        this.ac_tool = new eui.ArrayCollection;
        this.ac_fruit = new eui.ArrayCollection;
        this.seedList.itemRenderer = ShopSeedItem;
        this.toolList.itemRenderer = ShopToolItem;
        this.fruitList.itemRenderer = ShopFruitItem;
        this.seedList.dataProvider = this.ac_seed;
        this.toolList.dataProvider = this.ac_tool;
        this.fruitList.dataProvider = this.ac_fruit;
        this.seedList.useVirtualLayout = false;
        this.toolList.useVirtualLayout = false;
        this.fruitList.useVirtualLayout = false;
        var list = GameModel.getInstance().getShopItems();
        this.ac_seed.removeAll();
        this.ac_tool.removeAll();
        this.ac_fruit.removeAll();
        for (var i = 0; i < list.length; i++) {
            var data = GameModel.getInstance().getItemById(list[i].id);
            data.buy_gold = list[i].gold;
            if (data.type1 == 1)
                this.ac_seed.addItem(data);
            else if (data.type1 == 2)
                this.ac_tool.addItem(data);
            else if (data.type1 == 3)
                this.ac_fruit.addItem(data);
        }
        this.ac_tool.addItem(null);
        this.ac_seed.refresh();
        this.ac_tool.refresh();
        this.ac_fruit.refresh();
    };
    /**初始监听 */
    ShopUI.prototype.initListener = function () {
        this.registerEvent(this.chooseSeed, egret.TouchEvent.TOUCH_TAP, this.clickChooseSeed, this);
        this.registerEvent(this.chooseTool, egret.TouchEvent.TOUCH_TAP, this.clickChooseTool, this);
        this.registerEvent(this.chooseFruit, egret.TouchEvent.TOUCH_TAP, this.clickChooseFruit, this);
        this.addRegister(NotifyConst.Notify_ShopCar, this.onShopCarChange, this);
    };
    /**购物车数据变化 */
    ShopUI.prototype.onShopCarChange = function () {
        var data = GameModel.getInstance().getShopCarData();
        for (var i = 0; i < this.ac_seed.length; i++) {
            this.seedList.getChildAt(i).updateShopCarData(data);
        }
        for (i = 0; i < this.ac_tool.length; i++) {
            this.toolList.getChildAt(i).updateShopCarData(data);
        }
    };
    /**选择种子页 */
    ShopUI.prototype.clickChooseSeed = function () {
        this.chooseSeed.source = "choice_png";
        this.chooseTool.source = "choice_not_png";
        this.chooseFruit.source = "choice_not_png";
        this.seedGroup.visible = true;
        this.toolGroup.visible = false;
        this.fruitGroup.visible = false;
    };
    /**选择工具页 */
    ShopUI.prototype.clickChooseTool = function () {
        this.chooseSeed.source = "choice_not_png";
        this.chooseTool.source = "choice_png";
        this.chooseFruit.source = "choice_not_png";
        this.seedGroup.visible = false;
        this.toolGroup.visible = true;
        this.fruitGroup.visible = false;
    };
    /**选择水果页 */
    ShopUI.prototype.clickChooseFruit = function () {
        this.chooseSeed.source = "choice_not_png";
        this.chooseTool.source = "choice_not_png";
        this.chooseFruit.source = "choice_png";
        this.seedGroup.visible = false;
        this.toolGroup.visible = false;
        this.fruitGroup.visible = true;
    };
    /**关闭界面 */
    ShopUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        UIManager.closeUI(UIConst.ShopCarDetailUI);
        this.removeRegister(this);
    };
    return ShopUI;
}(BaseUI));
__reflect(ShopUI.prototype, "ShopUI");
//# sourceMappingURL=ShopUI.js.map