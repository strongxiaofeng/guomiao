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

		var data = <vo.Item_listItem>this.data; 
		var shopCarData = GameModel.getInstance().getShopCarData();
		if(data)
		{
			this.updateShopCarData(shopCarData);
		}
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
			this.costTxt.text = (data.sell_gold ? data.sell_gold : 0)+"果喵币";
			// this.icon.source = data.id+"通过id去配置中寻找对应图片";
			var shopCarData = GameModel.getInstance().getShopCarData();
			this.updateShopCarData(shopCarData);
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
	/**当购物车数据发生变化 */
	public updateShopCarData(shopcarData:any)
	{
		var data = <vo.Item_listItem>this.data;
		if(!data) return;//更多工具页 没有数据

		var count = 0;
		if(shopcarData[data.id]) count = shopcarData[data.id];

		if(count)
		{
			this.numTxt.text = count+"";
			this.numTxt.visible = true;
			this.reduceBtn.visible = true;  
		}
		else{
			this.numTxt.text = "0";
			this.numTxt.visible = false;
			this.reduceBtn.visible = false;  
		}
	}
	protected onRemove()
	{
		this.addBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.addToShopCar, this);
		this.reduceBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.removeFromShopCar, this);
	}
}