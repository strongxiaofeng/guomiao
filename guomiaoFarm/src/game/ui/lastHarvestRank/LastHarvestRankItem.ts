class LastHarvestRankItem extends AItemRenderer{
	private bg: eui.Image;
	private rankIcon: eui.Image;
	private headIcon: eui.Image;
	private nameTxt: eui.Label;
	private moneyTxt: eui.Label;
	private otherRankNumTxt: eui.Label;
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
		
		var itemData = <vo.YesterdayHarvestRankItem>this.data.data;
		if(this.data.isSelf)
		{
			this.addBtn.visible = false;
			this.detailBtn.visible = true;
			this.bg.source = "myCoinRankBg_png";
		}
		else
		{
			this.addBtn.visible = true;
			this.detailBtn.visible = false;
			this.bg.source = "chargeChoiceBg_png";
		}
		this.nameTxt.text = itemData.nickname;
		this.moneyTxt.text = itemData.last_gold+"";
		this.headIcon.source = itemData.avatar+"";

		if(itemData.index<=3) {
			this.rankIcon.source = "rank"+itemData.index+"_png";
			this.otherRankNumTxt.text = "";
		}
		else{
			this.rankIcon.source = 'rankbg_png';
			this.otherRankNumTxt.text = itemData.index+"";
		}
	}
	protected onRemove()
	{
		
	}
}