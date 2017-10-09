var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var vo;
(function (vo) {
    /**农场信息 */
    var FarmInfo = (function () {
        function FarmInfo() {
        }
        return FarmInfo;
    }());
    vo.FarmInfo = FarmInfo;
    __reflect(FarmInfo.prototype, "vo.FarmInfo");
    var FarmItem = (function () {
        function FarmItem() {
        }
        return FarmItem;
    }());
    vo.FarmItem = FarmItem;
    __reflect(FarmItem.prototype, "vo.FarmItem");
})(vo || (vo = {}));
//# sourceMappingURL=FarmInfo.js.map