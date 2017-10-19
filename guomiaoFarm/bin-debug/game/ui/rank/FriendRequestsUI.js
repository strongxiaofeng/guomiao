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
var FriendRequestsUI = (function (_super) {
    __extends(FriendRequestsUI, _super);
    function FriendRequestsUI() {
        var _this = _super.call(this) || this;
        _this.user_ids = [];
        _this.skinName = "resource/skins/friendRequests.exml";
        return _this;
    }
    FriendRequestsUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
        this.ac = new eui.ArrayCollection();
        this.list.itemRenderer = FriendRequestsItem;
        this.list.useVirtualLayout = false;
        this.list.dataProvider = this.ac;
        GameController.getInstance().getFriendRespondList();
    };
    FriendRequestsUI.prototype.initListener = function () {
        this.registerEvent(this.closeBtn, egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        this.registerEvent(this.onekeyAgree, egret.TouchEvent.TOUCH_TAP, this.agreeAll, this);
        this.registerEvent(this.onekeyRefuse, egret.TouchEvent.TOUCH_TAP, this.refuseAll, this);
        this.addRegister(NotifyConst.Notify_FriendRespondList, this.onList, this);
    };
    FriendRequestsUI.prototype.agreeAll = function () {
        GameController.getInstance().respondAddFriendList(this.user_ids, 1);
    };
    FriendRequestsUI.prototype.refuseAll = function () {
        GameController.getInstance().respondAddFriendList(this.user_ids, 0);
    };
    FriendRequestsUI.prototype.onList = function (info) {
        console.log("需要回复的列表 ", info);
        this.ac.removeAll();
        this.user_ids = [];
        if (info && info.list && info.list.length > 0) {
            for (var i = 0; i < info.list.length; i++) {
                this.ac.addItem(info.list[i]);
                this.user_ids.push(parseInt(info.list[i].user_id));
            }
        }
        this.ac.refresh();
    };
    FriendRequestsUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.removeRegister(this);
    };
    return FriendRequestsUI;
}(BaseUI));
__reflect(FriendRequestsUI.prototype, "FriendRequestsUI");
//# sourceMappingURL=FriendRequestsUI.js.map