class MyOrderListItem extends AItemRenderer{
	private rect: eui.Rect;
	private oneOrderList: eui.List;
	private bottomGroup: eui.Group;
	private timeTxt: eui.Label;
	private totalCountTxt: eui.Label;
	private totalCostTxt: eui.Label;
	private totalCostTipTxt: eui.Label;
	/**去支付 */
	private payBtn: eui.Button;
	/**查看物流 */
	private lookBtn: eui.Button;
	/**确认收货 */
	private sureBtn: eui.Button;
	/**删除订单 */
	private deleteOrderBtn: eui.Button;
	public constructor() {
		super();
		this.skinName = "resource/skins/myOrderItem.exml";
	}
	
	protected onAdd()
	{
		this.payBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.pay, this);
		this.lookBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.look, this);
		this.sureBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sure, this);
		this.deleteOrderBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.delete, this);
	}
	protected dataChanged()
	{
		var data = <vo.OrderItem>this.data.itemData;
		var status = this.data.status;
		var time = new Date();
		time.setMilliseconds(data.created_at);


		this.timeTxt.text = time.getFullYear()+"-"+time.getMonth()+"-"+ time.getDate();
		this.totalCountTxt.text = "共"+data.list.length+"件商品";
		this.totalCostTxt.text = "￥"+data.price;
		//待付款
		if(status == 0)
		{
			this.timeTxt.visible = false;
			this.payBtn.visible = true;
			this.lookBtn.visible = false;
			this.sureBtn.visible = false;
			this.deleteOrderBtn.visible = false;
			this.totalCostTipTxt.text = "需付款:";
		}
		//待收货
		if(status == 1)
		{
			this.timeTxt.visible = false;
			this.payBtn.visible = false;
			this.lookBtn.visible = true;
			this.sureBtn.visible = true;
			this.deleteOrderBtn.visible = false;;
			this.totalCostTipTxt.text = "需付款:";
		}

		//已收货
		if(status == 2)
		{
			this.timeTxt.visible = true;
			this.payBtn.visible = false;
			this.lookBtn.visible = false;
			this.sureBtn.visible = false;
			this.deleteOrderBtn.visible = true;;
			this.totalCostTipTxt.text = "共计:";
		}

		// 刷新item数据显示
		var ac = new eui.ArrayCollection();
		var list = data.list;
		for(var i=0; i<list.length; i++)
		{
			ac.addItem(list[i]);
		}
		this.oneOrderList.itemRenderer = MyOrderListOneItem;
		this.oneOrderList.useVirtualLayout = false;
		this.oneOrderList.dataProvider = ac;
		egret.callLater(()=>{
			this.bottomGroup.y = this.oneOrderList.y + this.oneOrderList.height;
			this.rect.height = this.bottomGroup.y + this.bottomGroup.height;
			this.height = this.rect.height+10;
		}, this)
	} 

	/**支付 */
	private pay()
	{
		var data = <vo.OrderItem>this.data.itemData;
		GameController.getInstance().sendOrderPay(data.id);
	}
	/**查看物流 */
	private look()
	{

	}
	/**确认收货 */
	private sure()
	{
		var data = <vo.OrderItem>this.data.itemData;
		GameController.getInstance().sendSureReceive(data.id);
	}
	/**删除订单 */
	private delete()
	{
		var data = <vo.OrderItem>this.data.itemData;
		GameController.getInstance().sendDeleteReceivedOrder(data.id);
	} 
	protected onRemove()
	{
		this.payBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.pay, this);
		this.lookBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.look, this);
		this.sureBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.sure, this);
		this.deleteOrderBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.delete, this);
	}
}