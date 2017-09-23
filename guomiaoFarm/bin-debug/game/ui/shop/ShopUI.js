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
        var ac = new eui.ArrayCollection();
        ac.addItem({});
        ac.addItem({});
        ac.addItem({});
        ac.addItem({});
        ac.addItem({});
        ac.addItem({});
        this.seedList.itemRenderer = ShopSeedItem;
        this.seedList.dataProvider = ac;
        this.toolList.itemRenderer = ShopToolItem;
        this.toolList.dataProvider = ac;
        this.fruitList.itemRenderer = ShopFruitItem;
        this.fruitList.dataProvider = ac;
        UIManager.openUI(UIConst.ShopCarDetailUI, LayerManager.Layer_Tip);
    };
    /**初始监听 */
    ShopUI.prototype.initListener = function () {
        this.registerEvent(this.chooseSeed, egret.TouchEvent.TOUCH_TAP, this.clickChooseSeed, this);
        this.registerEvent(this.chooseTool, egret.TouchEvent.TOUCH_TAP, this.clickChooseTool, this);
        this.registerEvent(this.chooseFruit, egret.TouchEvent.TOUCH_TAP, this.clickChooseFruit, this);
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
    };
    return ShopUI;
}(BaseUI));
__reflect(ShopUI.prototype, "ShopUI");
//# sourceMappingURL=ShopUI.js.map