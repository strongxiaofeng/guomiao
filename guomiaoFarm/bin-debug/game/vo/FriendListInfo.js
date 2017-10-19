var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var vo;
(function (vo) {
    /**好友列表 带排行功能 */
    var FriendListInfo = (function () {
        function FriendListInfo() {
        }
        return FriendListInfo;
    }());
    vo.FriendListInfo = FriendListInfo;
    __reflect(FriendListInfo.prototype, "vo.FriendListInfo");
    var FriendListItem = (function () {
        function FriendListItem() {
        }
        return FriendListItem;
    }());
    vo.FriendListItem = FriendListItem;
    __reflect(FriendListItem.prototype, "vo.FriendListItem");
})(vo || (vo = {}));
//# sourceMappingURL=FriendListInfo.js.map