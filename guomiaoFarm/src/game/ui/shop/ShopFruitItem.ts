class ShopFruitItem extends AItemRenderer{
	private contentGroup: eui.Group;
	private emptyGroup: eui.Group;
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
		
		if(!this.data)
		{
			this.contentGroup.visible = false;
			this.emptyGroup.visible = true;
			this.height = this.emptyGroup.height;
		}
		else{
			this.contentGroup.visible = true;
			this.emptyGroup.visible = false;
			this.height = this.contentGroup.height;
			
			var data = <vo.Item_listItem>this.data;
			this.titleTxt.text = data.name;
			this.costTxt.text = data.buy_gold+"";
			var gold = (data.buy_gold ? data.buy_gold : 0);
			this.coseMoneyTxt.text = '(价值'+ gold/100 +'元)';
			// this.icon.source = data.id+"通过id去配置中寻找对应图片";
			var shopCarData = GameModel.getInstance().getShopCarData();
		}
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