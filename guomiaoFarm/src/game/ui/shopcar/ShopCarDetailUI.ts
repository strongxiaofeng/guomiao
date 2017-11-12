class ShopCarDetailUI extends BaseUI{
	private shopcarImg: eui.Image;
	private shopCountBg: eui.Image;
	private shopCountTxt: eui.Label;
	private payCountTxt: eui.Label;
	private payBtn: eui.Label;
	private headGroup: eui.Group;
	private clearBtn: eui.Image;
	private scroller: eui.Scroller;
	private choosedList: eui.List;

	private ac: eui.ArrayCollection;

	public constructor() {
		super();
		this.skinName = "resource/skins/shopCarDetail.exml";
	}

	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
		this.headGroup.visible = false;
		this.scroller.visible = false;

		this.choosedList.itemRenderer = ShopCarDetailItem;
		this.ac = new eui.ArrayCollection();
		this.choosedList.dataProvider = this.ac;
		this.choosedList.useVirtualLayout = false;
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.shopcarImg, egret.TouchEvent.TOUCH_TAP, this.clickCar, this);
		this.registerEvent(this.payBtn, egret.TouchEvent.TOUCH_TAP, this.clickPay, this);
		this.registerEvent(this.clearBtn, egret.TouchEvent.TOUCH_TAP, this.clickClearCar, this);

		this.addRegister(NotifyConst.Notify_ShopCar, this.updateShopCar, this);
	}
	/**刷新购物车 */
	private updateShopCar()
	{
		let data =  GameModel.getInstance().getShopCarData();
		this.ac.removeAll();
		var count = 0;
		var cost = 0;
		for(var key in data)
		{
			let item = GameModel.getInstance().getItemById(parseInt(key));
			if(item)
			{
				count += data[key];
				cost += item.buy_gold*data[key];
				this.ac.addItem({id: key, name: item.name, cost: item.buy_gold, count: data[key]});
			}
		}
		this.ac.refresh();
		this.updateScroller();
		this.shopCountTxt.text = count+"";
		this.payCountTxt.text = cost+"";
		setTimeout(()=> {
			//果苗币三个字要跟随在后面
			this["payCountTxt0"].x = this.payCountTxt.x + this.payCountTxt.textWidth+"20";
		}, 100);
	
	}
	/**点击购物车 显示购物列表 */
	private clickCar()
	{
		if(!this.headGroup.visible)
		{
			this.headGroup.visible = true;
			this.scroller.visible = true;
			this.updateShopCar();
		}
		else{
			this.headGroup.visible = false;
			this.scroller.visible = false;
		}
		
	}
	/**清空购物车 */
	private clickClearCar()
	{
		GameModel.getInstance().clearShopCar();
	}
	/**去结算 */
	private clickPay()
	{
		UIManager.openUI(UIConst.PayUI);
	}
	/**动态刷新位置 如果购物项item满屏 才让滑动*/
	private updateScroller()
	{
		if(!this.scroller.visible) return;
		egret.callLater(()=>{
			var height = 874;
			if(this.ac.length<=8)
			{
				height = this.ac.length*100;
			}
			this.scroller.height = height< 874 ? height : 874;
			this.headGroup.bottom = this.scroller.height+this.scroller.bottom;
		},this);
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
		this.removeRegister(this);
	}
}