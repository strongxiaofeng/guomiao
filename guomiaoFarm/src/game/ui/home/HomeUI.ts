class HomeUI extends BaseUI{
	private headBg: eui.Image;
	private signBtn: eui.Button;
	private storeBtn: eui.Button;
	private btn_radio: eui.Button;
	private btn_shop: eui.Button;
	private btn_charge: eui.Button;
	private btn_rank: eui.Button;
	private noticeGroup: eui.Group;
	private noticeLabel: eui.Label;
	private btn_game: eui.Button;
	private btn_gift: eui.Button;
	private btn_weed: eui.Button;
	private btn_fertilizer: eui.Button;
	private btn_water: eui.Button;
	private btn_seed: eui.Button;
	private waterCount: eui.Image;
	public constructor() {
		super();
		this.skinName = "resource/skins/home.exml";
	}
	
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
		this.updateLand(0);
		//昨日排行只请求一次
		if(!GameModel.getInstance().isYesterdayRankGot) GameController.getInstance().getYesterdayHarvestRank();
		GameController.getInstance().getFarmInfo();
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.headBg, egret.TouchEvent.TOUCH_TAP, this.clickHead, this);
		this.registerEvent(this.signBtn, egret.TouchEvent.TOUCH_TAP, this.clickSign, this);
		this.registerEvent(this.storeBtn, egret.TouchEvent.TOUCH_TAP, this.clickStore, this);
		this.registerEvent(this.btn_radio, egret.TouchEvent.TOUCH_TAP, this.clickRadio, this);
		this.registerEvent(this.btn_shop, egret.TouchEvent.TOUCH_TAP, this.clickShop, this);
		this.registerEvent(this.btn_charge, egret.TouchEvent.TOUCH_TAP, this.clickCharge, this);
		this.registerEvent(this.btn_rank, egret.TouchEvent.TOUCH_TAP, this.clickRank, this);
		this.registerEvent(this.btn_game, egret.TouchEvent.TOUCH_TAP, this.clickGame, this);
		this.registerEvent(this.btn_gift, egret.TouchEvent.TOUCH_TAP, this.clickGift, this);
		this.registerEvent(this.btn_weed, egret.TouchEvent.TOUCH_TAP, this.clickWeed, this);
		this.registerEvent(this.btn_fertilizer, egret.TouchEvent.TOUCH_TAP, this.clickFertilizer, this);
		this.registerEvent(this.btn_water, egret.TouchEvent.TOUCH_TAP, this.clickWater, this);
		this.registerEvent(this.btn_seed, egret.TouchEvent.TOUCH_TAP, this.clickSeed, this);


		this.addRegister(NotifyConst.Notify_LandInfo, this.onLandInfo, this);
		this.addRegister(NotifyConst.Notify_YesterdayHarvestRank, this.onYesterdayHarvestRank, this);
	}
	/**昨日收成排行 */
	private onYesterdayHarvestRank(info:vo.YesterdayHarvestRankInfo)
	{
		console.log('主界面收到昨日排行 ',info);
		GameModel.getInstance().isYesterdayRankGot = true;
		UIManager.openUI(UIConst.LastHarvestRankUI, LayerManager.Layer_Tip);
	}
	/**农田信息 */
	private onLandInfo(info: vo.FarmInfo)
	{
		console.log('主界面收到农田信息 ',info);
		var data = info.list[0];
		if(data.crop_id == 0)
		{
			this.updateLand(0);
		}
		else
		{
			var pass = GameModel.getInstance().getServerTime() - data.crop_start_time;
			if(pass < GameModel.getInstance().getTreeYoungTime(data.crop_id))
			{
				this.updateLand(1);
			}
			else if(pass < GameModel.getInstance().getTreeGrowTime(data.crop_id))
			{
				this.updateLand(2);
			}
			else if(pass < GameModel.getInstance().getTreeRipeTime(data.crop_id))
			{
				this.updateLand(3);
			}
			else
			{
				this.updateLand(4);
			}
		}
	}
	/**刷新种植状态 0没有种植 1种子 2幼苗 3成长 4成熟*/
	private updateLand(n:number)
	{
		for(var i=1;i<=12;i++)
		{
			if(n==0) this["tree"+i].source = "";
			else if(n==1) this["tree"+i].source = "seedImg_png";
			else if(n==2) this["tree"+i].source = "tree_young_png";
			else if(n==3) this["tree"+i].source = "tree_grow_png";
			else if(n==4) this["tree"+i].source = "tree_ripe_png";
		}
	}
	/**个人 */
	private clickHead()
	{
		UIManager.openUI(UIConst.UserMenuUI);
		UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
	}
	/**签到 */
	private clickSign()
	{
		UIManager.openUI(UIConst.SignUI, LayerManager.Layer_Tip);
	}
	/**仓库 */
	private clickStore()
	{
		UIManager.openUI(UIConst.StoreUI, LayerManager.Layer_Tip);
	}
	/**广播 */
	private clickRadio()
	{
		UIManager.openUI(UIConst.RadioUI);
		UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
	}
	/**商店 */
	private clickShop()
	{
		UIManager.openUI(UIConst.ShopUI);
		UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
	}
	/**充值 */
	private clickCharge()
	{
		UIManager.openUI(UIConst.ChargeUI);
		UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
	}
	/**排行 */
	private clickRank()
	{
		UIManager.openUI(UIConst.RankFriendContributeUI);
		UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
	}
	/**小游戏 */
	private clickGame()
	{
	}
	/**礼物呀 */
	private clickGift()
	{
		UIManager.openUI(UIConst.GiftUI, LayerManager.Layer_Tip);
	}
	/**除草 */
	private clickWeed()
	{
		GameController.getInstance().sendOperLand(5);
	}
	/**施肥 */
	private clickFertilizer()
	{
		GameController.getInstance().sendOperLand(6);
	}
	/**浇水 */
	private clickWater()
	{
		GameController.getInstance().sendOperLand(3);
		// UIManager.openUI(UIConst.InviteWaterUI, LayerManager.Layer_Tip);
	}
	/**播种 种仓库里的id*/
	private clickSeed()
	{
		GameController.getInstance().sendSeed(4);
		GameController.getInstance().sendGather();
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
		this.removeRegister(this);
	}
}