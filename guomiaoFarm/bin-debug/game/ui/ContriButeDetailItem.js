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
var ContriButeDetailItem = (function (_super) {
    __extends(ContriButeDetailItem, _super);
    function ContriButeDetailItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/contributeDetailItem.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAdd, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onRemove, _this);
        return _this;
    }
    ContriButeDetailItem.prototype.onAdd = function () {
    };
    ContriButeDetailItem.prototype.dataChanged = function () {
    };
    ContriButeDetailItem.prototype.onRemove = function () {
    };
    return ContriButeDetailItem;
}(eui.ItemRenderer));
__reflect(ContriButeDetailItem.prototype, "ContriButeDetailItem");
//# sourceMappingURL=ContriButeDetailItem.js.map