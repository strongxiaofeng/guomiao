class PayGoodsItem extends AItemRenderer{
	private icon: eui.Image;
	private titleTxt: eui.Label;
	private descTxt: eui.Label;
	private costTxt: eui.Label;
	private costTypeTxt: eui.Label;
	private countTxt: eui.Label;
	public constructor() {
		super();
		this.skinName = "resource/skins/payGoodsItem.exml";
	}

	protected onAdd()
	{
		
	}
	protected dataChanged()
	{
		var itemdata:vo.Item_listItem = this.data.itemdata;
		if(itemdata)
		{
			var count = this.data.count;
			// this.icon.source = itemdata.id;
			this.titleTxt.text = itemdata.name;
			this.descTxt.text = itemdata.desc;
			this.costTxt.text = itemdata.sell_gold+"";
			this.countTxt.text = "X"+count;
		}
	}
	protected onRemove()
	{
		
	}
}