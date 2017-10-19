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
var OtherUserDetailUI = (function (_super) {
    __extends(OtherUserDetailUI, _super);
    function OtherUserDetailUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/OtherUserDetail.exml";
        return _this;
    }
    /**初始界面 */
    OtherUserDetailUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
        var data = GameModel.getInstance().getCurOtherUser();
        this.nameTxt.text = data.nickname;
        this.LevelTxtImg.source = "num" + data.nickname + "_png";
        this.gameIdTxt.text = "游戏ID: " + data.id;
        this.timesTxt.text = "参与次数:" + 0 + "期";
        this.friendCountTxt.text = "拥有好友:" + 0 + "人";
        this.thmTxt.text = "获得赞数:" + data.thumbs_up + "个";
        this.honorTxt.text = "上榜次数:" + 0 + "次";
        this.honorList.itemRenderer = OtherUserHonorItem;
        this.honorList.useVirtualLayout = false;
        var ac = new eui.ArrayCollection();
        ac.addItem({});
        ac.addItem({});
        ac.addItem({});
        ac.addItem({});
        ac.addItem({});
        this.honorList.dataProvider = ac;
    };
    /**初始监听 */
    OtherUserDetailUI.prototype.initListener = function () {
        this.registerEvent(this.addBtn, egret.TouchEvent.TOUCH_TAP, this.addFriend, this);
    };
    OtherUserDetailUI.prototype.addFriend = function () {
        UIManager.openUI(UIConst.TipAddFriendUI, LayerManager.Layer_Tip);
    };
    /**关闭界面 */
    OtherUserDetailUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return OtherUserDetailUI;
}(BaseUI));
__reflect(OtherUserDetailUI.prototype, "OtherUserDetailUI");
//# sourceMappingURL=OtherUserDetailUI.js.map