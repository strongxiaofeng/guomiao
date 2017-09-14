class SignUI extends BaseUI{
	private btn_close: eui.Image;
	private btn_sign: eui.Image;
	private sign1: eui.Image;
	private sign2: eui.Image;
	private sign3: eui.Image;
	private sign4: eui.Image;
	private sign5: eui.Image;
	private sign6: eui.Image;
	private sign7: eui.Image;
	public constructor() {
		super();
		this.skinName = "resource/skins/sign.exml";
	}
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.btn_close, egret.TouchEvent.TOUCH_TAP, this.clickClose, this);
	}
	/**点击关闭 */
	private clickClose()
	{
		UIManager.closeUI(UIConst.SignUI);
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}