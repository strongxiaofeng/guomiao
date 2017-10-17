class ShopFruitItem extends AItemRenderer{
	private icon: eui.Image;
	private reduceBtn: eui.Image;
	private addBtn: eui.Image;
	private titleTxt: eui.Label;
	private costTxt: eui.Label;
	private costTypeTxt: eui.Label;
	private coseMoneyTxt: eui.Label;
	private numTxt: eui.Label;

	public constructor() {
		super();
		this.skinName = "resource/skins/shop_fruitItem.exml";
	}

	protected onAdd()
	{
		this.addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addToShopCar, this);
		this.reduceBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.removeFromShopCar, this);
	}
	protected dataChanged()
	{
		var data = <vo.Item_listItem>this.data;
		this.titleTxt.text = data.name;
		this.costTxt.text = data.sell_gold+"";
		this.coseMoneyTxt.text = '(价值'+ data.sell_gold/100 +'元)'
		// this.icon.source = data.id+"通过id去配置中寻找对应图片";
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