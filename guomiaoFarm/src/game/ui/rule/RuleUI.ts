class RuleUI extends BaseUI{
	private ruleGroup:  eui.Group;
	private descGroup:  eui.Group;
	private leftBtn: eui.Button;
	private rightBtn: eui.Button;

	public constructor() {
		super();
		this.skinName = "resource/skins/rule.exml";
	}
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
		this.clickLeft();
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.leftBtn, egret.TouchEvent.TOUCH_TAP, this.clickLeft, this);
		this.registerEvent(this.rightBtn, egret.TouchEvent.TOUCH_TAP, this.clickRight, this);
	}
	private clickLeft()
	{
		this.ruleGroup.visible = true;
		this.descGroup.visible = false;
		this.leftBtn.enabled = false;
		this.rightBtn.enabled = true;
	}
	private clickRight()
	{
		this.ruleGroup.visible = false;
		this.descGroup.visible = true;
		this.leftBtn.enabled = true;
		this.rightBtn.enabled = false;
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}