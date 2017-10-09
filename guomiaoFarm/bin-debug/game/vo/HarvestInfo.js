var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var vo;
(function (vo) {
    /**收获信息 */
    var HarvestInfo = (function () {
        function HarvestInfo() {
        }
        return HarvestInfo;
    }());
    vo.HarvestInfo = HarvestInfo;
    __reflect(HarvestInfo.prototype, "vo.HarvestInfo");
})(vo || (vo = {}));
//# sourceMappingURL=HarvestInfo.js.map