class ShopToolItem extends AItemRenderer{
	private icon: eui.Image;
	private reduceBtn: eui.Image;
	private addBtn: eui.Image;
	private titleTxt: eui.Label;
	private descTxt: eui.Label;
	private costTxt: eui.Label;
	private numTxt: eui.Label;
	public constructor() {
		super();
		this.skinName = "resource/skins/shop_toolItem.exml";
	}

	protected onAdd()
	{
		
	}
	protected dataChanged()
	{

	}
	protected onRemove()
	{
		
	}
}