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
var ShopCarDetailItem = (function (_super) {
    __extends(ShopCarDetailItem, _super);
    function ShopCarDetailItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/shopCarDetailItem.exml";
        return _this;
    }
    ShopCarDetailItem.prototype.onAdd = function () {
    };
    ShopCarDetailItem.prototype.dataChanged = function () {
    };
    ShopCarDetailItem.prototype.onRemove = function () {
    };
    return ShopCarDetailItem;
}(AItemRenderer));
__reflect(ShopCarDetailItem.prototype, "ShopCarDetailItem");
//# sourceMappingURL=ShopCarDetailItem.js.map