class CoinDetailItem extends eui.ItemRenderer{
	private payType: eui.Label;
	private payNumTxt: eui.Label;
	private dateTxt: eui.Label;
	public constructor() {
		super();
		this.skinName = "resource/skins/coinDetailItem.exml";
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