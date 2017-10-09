var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var vo;
(function (vo) {
    /**用户信息 */
    var UserInfo = (function () {
        function UserInfo() {
        }
        return UserInfo;
    }());
    vo.UserInfo = UserInfo;
    __reflect(UserInfo.prototype, "vo.UserInfo");
})(vo || (vo = {}));
//# sourceMappingURL=UserInfo.js.map