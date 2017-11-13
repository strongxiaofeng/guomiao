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
var HonorWallUI = (function (_super) {
    __extends(HonorWallUI, _super);
    function HonorWallUI() {
        var _this = _super.call(this) || this;
        /**当前是第几页勋章 从0开始 每页9个 */
        _this.curPage = 0;
        _this.skinName = "resource/skins/honorWall.exml";
        return _this;
    }
    /**初始界面 */
    HonorWallUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
        this.list.itemRenderer = HonorItem;
        this.list.useVirtualLayout = false;
        var info = GameModel.getInstance().getHonorInfo();
        var config = GameModel.getInstance().getHonorConfig();
        this.ac = new eui.ArrayCollection();
        this.list.dataProvider = this.ac;
        this.array = [];
        console.log("徽章达成信息：", info);
        for (var key in config) {
            var isAchieved = false;
            if (info && info.list) {
                for (var i = 0; i < info.list.length; i++) {
                    if (info.list[i].config_id == key)
                        isAchieved = true;
                }
            }
            this.array.push({ itemdata: config[key], isAchieved: isAchieved });
        }
        this.maxPage = Math.ceil(this.array.length / 9);
        this.curPage = 0;
        this.showPage();
    };
    /**初始监听 */
    HonorWallUI.prototype.initListener = function () {
        this.registerEvent(this.leftBtn, egret.TouchEvent.TOUCH_TAP, this.onLeft, this);
        this.registerEvent(this.leftBtn, egret.TouchEvent.TOUCH_TAP, this.onRight, this);
    };
    HonorWallUI.prototype.onLeft = function (e) {
        if (this.curPage > 0)
            this.curPage--;
        this.showPage();
    };
    HonorWallUI.prototype.onRight = function (e) {
        if (this.curPage < this.maxPage - 1)
            this.curPage++;
        this.showPage();
    };
    /**展示当前页数据 */
    HonorWallUI.prototype.showPage = function () {
        this.ac.source = this.getItemsByPage(this.curPage);
        this.ac.refresh();
        if (this.curPage == 0)
            this.leftBtn.enabled = false;
        else
            this.leftBtn.enabled = true;
        if (this.curPage >= this.maxPage - 1)
            this.rightBtn.enabled = false;
        else
            this.rightBtn.enabled = true;
    };
    /**获取当前页数据 */
    HonorWallUI.prototype.getItemsByPage = function (n) {
        var arr = [];
        for (var i = 0; i < 9; i++) {
            if (this.array[n * 9 + i])
                arr.push(this.array[n * 9 + 0]);
        }
        return arr;
    };
    /**关闭界面 */
    HonorWallUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return HonorWallUI;
}(BaseUI));
__reflect(HonorWallUI.prototype, "HonorWallUI");
//# sourceMappingURL=HonorWallUI.js.map