class WelcomeUI extends BaseUI{
	private btns:eui.Group;
	private loadGroup:eui.Group;
	private progressTxt: eui.Label;
	private rect: eui.Rect;
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
		UIManager.openUI(UIConst.TipErrorUI, LayerManager.Layer_Sys);
		UIManager.openUI(UIConst.TipGreenUI, LayerManager.Layer_Sys);
		MusicManager.playMusic();
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.btn_myFarm, egret.TouchEvent.TOUCH_TAP, this.clickFarm, this);
		this.registerEvent(this.btn_lastActivity, egret.TouchEvent.TOUCH_TAP, this.clickActivity, this);
		this.registerEvent(this.btn_rule, egret.TouchEvent.TOUCH_TAP, this.clickRule, this);
	}
	/**我的农场 */
	private clickFarm()
	{
		// if(GameModel.getInstance().getToken())
		// {
			UIManager.openUI(UIConst.HomeUI);
		// }
		// else{
		// 	NotifyManager.getInstance().sendNotify(NotifyConst.Notify_Error, "获取用户信息失败");
		// }
	}
	/**往期活动 */
	private clickActivity()
	{
		// if(GameModel.getInstance().getToken())
		// {
			UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
			UIManager.openUI(UIConst.LastActivityUI);
		// }
		// else{
		// 	NotifyManager.getInstance().sendNotify(NotifyConst.Notify_Error, "获取用户信息失败");
		// }
	}
	/**规则 */
	private clickRule()
	{
        UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
		UIManager.openUI(UIConst.RuleUI);
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
		this.removeRegister(this);
	}
}