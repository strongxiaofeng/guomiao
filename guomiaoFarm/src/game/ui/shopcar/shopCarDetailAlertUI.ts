class shopCarDetailAlertUI extends BaseUI{
	private sureBtn: eui.Image;
	private cancelBtn: eui.Image;
	public constructor() {
		super();
		this.skinName = "resource/skins/shopCarDetailAlert.exml";
	}
	
	
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.sureBtn, egret.TouchEvent.TOUCH_TAP, this.sure, this);
		this.registerEvent(this.cancelBtn, egret.TouchEvent.TOUCH_TAP, this.dispose, this);
	}
	private sure()
	{
		// GameModel.getInstance().addShopCarData(GameModel.getInstance().curSeedDetailId);
		GameModel.getInstance().clearShopCar();
		this.dispose();
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}