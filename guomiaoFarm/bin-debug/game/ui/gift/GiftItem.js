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
var GiftItem = (function (_super) {
    __extends(GiftItem, _super);
    function GiftItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/giftItem.exml";
        return _this;
    }
    GiftItem.prototype.onAdd = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickItem, this);
    };
    GiftItem.prototype.dataChanged = function () {
        var data = this.data;
        this.txt1.text = "邀请" + data.invitation + "个好友";
        this.txt2.text = "可获得" + data.gold + "个喵币";
        this.getAbleImg.visible = data.share ? false : true;
    };
    GiftItem.prototype.clickItem = function () {
        UIManager.openUI(UIConst.TipGetCoinUI, LayerManager.Layer_Tip);
    };
    GiftItem.prototype.onRemove = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickItem, this);
    };
    return GiftItem;
}(AItemRenderer));
__reflect(GiftItem.prototype, "GiftItem");
//# sourceMappingURL=GiftItem.js.map