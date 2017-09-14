class LastHarvestRankUI extends BaseUI{
	private btn_close: eui.Image;
	public constructor() {
		super();
		this.skinName = "resource/skins/lastHarvestRank.exml";
	}
	
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.btn_close, egret.TouchEvent.TOUCH_TAP, this.clickClose, this);
	}
	/**点击关闭按钮 */
	private clickClose()
	{
		UIManager.closeUI(UIConst.LastHarvestRankUI);
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}