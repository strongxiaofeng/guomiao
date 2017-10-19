class RankItem_Friend_contri  extends AItemRenderer{
	private myRankNum: eui.Label;
	private myHeadIcon: eui.Image;
	private nameTxt: eui.Label;
	private myChangeTxt: eui.Label;
	private handBtn: eui.Label;
	private supportCount: eui.Label;
	public constructor() {
		super();
		this.skinName = "resource/skins/rankItem_friend_contri.exml";
	}
	protected onAdd()
	{
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
	}
	protected dataChanged()
	{
		var data = <vo.FriendListItem>this.data;
		this.myRankNum.text = data.index;
		this.nameTxt.text = data.nickname;
		this.myChangeTxt.text = data.total_exp;
		// this.supportCount.text = data.thumbs_up;
		// this.myHeadIcon.source = data.avatar;
	}
	private click(e: egret.TouchEvent)
	{
		if(e.target == this.handBtn)
		{
			console.log("去偷菜");
			UIManager.openUI(UIConst.OtherLandUI);
		}
		else
		{
			//查看他人资料
			console.log("查看资料");
			GameModel.getInstance().curOtherUser = this.data;
			UIManager.openUI(UIConst.OtherUserDetailUI);
		}
	}
	protected onRemove()
	{
		this. removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
		
	}
}