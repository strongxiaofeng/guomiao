class ShopSeedAlertUI extends BaseUI{
	private seedImg: eui.Image;
	private nameTxt: eui.Label;
	private costTxt: eui.Label;
	private numTxt: eui.Label;
	private sureBtn: eui.Image;
	private closeBtn: eui.Image;
	private addBtn: eui.Button;
	private reduceBtn: eui.Button;
	public constructor() {
		super();
		this.skinName = "resource/skins/shop_seedAlert.exml";
	}
	
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();

		this.numTxt.text = "1";
		this.addBtn.enabled = false;
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.sureBtn, egret.TouchEvent.TOUCH_TAP, this.sure, this);
		this.registerEvent(this.closeBtn, egret.TouchEvent.TOUCH_TAP, this.dispose, this);
	}
	private sure()
	{
		// GameModel.getInstance().addShopCarData(GameModel.getInstance().curSeedDetailId);
		this.dispose();
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}