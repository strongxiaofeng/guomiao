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
var LastActivityUI = (function (_super) {
    __extends(LastActivityUI, _super);
    function LastActivityUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/lastActivity.exml";
        return _this;
    }
    /**初始界面 */
    LastActivityUI.prototype.initSetting = function () {
        _super.prototype.initSetting.call(this);
    };
    /**初始监听 */
    LastActivityUI.prototype.initListener = function () {
    };
    /**关闭界面 */
    LastActivityUI.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return LastActivityUI;
}(BaseUI));
__reflect(LastActivityUI.prototype, "LastActivityUI");
//# sourceMappingURL=LastActivityUI.js.map