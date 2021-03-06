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
var AddAddressUI = (function (_super) {
    __extends(AddAddressUI, _super);
    function AddAddressUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/addAddress.exml";
        return _this;
    }
    /**初始界面 */
    AddAddressUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
    };
    /**初始监听 */
    AddAddressUI.prototype.initListener = function () {
        this.registerEvent(this.saveBtn, egret.TouchEvent.TOUCH_TAP, this.clickSave, this);
        this.addRegister(NotifyConst.Notify_AddAddress, this.onAddCallback, this);
    };
    AddAddressUI.prototype.clickSave = function () {
        GameController.getInstance().addAddress(this.input_name.text, this.input_num.text, this.input_zone.text + this.input_address.text);
    };
    AddAddressUI.prototype.onAddCallback = function (obj) {
        //添加成功的话就返回地址列表
        if (obj.status == 0) {
            UIManager.openUI(UIConst.AddressManageUI);
        }
    };
    /**关闭界面 */
    AddAddressUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return AddAddressUI;
}(BaseUI));
__reflect(AddAddressUI.prototype, "AddAddressUI");
//# sourceMappingURL=AddAddressUI.js.map