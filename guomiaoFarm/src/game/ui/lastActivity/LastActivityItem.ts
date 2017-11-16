class LastActivityItem extends AItemRenderer{
	public constructor() {
		super();
		this.skinName = "resource/skins/lastActivityItem.exml";
	}
	protected onAdd()
	{
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
		
	}
	protected dataChanged()
	{

	}
	private onTap()
	{
		UIManager.openUI(UIConst.WeekFruitKingUI);
	}
	protected onRemove()
	{
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
	}
}