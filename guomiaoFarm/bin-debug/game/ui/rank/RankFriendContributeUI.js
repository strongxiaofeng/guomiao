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
var RankFriendContributeUI = (function (_super) {
    __extends(RankFriendContributeUI, _super);
    function RankFriendContributeUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/rank_friend_contri.exml";
        return _this;
    }
    /**初始界面 */
    RankFriendContributeUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
        this.list.itemRenderer = RankItem_Friend_contri;
        var ac = new eui.ArrayCollection();
        ac.addItem({});
        ac.addItem({});
        ac.addItem({});
        ac.addItem({});
        ac.addItem({});
        ac.addItem({});
        ac.addItem({});
        ac.addItem({});
        ac.addItem({});
        ac.addItem({});
        this.list.dataProvider = ac;
    };
    /**初始监听 */
    RankFriendContributeUI.prototype.initListener = function () {
    };
    /**关闭界面 */
    RankFriendContributeUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return RankFriendContributeUI;
}(BaseUI));
__reflect(RankFriendContributeUI.prototype, "RankFriendContributeUI");
//# sourceMappingURL=RankFriendContributeUI.js.map