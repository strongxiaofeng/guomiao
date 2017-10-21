class InviteDetailUI extends BaseUI{
	private leftBtn: eui.Button;
	public constructor() {
		super();
		this.skinName = "resource/skins/inviteWaterDetail.exml";
	}
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.leftBtn, egret.TouchEvent.TOUCH_TAP, this.onclose, this);
		
	}
	private onclose()
	{
		UIManager.openUI(UIConst.HomeUI);
		this.dispose();
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}

}