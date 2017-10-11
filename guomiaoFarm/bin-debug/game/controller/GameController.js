var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameController = (function () {
    function GameController() {
        this.sequence = 0;
        this.key = "jgo0AUOng7nbPbMf";
    }
    GameController.getInstance = function () {
        if (!this._instance)
            this._instance = new GameController();
        return this._instance;
    };
    GameController.prototype.getSeq = function () {
        this.sequence++;
        return this.sequence;
    };
    /**对要发出的数据进行包装 */
    GameController.prototype.transformData = function (sendData) {
        sendData.seq = this.getSeq();
        var jsonStr = JSON.stringify(sendData);
        var md5 = MD5Util.parse(jsonStr + this.key);
        var upStr = md5.toUpperCase();
        sendData.sign = upStr;
        return sendData;
    };
    /**发送http请求， type:GET/POST, url:接口地址, notify:返回数据后要发送什么通知 */
    GameController.prototype.sendHttp = function (sendData, type, url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open(type, url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onload = function (e) {
            switch (xhr.status) {
                case 200:
                    var obj = JSON.parse(xhr.responseText);
                    callback.call(this, obj);
                    break;
            }
        };
        sendData = this.transformData(sendData);
        xhr.send("data=" + JSON.stringify(sendData));
    };
    /**用户信息 */
    GameController.prototype.getUserInfo = function (openid) {
        var sendData = { openid: openid };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/get-user-info', function (obj) {
            if (obj.status > 0) {
                console.log("获取用户信息失败", obj);
            }
            else {
                GameModel.getInstance().userInfo = obj.data;
                NotifyManager.getInstance().sendNotify(NotifyConst.Notify_UserInfo, obj.data);
            }
        });
    };
    /**仓库信息 */
    GameController.prototype.getStoreInfo = function () {
        var sendData = { token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/item-list', function (obj) {
            if (obj.status > 0) {
                console.log("请求仓库失败", obj);
            }
            else {
                GameModel.getInstance().storeInfo = obj.data;
                NotifyManager.getInstance().sendNotify(NotifyConst.Notify_StoreInfo, obj.data);
            }
        });
    };
    /**农田信息 */
    GameController.prototype.getFarmInfo = function () {
        var sendData = { token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=farm/land-list', function (obj) {
            if (obj.status > 0) {
                console.log("请求土地失败", obj);
            }
            else {
                GameModel.getInstance().landInfo = obj.data;
                NotifyManager.getInstance().sendNotify(NotifyConst.Notify_LandInfo, obj.data);
            }
        });
    };
    /**播种 */
    GameController.prototype.sendSeed = function (itemId) {
        var sendData = { item_db_id: itemId, token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=farm/sow-seeds', function (obj) {
            NotifyManager.getInstance().sendNotify(NotifyConst.Notify_SeedResult, obj);
        });
    };
    /**收获 */
    GameController.prototype.sendGather = function () {
        var sendData = { token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=farm/gather-crop', function (obj) {
            NotifyManager.getInstance().sendNotify(NotifyConst.Notify_GatherResult, obj);
        });
    };
    /**偷菜 */
    GameController.prototype.sendSteal = function (userid) {
        var sendData = { be_user_id: userid, token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=farm/steal', function (obj) {
            NotifyManager.getInstance().sendNotify(NotifyConst.Notify_StealResult, obj);
        });
    };
    /**给自己进行除草、化肥、浇水等操作 浇水3，除草5，施肥6*/
    GameController.prototype.sendOperLand = function (type) {
        var sendData = { type: type, token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=farm/oper-land', function (obj) {
            NotifyManager.getInstance().sendNotify(NotifyConst.Notify_OperLandResult, obj);
        });
    };
    /**给别人浇水 类型固定是3*/
    GameController.prototype.sendWaterOtherLand = function (userid) {
        var sendData = { be_user_id: userid, type: 3, token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=farm/oper-other-land', function (obj) {
            NotifyManager.getInstance().sendNotify(NotifyConst.Notify_WaterOtherLandResult, obj);
        });
    };
    /**订单列表 status:订单状态 0待支付 1待收货 2已收货；  offset:起始位置； page_count:需要多少条数据*/
    GameController.prototype.getOrderList = function (status, offset, page_count) {
        var sendData = { status: status, offset: offset, page_count: page_count, token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=store/get-order-list', function (obj) {
            if (obj.status > 0) {
                console.log("请求订单列表失败", obj);
            }
            else {
                NotifyManager.getInstance().sendNotify(NotifyConst.Notify_OrderList, obj.data);
            }
        });
    };
    /**下订单 address_id 地址数据库ID;item_list 物品列表,[{item_id:1,num:1},{item_id:1,num:1}];user_message 用户留言*/
    GameController.prototype.sendOrder = function (address_id, item_list, user_message) {
        var sendData = { address_id: address_id, item_list: item_list, user_message: user_message, token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=store/order', function (obj) {
            NotifyManager.getInstance().sendNotify(NotifyConst.Notify_OrderResult, obj);
        });
    };
    /**订单支付 order_id 订单ID*/
    GameController.prototype.sendOrderPay = function (order_id) {
        var sendData = { order_id: order_id, token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=store/pay', function (obj) {
            NotifyManager.getInstance().sendNotify(NotifyConst.Notify_OrderPayResult, obj);
        });
    };
    /**确认收货 */
    GameController.prototype.sendSureReceive = function (order_id) {
        var sendData = { order_id: order_id, token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=store/receive', function (obj) {
            NotifyManager.getInstance().sendNotify(NotifyConst.Notify_SureReceiveResult, obj);
        });
    };
    /**删除已收货订单 */
    GameController.prototype.sendDeleteReceivedOrder = function (order_id) {
        var sendData = { order_id: order_id, token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=store/del', function (obj) {
            NotifyManager.getInstance().sendNotify(NotifyConst.Notify_DeleteReceivedOrderResult, obj);
        });
    };
    /**签到 */
    GameController.prototype.sendSign = function () {
        var sendData = { token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/sign', function (obj) {
            NotifyManager.getInstance().sendNotify(NotifyConst.Notify_SignResult, obj);
        });
    };
    /**已签到列表 */
    GameController.prototype.getSignList = function () {
        var sendData = { token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/sign-list', function (obj) {
            if (obj.status > 0) {
                console.log("请求签到列表失败", obj);
            }
            else {
                NotifyManager.getInstance().sendNotify(NotifyConst.Notify_SignList, obj.data);
            }
        });
    };
    /**领取连续签到奖励 count 连续签到几次奖励 */
    GameController.prototype.getContinueSignReward = function (count) {
        var sendData = { count: count, token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/get-continue-sign-gift', function (obj) {
            NotifyManager.getInstance().sendNotify(NotifyConst.Notify_GetContinueSignRewardResult, obj);
        });
    };
    /**公告列表 offset 起始位置; page_count 需要多少条数据*/
    GameController.prototype.getAnnounceList = function (offset, page_count) {
        var sendData = { offset: offset, page_count: page_count, token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=comm/get-notice-list', function (obj) {
            if (obj.status > 0) {
                console.log("请求公告列表失败", obj);
            }
            else {
                NotifyManager.getInstance().sendNotify(NotifyConst.Notify_NoticeList, obj.data);
            }
        });
    };
    /**地址列表 */
    GameController.prototype.getAddressList = function () {
        var sendData = { token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/get-address-list', function (obj) {
            if (obj.status > 0) {
                console.log("请求地址列表失败", obj);
            }
            else {
                NotifyManager.getInstance().sendNotify(NotifyConst.Notify_AddressList, obj.data);
            }
        });
    };
    /**添加地址 */
    GameController.prototype.addAddress = function (realname, phone, address) {
        var sendData = { realname: realname, phone: phone, address: address, token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/add-address', function (obj) {
            NotifyManager.getInstance().sendNotify(NotifyConst.Notify_AddAddress, obj);
        });
    };
    /**编辑地址 id:地址数据库id*/
    GameController.prototype.editAddress = function (id, realname, phone, address) {
        var sendData = { id: id, realname: realname, phone: phone, address: address, token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/edit-address', function (obj) {
            NotifyManager.getInstance().sendNotify(NotifyConst.Notify_EditAddress, obj);
        });
    };
    /**删除地址 */
    GameController.prototype.deleteAddress = function (id) {
        var sendData = { id: id, token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/del-address', function (obj) {
            NotifyManager.getInstance().sendNotify(NotifyConst.Notify_DeleteAddress, obj);
        });
    };
    /**设置默认地址 */
    GameController.prototype.setDefaultAddress = function (id) {
        var sendData = { id: id, token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/default-address', function (obj) {
            NotifyManager.getInstance().sendNotify(NotifyConst.Notify_setDefaultAddress, obj);
        });
    };
    /**徽章成就列表 */
    GameController.prototype.getHonorList = function () {
        var sendData = { token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/get-ach-list', function (obj) {
            if (obj.status > 0) {
                console.log("请求徽章列表失败", obj);
            }
            else {
                NotifyManager.getInstance().sendNotify(NotifyConst.Notify_HonorList, obj.data);
            }
        });
    };
    /**获取徽章成就奖励 id:成就配置ID*/
    GameController.prototype.getHonorReward = function (id) {
        var sendData = { config_id: id, token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/get-ach-gift', function (obj) {
            NotifyManager.getInstance().sendNotify(NotifyConst.Notify_GetHonorReward, obj);
        });
    };
    /**昨日收成排行榜 */
    GameController.prototype.getYesterdayHarvestRank = function () {
        var sendData = { token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/ranking-day-gold-list', function (obj) {
            if (obj.status > 0) {
                console.log("请求昨日收成排行列表失败", obj);
            }
            else {
                NotifyManager.getInstance().sendNotify(NotifyConst.Notify_YesterdayHarvestRank, obj.data);
            }
        });
    };
    /**昨日收成明细 */
    GameController.prototype.getYesterdayHarvestDetail = function () {
        var sendData = { token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/get-my-ranking-day-gold-detail', function (obj) {
            if (obj.status > 0) {
                console.log("请求昨日收成明细失败", obj);
            }
            else {
                NotifyManager.getInstance().sendNotify(NotifyConst.Notify_YesterdayHarvestDetail, obj.data);
            }
        });
    };
    /**我的所有贡献度明细 */
    GameController.prototype.getContributeList = function (offset, page_count) {
        var sendData = { offset: offset, page_count: page_count, token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/get-contribute-list', function (obj) {
            if (obj.status > 0) {
                console.log("请求贡献度明细失败", obj);
            }
            else {
                NotifyManager.getInstance().sendNotify(NotifyConst.Notify_ContributeList, obj.data);
            }
        });
    };
    /**全部总排行榜 by_gold 是否按照果币排行 1:按照果币排行；0：按照贡献排行*/
    GameController.prototype.getRankList = function (offset, page_count, by_gold) {
        var sendData = { offset: offset, page_count: page_count, by_gold: by_gold, token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/get-ranking-list', function (obj) {
            if (obj.status > 0) {
                console.log("请求排行榜失败", obj);
            }
            else {
                NotifyManager.getInstance().sendNotify(NotifyConst.Notify_RankList, obj.data);
            }
        });
    };
    /**好友中自己的排行榜 by_gold 是否按照果币排行 1:按照果币排行；0：按照贡献排行*/
    GameController.prototype.getMyRankInFriends = function (by_gold) {
        var sendData = { by_gold: by_gold, token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=friend/my-ranking', function (obj) {
            NotifyManager.getInstance().sendNotify(NotifyConst.Notify_MyRankInFriends, obj);
        });
    };
    /**获取好友列表，带排行功能 */
    GameController.prototype.getFriendList = function (offset, page_count, by_gold) {
        var sendData = { offset: offset, page_count: page_count, by_gold: by_gold, token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=friend/get-friend-list', function (obj) {
            if (obj.status > 0) {
                console.log("获取好友列表失败", obj);
            }
            else {
                NotifyManager.getInstance().sendNotify(NotifyConst.Notify_FriendList, obj.data);
            }
        });
    };
    /**查找用户 search 要查找的数据*/
    GameController.prototype.findUser = function (search) {
        var sendData = { search: search, token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=friend/find', function (obj) {
            if (obj.status > 0) {
                console.log("查找用户失败", obj);
            }
            else {
                NotifyManager.getInstance().sendNotify(NotifyConst.Notify_FindUser, obj.data);
            }
        });
    };
    /**添加好友 be_user_id 要添加的用户ID*/
    GameController.prototype.addFriend = function (be_user_id) {
        var sendData = { be_user_id: be_user_id, token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=friend/add', function (obj) {
            NotifyManager.getInstance().sendNotify(NotifyConst.Notify_AddUser, obj);
        });
    };
    /**需要进行好友回复的列表 */
    GameController.prototype.getFriendRespondList = function () {
        var sendData = { token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=friend/get-respond-list', function (obj) {
            if (obj.status > 0) {
                console.log("需要进行好友回复的列表 获取失败", obj);
            }
            else {
                NotifyManager.getInstance().sendNotify(NotifyConst.Notify_FriendRespondList, obj.data);
            }
        });
    };
    /**同意或拒绝添加好友 is_agree 1：同意；0：拒绝；*/
    GameController.prototype.agreeOrRefuseAddFriend = function (be_user_id, is_agree) {
        var sendData = { be_user_id: be_user_id, is_agree: is_agree, token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=friend/respond', function (obj) {
            NotifyManager.getInstance().sendNotify(NotifyConst.Notify_AgreeOrRefuseAddFriend, obj);
        });
    };
    /**批量回复好友添加 be_user_id_list 要操作的用户ID [1,2]; is_agree 1：同意；0：拒绝；*/
    GameController.prototype.respondAddFriendList = function (be_user_id_list, is_agree) {
        var sendData = { be_user_id_list: be_user_id_list, is_agree: is_agree, token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=friend/respond-list', function (obj) {
            NotifyManager.getInstance().sendNotify(NotifyConst.Notify_AgreeOrRefuseAddFriendList, obj);
        });
    };
    /**点赞 */
    GameController.prototype.thumbsUp = function (be_user_id) {
        var sendData = { be_user_id: be_user_id, token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=friend/thumbs-up', function (obj) {
            NotifyManager.getInstance().sendNotify(NotifyConst.Notify_ThumbsUp, obj);
        });
    };
    /**玩小游戏 */
    GameController.prototype.playGame = function () {
        var sendData = { token: GameModel.getInstance().getToken() };
        this.sendHttp(sendData, 'POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/play-game', function (obj) {
            NotifyManager.getInstance().sendNotify(NotifyConst.Notify_PlayGame, obj);
        });
    };
    return GameController;
}());
__reflect(GameController.prototype, "GameController");
//# sourceMappingURL=GameController.js.map