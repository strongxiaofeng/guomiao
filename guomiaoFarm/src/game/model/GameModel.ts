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
	private _serverConfig: any;
	private _userinfo: vo.UserInfo;
	private _storeInfo: vo.StoreInfo;
	/**农田信息 */
	private _landInfo: vo.StoreInfo;
	private _addressList: vo.AddressInfo;

	// --------------------------- 存储数据 -------------------------------------

	public set userInfo(info: vo.UserInfo)
	{
		this._userinfo = info;
	}
	public set storeInfo(info: vo.StoreInfo)
	{
		this._storeInfo = info;
	}
	public set landInfo(info: vo.StoreInfo)
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
	


	// --------------------------- 获取数据 -------------------------------------

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
	public getItemList()
	{
		
	}
}