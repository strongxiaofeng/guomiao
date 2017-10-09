var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var vo;
(function (vo) {
    /**仓库 */
    var StoreInfo = (function () {
        function StoreInfo() {
        }
        return StoreInfo;
    }());
    vo.StoreInfo = StoreInfo;
    __reflect(StoreInfo.prototype, "vo.StoreInfo");
    /**仓库中的单个物品 */
    var StoreItem = (function () {
        function StoreItem() {
        }
        return StoreItem;
    }());
    vo.StoreItem = StoreItem;
    __reflect(StoreItem.prototype, "vo.StoreItem");
})(vo || (vo = {}));
//# sourceMappingURL=StoreInfo.js.map