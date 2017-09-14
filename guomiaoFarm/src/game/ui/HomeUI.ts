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
	}
	/**初始监听 */
	protected initListener()
	{
		console.log("initListener");
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
	}
	/**个人 */
	private clickHead()
	{
		console.log("clickHead");
		UIManager.openUI(UIConst.UserMenuUI);
		UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
	}
	/**签到 */
	private clickSign()
	{
		console.log("clickSign");
	}
	/**仓库 */
	private clickStore()
	{
		console.log("clickStore");
	}
	/**广播 */
	private clickRadio()
	{
		console.log("clickRadio");
	}
	/**商店 */
	private clickShop()
	{
		console.log("clickShop");
	}
	/**充值 */
	private clickCharge()
	{
	}
	/**排行 */
	private clickRank()
	{
	}
	/**小游戏 */
	private clickGame()
	{
	}
	/**礼物呀 */
	private clickGift()
	{
	}
	/**除草 */
	private clickWeed()
	{
		console.log("clickWeed");
	}
	/**施肥 */
	private clickFertilizer()
	{
	}
	/**浇水 */
	private clickWater()
	{
	}
	/**播种 */
	private clickSeed()
	{
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}