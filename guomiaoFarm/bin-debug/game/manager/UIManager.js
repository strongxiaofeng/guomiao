var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UIManager = (function () {
    function UIManager() {
    }
    /**打开一个UI */
    UIManager.openUI = function (name, layer) {
        if (layer === void 0) { layer = LayerManager.Layer_UI; }
        if (layer == LayerManager.Layer_UI)
            this.checkLastUI();
        /**根据ui名获取UI */
        var ui;
        if (this.pool[name]) {
            ui = this.pool[name];
            LayerManager.getInstance().addUI(ui, layer);
            ui.initSetting();
        }
        else {
            var cls = egret.getDefinitionByName(name);
            ui = new cls();
            ui.layer = layer;
            this.pool[name] = ui;
            LayerManager.getInstance().addUI(ui, layer);
        }
    };
    //如果要在UI层打开新UI，关闭之前的UI层的UI
    UIManager.checkLastUI = function () {
        for (var key in this.pool) {
            var poolUI = this.pool[key];
            if (poolUI.layer == LayerManager.Layer_UI && poolUI.isShow) {
                poolUI.dispose();
            }
        }
    };
    /**判断某个UI是否打开 */
    UIManager.isUIOpen = function (name) {
        if (this.pool[name]) {
            return this.pool[name].isShow;
        }
        return false;
    };
    /**关闭指定的UI */
    UIManager.closeUI = function (name) {
        if (this.pool[name]) {
            this.pool[name].dispose();
        }
    };
    /**存放打开过的UI */
    UIManager.pool = {};
    return UIManager;
}());
__reflect(UIManager.prototype, "UIManager");
//# sourceMappingURL=UIManager.js.map