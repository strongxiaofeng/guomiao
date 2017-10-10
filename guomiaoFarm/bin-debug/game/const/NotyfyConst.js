var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var NotifyConst = (function () {
    function NotifyConst() {
    }
    NotifyConst.Notify_UserInfo = "Notify_UserInfo";
    NotifyConst.Notify_StoreInfo = "Notify_StoreInfo";
    NotifyConst.Notify_LandInfo = "Notify_LandInfo";
    return NotifyConst;
}());
__reflect(NotifyConst.prototype, "NotifyConst");
//# sourceMappingURL=NotyfyConst.js.map