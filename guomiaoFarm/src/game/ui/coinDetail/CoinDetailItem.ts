
class CoinDetailItem extends AItemRenderer{
	private payType: eui.Label;
	private payNumTxt: eui.Label;
	private dateTxt: eui.Label;
	public constructor() {
		super();
		this.skinName = "resource/skins/coinDetailItem.exml";
	}

	protected onAdd()
	{
		
	}
	protected dataChanged()
	{
		/**{type:"充值",num:2000, date:"2017-09-30"} */
		this.payType.text = this.data.type;
		this.payNumTxt.text = this.data.num;
		this.dateTxt.text = this.data.date;
	}
	protected onRemove()
	{
		
	}
}
