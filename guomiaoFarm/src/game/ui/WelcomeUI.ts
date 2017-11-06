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
		GameController.getInstance().getUserInfo(window["params"]); 
		GameController.getInstance().getServerConfig();

		this.load();
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.btn_myFarm, egret.TouchEvent.TOUCH_TAP, this.clickFarm, this);
		this.registerEvent(this.btn_lastActivity, egret.TouchEvent.TOUCH_TAP, this.clickActivity, this);
		this.registerEvent(this.btn_rule, egret.TouchEvent.TOUCH_TAP, this.clickRule, this);

		this.addRegister(NotifyConst.Notify_UserInfo, this.onUserInfo, this);
	}

	private load()
	{
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
	}
	private onResourceLoadComplete(event: RES.ResourceEvent): void {
		if (event.groupName == "preload") {
			RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
			RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
			this.btns.visible = true;
			this.loadGroup.visible = false;
		}
	}
	private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
			this.rect.width = Math.ceil(240*event.itemsLoaded/event.itemsTotal);
			this.progressTxt.text = "果喵正在加载中。。"+Math.ceil((event.itemsLoaded/event.itemsTotal)*100)+"%";
        }
    }
	private onUserInfo(info: vo.UserInfo)
	{
		console.log('收到了用户信息 ',info);
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