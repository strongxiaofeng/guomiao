class HonorItem extends AItemRenderer{
	private icon:eui.Image;
	private txt: eui.Label;
	public constructor() {
		super();
		this.skinName = "resource/skins/honorItem.exml";
	}

	protected onAdd()
	{
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
	}
	protected dataChanged()
	{
		var itemdata = <vo.Achievement_listItem>this.data.itemdata;
		var isAchieved = <vo.Achievement_listItem>this.data.isAchieved;
		this.icon.source = isAchieved ? "honor1_png" : "honor4_cannotGet_png";
		this.txt.text = itemdata.name;
	}
	private click()
	{

	}

	protected onRemove()
	{
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
	}
}