class GiftUI extends BaseUI{
	private btn_close: eui.Image;
	private gift1: eui.Image;
	private gift2: eui.Image;
	private getAble1: eui.Image;
	private getAble2: eui.Image;
	private inviteBtn: eui.Image;
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
		this.registerEvent(this.gift1, egret.TouchEvent.TOUCH_TAP, this.getGift1, this);
		this.registerEvent(this.gift2, egret.TouchEvent.TOUCH_TAP, this.getGift2, this);
	}
	private getGift1()
	{
		UIManager.openUI(UIConst.TipGetCoinUI, LayerManager.Layer_Tip);
	}
	private getGift2()
	{
		UIManager.openUI(UIConst.TipGetCoinUI, LayerManager.Layer_Tip);
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