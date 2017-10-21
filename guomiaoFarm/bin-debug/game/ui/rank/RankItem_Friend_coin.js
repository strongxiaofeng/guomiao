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
var RankItem_Friend_coin = (function (_super) {
    __extends(RankItem_Friend_coin, _super);
    function RankItem_Friend_coin() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/rankItem_friend_coin.exml";
        return _this;
    }
    RankItem_Friend_coin.prototype.onAdd = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
    };
    RankItem_Friend_coin.prototype.dataChanged = function () {
        var data = this.data;
        this.myRankNum.text = data.index;
        this.nameTxt.text = data.nickname;
        this.myChangeTxt.text = data.total_exp;
        // this.arrow.source = "coinReduce_png" "coinGrow_png"
        // this.supportCount.text = data.thumbs_up;
        // this.myHeadIcon.source = data.avatar;
        if (Math.random() < 0.5) {
            this.handAbleImg.visible = true;
            this.waterAbleImg.visible = false;
        }
        else {
            this.handAbleImg.visible = false;
            this.waterAbleImg.visible = true;
        }
    };
    RankItem_Friend_coin.prototype.click = function (e) {
        if (e.target == this.supportImg) {
            console.log("去赞他");
            var data = this.data;
            GameController.getInstance().thumbsUp(parseInt(data.user_id));
        }
        else if (e.target == this.handAbleImg) {
            console.log("去偷菜");
            UIManager.openUI(UIConst.OtherLandUI);
        }
        else if (e.target == this.waterAbleImg) {
            console.log("去浇水");
            UIManager.openUI(UIConst.OtherLandUI);
        }
        else {
            //查看他人资料
            console.log("查看资料");
            GameModel.getInstance().curOtherUser = this.data;
            UIManager.openUI(UIConst.OtherUserDetailUI);
        }
    };
    RankItem_Friend_coin.prototype.onRemove = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
    };
    return RankItem_Friend_coin;
}(AItemRenderer));
__reflect(RankItem_Friend_coin.prototype, "RankItem_Friend_coin");
//# sourceMappingURL=RankItem_Friend_coin.js.map