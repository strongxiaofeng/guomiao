var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UIConst = (function () {
    function UIConst() {
    }
    UIConst.WelcomeUI = "WelcomeUI";
    UIConst.RuleUI = "RuleUI";
    UIConst.TopBarUI = "TopBarUI";
    UIConst.HomeUI = "HomeUI";
    UIConst.LastActivityUI = "LastActivityUI";
    UIConst.UserMenuUI = "UserMenuUI";
    UIConst.LastHarvestRankUI = "LastHarvestRankUI";
    UIConst.ContributeDetailUI = "ContributeDetailUI";
    UIConst.SignUI = "SignUI";
    UIConst.StoreUI = "StoreUI";
    UIConst.GiftUI = "GiftUI";
    UIConst.RadioUI = "RadioUI";
    UIConst.ShopUI = "ShopUI";
    UIConst.ChargeUI = "ChargeUI";
    UIConst.RankUI = "RankUI";
    UIConst.InviteWaterUI = "InviteWaterUI";
    return UIConst;
}());
__reflect(UIConst.prototype, "UIConst");
