class TipGetCoinUI extends BaseUI{
	private tipTxt: eui.Label;
	private tipTxt2: eui.Label;
	public constructor() {
		super();
		this.skinName = "resource/skins/tipGetCoin.exml";
	}

	public initSetting()
	{
		super.initSetting();
	}

	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this, egret.TouchEvent.TOUCH_TAP, this.dispose, this);
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}