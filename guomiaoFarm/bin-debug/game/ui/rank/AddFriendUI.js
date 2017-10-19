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
var AddFriendUI = (function (_super) {
    __extends(AddFriendUI, _super);
    function AddFriendUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/addFriend.exml";
        return _this;
    }
    AddFriendUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
        this.ac = new eui.ArrayCollection();
        this.list.itemRenderer = SearchUserItem;
        this.list.useVirtualLayout = false;
        this.list.dataProvider = this.ac;
    };
    AddFriendUI.prototype.initListener = function () {
        this.registerEvent(this.searchBtn, egret.TouchEvent.TOUCH_TAP, this.search, this);
        this.registerEvent(this.closeBtn, egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        this.addRegister(NotifyConst.Notify_FindUser, this.onSearch, this);
    };
    AddFriendUI.prototype.search = function () {
        var str = this.input.text;
        GameController.getInstance().findUser(str);
    };
    AddFriendUI.prototype.onSearch = function (info) {
        console.log("search ", info);
        this.ac.removeAll();
        if (info && info.list && info.list.length > 0) {
            for (var i = 0; i < info.list.length; i++) {
                this.ac.addItem(info.list[i]);
            }
        }
        this.ac.refresh();
    };
    AddFriendUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.removeRegister(this);
    };
    return AddFriendUI;
}(BaseUI));
__reflect(AddFriendUI.prototype, "AddFriendUI");
//# sourceMappingURL=AddFriendUI.js.map