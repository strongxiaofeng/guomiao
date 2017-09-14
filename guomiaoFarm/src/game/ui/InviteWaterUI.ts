class InviteWaterUI extends BaseUI{
	private btn_close: eui.Image;
	public constructor() {
		super();
		this.skinName = "resource/skins/inviteWater.exml";
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
	/**点击关闭 */
	private clickClose()
	{
		UIManager.closeUI(UIConst.InviteWaterUI);
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}