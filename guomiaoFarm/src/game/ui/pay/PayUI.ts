class PayUI extends BaseUI{
	private payGroup: eui.Group;
	private scrollerGroup: eui.Group;
	private addressGroup: eui.Group;
	private buyListGroup: eui.Group;
	private payTypeGroup: eui.Group;
	private leaveMsgGroup: eui.Group;

	private payCountTxt: eui.Label;
	private payBtn: eui.Button;
	private buyList:  eui.List;

	public constructor() {
		super();
		this.skinName = "resource/skins/pay.exml";
	}

	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
		var ac = new eui.ArrayCollection();
		ac.addItem({});
		ac.addItem({});
		ac.addItem({});
		ac.addItem({});
		this.buyList.itemRenderer = PayGoodsItem;
		this.buyList.dataProvider = ac;
		this.updateHeight();
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.payBtn, egret.TouchEvent.TOUCH_TAP, this.clickPay, this);
	}
	/**根据购物数量 刷新高度 */
	private updateHeight()
	{
		egret.callLater(()=>{
			this.buyListGroup.height = this.buyList.height + 35;
			this.payTypeGroup.y = this.buyListGroup.y+this.buyListGroup.height+10;
			this.leaveMsgGroup.y = this.payTypeGroup.y+this.payTypeGroup.height+10;
			this.scrollerGroup.height = this.leaveMsgGroup.y+this.leaveMsgGroup.height;
		}, this);
	}
	/**确认付款 */
	private clickPay()
	{
		// GameController.getInstance().sendOrder(2, [{item_id:100001,num:1}], "尽快送达");
		setTimeout(function() {
			GameController.getInstance().sendOrderPay(2);
		}, 1000);
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}