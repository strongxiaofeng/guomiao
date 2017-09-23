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
		var ac = new eui.ArrayCollection();
		ac.addItem({});
		ac.addItem({});
		ac.addItem({});
		ac.addItem({});
		ac.addItem({});
		this.choosedList.dataProvider = ac;
		this.updateScroller();
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.shopcarImg, egret.TouchEvent.TOUCH_TAP, this.clickCar, this);
		this.registerEvent(this.payBtn, egret.TouchEvent.TOUCH_TAP, this.clickPay, this);
	}
	/**点击购物车 显示购物列表 */
	private clickCar()
	{
		if(!this.headGroup.visible)
		{
			var haveChoosed= true;
			if(haveChoosed)
			{
				this.headGroup.visible = true;
				this.scroller.visible = true;
			}
		}
		else{
			this.headGroup.visible = false;
			this.scroller.visible = false;
		}
		
	}
	/**去结算 */
	private clickPay()
	{
		UIManager.openUI(UIConst.PayUI);
	}
	/**动态刷新位置 如果购物项item满屏 才让滑动*/
	private updateScroller()
	{
		egret.callLater(()=>{
			console.log('this.choosedList.height '+this.choosedList.height+" this.choosedList.height"+this.choosedList.scrollRect.height);
			this.scroller.height = this.choosedList.height< 874 ? this.choosedList.height : 874;
			this.headGroup.bottom = this.scroller.height+this.scroller.bottom;
		},this);
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}