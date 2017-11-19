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
var RadioUI = (function (_super) {
    __extends(RadioUI, _super);
    function RadioUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/radio.exml";
        return _this;
    }
    /**初始界面 */
    RadioUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
        this.clickRadio();
        this.list.itemRenderer = RadioItem;
        this.list.useVirtualLayout = false;
        var ac = new eui.ArrayCollection();
        //假数据
        if (Math.random() > 0.5) {
            this.noRadioGroup.visible = false;
            this.radioScroller.visible = true;
            ac.addItem({ type: "empty" });
            ac.addItem({ type: "system", content: "由于果农急速增长，我们将对服务器进行升级，以容纳更多果农，11月12日凌晨3点到5点将暂时关闭农场，请广大果农体谅。", time: "2017-09-15" });
            ac.addItem({ type: "weather", content: "果瞄气象台预告，新一轮的雨水天气将对水果的产量产生影响，请各位果农使用保险卡以免除灾害带来的损失", time: "2017-09-15" });
            ac.addItem({ type: "report", content: "勤劳的果农，由于您的辛勤看护，您盈利12果瞄币，再接再厉哦！", time: "2017-09-15" });
            ac.addItem({ type: "leaveMsg", content: "留言人：木蚂蚁 \n看好你的水果，明天我又来偷，哈哈哈哈哈", time: "2017-09-15" });
            ac.addItem({ type: "empty" });
        }
        else {
            this.noRadioGroup.visible = true;
            this.radioScroller.visible = false;
        }
        this.list.dataProvider = ac;
        this.recordList.itemRenderer = RadioRecordItem;
        this.recordList.useVirtualLayout = false;
        var recordAc = new eui.ArrayCollection();
        recordAc.addItem({});
        recordAc.addItem({});
        recordAc.addItem({});
        recordAc.addItem({});
        recordAc.addItem({});
        recordAc.addItem({});
        recordAc.addItem({});
        recordAc.addItem({});
        recordAc.addItem({});
        recordAc.addItem({});
        recordAc.addItem({});
        recordAc.addItem({});
        recordAc.addItem({});
        recordAc.addItem({});
        recordAc.addItem({});
        recordAc.addItem({});
        this.recordList.dataProvider = recordAc;
    };
    /**初始监听 */
    RadioUI.prototype.initListener = function () {
        this.registerEvent(this.radioBtn, egret.TouchEvent.TOUCH_TAP, this.clickRadio, this);
        this.registerEvent(this.recordBtn, egret.TouchEvent.TOUCH_TAP, this.clickRecord, this);
    };
    RadioUI.prototype.clickRadio = function () {
        console.log("radio");
        this.radioGroup.visible = true;
        this.recordGroup.visible = false;
        this.radioBtn.source = "rank_tab_select_png";
        this.recordBtn.source = "rank_tab_noselect_png";
    };
    RadioUI.prototype.clickRecord = function () {
        console.log("record");
        this.radioGroup.visible = false;
        this.recordGroup.visible = true;
        this.radioBtn.source = "rank_tab_noselect_png";
        this.recordBtn.source = "rank_tab_select_png";
    };
    /**关闭界面 */
    RadioUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return RadioUI;
}(BaseUI));
__reflect(RadioUI.prototype, "RadioUI");
//# sourceMappingURL=RadioUI.js.map