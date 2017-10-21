class GiftUI extends BaseUI{
	private btn_close: eui.Image;
	private gift1: eui.Image;
	private gift2: eui.Image;
	private getAble1: eui.Image;
	private getAble2: eui.Image;
	private inviteBtn: eui.Image;
	private list: eui.List;
	private scroller: eui.Scroller;
	private leftBtn: eui.Button;
	private rightBtn: eui.Button;
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
		this.registerEvent(this.leftBtn, egret.TouchEvent.TOUCH_TAP, this.clickleft, this);
		this.registerEvent(this.rightBtn, egret.TouchEvent.TOUCH_TAP, this.clickRight, this);
		this.registerEvent(this.inviteBtn, egret.TouchEvent.TOUCH_TAP, this.invite, this);
	}
	private invite()
	{
		UIManager.openUI(UIConst.RankFriendContributeUI);
		UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
		this.dispose();
	}
	private getGift()
	{
		UIManager.openUI(UIConst.TipGetCoinUI, LayerManager.Layer_Tip);
	}
	private clickleft()
	{
		if(this.scroller.viewport.scrollH-100>=0) this.scroller.viewport.scrollH -=100;
	}
	private clickRight()
	{
		if(this.scroller.viewport.scrollH+100 < this.scroller.viewport.contentWidth-502) {
			this.scroller.viewport.scrollH +=100;
		}
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