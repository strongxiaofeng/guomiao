class AItemRenderer extends eui.ItemRenderer{
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdd, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
	}
	protected onAdd()
	{
		
	}
	protected onRemove()
	{
		
	}
}