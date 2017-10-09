var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var vo;
(function (vo) {
    var AnnounceInfo = (function () {
        function AnnounceInfo() {
        }
        return AnnounceInfo;
    }());
    vo.AnnounceInfo = AnnounceInfo;
    __reflect(AnnounceInfo.prototype, "vo.AnnounceInfo");
    var AnnounceItem = (function () {
        function AnnounceItem() {
        }
        return AnnounceItem;
    }());
    vo.AnnounceItem = AnnounceItem;
    __reflect(AnnounceItem.prototype, "vo.AnnounceItem");
})(vo || (vo = {}));
//# sourceMappingURL=AnnounceInfo.js.map