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
var RankItem_Friend_contri = (function (_super) {
    __extends(RankItem_Friend_contri, _super);
    function RankItem_Friend_contri() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/rankItem_friend_contri.exml";
        return _this;
    }
    RankItem_Friend_contri.prototype.onAdd = function () {
    };
    RankItem_Friend_contri.prototype.dataChanged = function () {
    };
    RankItem_Friend_contri.prototype.onRemove = function () {
    };
    return RankItem_Friend_contri;
}(AItemRenderer));
__reflect(RankItem_Friend_contri.prototype, "RankItem_Friend_contri");
//# sourceMappingURL=RankItem_Friend_contri.js.map