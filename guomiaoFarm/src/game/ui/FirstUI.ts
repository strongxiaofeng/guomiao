class FirstUI extends BaseUI{
	private btn_myFarm: eui.Button;
	private btn_lastActivity: eui.Button;
	private btn_rule: eui.Button;

	public constructor() {
		super();
		this.skinName = "resource/skins/startUI.exml";
	}
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
		console.log("initSetting")
	}
	/**初始监听 */
	protected initListener()
	{
		console.log("注册事件")
		this.registerEvent(this.btn_myFarm, egret.TouchEvent.TOUCH_TAP, this.clickFarm, this);
		this.registerEvent(this.btn_lastActivity, egret.TouchEvent.TOUCH_TAP, this.clickActivity, this);
		this.registerEvent(this.btn_rule, egret.TouchEvent.TOUCH_TAP, this.clickRule, this);
	}
	/**我的农场 */
	private clickFarm()
	{
		UIManager.openUI(UIConst.HomeUI);
	}
	/**往期活动 */
	private clickActivity()
	{
        UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
		UIManager.openUI(UIConst.LastActivityUI);
	}
	/**规则 */
	private clickRule()
	{
		console.log("clickRule")
        UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
		UIManager.openUI(UIConst.RuleUI);
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}