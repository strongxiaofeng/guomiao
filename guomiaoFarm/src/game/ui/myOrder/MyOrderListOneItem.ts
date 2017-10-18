class MyOrderListOneItem extends AItemRenderer{
	private icon: eui.Image;
	private nameTxt: eui.Label;
	private costTxt: eui.Label;
	private countTxt: eui.Label;
	public constructor() {
		super();
		this.skinName = "resource/skins/myOrderOneItem.exml";
	}
	protected onAdd()
	{
	}
	protected dataChanged()
	{
		var data = <vo.OrderOneItem>this.data;
		this.nameTxt.text = data.name;
		this.costTxt.text = data.gold+"";
		this.countTxt.text = data.num+"";
	}
	protected onRemove()
	{
	}

}