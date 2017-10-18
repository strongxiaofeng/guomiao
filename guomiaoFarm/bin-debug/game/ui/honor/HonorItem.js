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
var HonorItem = (function (_super) {
    __extends(HonorItem, _super);
    function HonorItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/honorItem.exml";
        return _this;
    }
    HonorItem.prototype.onAdd = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
    };
    HonorItem.prototype.dataChanged = function () {
        var itemdata = this.data.itemdata;
        var isAchieved = this.data.isAchieved;
        this.icon.source = isAchieved ? "honor1_png" : "honor4_cannotGet_png";
        this.txt.text = itemdata.name;
    };
    HonorItem.prototype.click = function () {
    };
    HonorItem.prototype.onRemove = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
    };
    return HonorItem;
}(AItemRenderer));
__reflect(HonorItem.prototype, "HonorItem");
//# sourceMappingURL=HonorItem.js.map