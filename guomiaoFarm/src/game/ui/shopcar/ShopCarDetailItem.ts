class ShopCarDetailItem extends AItemRenderer{
	private nameTxt: eui.Label;
	private costTxt: eui.Label;
	private numTxt: eui.Label;
	private reduceBtn: eui.Image;
	private addBtn: eui.Image;
	public constructor() {
		super();
		this.skinName = "resource/skins/shopCarDetailItem.exml";
	}

	protected onAdd()
	{
		this.addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addCount, this);
		this.reduceBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reduceCount, this);
	}
	protected dataChanged()
	{
		this.nameTxt.text = this.data.name;
		this.numTxt.text = this.data.count;
		this.costTxt.text = this.data.count * this.data.cost+"";
	}
	private addCount()
	{
		GameModel.getInstance().addShopCarData(this.data.id);
	}
	private reduceCount()
	{ 
		GameModel.getInstance().reduceShopCarData(this.data.id);
	}
	protected onRemove()
	{
		this.addBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.addCount, this);
		this.addBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.reduceCount, this);
	}
}