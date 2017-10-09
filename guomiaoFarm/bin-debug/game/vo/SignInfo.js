var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var vo;
(function (vo) {
    /**已签到信息 */
    var SignInfo = (function () {
        function SignInfo() {
        }
        return SignInfo;
    }());
    vo.SignInfo = SignInfo;
    __reflect(SignInfo.prototype, "vo.SignInfo");
    var SignItem = (function () {
        function SignItem() {
        }
        return SignItem;
    }());
    vo.SignItem = SignItem;
    __reflect(SignItem.prototype, "vo.SignItem");
})(vo || (vo = {}));
//# sourceMappingURL=SignInfo.js.map