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
	private addressNameTxt: eui.Label;
	private addressNumTxt: eui.Label;
	private addressDetailTxt: eui.Label;
	private moreAddressBtn: eui.Button;
	private leaveMsgInput: eui.EditableText;

	private sendPayData = [];

	public constructor() {
		super();
		this.skinName = "resource/skins/pay.exml";
	}

	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
		//默认地址
		var defaultAddress = GameModel.getInstance().getDefaultAddress();
		if(defaultAddress)
		{
			this.addressNameTxt.text = defaultAddress.realname;
			this.addressNumTxt.text = defaultAddress.phone;
			this.addressDetailTxt.text = defaultAddress.address;
		}
		else{
			this.addressNameTxt.text = "";
			this.addressNumTxt.text = "";
			this.addressDetailTxt.text = "";
		}

		//选中的物品
		var items = GameModel.getInstance().getShopCarData();
		var ac = new eui.ArrayCollection();
		this.sendPayData = [];
		for(var id in items)
		{
			var itemdata = GameModel.getInstance().getItemById(parseInt(id));
			ac.addItem({itemdata:itemdata, count:items[id]});
			this.sendPayData.push({item_id: id, num: items[id]});
		}
		this.buyList.itemRenderer = PayGoodsItem;
		this.buyList.dataProvider = ac;
		this.updateHeight();
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.payBtn, egret.TouchEvent.TOUCH_TAP, this.clickPay, this);
		this.registerEvent(this.moreAddressBtn, egret.TouchEvent.TOUCH_TAP, this.clickMoreAddress, this);

		this.addRegister(NotifyConst.Notify_OrderResult, this.onPay, this);
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
	/**选择默认 地址 */
	private clickMoreAddress()
	{
		UIManager.openUI(UIConst.AddressManageUI, LayerManager.Layer_UI);
	}
	/**提交订单 */
	private clickPay()
	{
		var defaultAddress = GameModel.getInstance().getDefaultAddress();
		var addressid = defaultAddress? defaultAddress.id : 0;
		GameController.getInstance().sendOrder(addressid, this.sendPayData, this.leaveMsgInput.text);

		// setTimeout(function() {
		// 	GameController.getInstance().sendOrderPay(2);
		// }, 1000);
	}
	/**提交订单返回 */
	private onPay(obj: BaseResponse)
	{
		if(obj.status>0)
		{
			//提交订单失败
		}
		else{
			//提交订单成功 到我的订单
			GameModel.getInstance().clearShopCar();
			UIManager.openUI(UIConst.MyOrderUI);
		}
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
		this.removeRegister(this);
	}
}