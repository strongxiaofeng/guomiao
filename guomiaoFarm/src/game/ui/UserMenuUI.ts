class UserMenuUI extends BaseUI{
	private attributeTxt: eui.Label;
	private attributeTxtBg: eui.Image;
	private coinTxt: eui.Label;
	private coinTxtBg: eui.Image;
	public constructor() {
		super();
		this.skinName = "resource/skins/userMenu.exml";
	}

	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
	}
	/**初始监听 */
	protected initListener()
	{
		console.log("initListener");
		this.registerEvent(this.attributeTxt, egret.TouchEvent.TOUCH_TAP, this.goContributeDetail, this);
		this.registerEvent(this.attributeTxtBg, egret.TouchEvent.TOUCH_TAP, this.goContributeDetail, this);
		this.registerEvent(this.coinTxt, egret.TouchEvent.TOUCH_TAP, this.goCoinDetail, this);
		this.registerEvent(this.coinTxtBg, egret.TouchEvent.TOUCH_TAP, this.goCoinDetail, this);
	}
	private goContributeDetail()
	{
		console.log("goigog");
		UIManager.openUI(UIConst.ContributeDetailUI);
	}
	private goCoinDetail()
	{
		UIManager.openUI(UIConst.CoinDetailUI);
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}