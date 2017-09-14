var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UIConst = (function () {
    function UIConst() {
    }
    UIConst.FirstUI = "FirstUI";
    UIConst.RuleUI = "RuleUI";
    UIConst.TopBarUI = "TopBarUI";
    UIConst.HomeUI = "HomeUI";
    UIConst.LastActivityUI = "LastActivityUI";
    return UIConst;
}());
__reflect(UIConst.prototype, "UIConst");
//# sourceMappingURL=UIConst.js.map