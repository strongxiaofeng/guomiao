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
var AddressListItem = (function (_super) {
    __extends(AddressListItem, _super);
    function AddressListItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/addressItem.exml";
        return _this;
    }
    AddressListItem.prototype.onAdd = function () {
        this.editTxt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEdit, this);
        this.editIcon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEdit, this);
        this.deleteTxt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDelete, this);
        this.deleteIcon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDelete, this);
        this.selectIcon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelect, this);
    };
    AddressListItem.prototype.dataChanged = function () {
        var data = this.data;
        this.nameTxt.text = data.realname;
        this.numTxt.text = data.phone;
        this.addressTxt.text = data.address;
        this.selectIcon.source = data.is_default ? "selected_png" : "select_no_png";
    };
    AddressListItem.prototype.onEdit = function () {
        console.log(' 编辑');
    };
    AddressListItem.prototype.onDelete = function () {
        var data = this.data;
        GameController.getInstance().deleteAddress(data.id);
    };
    AddressListItem.prototype.onSelect = function () {
        var data = this.data;
        GameController.getInstance().setDefaultAddress(data.id);
    };
    AddressListItem.prototype.onRemove = function () {
        this.editTxt.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onEdit, this);
        this.editIcon.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onEdit, this);
        this.deleteTxt.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onDelete, this);
        this.deleteIcon.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onDelete, this);
        this.selectIcon.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelect, this);
    };
    return AddressListItem;
}(AItemRenderer));
__reflect(AddressListItem.prototype, "AddressListItem");
//# sourceMappingURL=AddressListItem.js.map