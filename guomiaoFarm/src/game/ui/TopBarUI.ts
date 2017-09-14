class TopBarUI extends BaseUI{
	private leftBtn: eui.Button;
	private homeBtn: eui.Button;
	public constructor() {
		super();
		this.skinName = "resource/skins/topbar.exml";
	}
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.leftBtn, egret.TouchEvent.TOUCH_TAP, this.clickLeft, this);
		this.registerEvent(this.homeBtn, egret.TouchEvent.TOUCH_TAP, this.clickHome, this);
	}
	/**返回上一个界面 */
	private clickLeft()
	{
		console.log("clickLeft");
		if(UIManager.isUIOpen(UIConst.RuleUI))
		{
			UIManager.closeUI(UIConst.TopBarUI);
			UIManager.openUI(UIConst.FirstUI);
		}
	}
	/**返回主界面 */
	private clickHome()
	{
		console.log("clickHome");
		if(UIManager.isUIOpen(UIConst.RuleUI))
		{
			UIManager.closeUI(UIConst.TopBarUI);
			UIManager.openUI(UIConst.FirstUI);
		}
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}