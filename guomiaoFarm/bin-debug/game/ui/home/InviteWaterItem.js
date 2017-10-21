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
var InviteWaterItem = (function (_super) {
    __extends(InviteWaterItem, _super);
    function InviteWaterItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/inviteWaterItem.exml";
        return _this;
    }
    InviteWaterItem.prototype.onAdd = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickInvite, this);
    };
    InviteWaterItem.prototype.dataChanged = function () {
    };
    InviteWaterItem.prototype.clickInvite = function () {
        UIManager.closeUI(UIConst.InviteWaterUI);
        UIManager.openUI(UIConst.InviteDetailUI);
    };
    InviteWaterItem.prototype.onRemove = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickInvite, this);
    };
    return InviteWaterItem;
}(AItemRenderer));
__reflect(InviteWaterItem.prototype, "InviteWaterItem");
//# sourceMappingURL=InviteWaterItem.js.map