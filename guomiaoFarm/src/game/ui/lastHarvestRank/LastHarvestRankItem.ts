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
		this.detailBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goDetail, this);
		this.addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addFriend, this);
	}
	private goDetail()
	{
		UIManager.openUI(UIConst.ContributeDetailUI);
		UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
		UIManager.closeUI(UIConst.LastHarvestRankUI);
	}
	private addFriend()
	{
		var itemData = <vo.YesterdayHarvestRankItem>this.data.data;
		GameController.getInstance().addFriend(itemData.user_id);
		UIManager.openUI(UIConst.TipAddFriendUI, LayerManager.Layer_Tip);
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
		// this.headIcon.source = itemData.avatar+"";

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
		this.detailBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.goDetail, this);
		this.addBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.addFriend, this);
	}
}