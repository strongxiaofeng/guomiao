class StoreUI extends BaseUI{
	private btn_close: eui.Image;
	private itemGroup: eui.Group;
	private defaultTool1: eui.Image;
	private defaultTool0: eui.Image;
	private defaultSeed1: eui.Image;
	private defaultSeed0: eui.Image;
	private seedTime1: eui.Label;
	private seedTime0: eui.Label;
	private fruitWeightTxt: eui.Label;
	private intervalId: any;
	private computearr:Array<any> = [];
	public constructor() {
		super();
		this.skinName = "resource/skins/store.exml";
	}
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();

		GameController.getInstance().getStoreInfo();
		this.intervalId = setInterval(()=>{
			this.computeTime();
		}, 100);

		this.onStoreInfo(null);
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.btn_close, egret.TouchEvent.TOUCH_TAP, this.clickClose, this);
		this.addRegister(NotifyConst.Notify_StoreInfo, this.onStoreInfo, this);
	}
	/**收到仓库信息 */
	public onStoreInfo(info: vo.StoreInfo)
	{
		console.log("仓库ui收到仓库信息 ",info);
		var toolArr = [];
		var seedArr = [];
		var weight = 0;
		if(info && info.list && info.list.length > 0)
		{
			for(let i=0; i<info.list.length; i++)
			{
				let storeIitem: vo.StoreItem = info.list[i];
				let itemData = GameModel.getInstance().getItemById(storeIitem.item_id);
				if(itemData.type1 == 1) {
					seedArr.push(storeIitem);
				}
				else if(itemData.type1 == 2) {
					toolArr.push(storeIitem);
				}
				else if(itemData.type1 == 3) {
					weight = storeIitem.num;
				}
			}
		}

		//工具0
		if(toolArr[0])
		{
			this.defaultTool0.source = "shop_fertilizer_png";
			this.defaultTool0.width = 117;
			this.defaultTool0.height = 117;
		}
		else
		{
			this.defaultTool0.source = "store_nofertilizer_png";
			this.registerEvent(this.defaultTool0, egret.TouchEvent.TOUCH_TAP, this.goShopTool, this);
			// this.defaultTool0.width = 92;
			// this.defaultTool0.height = 92;
		}
		//工具1
		if(toolArr[1])
		{
			this.defaultTool1.source = "store_insurance";
			this.defaultTool1.width = 117;
			this.defaultTool1.height = 117;
		}
		else
		{
			this.defaultTool1.source = "store_noinsurance_png";
			this.registerEvent(this.defaultTool1, egret.TouchEvent.TOUCH_TAP, this.goShopTool, this);
			// this.defaultTool1.width = 92;
			// this.defaultTool1.height = 92;
		}
		//第二排显示种子
		if(seedArr[0])
		{
			this.defaultSeed0.source = "seed1_png";
			let serverTime = GameModel.getInstance().getServerTime();
			let passTime = seedArr[0].expire_time-serverTime;
			let date = new Date();
			date.setSeconds(passTime);
			this.seedTime0.text = passTime>0 ? date.getUTCHours()+":"+date.getUTCMinutes()+":"+date.getUTCSeconds()+ "后结束播种" : "结束播种";
			this.computearr.push({expire_time:seedArr[0].expire_time, txt:this.seedTime0})
		}
		else
		{
			this.defaultSeed0.source = "seedEmpty_png";
			this.seedTime0.text = "没有种子，无法播种";
		}
		if(seedArr[1])
		{
			this.defaultSeed1.source = "seed1_png";
			let serverTime = GameModel.getInstance().getServerTime();
			let passTime = seedArr[1].expire_time-serverTime;
			let date = new Date();
			date.setSeconds(passTime);
			this.seedTime1.text = passTime>0 ? date.getUTCHours()+":"+date.getUTCMinutes()+":"+date.getUTCSeconds()+ "后结束播种" : "结束播种";
			this.computearr.push({expire_time:seedArr[1].expire_time, txt:this.seedTime1})
		}
		else
		{
			this.defaultSeed1.source = "seedEmpty_png";
			this.seedTime1.text = "没有种子，无法播种";
		}
		//果实有多少斤
		this.fruitWeightTxt.text = weight+"斤";
	}

	/**到商店去购买工具 */
	private goShopTool()
	{
		GameModel.getInstance().isShopFromStore = true;
		UIManager.closeUI(UIConst.StoreUI);
		UIManager.openUI(UIConst.ShopUI);
		UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
	}

	/**循环计算种子过期时间 */
	private computeTime(){
		for(var i=0 ; i<this.computearr.length; i++)
		{
			var serverTime = GameModel.getInstance().getServerTime();
			var passTime = this.computearr[i].expire_time - serverTime;
			var date = new Date();
			date.setSeconds(passTime);
			var str = passTime>0 ? date.getUTCHours()+":"+date.getUTCMinutes()+":"+date.getUTCSeconds()+ "后结束播种" : "结束播种";
			this.computearr[i].txt.text = str;
		}
	}
	/**点击关闭 */
	private clickClose()
	{
		UIManager.closeUI(UIConst.StoreUI);
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
		this.removeRegister(this);
		clearInterval(this.intervalId);
		this.computearr = [];
		this.itemGroup.removeChildren();
	}
}