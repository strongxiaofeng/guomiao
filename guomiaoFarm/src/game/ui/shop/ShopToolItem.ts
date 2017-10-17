class ShopToolItem extends AItemRenderer{
	private icon: eui.Image;
	private reduceBtn: eui.Image;
	private addBtn: eui.Image;
	private titleTxt: eui.Label;
	private descTxt: eui.Label;
	private costTxt: eui.Label;
	private numTxt: eui.Label;
	private moreToolTip: eui.Image;
	public constructor() {
		super();
		this.skinName = "resource/skins/shop_toolItem.exml";
	}

	protected onAdd()
	{
		this.addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addToShopCar, this);
		this.reduceBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.removeFromShopCar, this);
	}
	protected dataChanged()
	{
		var data = <vo.Item_listItem>this.data;
		if(!data)
		{
			this.moreToolTip.visible = true;
		}
		else{
			this.moreToolTip.visible = false;
			this.titleTxt.text = data.name;
			this.descTxt.text = data.desc;
			this.costTxt.text = data.sell_gold+"果喵币";
			// this.icon.source = data.id+"通过id去配置中寻找对应图片";
		}
	}

	private addToShopCar()
	{
		var data = <vo.Item_listItem>this.data;
		GameModel.getInstance().addShopCarData(data.id);
		this.reduceBtn.visible = true;
		this.numTxt.visible = true;
		var shopcardata = GameModel.getInstance().getShopCarData();
		this.numTxt.text = shopcardata[data.id];
	}
	private removeFromShopCar()
	{
		var data = <vo.Item_listItem>this.data; 
		GameModel.getInstance().reduceShopCarData(data.id);
		var shopcardata = GameModel.getInstance().getShopCarData();
		if(!shopcardata[data.id])
		{
			this.reduceBtn.visible = false;  
			this.numTxt.visible = false;
		}
		else{
			this.numTxt.text = shopcardata[data.id];
		}
	}
	protected onRemove()
	{
		this.addBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.addToShopCar, this);
		this.reduceBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.removeFromShopCar, this);
	}
}