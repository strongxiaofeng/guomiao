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

	/**用户信息 */
	public getUserInfo(sendData: any)
	{
		var xhr = new XMLHttpRequest();                
		xhr.open('POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/get-user-info', true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.onload = function(e){ 
			switch(xhr.status)
			{
				case 200:
					let obj: BaseResponse = JSON.parse(xhr.responseText);
					if(obj.status>0)
					{
						console.log("返回异常",obj)
					}
					else{
						GameModel.getInstance().userInfo = obj.data;
						NotifyManager.getInstance().sendNotify(NotifyConst.Notify_UserInfo, obj.data);
					}
					break;
			}
		};
		sendData = this.transformData(sendData);
		xhr.send("data="+JSON.stringify(sendData));
	}
	/**仓库信息 */
	public getStoreInfo(sendData: any)
	{
		var xhr = new XMLHttpRequest();                
		xhr.open('POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/item-list', true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.onload = function(e){ 
			switch(xhr.status)
			{
				case 200:
					let obj: BaseResponse = JSON.parse(xhr.responseText);
					if(obj.status>0)
					{
						console.log("返回异常",obj)
					}
					else{
						GameModel.getInstance().storeInfo = obj.data;
						NotifyManager.getInstance().sendNotify(NotifyConst.Notify_StoreInfo, obj.data);
					}
					break;
			}
		};
		sendData = this.transformData(sendData);
		xhr.send("data="+JSON.stringify(sendData));
	}
	/**农田信息 */
	public getFarmInfo(sendData: any)
	{
		var xhr = new XMLHttpRequest();                
		xhr.open('POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=farm/land-list', true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.onload = function(e){ 
			switch(xhr.status)
			{
				case 200:
					let obj: BaseResponse = JSON.parse(xhr.responseText);
					if(obj.status>0)
					{
						console.log("返回异常",obj)
					}
					else{
						GameModel.getInstance().landInfo = obj.data;
						NotifyManager.getInstance().sendNotify(NotifyConst.Notify_LandInfo, obj.data);
					}
					break;
			}
		};
		sendData = this.transformData(sendData);
		xhr.send("data="+JSON.stringify(sendData));
	}
	/**播种 */
	/**收获 */
	/**偷菜 */
	/**给自己进行除草、化肥、浇水等操作 */
	/**给别人进行除草、化肥、浇水等操作 */
	/**订单列表 */
	/**下订单 */
	/**订单支付 */
	/**确认收货 */
	/**删除已收货订单 */
	/**签到 */
	/**已签到列表 */
	/**领取连续签到奖励 */
	/**公告列表 */
	/**地址列表 */
	/**添加地址 */
	/**编辑地址 */
	/**删除地址 */
	/**设置默认地址 */
	/**徽章成就列表 */
	/**获取徽章成就奖励 */
	/**昨日收成排行榜 */
	/**昨日收成明细 */
	/**我的所有贡献度明细 */
	/**全部总排行榜 */
	/**好友中自己的排行榜 */
	/**获取好友列表，带排行功能 */
	/**查找用户 */
	/**添加好友 */
	/**需要进行好友回复的列表 */
	/**同意或拒绝添加好友 */
	/**批量回复好友添加 */
	/**点赞 */
	/**玩小游戏 */


}