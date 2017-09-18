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
var BaseUI = (function (_super) {
    __extends(BaseUI, _super);
    function BaseUI() {
        var _this = _super.call(this) || this;
        _this.eventPool = [];
        _this.addEventListener(egret.Event.COMPLETE, _this.initSetting, _this);
        return _this;
    }
    /**注册事件 会在dispose时自动移除 */
    BaseUI.prototype.registerEvent = function (target, type, callback, callbackobj) {
        target.addEventListener(type, callback, callbackobj);
        this.eventPool.push({ target: target, type: type, callback: callback, callbackobj: callbackobj });
    };
    /**移除全部事件 */
    BaseUI.prototype.clearEvent = function () {
        if (this.eventPool.length > 0) {
            for (var i = 0; i < this.eventPool.length; i++) {
                var target = this.eventPool[i].target;
                var type = this.eventPool[i].type;
                var callback = this.eventPool[i].callback;
                var callbackobj = this.eventPool[i].callbackobj;
                target.removeEventListener(type, callback, callbackobj);
            }
        }
    };
    /**初始界面 */
    BaseUI.prototype.initSetting = function () {
        this.isShow = true;
        this.initListener();
    };
    /**初始监听 */
    BaseUI.prototype.initListener = function () {
    };
    /**关闭界面 */
    BaseUI.prototype.dispose = function () {
        this.isShow = false;
        this.clearEvent();
        if (this.parent)
            this.parent.removeChild(this);
    };
    return BaseUI;
}(eui.Component));
__reflect(BaseUI.prototype, "BaseUI");
var EventObj = (function () {
    function EventObj() {
    }
    return EventObj;
}());
__reflect(EventObj.prototype, "EventObj");
//# sourceMappingURL=BaseUI.js.map