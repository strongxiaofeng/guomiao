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
var StoreUI = (function (_super) {
    __extends(StoreUI, _super);
    function StoreUI() {
        var _this = _super.call(this) || this;
        _this.computearr = [];
        _this.skinName = "resource/skins/store.exml";
        return _this;
    }
    /**初始界面 */
    StoreUI.prototype.initSetting = function () {
        var _this = this;
        _super.prototype.initSetting.call(this);
        GameController.getInstance().getStoreInfo();
        this.intervalId = setInterval(function () {
            _this.computeTime();
        }, 100);
        this.onStoreInfo(null);
    };
    /**初始监听 */
    StoreUI.prototype.initListener = function () {
        this.registerEvent(this.btn_close, egret.TouchEvent.TOUCH_TAP, this.clickClose, this);
        this.addRegister(NotifyConst.Notify_StoreInfo, this.onStoreInfo, this);
    };
    /**收到仓库信息 */
    StoreUI.prototype.onStoreInfo = function (info) {
        console.log("仓库ui收到仓库信息 ", info);
        var toolArr = [];
        var seedArr = [];
        var weight = 0;
        if (info && info.list && info.list.length > 0) {
            for (var i = 0; i < info.list.length; i++) {
                var storeIitem = info.list[i];
                var itemData = GameModel.getInstance().getItemById(storeIitem.item_id);
                if (itemData.type1 == 1) {
                    seedArr.push(storeIitem);
                }
                else if (itemData.type1 == 2) {
                    toolArr.push(storeIitem);
                }
                else if (itemData.type1 == 3) {
                    weight = storeIitem.num;
                }
            }
        }
        //工具0
        if (toolArr[0]) {
            this.defaultTool0.source = "shop_fertilizer_png";
            this.defaultTool0.width = 117;
            this.defaultTool0.height = 117;
        }
        else {
            this.defaultTool0.source = "btn_add_png";
            this.defaultTool0.width = 92;
            this.defaultTool0.height = 92;
        }
        //工具1
        if (toolArr[1]) {
            this.defaultTool1.source = "store_insurance";
            this.defaultTool1.width = 117;
            this.defaultTool1.height = 117;
        }
        else {
            this.defaultTool1.source = "btn_add_png";
            this.defaultTool1.width = 92;
            this.defaultTool1.height = 92;
        }
        //第二排显示种子
        if (seedArr[0]) {
            this.defaultSeed0.source = "seed1_png";
            var serverTime = GameModel.getInstance().getServerTime();
            var passTime = seedArr[0].expire_time - serverTime;
            var date = new Date();
            date.setSeconds(passTime);
            this.seedTime0.text = passTime > 0 ? date.getUTCHours() + ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds() + "后结束播种" : "结束播种";
            this.computearr.push({ expire_time: seedArr[0].expire_time, txt: this.seedTime0 });
        }
        else {
            this.defaultSeed0.source = "seedEmpty_png";
            this.seedTime0.text = "没有种子，无法播种";
        }
        if (seedArr[1]) {
            this.defaultSeed1.source = "seed1_png";
            var serverTime = GameModel.getInstance().getServerTime();
            var passTime = seedArr[1].expire_time - serverTime;
            var date = new Date();
            date.setSeconds(passTime);
            this.seedTime1.text = passTime > 0 ? date.getUTCHours() + ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds() + "后结束播种" : "结束播种";
            this.computearr.push({ expire_time: seedArr[1].expire_time, txt: this.seedTime1 });
        }
        else {
            this.defaultSeed1.source = "seedEmpty_png";
            this.seedTime1.text = "没有种子，无法播种";
        }
        //果实有多少斤
        this.fruitWeightTxt.text = weight + "斤";
    };
    /**循环计算种子过期时间 */
    StoreUI.prototype.computeTime = function () {
        for (var i = 0; i < this.computearr.length; i++) {
            var serverTime = GameModel.getInstance().getServerTime();
            var passTime = this.computearr[i].expire_time - serverTime;
            var date = new Date();
            date.setSeconds(passTime);
            var str = passTime > 0 ? date.getUTCHours() + ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds() + "后结束播种" : "结束播种";
            this.computearr[i].txt.text = str;
        }
    };
    /**点击关闭 */
    StoreUI.prototype.clickClose = function () {
        UIManager.closeUI(UIConst.StoreUI);
    };
    /**关闭界面 */
    StoreUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.removeRegister(this);
        clearInterval(this.intervalId);
        this.computearr = [];
        this.itemGroup.removeChildren();
    };
    return StoreUI;
}(BaseUI));
__reflect(StoreUI.prototype, "StoreUI");
//# sourceMappingURL=StoreUI.js.map