class MyOrderUI extends BaseUI{
	private list: eui.List;
	private ac: eui.ArrayCollection;
	private tabImg0: eui.Image;
	private tabImg1: eui.Image;
	private tabImg2: eui.Image;
	/**当前选择是哪个标签 */
	private curChoose: number = 0;
	public constructor() {
		super();
		this.skinName = "resource/skins/myOrder.exml";
	}
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
		this.choose0();
		// GameController.getInstance().sendSureReceive(2);
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.tabImg0, egret.TouchEvent.TOUCH_TAP, this.choose0, this);
		this.registerEvent(this.tabImg1, egret.TouchEvent.TOUCH_TAP, this.choose1, this);
		this.registerEvent(this.tabImg2, egret.TouchEvent.TOUCH_TAP, this.choose2, this);

		this.addRegister(NotifyConst.Notify_OrderList, this.onOrderList, this);
		this.addRegister(NotifyConst.Notify_OrderPayResult, this.onPay, this);
		this.addRegister(NotifyConst.Notify_SureReceiveResult, this.onSure, this);
		this.addRegister(NotifyConst.Notify_DeleteReceivedOrderResult, this.onDelete, this);
	}
	/**选择 待付款 */
	private choose0()
	{
		this.curChoose = 0;
		this.tabImg0.source = "rank_tab_select_png";
		this.tabImg1.source = "rank_tab_noselect_png";
		this.tabImg2.source = "rank_tab_noselect_png";
		GameController.getInstance().getOrderList(this.curChoose, 0, 10);
	}
	/**选择 待收货 */
	private choose1()
	{
		this.curChoose = 1;
		this.tabImg0.source = "rank_tab_noselect_png";
		this.tabImg1.source = "rank_tab_select_png";
		this.tabImg2.source = "rank_tab_noselect_png";
		GameController.getInstance().getOrderList(this.curChoose, 0, 10);
	}
	/**选择 已收货 */
	private choose2()
	{
		this.curChoose = 2;
		this.tabImg0.source = "rank_tab_noselect_png";
		this.tabImg1.source = "rank_tab_noselect_png";
		this.tabImg2.source = "rank_tab_select_png";
		GameController.getInstance().getOrderList(this.curChoose, 0, 10);
	}
	/**收到订单列表返回 */
	private onOrderList(data:vo.OrderInfo)
	{
		console.log("订单信息 ",data);
		this.ac = new eui.ArrayCollection();
		this.list.itemRenderer = MyOrderListItem;
		this.list.useVirtualLayout = false;
		if(data && data.list && data.list.length > 0)
		{
			let list = data.list;
			for(var i=0;i<list.length; i++)
			{
				this.ac.addItem({itemData: list[i], status:list[i].status});
			}
		}
		this.list.dataProvider = this.ac;
	}
	/**支付返回 */
	private onPay()
	{
		this.choose0();
	}
	/**确认收货返回 */
	private onSure()
	{
		this.choose1();
	}
	/**删除订单返回 */
	private onDelete()
	{
		this.choose2();
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
		this.removeRegister(this);
	}
}