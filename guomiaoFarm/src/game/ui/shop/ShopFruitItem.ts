class ShopFruitItem extends AItemRenderer{
	private icon: eui.Image;
	private addBtn: eui.Image;
	private titleTxt: eui.Label;
	private costTxt: eui.Label;
	private costTypeTxt: eui.Label;
	private coseMoneyTxt: eui.Label;

	public constructor() {
		super();
		this.skinName = "resource/skins/shop_fruitItem.exml";
	}

	protected onAdd()
	{
		this.addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addToShopCar, this);

		var data = <vo.Item_listItem>this.data; 
		var shopCarData = GameModel.getInstance().getShopCarData();
	}
	protected dataChanged()
	{
		var data = <vo.Item_listItem>this.data;
		this.titleTxt.text = data.name;
		this.costTxt.text = data.sell_gold+"";
		var gold = (data.sell_gold ? data.sell_gold : 0);
		this.coseMoneyTxt.text = '(价值'+ gold/100 +'元)';
		// this.icon.source = data.id+"通过id去配置中寻找对应图片";
		var shopCarData = GameModel.getInstance().getShopCarData();
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
	protected onRemove()
	{
		this.addBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.addToShopCar, this);
	}
}