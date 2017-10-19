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
		this.touchEnabled = false;
		this.touchChildren = true;
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
		//返回欢迎页
		if(UIManager.isUIOpen(UIConst.RuleUI) || UIManager.isUIOpen(UIConst.LastActivityUI))
		{
			UIManager.closeUI(UIConst.TopBarUI);
			UIManager.openUI(UIConst.WelcomeUI);
		}
		//返回排行榜
		if(UIManager.isUIOpen(UIConst.OtherUserDetailUI) || UIManager.isUIOpen(UIConst.OtherLandUI))
		{
			UIManager.openUI(UIConst.RankFriendContributeUI);
		}
		//返回商铺
		else if(UIManager.isUIOpen(UIConst.PayUI))
		{
			UIManager.openUI(UIConst.ShopUI);
		}
		//返回个人中心
		else if(UIManager.isUIOpen(UIConst.ContributeDetailUI) || UIManager.isUIOpen(UIConst.CoinDetailUI) 
		|| UIManager.isUIOpen(UIConst.AddressManageUI) || UIManager.isUIOpen(UIConst.HonorWallUI)
		|| UIManager.isUIOpen(UIConst.MyOrderUI) || UIManager.isUIOpen(UIConst.SetUI)
		|| UIManager.isUIOpen(UIConst.HonorDetailUI))
		{
			UIManager.openUI(UIConst.UserMenuUI);
		}
		//返回地址管理
		else if(UIManager.isUIOpen(UIConst.AddAddressUI))
		{
			UIManager.openUI(UIConst.AddressManageUI);
		}
		//返回农场主页
		else if(UIManager.isUIOpen(UIConst.UserMenuUI) || UIManager.isUIOpen(UIConst.RadioUI) 
		|| UIManager.isUIOpen(UIConst.ShopUI) || UIManager.isUIOpen(UIConst.ChargeUI) || UIManager.isUIOpen(UIConst.RankFriendContributeUI)
		|| UIManager.isUIOpen(UIConst.RankAllCoinUI) || UIManager.isUIOpen(UIConst.RankAllContributeUI)
		|| UIManager.isUIOpen(UIConst.RankFriendCoinUI) || UIManager.isUIOpen(UIConst.RankFriendContributeUI)) 
		{
			UIManager.closeUI(UIConst.TopBarUI);
			UIManager.openUI(UIConst.HomeUI);
		}
	}
	/**返回主界面 */
	private clickHome()
	{
		UIManager.closeUI(UIConst.TopBarUI);

		if(UIManager.isUIOpen(UIConst.RuleUI))
		{
			UIManager.openUI(UIConst.WelcomeUI);
		}
		else if(UIManager.isUIOpen(UIConst.LastActivityUI))
		{
			UIManager.openUI(UIConst.HomeUI);
		}
		else
		{
			UIManager.openUI(UIConst.HomeUI);
		}
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}