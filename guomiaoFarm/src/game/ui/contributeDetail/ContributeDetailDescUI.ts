class ContributeDetailDescUI extends BaseUI{
	private lvNum: eui.Image;
	private powerTxt: eui.Label;
	private closeBtn: eui.Image;
	public constructor() {
		super();
		this.skinName = "resource/skins/contributeDetailDesc.exml";
	}
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
	}

	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.closeBtn, egret.TouchEvent.TOUCH_TAP, this.close, this);
	}
	/**贡献度明细说明 */
	private close()
	{
		UIManager.closeUI(UIConst.ContributeDetailDescUI);
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}