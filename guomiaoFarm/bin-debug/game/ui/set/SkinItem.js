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
var SkinItem = (function (_super) {
    __extends(SkinItem, _super);
    function SkinItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/setSkinTypeItem.exml";
        return _this;
    }
    SkinItem.prototype.onAdd = function () {
    };
    SkinItem.prototype.dataChanged = function () {
        if (this.data) {
            this.nameTxt.text = this.data.name;
            if (this.data.isDefault) {
                this.selectedImg.visible = true;
            }
            else {
                this.selectedImg.visible = false;
            }
        }
    };
    SkinItem.prototype.onRemove = function () {
    };
    return SkinItem;
}(AItemRenderer));
__reflect(SkinItem.prototype, "SkinItem");
//# sourceMappingURL=SkinItem.js.map