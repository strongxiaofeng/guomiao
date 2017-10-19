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
var SearchUserItem = (function (_super) {
    __extends(SearchUserItem, _super);
    function SearchUserItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/addFriendItem.exml";
        return _this;
    }
    SearchUserItem.prototype.onAdd = function () {
        this.addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickAdd, this);
    };
    SearchUserItem.prototype.dataChanged = function () {
        var _this = this;
        var data = this.data;
        this.nameTxt.text = data.nickname;
        this.lvNumImg.source = "num" + data.level + "_png";
        egret.callLater(function () {
            _this.lvbg.x = _this.nameTxt.x + _this.nameTxt.width + 10;
            _this.lv.x = _this.lvbg.x + 10;
            _this.lvNumImg.x = _this.lvbg.x + 40;
        }, this);
    };
    SearchUserItem.prototype.clickAdd = function () {
        var data = this.data;
        GameController.getInstance().addFriend(parseInt(data.id));
        UIManager.openUI(UIConst.TipAddFriendUI, LayerManager.Layer_Tip);
    };
    SearchUserItem.prototype.onRemove = function () {
        this.addBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickAdd, this);
    };
    return SearchUserItem;
}(AItemRenderer));
__reflect(SearchUserItem.prototype, "SearchUserItem");
//# sourceMappingURL=SearchUserItem.js.map