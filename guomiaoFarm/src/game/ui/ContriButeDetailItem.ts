class ContriButeDetailItem extends eui.ItemRenderer{
	private addAttriTxt: eui.Label;
	private dateTxt: eui.Label;
	public constructor() {
		super();
		this.skinName = "resource/skins/contributeDetailItem.exml";
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdd, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
	}

	private onAdd()
	{
		
	}
	protected dataChanged()
	{

	}
	private onRemove()
	{
		
	}
}