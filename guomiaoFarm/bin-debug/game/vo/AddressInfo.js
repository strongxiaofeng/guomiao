var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var vo;
(function (vo) {
    var AddressInfo = (function () {
        function AddressInfo() {
        }
        return AddressInfo;
    }());
    vo.AddressInfo = AddressInfo;
    __reflect(AddressInfo.prototype, "vo.AddressInfo");
    var AddressItem = (function () {
        function AddressItem() {
        }
        return AddressItem;
    }());
    vo.AddressItem = AddressItem;
    __reflect(AddressItem.prototype, "vo.AddressItem");
})(vo || (vo = {}));
//# sourceMappingURL=AddressInfo.js.map