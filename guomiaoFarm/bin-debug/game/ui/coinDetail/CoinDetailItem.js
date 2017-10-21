var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CoinDetailItem = (function (_super) {
    __extends(CoinDetailItem, _super);
    function CoinDetailItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/coinDetailItem.exml";
        return _this;
    }
    CoinDetailItem.prototype.onAdd = function () {
    };
    CoinDetailItem.prototype.dataChanged = function () {
        /**{type:"充值",num:2000, date:"2017-09-30"} */
        this.payType.text = this.data.type;
        this.payNumTxt.text = this.data.num;
        this.dateTxt.text = this.data.date;
    };
    CoinDetailItem.prototype.onRemove = function () {
    };
    return CoinDetailItem;
}(AItemRenderer));
__reflect(CoinDetailItem.prototype, "CoinDetailItem");
//# sourceMappingURL=CoinDetailItem.js.map