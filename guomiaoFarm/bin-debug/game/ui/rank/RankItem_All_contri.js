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
var RankItem_All_contri = (function (_super) {
    __extends(RankItem_All_contri, _super);
    function RankItem_All_contri() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/rankItem_all_contri.exml";
        return _this;
    }
    RankItem_All_contri.prototype.onAdd = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
    };
    RankItem_All_contri.prototype.dataChanged = function () {
        var _this = this;
        var data = this.data;
        this.myRankNum.text = data.index;
        this.nameTxt.text = data.nickname;
        this.myLevelNum.source = "num" + data.level + "_png";
        this.myChangeTxt.text = data.exp;
        this.myHeadIcon.source = data.avatar;
        egret.callLater(function () {
            _this.lvGroup.x = _this.nameTxt.x + _this.nameTxt.width + 10;
        }, this);
    };
    RankItem_All_contri.prototype.click = function (e) {
        var data = this.data;
        if (e.target == this.addBtn) {
            console.log("加他");
            GameController.getInstance().addFriend(parseInt(data.id));
            UIManager.openUI(UIConst.TipAddFriendUI, LayerManager.Layer_Tip);
        }
        else {
            //查看他人资料
            console.log("查看资料");
            GameModel.getInstance().curOtherUser = this.data;
            UIManager.openUI(UIConst.OtherUserDetailUI);
        }
    };
    RankItem_All_contri.prototype.onRemove = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
    };
    return RankItem_All_contri;
}(AItemRenderer));
__reflect(RankItem_All_contri.prototype, "RankItem_All_contri");
//# sourceMappingURL=RankItem_All_contri.js.map