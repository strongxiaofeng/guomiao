var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LayerManager = (function () {
    function LayerManager() {
    }
    LayerManager.getInstance = function () {
        if (!this._instance)
            this._instance = new LayerManager();
        return this._instance;
    };
    /**初始层级 */
    LayerManager.prototype.initLayer = function (root) {
        this.uiLayer = new eui.Group();
        this.topLayer = new eui.Group();
        this.tipLayer = new eui.Group();
        root.addChild(this.uiLayer);
        root.addChild(this.topLayer);
        root.addChild(this.tipLayer);
    };
    /**添加UI到舞台 */
    LayerManager.prototype.addUI = function (ui, layer) {
        if (layer === void 0) { layer = 1; }
        var parent;
        switch (layer) {
            case LayerManager.Layer_UI:
                this.uiLayer.addChild(ui);
                break;
            case LayerManager.Layer_Top:
                this.topLayer.addChild(ui);
                break;
            case LayerManager.Layer_Tip:
                this.tipLayer.addChild(ui);
                break;
        }
    };
    LayerManager.Layer_UI = 1;
    LayerManager.Layer_Top = 2;
    LayerManager.Layer_Tip = 3;
    return LayerManager;
}());
__reflect(LayerManager.prototype, "LayerManager");
//# sourceMappingURL=LayerManager.js.map