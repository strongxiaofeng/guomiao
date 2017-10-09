var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var vo;
(function (vo) {
    /**徽章成就列表 */
    var HonorInfo = (function () {
        function HonorInfo() {
        }
        return HonorInfo;
    }());
    vo.HonorInfo = HonorInfo;
    __reflect(HonorInfo.prototype, "vo.HonorInfo");
    var HonorItem = (function () {
        function HonorItem() {
        }
        return HonorItem;
    }());
    vo.HonorItem = HonorItem;
    __reflect(HonorItem.prototype, "vo.HonorItem");
})(vo || (vo = {}));
//# sourceMappingURL=HonorInfo.js.map