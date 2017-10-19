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
var RankAllContributeUI = (function (_super) {
    __extends(RankAllContributeUI, _super);
    function RankAllContributeUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/rank_all_contri.exml";
        return _this;
    }
    /**初始界面 */
    RankAllContributeUI.prototype.initSetting = function () {
        var _this = this;
        _super.prototype.initSetting.call(this);
        var user = GameModel.getInstance().getUserInfo();
        this.myHeadIcon.source = user.avatar;
        this.myNameTxt.text = user.nickname;
        this.myLevelNum.source = "num" + user.level + "_png";
        this.myChangeTxt.text = user.exp + "";
        egret.callLater(function () {
            _this.lvBg.x = _this.myNameTxt.x + _this.myNameTxt.width + 2;
            _this.lv.x = _this.lvBg.x + 10;
            _this.myLevelNum.x = _this.lvBg.x + 35;
        }, this);
        this.ac = new eui.ArrayCollection();
        this.list.itemRenderer = RankItem_All_contri;
        this.list.useVirtualLayout = false;
        this.list.dataProvider = this.ac;
        GameController.getInstance().getRankList(0, 10, 0);
        GameController.getInstance().getMyRankInAll(0);
    };
    /**初始监听 */
    RankAllContributeUI.prototype.initListener = function () {
        this.registerEvent(this.byCoin, egret.TouchEvent.TOUCH_TAP, this.clickByCoin, this);
        this.registerEvent(this.friendRank, egret.TouchEvent.TOUCH_TAP, this.clickFriendRank, this);
        this.registerEvent(this.addFriendBtn, egret.TouchEvent.TOUCH_TAP, this.clickAddFriend, this);
        this.registerEvent(this.friendRequestBtn, egret.TouchEvent.TOUCH_TAP, this.clickFriendRequests, this);
        this.addRegister(NotifyConst.Notify_RankList, this.onList, this);
        this.addRegister(NotifyConst.Notify_MyRankInAll, this.onMyRank, this);
    };
    /**通过金币排行 */
    RankAllContributeUI.prototype.clickByCoin = function () {
        UIManager.openUI(UIConst.RankAllCoinUI);
    };
    /**前往好友排行 */
    RankAllContributeUI.prototype.clickFriendRank = function () {
        UIManager.openUI(UIConst.RankFriendContributeUI);
    };
    /**去加好友 */
    RankAllContributeUI.prototype.clickAddFriend = function () {
        UIManager.openUI(UIConst.AddFriendUI, LayerManager.Layer_Tip);
    };
    RankAllContributeUI.prototype.clickFriendRequests = function () {
        UIManager.openUI(UIConst.FriendRequestsUI, LayerManager.Layer_Tip);
    };
    /**我的排行返回 */
    RankAllContributeUI.prototype.onMyRank = function (info) {
        console.log("我在全部人中的排行 ", info);
    };
    RankAllContributeUI.prototype.onList = function (data) {
        console.log("全部排行 ", data);
        this.ac.removeAll();
        if (data && data.list && data.list.length > 0) {
            var list = data.list;
            for (var i = 0; i < list.length; i++) {
                this.ac.addItem(list[i]);
            }
        }
        this.ac.refresh();
    };
    /**关闭界面 */
    RankAllContributeUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.removeRegister(this);
    };
    return RankAllContributeUI;
}(BaseUI));
__reflect(RankAllContributeUI.prototype, "RankAllContributeUI");
//# sourceMappingURL=RankAllContributeUI.js.map