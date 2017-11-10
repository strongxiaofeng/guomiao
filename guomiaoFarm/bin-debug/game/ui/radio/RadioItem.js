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
var RadioItem = (function (_super) {
    __extends(RadioItem, _super);
    function RadioItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/radioItem.exml";
        return _this;
    }
    RadioItem.prototype.onAdd = function () {
        this.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickOK, this);
        this.detailBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickDetail, this);
    };
    /**{type:"system", content:"由于果农XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", time:"2017-09-15"} */
    RadioItem.prototype.dataChanged = function () {
        if (this.data) {
            this.time.text = this.data.time;
            this.content.text = this.data.content;
            if (this.data.type == "system") {
                this.bg.source = "sysMsgBg_png";
                this.title.text = "系统广播";
                this.okBtn.visible = true;
                this.detailBtn.visible = false;
                this.newMsgIcon.visible = true;
            }
            else if (this.data.type == "weather") {
                this.bg.source = "weatherBg_png";
                this.title.text = "气象预警";
                this.okBtn.visible = true;
                this.detailBtn.visible = false;
                this.newMsgIcon.visible = false;
            }
            else if (this.data.type == "report") {
                this.bg.source = "reportBg_png";
                this.title.text = "盈亏报告";
                this.okBtn.visible = false;
                this.detailBtn.visible = true;
                this.newMsgIcon.visible = false;
            }
            else if (this.data.type == "leaveMsg") {
                this.bg.source = "chatMsgBg_png";
                this.title.text = "好友留言";
                this.okBtn.visible = false;
                this.detailBtn.visible = true;
                this.newMsgIcon.visible = false;
            }
        }
    };
    RadioItem.prototype.clickOK = function () {
    };
    RadioItem.prototype.clickDetail = function () {
        if (this.data.type == "report") {
            UIManager.openUI(UIConst.ContributeDetailUI);
        }
        else if (this.data.type == "leaveMsg") {
            UIManager.openUI(UIConst.LeaveMsgUI, LayerManager.Layer_Tip);
        }
    };
    RadioItem.prototype.onRemove = function () {
        this.okBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickOK, this);
        this.detailBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickDetail, this);
    };
    return RadioItem;
}(AItemRenderer));
__reflect(RadioItem.prototype, "RadioItem");
//# sourceMappingURL=RadioItem.js.map