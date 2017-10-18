class GiftUI extends BaseUI{
	private btn_close: eui.Image;
	private gift1: eui.Image;
	private gift2: eui.Image;
	private getAble1: eui.Image;
	private getAble2: eui.Image;
	private inviteBtn: eui.Image;
	private list: eui.List;
	public constructor() {
		super();
		this.skinName = "resource/skins/gift.exml";
	}
	
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
		this.list.itemRenderer = GiftItem;
		this.list.useVirtualLayout = false;
		var data = GameModel.getInstance().getGift();
		var ac = new eui.ArrayCollection();
		for(var key in data)
		{
			var item = <vo.Gift_bagItem>data[key];
			ac.addItem(item);			
		}
		this.list.dataProvider = ac;
		
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.btn_close, egret.TouchEvent.TOUCH_TAP, this.clickClose, this);
	}
	private getGift()
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