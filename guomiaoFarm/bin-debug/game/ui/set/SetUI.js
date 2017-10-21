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
var SetUI = (function (_super) {
    __extends(SetUI, _super);
    function SetUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/set.exml";
        return _this;
    }
    /**初始界面 */
    SetUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
        this.skinList.itemRenderer = SkinItem;
        this.skinList.useVirtualLayout = false;
        var ac = new eui.ArrayCollection();
        ac.addItem({ name: "默认", isDefault: true });
        ac.addItem({ name: "皮肤名称", isDefault: false });
        ac.addItem({ name: "皮肤名称", isDefault: false });
        ac.addItem({ name: "皮肤名称", isDefault: false });
        ac.addItem({ name: "皮肤名称", isDefault: false });
        ac.addItem({ name: "皮肤名称", isDefault: false });
        ac.addItem({ name: "皮肤名称", isDefault: false });
        this.skinList.dataProvider = ac;
        this.clickMsgSet();
    };
    /**初始监听 */
    SetUI.prototype.initListener = function () {
        this.registerEvent(this.msgSetBtn, egret.TouchEvent.TOUCH_TAP, this.clickMsgSet, this);
        this.registerEvent(this.landSetBtn, egret.TouchEvent.TOUCH_TAP, this.clickLandSet, this);
    };
    SetUI.prototype.clickMsgSet = function () {
        this.msgSetGroup.visible = true;
        this.landSetGroup.visible = false;
        this.landSetBtn.y = this.msgSetGroup.y + this.msgSetGroup.height + 10;
    };
    SetUI.prototype.clickLandSet = function () {
        this.msgSetGroup.visible = false;
        this.landSetGroup.visible = true;
        this.landSetBtn.y = this.msgSetBtn.y + this.msgSetBtn.height + 10;
        this.landSetGroup.y = this.landSetBtn.y + this.landSetBtn.height + 10;
        console.log(this.landSetGroup);
    };
    /**关闭界面 */
    SetUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return SetUI;
}(BaseUI));
__reflect(SetUI.prototype, "SetUI");
//# sourceMappingURL=SetUI.js.map