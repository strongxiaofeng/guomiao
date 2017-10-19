class GameController {
	private static _instance: GameController;
	private sequence:number = 0;
	private key = "jgo0AUOng7nbPbMf";

	public constructor() {
	}
	public static getInstance(): GameController
	{
		if(!this._instance) this._instance = new GameController();
		return this._instance;
	}
	private getSeq():number{
		this.sequence++;
		return this.sequence;
	}
	/**对要发出的数据进行包装 */
	private transformData(sendData: any): any
	{
		sendData.seq = this.getSeq();
		var jsonStr = JSON.stringify(sendData);
		var md5 = MD5Util.parse(jsonStr+this.key);
		var upStr = md5.toUpperCase();
		sendData.sign = upStr;
		return sendData;
	}
	/**发送http请求， type:GET/POST, url:接口地址, notify:返回数据后要发送什么通知 */
	private sendHttp(sendData:any, type:string, url:string, callback:Function)
	{
		var xhr = new XMLHttpRequest();                
		xhr.open(type, url, true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.onload = function(e){ 
			switch(xhr.status)
			{
				case 200:
					let obj: BaseResponse = JSON.parse(xhr.responseText);
					if(obj.status > 0)
					{
						NotifyManager.getInstance().sendNotify(NotifyConst.Notify_Error, ErrorCode.codes[obj.status]);
					}
					GameModel.getInstance().setServerTime(obj.server_time);
					callback.call(this, obj);
					break;
			}
		};
		sendData = this.transformData(sendData);
		xhr.send("data="+JSON.stringify(sendData));
	}

	/**用户信息 */
	public getUserInfo(openid: number)
	{
		let sendData = {openid:openid};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/get-user-info',
			(obj)=>{
				if(obj.status>0)
				{
					console.log("获取用户信息失败",obj);
				}
				else{
					GameModel.getInstance().userInfo = obj.data;
					NotifyManager.getInstance().sendNotify(NotifyConst.Notify_UserInfo, obj.data);
				}
			}
		);
	}
	/**仓库信息 */
	public getStoreInfo()
	{
		let sendData = {token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/item-list',
			(obj)=>{
				if(obj.status>0)
				{
					console.log("请求仓库失败",obj);
				}
				else{
					GameModel.getInstance().storeInfo = obj.data;
					NotifyManager.getInstance().sendNotify(NotifyConst.Notify_StoreInfo, obj.data);
				}
			}
		);
	}
	/**农田信息 */
	public getFarmInfo()
	{
		let sendData = {token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=farm/land-list',
			(obj)=>{
				if(obj.status>0)
				{
					console.log("请求土地失败",obj);
				}
				else{
					GameModel.getInstance().landInfo = obj.data;
					NotifyManager.getInstance().sendNotify(NotifyConst.Notify_LandInfo, obj.data);
				}
			}
		);
	}
	/**播种 */
	public sendSeed(itemId:number)
	{
		let sendData = {item_db_id: itemId, token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=farm/sow-seeds',
			(obj)=>{
				NotifyManager.getInstance().sendNotify(NotifyConst.Notify_SeedResult, obj);
			}
		);
	}
	/**收获 */
	public sendGather()
	{
		let sendData = {token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=farm/gather-crop',
			(obj)=>{
				NotifyManager.getInstance().sendNotify(NotifyConst.Notify_GatherResult, obj);
			}
		);
	}
	/**偷菜 */
	public sendSteal(userid: number )
	{
		let sendData = {be_user_id: userid, token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=farm/steal',
			(obj)=>{
				NotifyManager.getInstance().sendNotify(NotifyConst.Notify_StealResult, obj);
			}
		);
	}
	/**给自己进行除草、化肥、浇水等操作 浇水3，除草5，施肥6*/
	public sendOperLand(type:number)
	{
		let sendData = {type: type, token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=farm/oper-land',
			(obj)=>{
				NotifyManager.getInstance().sendNotify(NotifyConst.Notify_OperLandResult, obj);
			}
		);
	}
	/**给别人浇水 类型固定是3*/
	public sendWaterOtherLand(userid:number)
	{
		let sendData = {be_user_id: userid, type: 3, token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=farm/oper-other-land',
			(obj)=>{
				NotifyManager.getInstance().sendNotify(NotifyConst.Notify_WaterOtherLandResult, obj);
			}
		);
	}
	/**订单列表 status:订单状态 0待支付 1待收货 2已收货；  offset:起始位置； page_count:需要多少条数据*/
	public getOrderList(status:number, offset:number, page_count:number)
	{
		let sendData = {status: status, offset: offset, page_count: page_count, token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=store/get-order-list',
			(obj)=>{
				if(obj.status>0)
				{
					console.log("请求订单列表失败",obj);
				}
				else{
					NotifyManager.getInstance().sendNotify(NotifyConst.Notify_OrderList, obj.data);
				}
			}
		);
	}
	/**下订单 address_id 地址数据库ID;item_list 物品列表,[{item_id:1,num:1},{item_id:1,num:1}];user_message 用户留言*/
	public sendOrder(address_id:number, item_list:Array<any>, user_message:string)
	{
		let sendData = {address_id: address_id, item_list: item_list, user_message: user_message, token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=store/order',
			(obj)=>{
				NotifyManager.getInstance().sendNotify(NotifyConst.Notify_OrderResult, obj);
			}
		);
	}
	/**订单支付 order_id 订单ID*/
	public sendOrderPay(order_id:number)
	{
		let sendData = {order_id: order_id, token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=store/pay',
			(obj)=>{
				NotifyManager.getInstance().sendNotify(NotifyConst.Notify_OrderPayResult, obj);
			}
		);
	}
	/**确认收货 */
	public sendSureReceive(order_id:number)
	{
		let sendData = {order_id: order_id, token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=store/receive',
			(obj)=>{
				NotifyManager.getInstance().sendNotify(NotifyConst.Notify_SureReceiveResult, obj);
			}
		);
	}
	/**删除已收货订单 */
	public sendDeleteReceivedOrder(order_id:number)
	{
		let sendData = {order_id: order_id, token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=store/del',
			(obj)=>{
				NotifyManager.getInstance().sendNotify(NotifyConst.Notify_DeleteReceivedOrderResult, obj);
			}
		);
	}
	/**签到 */
	public sendSign()
	{
		let sendData = {token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/sign',
			(obj)=>{
				NotifyManager.getInstance().sendNotify(NotifyConst.Notify_SignResult, obj);
			}
		);
	}
	/**已签到列表 */
	public getSignList()
	{
		let sendData = {token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/sign-list',
			(obj)=>{
				if(obj.status>0)
				{
					console.log("请求签到列表失败",obj);
				}
				else{
					NotifyManager.getInstance().sendNotify(NotifyConst.Notify_SignList, obj.data);
				}
			}
		);
	}
	/**领取连续签到奖励 count 连续签到几次奖励 */
	public getContinueSignReward(count: number)
	{
		let sendData = {count: count, token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/get-continue-sign-gift',
			(obj)=>{
				NotifyManager.getInstance().sendNotify(NotifyConst.Notify_GetContinueSignRewardResult, obj);
			}
		);
	}
	/**公告列表 offset 起始位置; page_count 需要多少条数据*/
	public getAnnounceList(offset:number, page_count:number)
	{
		let sendData = {offset:offset, page_count:page_count, token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=comm/get-notice-list',
			(obj)=>{
				if(obj.status>0)
				{
					console.log("请求公告列表失败",obj);
				}
				else{
					NotifyManager.getInstance().sendNotify(NotifyConst.Notify_NoticeList, obj.data);
				}
			}
		);
	}
	/**地址列表 */
	public getAddressList()
	{
		let sendData = {token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/get-address-list',
			(obj)=>{
				if(obj.status>0)
				{
					console.log("请求地址列表失败",obj);
				}
				else{
					console.log('收到地址列表 ',obj);
					GameModel.getInstance().addressList = obj.data;
					NotifyManager.getInstance().sendNotify(NotifyConst.Notify_AddressList, obj.data);
				}
			}
		);
	}
	/**添加地址 */
	public addAddress(realname: string, phone: string, address: string)
	{
		let sendData = {realname: realname, phone: phone, address: address, token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/add-address',
			(obj)=>{
				NotifyManager.getInstance().sendNotify(NotifyConst.Notify_AddAddress, obj);
			}
		);
	}
	/**编辑地址 id:地址数据库id*/
	public editAddress(id:number, realname: string, phone: number, address: string)
	{
		let sendData = {id:id, realname: realname, phone: phone, address: address, token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/edit-address',
			(obj)=>{
				GameController.getInstance().getAddressList();
				NotifyManager.getInstance().sendNotify(NotifyConst.Notify_EditAddress, obj);
			}
		);
	}
	/**删除地址 */
	public deleteAddress(id:number)
	{
		let sendData = {id:id, token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/del-address',
			(obj)=>{
				GameController.getInstance().getAddressList();
				// NotifyManager.getInstance().sendNotify(NotifyConst.Notify_DeleteAddress, obj);
			}
		);
	}
	/**设置默认地址 */
	public setDefaultAddress(id:number)
	{
		let sendData = {id:id, token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/default-address',
			(obj)=>{
				GameController.getInstance().getAddressList();
				// NotifyManager.getInstance().sendNotify(NotifyConst.Notify_setDefaultAddress, obj);
			}
		);
	}
	/**徽章成就列表 */
	public getHonorList()
	{
		let sendData = {token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/get-ach-list',
			(obj)=>{
				if(obj.status>0)
				{
					console.log("请求徽章列表失败",obj);
				}
				else{
					GameModel.getInstance().honorInfo = obj.data;
					NotifyManager.getInstance().sendNotify(NotifyConst.Notify_HonorList);
				}
			}
		);
	}
	/**获取徽章成就奖励 id:成就配置ID*/
	public getHonorReward(id:number)
	{
		let sendData = {config_id:id, token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/get-ach-gift',
			(obj)=>{
				NotifyManager.getInstance().sendNotify(NotifyConst.Notify_GetHonorReward, obj);
			}
		);
	}
	/**昨日收成排行榜 */
	public getYesterdayHarvestRank()
	{
		let sendData = {token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/ranking-day-gold-list',
			(obj)=>{
				if(obj.status>0)
				{
					console.log("请求昨日收成排行列表失败",obj);
				}
				else{
					GameModel.getInstance().yesterdayRank = obj.data;
					NotifyManager.getInstance().sendNotify(NotifyConst.Notify_YesterdayHarvestRank, obj.data);
				}
			}
		);
	}
	/**昨日收成明细 */
	public getYesterdayHarvestDetail()
	{
		let sendData = {token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/get-my-ranking-day-gold-detail',
			(obj)=>{
				if(obj.status>0)
				{
					console.log("请求昨日收成明细失败",obj);
				}
				else{
					NotifyManager.getInstance().sendNotify(NotifyConst.Notify_YesterdayHarvestDetail, obj.data);
				}
			}
		);
	}
	/**我的所有贡献度明细 */
	public getContributeList(offset:number, page_count:number)
	{
		let sendData = {offset:offset, page_count:page_count, token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/get-contribute-list',
			(obj)=>{
				if(obj.status>0)
				{
					console.log("请求贡献度明细失败",obj);
				}
				else{
					NotifyManager.getInstance().sendNotify(NotifyConst.Notify_ContributeList, obj.data);
				}
			}
		);
	}
	/**全部总排行榜 by_gold 是否按照果币排行 1:按照果币排行；0：按照贡献排行*/
	public getRankList(offset:number, page_count:number, by_gold:number)
	{
		let sendData = {offset:offset, page_count:page_count, by_gold:by_gold, token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/get-ranking-list',
			(obj)=>{
				if(obj.status>0)
				{
					console.log("请求排行榜失败",obj);
				}
				else{
					NotifyManager.getInstance().sendNotify(NotifyConst.Notify_RankList, obj.data);
				}
			}
		);
	}
	/**全部人中自己的排行榜 by_gold 是否按照果币排行 1:按照果币排行；0：按照贡献排行*/
	public getMyRankInAll(by_gold:number)
	{
		let sendData = {by_gold:by_gold, token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=friend/get-my-ranking',
			(obj)=>{
				NotifyManager.getInstance().sendNotify(NotifyConst.Notify_MyRankInAll, obj);
			}
		);
	}
	/**好友中自己的排行榜 by_gold 是否按照果币排行 1:按照果币排行；0：按照贡献排行*/
	public getMyRankInFriends(by_gold:number)
	{
		let sendData = {by_gold:by_gold, token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=friend/my-ranking',
			(obj)=>{
				NotifyManager.getInstance().sendNotify(NotifyConst.Notify_MyRankInFriends, obj);
			}
		);
	}
	/**获取好友列表，带排行功能 */
	public getFriendList(offset:number, page_count:number, by_gold:number)
	{
		let sendData = {offset:offset, page_count:page_count, by_gold:by_gold, token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=friend/get-friend-list',
			(obj)=>{
				if(obj.status>0)
				{
					console.log("获取好友列表失败",obj);
				}
				else{
					NotifyManager.getInstance().sendNotify(NotifyConst.Notify_FriendList, obj.data);
				}
			}
		);
	}
	/**查找用户 search 要查找的数据*/
	public findUser(search:string)
	{
		let sendData = {search:search, token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=friend/find',
			(obj)=>{
				if(obj.status>0)
				{
					console.log("查找用户失败",obj);
				}
				else{
					NotifyManager.getInstance().sendNotify(NotifyConst.Notify_FindUser, obj.data);
				}
			}
		);
	}
	/**添加好友 be_user_id 要添加的用户ID*/
	public addFriend(be_user_id:number)
	{
		let sendData = {be_user_id:be_user_id, token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=friend/add',
			(obj)=>{
				NotifyManager.getInstance().sendNotify(NotifyConst.Notify_AddUser, obj);
			}
		);
	}
	/**需要进行好友回复的列表 */
	public getFriendRespondList()
	{
		let sendData = {token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=friend/get-respond-list',
			(obj)=>{
				if(obj.status>0)
				{
					console.log("需要进行好友回复的列表 获取失败", obj);
				}
				else{
					NotifyManager.getInstance().sendNotify(NotifyConst.Notify_FriendRespondList, obj.data);
				}
			}
		);
	}
	/**同意或拒绝添加好友 is_agree 1：同意；0：拒绝；*/
	public agreeOrRefuseAddFriend(be_user_id:string, is_agree:number)
	{
		let sendData = {be_user_id:be_user_id, is_agree:is_agree, token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=friend/respond',
			(obj)=>{
				NotifyManager.getInstance().sendNotify(NotifyConst.Notify_AgreeOrRefuseAddFriend, obj);
			}
		);
	}
	/**批量回复好友添加 be_user_id_list 要操作的用户ID [1,2]; is_agree 1：同意；0：拒绝；*/
	public respondAddFriendList(be_user_id_list:Array<number>, is_agree:number)
	{
		let sendData = {be_user_id_list:be_user_id_list, is_agree:is_agree, token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=friend/respond-list',
			(obj)=>{
				NotifyManager.getInstance().sendNotify(NotifyConst.Notify_AgreeOrRefuseAddFriendList, obj);
			}
		);
	}
	/**点赞 */
	public thumbsUp(be_user_id:number)
	{
		let sendData = {be_user_id:be_user_id, token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=friend/thumbs-up',
			(obj)=>{
				NotifyManager.getInstance().sendNotify(NotifyConst.Notify_ThumbsUp, obj);
			}
		);
	}
	/**玩小游戏 */
	public playGame()
	{
		let sendData = {token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/play-game',
			(obj)=>{
				NotifyManager.getInstance().sendNotify(NotifyConst.Notify_PlayGame, obj);
			}
		);
	}
	/**获取配置 */
	public getServerConfig()
	{
		let sendData = {token: GameModel.getInstance().getToken()};
		this.sendHttp(
			sendData, 
			'POST', 
			'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=comm/game-config',
			(obj)=>{
				console.log('收到配置:', obj);
				GameModel.getInstance().serverConfig = obj.data;
			}
		);
	}

}