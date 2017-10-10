class UserMenuUI extends BaseUI{
	private nameTxt: eui.Label;
	private LevelTxtImg: eui.Image;
	private gameIdTxt: eui.Label;
	private attributeTxt: eui.Label;
	private attributeTxtBg: eui.Image;
	private contri_number: eui.Label;
	private coin_number: eui.Label;
	private coinTxt: eui.Label;
	private coinTxtBg: eui.Image;
	private btn_charge: eui.Image;

	private btn_shop: eui.Image;
	private btn_address: eui.Image;
	private btn_order: eui.Image;
	private btn_store: eui.Image;
	private btn_rank: eui.Image;
	private btn_coinCharge: eui.Image;
	private btn_honor: eui.Image;
	private btn_radio: eui.Image;
	private btn_set: eui.Image;

	public constructor() {
		super();
		this.skinName = "resource/skins/userMenu.exml";
	}

	/**初始界面 */
	public initSetting()
	{
		super.initSetting();

		this.initUserData();
	}
	/**初始监听 */
	protected initListener()
	{
		console.log("initListener");
		this.registerEvent(this.attributeTxt, egret.TouchEvent.TOUCH_TAP, this.goContributeDetail, this);
		this.registerEvent(this.attributeTxtBg, egret.TouchEvent.TOUCH_TAP, this.goContributeDetail, this);
		this.registerEvent(this.coinTxt, egret.TouchEvent.TOUCH_TAP, this.goCoinDetail, this);
		this.registerEvent(this.coinTxtBg, egret.TouchEvent.TOUCH_TAP, this.goCoinDetail, this);
		this.registerEvent(this.btn_charge, egret.TouchEvent.TOUCH_TAP, this.goCharge, this);

		this.registerEvent(this.btn_shop, egret.TouchEvent.TOUCH_TAP, this.goShop, this);
		this.registerEvent(this.btn_address, egret.TouchEvent.TOUCH_TAP, this.goAddress, this);
		this.registerEvent(this.btn_order, egret.TouchEvent.TOUCH_TAP, this.goOrder, this);
		this.registerEvent(this.btn_store, egret.TouchEvent.TOUCH_TAP, this.goStore, this);
		this.registerEvent(this.btn_rank, egret.TouchEvent.TOUCH_TAP, this.goRank, this);
		this.registerEvent(this.btn_coinCharge, egret.TouchEvent.TOUCH_TAP, this.goCharge, this);
		this.registerEvent(this.btn_honor, egret.TouchEvent.TOUCH_TAP, this.goHonor, this);
		this.registerEvent(this.btn_radio, egret.TouchEvent.TOUCH_TAP, this.goRadio, this);
		this.registerEvent(this.btn_set, egret.TouchEvent.TOUCH_TAP, this.goSet, this);
	}
	private initUserData()
	{
		this.nameTxt.text = GameModel.getInstance().getNickname();
		this.LevelTxtImg.source = "num"+GameModel.getInstance().getLevel()+"_png";
		this.gameIdTxt.text = "游戏ID： "+GameModel.getInstance().getId();
		this.contri_number.text = GameModel.getInstance().getContribute()+"/"+GameModel.getInstance().getTotalContribute();
		this.coin_number.text = GameModel.getInstance().getGold()+"";
	}


	/**贡献明细 */
	private goContributeDetail()
	{
		console.log("goigog");
		UIManager.openUI(UIConst.ContributeDetailUI);
	}
	/**果喵币明细 */
	private goCoinDetail()
	{
		UIManager.openUI(UIConst.CoinDetailUI);
	}
	/**商店 */
	private goShop()
	{
		UIManager.openUI(UIConst.ShopUI);
	}
	/**地址管理 */
	private goAddress()
	{
		UIManager.openUI(UIConst.AddressManageUI);
	}
	/**订单 */
	private goOrder()
	{
		UIManager.openUI(UIConst.MyOrderUI);
	}
	/**仓库 */
	private goStore()
	{
		UIManager.openUI(UIConst.StoreUI, LayerManager.Layer_Tip);
	}
	/**排行 */
	private goRank()
	{
		UIManager.openUI(UIConst.RankFriendContributeUI);
	}
	/**充值 */
	private goCharge()
	{
		UIManager.openUI(UIConst.ChargeUI);
	}
	/**勋章墙 */
	private goHonor()
	{
		UIManager.openUI(UIConst.HonorWallUI);
	}
	/**广播 */
	private goRadio()
	{
		UIManager.openUI(UIConst.RadioUI);
	}
	/**设置 */
	private goSet()
	{
		UIManager.openUI(UIConst.SetUI);
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}