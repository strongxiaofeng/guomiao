class LastHarvestRankItem extends AItemRenderer{
	private rankIcon: eui.Image;
	private headIcon: eui.Image;
	private nameTxt: eui.Label;
	private moneyTxt: eui.Label;
	private addBtn: eui.Button;
	private detailBtn: eui.Image;
	public constructor() {
		super();
		this.skinName = "resource/skins/lastHarvestItem.exml";
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