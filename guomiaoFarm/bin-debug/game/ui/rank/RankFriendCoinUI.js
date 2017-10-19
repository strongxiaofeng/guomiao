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
var RankFriendCoinUI = (function (_super) {
    __extends(RankFriendCoinUI, _super);
    function RankFriendCoinUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/rank_friend_coin.exml";
        return _this;
    }
    /**初始界面 */
    RankFriendCoinUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
        var user = GameModel.getInstance().getUserInfo();
        this.myHeadIcon.source = user.avatar;
        this.myNameTxt.text = user.nickname;
        this.myChangeTxt.text = user.gold + "";
        this.ac = new eui.ArrayCollection();
        this.list.itemRenderer = RankItem_Friend_coin;
        this.list.useVirtualLayout = false;
        this.list.dataProvider = this.ac;
        GameController.getInstance().getFriendList(0, 10, 0);
        GameController.getInstance().getMyRankInFriends(1);
    };
    /**初始监听 */
    RankFriendCoinUI.prototype.initListener = function () {
        this.registerEvent(this.allRank, egret.TouchEvent.TOUCH_TAP, this.clickAllRank, this);
        this.registerEvent(this.byCoin, egret.TouchEvent.TOUCH_TAP, this.clickByContri, this);
        this.registerEvent(this.addFriendBtn, egret.TouchEvent.TOUCH_TAP, this.clickAddFriend, this);
        this.registerEvent(this.friendRequestBtn, egret.TouchEvent.TOUCH_TAP, this.clickFriendRequests, this);
        this.addRegister(NotifyConst.Notify_FriendList, this.onList, this);
        this.addRegister(NotifyConst.Notify_MyRankInFriends, this.onMyRank, this);
    };
    RankFriendCoinUI.prototype.clickAllRank = function () {
        UIManager.openUI(UIConst.RankAllCoinUI);
    };
    RankFriendCoinUI.prototype.clickByContri = function () {
        UIManager.openUI(UIConst.RankFriendContributeUI);
    };
    /**去加好友 */
    RankFriendCoinUI.prototype.clickAddFriend = function () {
        UIManager.openUI(UIConst.AddFriendUI, LayerManager.Layer_Tip);
    };
    RankFriendCoinUI.prototype.clickFriendRequests = function () {
        UIManager.openUI(UIConst.FriendRequestsUI, LayerManager.Layer_Tip);
    };
    /**我的排行返回 */
    RankFriendCoinUI.prototype.onMyRank = function (info) {
        console.log("我在全部人中的排行 ", info);
    };
    RankFriendCoinUI.prototype.onList = function (info) {
        console.log("收到好友列表 ", info);
        this.ac.removeAll();
        if (info && info.list && info.list.length > 0) {
            for (var i = 0; i < info.list.length; i++) {
                this.ac.addItem(info.list[i]);
            }
        }
        this.ac.refresh();
    };
    /**关闭界面 */
    RankFriendCoinUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.removeRegister(this);
    };
    return RankFriendCoinUI;
}(BaseUI));
__reflect(RankFriendCoinUI.prototype, "RankFriendCoinUI");
//# sourceMappingURL=RankFriendCoinUI.js.map