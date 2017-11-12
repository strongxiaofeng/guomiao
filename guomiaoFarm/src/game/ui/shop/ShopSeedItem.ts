class ShopSeedItem extends AItemRenderer{
	private icon: eui.Image;
	private addBtn: eui.Button;
	private titleTxt: eui.Label;
	private descTxt: eui.Label;
	private costTxt: eui.Label;
	public constructor() {
		super();
		this.skinName = "resource/skins/shop_seedItem.exml";
	}

	protected onAdd()
	{
		this.addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
	}
	protected dataChanged()
	{
		var data = <vo.Item_listItem>this.data;
		this.titleTxt.text = data.name;
		this.descTxt.text = data.desc;
		this.costTxt.text = (data.sell_gold ? data.buy_gold : 0)+"果喵币";
		// this.icon.source = data.id+"通过id去配置中寻找对应图片";
		var shopCarData = GameModel.getInstance().getShopCarData();
		this.updateShopCarData(shopCarData);
	}
	private onClick(e: egret.TouchEvent)
	{
		if(e.target == this.addBtn)
		{
			this.addToShopCar();
		}
		else{
			this.showSeedDetail();
		}
	}
	private showSeedDetail()
	{
		var data = <vo.Item_listItem>this.data;
		GameModel.getInstance().curSeedDetailId = data.id;
		UIManager.openUI(UIConst.ShopSeedAlertUI, LayerManager.Layer_Tip);
	}
	private addToShopCar()
	{
		var data = <vo.Item_listItem>this.data;
		GameModel.getInstance().addShopCarData(data.id);
	}
	private removeFromShopCar()
	{
		var data = <vo.Item_listItem>this.data; 
		GameModel.getInstance().reduceShopCarData(data.id);
	}
	/**当购物车数据发生变化 */
	public updateShopCarData(shopcarData:any)
	{
		var data = <vo.Item_listItem>this.data;
		if(shopcarData[data.id] > 0)
		{
			this.addBtn.enabled = false;
		}
		else
		{
			this.addBtn.enabled = true;
		}
	}
	protected onRemove()
	{
		this.addBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.addToShopCar, this);
	}
}