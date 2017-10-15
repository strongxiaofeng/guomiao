var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var vo;
(function (vo) {
    var Config = (function () {
        function Config() {
        }
        return Config;
    }());
    vo.Config = Config;
    __reflect(Config.prototype, "vo.Config");
    /**成就 {id: 1, achievement_icon: 801000, name: "菜鸟喵", content: "参与1次游戏", complete: "1", gold_id: "11"} */
    var Achievement_listItem = (function () {
        function Achievement_listItem() {
        }
        return Achievement_listItem;
    }());
    vo.Achievement_listItem = Achievement_listItem;
    __reflect(Achievement_listItem.prototype, "vo.Achievement_listItem");
    /**{id: 4, namg: "每块土地保底产量比例", type: 1, min: 60, max: 60}
     * {id: 7, namg: "干旱每次出现概率", type: 1, min: 20, max: 20}*/
    var CommonItem = (function () {
        function CommonItem() {
        }
        return CommonItem;
    }());
    vo.CommonItem = CommonItem;
    __reflect(CommonItem.prototype, "vo.CommonItem");
    /** {id: 1, judge_share: 0, judge_water_count: 0, share_score: 0, water_score: 0, friend_water_count: 5,…}*/
    var Contribution_listItem = (function () {
        function Contribution_listItem() {
        }
        return Contribution_listItem;
    }());
    vo.Contribution_listItem = Contribution_listItem;
    __reflect(Contribution_listItem.prototype, "vo.Contribution_listItem");
    var Crop_listItem = (function () {
        function Crop_listItem() {
        }
        return Crop_listItem;
    }());
    vo.Crop_listItem = Crop_listItem;
    __reflect(Crop_listItem.prototype, "vo.Crop_listItem");
    /**{id: 1, gold: 10, invitation: 1, share: 1} */
    var Gift_bagItem = (function () {
        function Gift_bagItem() {
        }
        return Gift_bagItem;
    }());
    vo.Gift_bagItem = Gift_bagItem;
    __reflect(Gift_bagItem.prototype, "vo.Gift_bagItem");
    /**{id: 1, gold: 99999, bg_image_id: 104004, land_num: 12} */
    var InitItem = (function () {
        function InitItem() {
        }
        return InitItem;
    }());
    vo.InitItem = InitItem;
    __reflect(InitItem.prototype, "vo.InitItem");
    var Item_listItem = (function () {
        function Item_listItem() {
        }
        return Item_listItem;
    }());
    vo.Item_listItem = Item_listItem;
    __reflect(Item_listItem.prototype, "vo.Item_listItem");
    var Pay_listItem = (function () {
        function Pay_listItem() {
        }
        return Pay_listItem;
    }());
    vo.Pay_listItem = Pay_listItem;
    __reflect(Pay_listItem.prototype, "vo.Pay_listItem");
    var Player_levelItem = (function () {
        function Player_levelItem() {
        }
        return Player_levelItem;
    }());
    vo.Player_levelItem = Player_levelItem;
    __reflect(Player_levelItem.prototype, "vo.Player_levelItem");
    var SignItemConfig = (function () {
        function SignItemConfig() {
        }
        return SignItemConfig;
    }());
    vo.SignItemConfig = SignItemConfig;
    __reflect(SignItemConfig.prototype, "vo.SignItemConfig");
    var Store_listItem = (function () {
        function Store_listItem() {
        }
        return Store_listItem;
    }());
    vo.Store_listItem = Store_listItem;
    __reflect(Store_listItem.prototype, "vo.Store_listItem");
})(vo || (vo = {}));
//# sourceMappingURL=Config.js.map