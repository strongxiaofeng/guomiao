class SearchUserItem extends AItemRenderer{
	private icon: eui.Image;
	private nameTxt: eui.Label;
	private lvbg: eui.Image;
	private lv: eui.Image;
	private lvNumImg: eui.Image;
	private addBtn: eui.Button;
	public constructor() {
		super();
		this.skinName = "resource/skins/addFriendItem.exml";
	}
	protected onAdd()
	{
		this.addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickAdd, this);
	}
	protected dataChanged()
	{
		var data = <vo.RankAllItem>this.data;
		this.nameTxt.text = data.nickname;
		this.lvNumImg.source = "num"+ data.level +"_png";
		egret.callLater(()=>{
			this.lvbg.x = this.nameTxt.x + this.nameTxt.width + 10;
			this.lv.x = this.lvbg.x + 10;
			this.lvNumImg.x = this.lvbg.x + 40;
		}, this);
	}
	private clickAdd()
	{
		var data = <vo.RankAllItem>this.data;
		GameController.getInstance().addFriend(parseInt(data.id));
		UIManager.openUI(UIConst.TipAddFriendUI, LayerManager.Layer_Tip);
	}
	protected onRemove()
	{
		this.addBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickAdd, this);
	}
}