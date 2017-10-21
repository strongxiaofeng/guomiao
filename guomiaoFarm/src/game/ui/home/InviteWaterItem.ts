class InviteWaterItem extends AItemRenderer{
	private icon: eui.Image;
	private inviteBtn: eui.Image;
	public constructor() {
		super();
		this.skinName = "resource/skins/inviteWaterItem.exml";
	}
	protected onAdd()
	{
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickInvite, this);
	}
	protected dataChanged()
	{

	}
	private clickInvite()
	{
		UIManager.closeUI(UIConst.InviteWaterUI);
		UIManager.openUI(UIConst.InviteDetailUI);
	}
	protected onRemove()
	{
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickInvite, this);
	}
}