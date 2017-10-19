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
var FriendRequestsItem = (function (_super) {
    __extends(FriendRequestsItem, _super);
    function FriendRequestsItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/friendRequestsItem.exml";
        return _this;
    }
    FriendRequestsItem.prototype.onAdd = function () {
        this.agreeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickAgree, this);
        this.refuseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickRefuse, this);
    };
    FriendRequestsItem.prototype.dataChanged = function () {
        var _this = this;
        var data = this.data;
        this.nameTxt.text = data.nickname;
        this.lvNumImg.source = "num" + data.level + "_png";
        egret.callLater(function () {
            _this.lvGroup.x = _this.nameTxt.x + _this.nameTxt.width + 10;
        }, this);
    };
    FriendRequestsItem.prototype.clickAgree = function () {
        var data = this.data;
        GameController.getInstance().agreeOrRefuseAddFriend(data.user_id, 1);
    };
    FriendRequestsItem.prototype.clickRefuse = function () {
        var data = this.data;
        GameController.getInstance().agreeOrRefuseAddFriend(data.user_id, 0);
    };
    FriendRequestsItem.prototype.onRemove = function () {
        this.agreeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickAgree, this);
        this.refuseBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickRefuse, this);
    };
    return FriendRequestsItem;
}(AItemRenderer));
__reflect(FriendRequestsItem.prototype, "FriendRequestsItem");
//# sourceMappingURL=FriendRequestsItem.js.map