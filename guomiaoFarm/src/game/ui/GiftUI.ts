class GiftUI extends BaseUI{
	private btn_close: eui.Image;
	public constructor() {
		super();
		this.skinName = "resource/skins/gift.exml";
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
	/**点击关闭按钮 */
	private clickClose()
	{
		UIManager.closeUI(UIConst.GiftUI);
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}