class GameModel {
	private static _instance: GameModel;
	public constructor() {
	}
	public static getInstance(): GameModel
	{
		if(!this._instance) this._instance = new GameModel();
		return this._instance;
	}

	/**是否收到过昨日排行  */
	public isYesterdayRankGot:boolean = false;
	private _serverTime: number;
	private _serverTimeStartRecord: number;
	private _serverConfig: vo.Config;
	private _userinfo: vo.UserInfo;
	private _storeInfo: vo.StoreInfo;
	/**农田信息 */
	private _landInfo: vo.FarmInfo;
	private _addressList: vo.AddressInfo;
	private _yesterdayRank:vo.YesterdayHarvestRankInfo;
	private _honorInfo: vo.HonorInfo;
	/**当前打开的荣誉墙的item详情数据 */
	private _currentHonorItem: vo.Achievement_listItem;
	/**购物车数据 以物品id为key 数量为value */
	private shopCarData = {};
	/**正在查看的他人数据 */
	private _otherUser: vo.RankAllItem;
	/**正在查看的种子详情的id */
	public curSeedDetailId: number;

	// --------------------------- 存储数据 -------------------------------------


	public set curOtherUser(info: vo.RankAllItem)
	{
		this._otherUser = info;
	}
	public set currentHonorItem(data:vo.Achievement_listItem)
	{
		this._currentHonorItem = data;
	}
	public set honorInfo(info: vo.HonorInfo)
	{
		this._honorInfo = info;
	}
	public setServerTime(n: number)
	{
		this._serverTime = n;
		this._serverTimeStartRecord = new Date().getTime();
	}
	public set userInfo(info: vo.UserInfo)
	{
		this._userinfo = info;
	}
	public set storeInfo(info: vo.StoreInfo)
	{
		this._storeInfo = info;
	}
	public set landInfo(info: vo.FarmInfo)
	{
		this._landInfo = info;
	}
	public set serverConfig(info: any)
	{
		this._serverConfig = info;
	}
	public set addressList(info: any)
	{
		this._addressList = info;
	}
	public set yesterdayRank(info: vo.YesterdayHarvestRankInfo)
	{
		this._yesterdayRank = info;
	}
	/**添加1个商品到购物车 */
	public addShopCarData(id:number)
	{
		if(this.shopCarData[id]) this.shopCarData[id] ++;
		else this.shopCarData[id] = 1;
		NotifyManager.getInstance().sendNotify(NotifyConst.Notify_ShopCar, this.shopCarData);
	}
	/**从购物车减少商品*/
	public reduceShopCarData(id:number)
	{
		if(this.shopCarData[id]) this.shopCarData[id]--;
		if(this.shopCarData[id] == 0) delete this.shopCarData[id];
		NotifyManager.getInstance().sendNotify(NotifyConst.Notify_ShopCar, this.shopCarData);
	}
	/**清空购物车数据 */
	public clearShopCar()
	{
		this.shopCarData = [];
		NotifyManager.getInstance().sendNotify(NotifyConst.Notify_ShopCar, this.shopCarData);
	}
	/**获取购物车数据 */
	public getShopCarData():any
	{
		return this.shopCarData;
	}
	/**根据物品id获取物品配置 */
	public getItemById(id:number): vo.Item_listItem
	{
		if(this._serverConfig && this._serverConfig.item_list && this._serverConfig.item_list[id])
		{
			return this._serverConfig.item_list[id];
		}
		return null;
	}
	


	// --------------------------- 获取数据 -------------------------------------



