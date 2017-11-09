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
var HomeUI = (function (_super) {
    __extends(HomeUI, _super);
    function HomeUI() {
        var _this = _super.call(this) || this;
        _this.clickWaterCount = 0;
        _this.skinName = "resource/skins/home.exml";
        return _this;
    }
    /**初始界面 */
    HomeUI.prototype.initSetting = function () {
        var _this = this;
        _super.prototype.initSetting.call(this);
        this.clickWaterCount = 0;
        this.levelTxt.text = "Lv" + GameModel.getInstance().getLevel();
        this.noticeLabel.text = "";
        this.noticeLabel.mask = this.noticeMask;
        this.noticeGroup.visible = false;
        //循环播放假公告
        this.showNotice("这是一条测试公告这是一条测试公告一条测试公告");
        setInterval(function () {
            _this.showNotice("这是一条测试公告");
        }, 20000);
        this.updateLand(0);
        //昨日排行只请求一次
        if (!GameModel.getInstance().isYesterdayRankGot)
            GameController.getInstance().getYesterdayHarvestRank();
        GameController.getInstance().getFarmInfo();
        GameController.getInstance().getAddressList();
        GameController.getInstance().getStoreInfo();
        GameController.getInstance().getHonorList();
        this.intervalId = setInterval(function () { _this.computeTime(); }, 100);
    };
    HomeUI.prototype.showNotice = function (str) {
        var _this = this;
        this.noticeGroup.visible = true;
        this.noticeLabel.text = str;
        this.noticeLabel.x = 537;
        egret.callLater(function () {
            var textWidth = _this.noticeLabel.textWidth;
            var time = (537 - 64 + textWidth) * 10;
            egret.Tween.get(_this.noticeLabel)
                .to({ x: 64 - textWidth }, time)
                .wait(1000)
                .call(function () {
                egret.Tween.removeTweens(_this.noticeLabel);
                _this.noticeGroup.visible = false;
            }, _this);
        }, this);
    };
    /**初始监听 */
    HomeUI.prototype.initListener = function () {
        this.registerEvent(this.headBg, egret.TouchEvent.TOUCH_TAP, this.clickHead, this);
        this.registerEvent(this.signBtn, egret.TouchEvent.TOUCH_TAP, this.clickSign, this);
        this.registerEvent(this.storeBtn, egret.TouchEvent.TOUCH_TAP, this.clickStore, this);
        this.registerEvent(this.btn_radio, egret.TouchEvent.TOUCH_TAP, this.clickRadio, this);
        this.registerEvent(this.btn_shop, egret.TouchEvent.TOUCH_TAP, this.clickShop, this);
        this.registerEvent(this.btn_charge, egret.TouchEvent.TOUCH_TAP, this.clickCharge, this);
        this.registerEvent(this.btn_rank, egret.TouchEvent.TOUCH_TAP, this.clickRank, this);
        this.registerEvent(this.btn_game, egret.TouchEvent.TOUCH_TAP, this.clickGame, this);
        this.registerEvent(this.btn_gift, egret.TouchEvent.TOUCH_TAP, this.clickGift, this);
        this.registerEvent(this.btn_weed, egret.TouchEvent.TOUCH_TAP, this.clickWeed, this);
        this.registerEvent(this.btn_fertilizer, egret.TouchEvent.TOUCH_TAP, this.clickFertilizer, this);
        this.registerEvent(this.btn_water, egret.TouchEvent.TOUCH_TAP, this.clickWater, this);
        this.registerEvent(this.btn_seed, egret.TouchEvent.TOUCH_TAP, this.clickSeed, this);
        this.registerEvent(this.tree1, egret.TouchEvent.TOUCH_TAP, this.clickTree, this);
        this.registerEvent(this.tree2, egret.TouchEvent.TOUCH_TAP, this.clickTree, this);
        this.registerEvent(this.tree3, egret.TouchEvent.TOUCH_TAP, this.clickTree, this);
        this.registerEvent(this.tree4, egret.TouchEvent.TOUCH_TAP, this.clickTree, this);
        this.registerEvent(this.tree5, egret.TouchEvent.TOUCH_TAP, this.clickTree, this);
        this.registerEvent(this.tree6, egret.TouchEvent.TOUCH_TAP, this.clickTree, this);
        this.registerEvent(this.tree7, egret.TouchEvent.TOUCH_TAP, this.clickTree, this);
        this.registerEvent(this.tree8, egret.TouchEvent.TOUCH_TAP, this.clickTree, this);
        this.registerEvent(this.tree9, egret.TouchEvent.TOUCH_TAP, this.clickTree, this);
        this.registerEvent(this.tree10, egret.TouchEvent.TOUCH_TAP, this.clickTree, this);
        this.registerEvent(this.tree11, egret.TouchEvent.TOUCH_TAP, this.clickTree, this);
        this.registerEvent(this.tree12, egret.TouchEvent.TOUCH_TAP, this.clickTree, this);
        this.registerEvent(this.seed1, egret.TouchEvent.TOUCH_TAP, this.clickSeedItem, this);
        this.registerEvent(this.seed2, egret.TouchEvent.TOUCH_TAP, this.clickSeedItem, this);
        this.registerEvent(this.seed3, egret.TouchEvent.TOUCH_TAP, this.clickSeedItem, this);
        this.addRegister(NotifyConst.Notify_LandInfo, this.onLandInfo, this);
        this.addRegister(NotifyConst.Notify_YesterdayHarvestRank, this.onYesterdayHarvestRank, this);
        this.addRegister(NotifyConst.Notify_SeedResult, this.onSeed, this);
        this.addRegister(NotifyConst.Notify_GatherResult, this.onGather, this);
        this.addRegister(NotifyConst.Notify_OperLandResult, this.onOper, this);
    };
    /**昨日收成排行 */
    HomeUI.prototype.onYesterdayHarvestRank = function (info) {
        console.log('主界面收到昨日排行 ', info);
        GameModel.getInstance().isYesterdayRankGot = true;
        UIManager.openUI(UIConst.LastHarvestRankUI, LayerManager.Layer_Tip);
    };
    /**农田信息 */
    HomeUI.prototype.onLandInfo = function (info) {
        if (!info)
            return;
        var data = info.list[0];
        if (data.crop_id == 0) {
            this.updateLand(0);
        }
        else {
            var pass = GameModel.getInstance().getServerTime() - data.crop_start_time;
            if (pass < GameModel.getInstance().getTreeYoungTime(data.crop_id)) {
                this.updateLand(1);
            }
            else if (pass < GameModel.getInstance().getTreeGrowTime(data.crop_id)) {
                this.updateLand(2);
            }
            else if (pass < GameModel.getInstance().getTreeRipeTime(data.crop_id)) {
                this.updateLand(3);
            }
            else {
                this.updateLand(4);
            }
        }
    };
    /**刷新种植状态 0没有种植 1种子 2幼苗 3成长 4成熟*/
    HomeUI.prototype.updateLand = function (n) {
        for (var i = 1; i <= 12; i++) {
            if (n == 0)
                this["tree" + i].source = "";
            else if (n == 1)
                this["tree" + i].source = "";
            else if (n == 2)
                this["tree" + i].source = "tree_young_png";
            else if (n == 3)
                this["tree" + i].source = "tree_grow_png";
            else if (n == 4)
                this["tree" + i].source = "tree_ripe_png";
        }
    };
    /**个人 */
    HomeUI.prototype.clickHead = function () {
        UIManager.openUI(UIConst.UserMenuUI);
        UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
    };
    /**签到 */
    HomeUI.prototype.clickSign = function () {
        UIManager.openUI(UIConst.SignUI, LayerManager.Layer_Tip);
    };
    /**仓库 */
    HomeUI.prototype.clickStore = function () {
        UIManager.openUI(UIConst.StoreUI, LayerManager.Layer_Tip);
    };
    /**广播 */
    HomeUI.prototype.clickRadio = function () {
        UIManager.openUI(UIConst.RadioUI);
        UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
    };
    /**商店 */
    HomeUI.prototype.clickShop = function () {
        UIManager.openUI(UIConst.ShopUI);
        UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
    };
    /**充值 */
    HomeUI.prototype.clickCharge = function () {
        UIManager.openUI(UIConst.ChargeUI);
        UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
    };
    /**排行 */
    HomeUI.prototype.clickRank = function () {
        UIManager.openUI(UIConst.RankFriendContributeUI);
        UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
    };
    /**小游戏 */
    HomeUI.prototype.clickGame = function () {
    };
    /**礼物呀 */
    HomeUI.prototype.clickGift = function () {
        UIManager.openUI(UIConst.GiftUI, LayerManager.Layer_Tip);
    };
    /**除草 */
    HomeUI.prototype.clickWeed = function () {
        GameController.getInstance().sendOperLand(5);
    };
    /**施肥 */
    HomeUI.prototype.clickFertilizer = function () {
        GameController.getInstance().sendOperLand(6);
    };
    /**浇水 */
    HomeUI.prototype.clickWater = function () {
        if (this.clickWaterCount == 0) {
            GameController.getInstance().sendOperLand(3);
        }
        else {
            UIManager.openUI(UIConst.InviteWaterUI, LayerManager.Layer_Tip);
        }
        this.clickWaterCount++;
    };
    /**除草 施肥 浇水 返回 */
    HomeUI.prototype.onOper = function (obj) {
        console.log("播种 浇水 施肥 返回 ", obj);
        if (obj.status == 0) {
        }
    };
    /**播种 打开种子选择面板*/
    HomeUI.prototype.clickSeed = function () {
        this.seedGroup.visible = true;
    };
    /**播种一个种子 种仓库里的id*/
    HomeUI.prototype.clickSeedItem = function () {
        this.seedGroup.visible = false;
        var seedid = GameModel.getInstance().getSeedId();
        GameController.getInstance().sendSeed(seedid);
    };
    /**播种返回*/
    HomeUI.prototype.onSeed = function () {
        GameController.getInstance().getFarmInfo();
    };
    /**鼠标点植物 */
    HomeUI.prototype.clickTree = function () {
        var landinfo = GameModel.getInstance().getLandInfo();
        var data = landinfo.list[0];
        var pass = GameModel.getInstance().getServerTime() - data.crop_start_time;
        if (data.is_ripe || pass >= GameModel.getInstance().getTreeRipeTime(data.crop_id)) {
            //已经成熟 可以收割
            GameController.getInstance().sendGather();
        }
        else {
            console.log('还不能收割');
        }
    };
    /**收割返回 */
    HomeUI.prototype.onGather = function (obj) {
        console.log("收割返回 ", obj);
        if (obj.status == 0) {
            var count = obj.data.count;
            var id = obj.data.item_id;
            var item = GameModel.getInstance().getItemById(parseInt(id));
            NotifyManager.getInstance().sendNotify(NotifyConst.Notify_Green, count + " " + item.name);
            GameController.getInstance().getFarmInfo();
        }
    };
    /**一直计算生长期 */
    HomeUI.prototype.computeTime = function () {
        var landinfo = GameModel.getInstance().getLandInfo();
        this.onLandInfo(landinfo);
    };
    /**关闭界面 */
    HomeUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.removeRegister(this);
        clearInterval(this.intervalId);
    };
    return HomeUI;
}(BaseUI));
__reflect(HomeUI.prototype, "HomeUI");
//# sourceMappingURL=HomeUI.js.map