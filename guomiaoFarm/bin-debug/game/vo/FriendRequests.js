var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var vo;
(function (vo) {
    var FriendRequests = (function () {
        function FriendRequests() {
        }
        return FriendRequests;
    }());
    vo.FriendRequests = FriendRequests;
    __reflect(FriendRequests.prototype, "vo.FriendRequests");
    var FriendRequestsItem = (function () {
        function FriendRequestsItem() {
        }
        return FriendRequestsItem;
    }());
    vo.FriendRequestsItem = FriendRequestsItem;
    __reflect(FriendRequestsItem.prototype, "vo.FriendRequestsItem");
})(vo || (vo = {}));
//# sourceMappingURL=FriendRequests.js.map