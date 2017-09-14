class RuleUI extends BaseUI{
	public constructor() {
		super();
		this.skinName = "resource/skins/rule.exml";
	}
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
		console.log("settinmg"+this.isShow)
	}
	/**初始监听 */
	protected initListener()
	{
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}