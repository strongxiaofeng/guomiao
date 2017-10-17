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
var SignUI = (function (_super) {
    __extends(SignUI, _super);
    function SignUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/sign.exml";
        return _this;
    }
    /**初始界面 */
    SignUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
        GameController.getInstance().getSignList();
    };
    /**初始监听 */
    SignUI.prototype.initListener = function () {
        this.registerEvent(this.btn_close, egret.TouchEvent.TOUCH_TAP, this.clickClose, this);
        this.registerEvent(this.btn_sign, egret.TouchEvent.TOUCH_TAP, this.clickSign, this);
        this.addRegister(NotifyConst.Notify_SignList, this.onSignList, this);
    };
    SignUI.prototype.onSignList = function (info) {
        console.log('收到签到', info);
        for (var n = 1; n <= 7; n++) {
            this["sign" + n].source = "nosign" + n + "_png";
        }
        for (var i = 0; i < info.list.length; i++) {
            var data = info.list[i];
            var day = this.getDay(data.week, data.day);
            this["sign" + day].source = "signed" + day + "_png";
        }
    };
    /**通过计算获取这一天是周几 2017-10-16 2017-10-17*/
    SignUI.prototype.getDay = function (week, day) {
        var weekY = parseInt(week.split('-')[0]);
        var weekM = parseInt(week.split('-')[1]);
        var weekD = parseInt(week.split('-')[2]);
        var dayY = parseInt(day.split('-')[0]);
        var dayM = parseInt(day.split('-')[1]);
        var dayD = parseInt(day.split('-')[2]);
        if (weekY == dayY) {
            return this.getDaysByMonthAndDay(dayY, dayM, dayD) - this.getDaysByMonthAndDay(weekY, weekM, weekD) + 1;
        }
        else {
            return dayD + 31 - weekD;
        }
    };
    /**获取某一天是这一年的第几天 */
    SignUI.prototype.getDaysByMonthAndDay = function (y, m, d) {
        var arr = [1, 3, 5, 7, 8, 10, 12];
        var days = 0;
        for (var i = 1; i < m; i++) {
            if (arr.indexOf[i] > -1) {
                days += 31;
            }
            else if (i == 2) {
                if (y % 4 == 0) {
                    days += 29;
                }
                else {
                    days += 28;
                }
            }
            else {
                days += 30;
            }
        }
        return days + d;
    };
    SignUI.prototype.clickSign = function () {
        console.log('发出签到');
        GameController.getInstance().sendSign();
    };
    /**点击关闭 */
    SignUI.prototype.clickClose = function () {
        UIManager.closeUI(UIConst.SignUI);
    };
    /**关闭界面 */
    SignUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return SignUI;
}(BaseUI));
__reflect(SignUI.prototype, "SignUI");
//# sourceMappingURL=SignUI.js.map