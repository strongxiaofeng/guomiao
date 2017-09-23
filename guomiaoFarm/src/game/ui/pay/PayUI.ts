class PayUI extends BaseUI{
	private payGroup: eui.Group;
	private scrollerGroup: eui.Group;
	private addressGroup: eui.Group;
	private buyListGroup: eui.Group;
	private payTypeGroup: eui.Group;
	private leaveMsgGroup: eui.Group;

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
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}