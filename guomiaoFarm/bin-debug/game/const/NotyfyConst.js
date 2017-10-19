var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var NotifyConst = (function () {
    function NotifyConst() {
    }
    NotifyConst.Notify_UserInfo = "Notify_UserInfo";
    NotifyConst.Notify_StoreInfo = "Notify_StoreInfo";
    /**请求土地信息的返回通知 */
    NotifyConst.Notify_LandInfo = "Notify_LandInfo";
    /**播种的返回通知 */
    NotifyConst.Notify_SeedResult = "Notify_SeedResult";
    /**收获的返回通知 */
    NotifyConst.Notify_GatherResult = "Notify_GatherResult";
    /**偷菜的返回通知 */
    NotifyConst.Notify_StealResult = "Notify_StealResult";
    /**除草 施肥 浇水的返回通知 */
    NotifyConst.Notify_OperLandResult = "Notify_OperLandResult";
    /**给别人浇水的返回通知 */
    NotifyConst.Notify_WaterOtherLandResult = "Notify_WaterOtherLandResult";
    /**订单列表 */
    NotifyConst.Notify_OrderList = "Notify_OrderList";
    /**下订单结果 */
    NotifyConst.Notify_OrderResult = "Notify_OrderResult";
    /**支付订单结果 */
    NotifyConst.Notify_OrderPayResult = "Notify_OrderPayResult";
    /**确认收货结果 */
    NotifyConst.Notify_SureReceiveResult = "Notify_SureReceiveResult";
    /**删除确认收货的订单的结果 */
    NotifyConst.Notify_DeleteReceivedOrderResult = "Notify_DeleteReceivedOrderResult";
    /**签到的结果 */
    NotifyConst.Notify_SignResult = "Notify_SignResult";
    /**签到列表 */
    NotifyConst.Notify_SignList = "Notify_SignList";
    /**领取连续签到奖励 */
    NotifyConst.Notify_GetContinueSignRewardResult = "Notify_GetContinueSignRewardResult";
    /**公告列表 */
    NotifyConst.Notify_NoticeList = "Notify_NoticeList";
    /**地址列表 */
    NotifyConst.Notify_AddressList = "Notify_AddressList";
    /**添加地址返回 */
    NotifyConst.Notify_AddAddress = "Notify_AddAddress";
    /**编辑地址返回 */
    NotifyConst.Notify_EditAddress = "Notify_EditAddress";
    /**删除地址返回 */
    NotifyConst.Notify_DeleteAddress = "Notify_DeleteAddress";
    /**设置默认地址返回 */
    NotifyConst.Notify_setDefaultAddress = "Notify_setDefaultAddress";
    /**徽章列表返回 */
    NotifyConst.Notify_HonorList = "Notify_HonorList";
    /**徽章列表返回 */
    NotifyConst.Notify_GetHonorReward = "Notify_GetHonorReward";
    /**昨日收成排行列表返回 */
    NotifyConst.Notify_YesterdayHarvestRank = "Notify_YesterdayHarvestRank";
    /**昨日收成详情返回 */
    NotifyConst.Notify_YesterdayHarvestDetail = "Notify_YesterdayHarvestDetail";
    /**我的所有贡献度明细 */
    NotifyConst.Notify_ContributeList = "Notify_ContributeList";
    /**全部总排行榜 */
    NotifyConst.Notify_RankList = "Notify_RankList";
    /**好友中自己的排行榜 */
    NotifyConst.Notify_MyRankInFriends = "Notify_MyRankInFriends";
    /**获取好友列表，带排行功能 */
    /**好友中自己的排行榜 */
    NotifyConst.Notify_FriendList = "Notify_FriendList";
    /**查找用户 */
    NotifyConst.Notify_FindUser = "Notify_FindUser";
    /**添加好友 */
    NotifyConst.Notify_AddUser = "Notify_AddUser";
    /**需要进行好友回复的列表 */
    NotifyConst.Notify_FriendRespondList = "Notify_FriendRespondList";
    /**同意或拒绝添加好友 */
    NotifyConst.Notify_AgreeOrRefuseAddFriend = "Notify_AgreeOrRefuseAddFriend";
    /**批量回复好友添加 */
    NotifyConst.Notify_AgreeOrRefuseAddFriendList = "Notify_AgreeOrRefuseAddFriendList";
    /**点赞 */
    NotifyConst.Notify_ThumbsUp = "Notify_ThumbsUp";
    /**玩小游戏 */
    NotifyConst.Notify_PlayGame = "Notify_PlayGame";
    /**错误通知 */
    NotifyConst.Notify_Error = "Notify_Error";
    /**绿色提示通知 */
    NotifyConst.Notify_Green = "Notify_Green";
    /**购物车变化 */
    NotifyConst.Notify_ShopCar = "Notify_ShopCar";
    /**我在全部人中的排行 */
    NotifyConst.Notify_MyRankInAll = "Notify_MyRankInAll";
    return NotifyConst;
}());
__reflect(NotifyConst.prototype, "NotifyConst");
//# sourceMappingURL=NotyfyConst.js.map