class ContriButeDetailItem extends AItemRenderer{
	private addAttriTxt: eui.Label;
	private dateTxt: eui.Label;
	public constructor() {
		super();
		this.skinName = "resource/skins/contributeDetailItem.exml";
	}
	protected onAdd()
	{
		
	}
	protected dataChanged()
	{
		/**{num:2000, date:"2017-09-30"} */
		this.addAttriTxt.text = this.data.num+"";
		this.dateTxt.text = this.data.date+"";
	}
	protected onRemove()
	{
		
	}
}