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
var LastHarvestRankItem = (function (_super) {
    __extends(LastHarvestRankItem, _super);
    function LastHarvestRankItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/lastHarvestItem.exml";
        return _this;
    }
    LastHarvestRankItem.prototype.onAdd = function () {
    };
    LastHarvestRankItem.prototype.dataChanged = function () {
        var itemData = this.data.data;
        if (this.data.isSelf) {
            this.addBtn.visible = false;
            this.detailBtn.visible = true;
            this.bg.source = "myCoinRankBg_png";
        }
        else {
            this.addBtn.visible = true;
            this.detailBtn.visible = false;
            this.bg.source = "chargeChoiceBg_png";
        }
        this.nameTxt.text = itemData.nickname;
        this.moneyTxt.text = itemData.last_gold + "";
        this.headIcon.source = itemData.avatar + "";
        if (itemData.index <= 3) {
            this.rankIcon.source = "rank" + itemData.index + "_png";
            this.otherRankNumTxt.text = "";
        }
        else {
            this.rankIcon.source = 'rankbg_png';
            this.otherRankNumTxt.text = itemData.index + "";
        }
    };
    LastHarvestRankItem.prototype.onRemove = function () {
    };
    return LastHarvestRankItem;
}(AItemRenderer));
__reflect(LastHarvestRankItem.prototype, "LastHarvestRankItem");
//# sourceMappingURL=LastHarvestRankItem.js.map