	public getCurOtherUser():vo.RankAllItem
	{
		return this._otherUser;
	}
	public getUserInfo(): vo.UserInfo
	{
		return this._userinfo;
	}
	/**勋章墙item详情数据 */
	public getHonorItemDetail():vo.Achievement_listItem
	{
		return this._currentHonorItem;
	}
	public getHonorInfo(): vo.HonorInfo
	{
		return this._honorInfo;
	}
	public getHonorConfig(): vo.HonorInfo
	{
		return this._serverConfig.achievement_list;
	}
	public getGift(): any
	{
		return this._serverConfig.gift_bag;
	}
	public getLandInfo(): vo.FarmInfo
	{
		return this._landInfo;
	}
	/**仓库里有什么种子 这个种子在仓库里的id*/
	public getSeedId(): number
	{
		if(this._storeInfo && this._storeInfo.list && this._storeInfo.list.length>0)
		{
			var list = this._storeInfo.list;
			for(var i=0; i<list.length; i++)
			{
				if(list[i].type == 1)
				{
					return list[i].id;
				}
			}
		}
		return 0;
	}
	public getShopItems(): Array<vo.Item_listItem>
	{
		var list:Array<vo.Item_listItem> = [];
		if(this._serverConfig && this._serverConfig.item_list){
			for(var key in this._serverConfig.item_list)
			{
				list.push(<vo.Item_listItem>this._serverConfig.item_list[key]);
			}
		}
		console.log('获取货物 ',list);
		return list;
	}
	public getAddressList(): vo.AddressInfo
	{
		console.log("获取地址 ",this._addressList);
		return this._addressList;
	}
	public getDefaultAddress(): vo.AddressItem
	{
		console.log("获取默认地址 ",this._addressList);
		var defaultAddress:vo.AddressItem = null;
		if(this._addressList && this._addressList.list && this._addressList.list.length>0)
		{
			var list = this._addressList.list;
			for(var i=0; i<list.length; i++)
			{
				if(list[i].is_default)
				{
					defaultAddress = list[i];
					break;
				}
			}
			if(!defaultAddress) defaultAddress=list[0];
		}
		return defaultAddress;
	}
	/**获取服务器时间 */
	public getServerTime(): number
	{
		return  Math.floor((new Date().getTime() - this._serverTimeStartRecord)/1000 + this._serverTime);
	}
	/**获取某植物的幼苗期 */
	public getTreeYoungTime(id):number
	{
		var list = this._serverConfig.crop_list;
		for(var key in list)
		{
			if(key == id)
			{
				return (<vo.Crop_listItem>list[key]).seedling_time;
			}
		}
		return 0;
	}
	/**获取某植物的生长期 */
	public getTreeGrowTime(id):number
	{
		var list = this._serverConfig.crop_list;
		for(var key in list)
		{
			if(key == id)
			{
				return (<vo.Crop_listItem>list[key]).grow_time + (<vo.Crop_listItem>list[key]).seedling_time;
			}
		}
		return 0;
	}
	/**获取某植物的成熟期 */
	public getTreeRipeTime(id):number
	{
		var list = this._serverConfig.crop_list;
		for(var key in list)
		{
			if(key == id)
			{
				return (<vo.Crop_listItem>list[key]).ripe_time + (<vo.Crop_listItem>list[key]).grow_time + (<vo.Crop_listItem>list[key]).seedling_time;
			}
		}
		return 0;
	}
	public getYesterdayRank(): vo.YesterdayHarvestRankInfo
	{
		return this._yesterdayRank;
	}
	public getNickname(): string
	{
		if(this._userinfo)
		{
			return this._userinfo.nickname;
		}
		return "";
	}
	public getToken(): string
	{
		if(this._userinfo)
		{
			return this._userinfo.token;
		}
		return "";
	}
	public getId(): string
	{
		if(this._userinfo)
		{
			return this._userinfo.id;
		}
		return "";
	}
	public getGold(): number
	{
		if(this._userinfo)
		{
			return this._userinfo.gold;
		}
		return 0;
	}
	public getLevel(): number
	{
		if(this._userinfo)
		{
			return this._userinfo.level;
		}
		return 0;
	}
	/**贡献度 */
	public getContribute(): number
	{
		if(this._userinfo)
		{
			return this._userinfo.exp;
		}
		return 0;
	}
	/**总贡献度 */
	public getTotalContribute(): number
	{
		if(this._userinfo)
		{
			return this._userinfo.total_exp;
		}
		return 0;
	}
}