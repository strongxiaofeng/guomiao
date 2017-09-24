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
var RadioItem = (function (_super) {
    __extends(RadioItem, _super);
    function RadioItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/radioItem.exml";
        return _this;
    }
    RadioItem.prototype.onAdd = function () {
    };
    RadioItem.prototype.dataChanged = function () {
    };
    RadioItem.prototype.onRemove = function () {
    };
    return RadioItem;
}(AItemRenderer));
__reflect(RadioItem.prototype, "RadioItem");
//# sourceMappingURL=RadioItem.js.map