class ShopSeedAlertUI extends BaseUI{
	private seedImg: eui.Image;
	private nameTxt: eui.Label;
	private costTxt: eui.Label;
	private descTxt: eui.Label;
	private addBtn: eui.Image;
	private closeBtn: eui.Image;
	public constructor() {
		super();
		this.skinName = "resource/skins/shop_seedAlert.exml";
	}
	
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.addBtn, egret.TouchEvent.TOUCH_TAP, this.add, this);
		this.registerEvent(this.closeBtn, egret.TouchEvent.TOUCH_TAP, this.dispose, this);
	}
	private add()
	{
		GameModel.getInstance().addShopCarData(GameModel.getInstance().curSeedDetailId);
		this.dispose();
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}