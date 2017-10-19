class RankItem_All_contri  extends AItemRenderer{
	private myRankNum: eui.Label;
	private myHeadIcon: eui.Image;
	private nameTxt: eui.Label;
	private lvGroup: eui.Group;
	private myLevelNum: eui.Image;
	private myChangeTxt: eui.Label;
	private addBtn: eui.Button;
	public constructor() {
		super();
		this.skinName = "resource/skins/rankItem_all_contri.exml";
	}
	protected onAdd()
	{
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
	}
	protected dataChanged()
	{
		var data = <vo.RankAllItem>this.data;
		this.myRankNum.text = data.index;
		this.nameTxt.text = data.nickname;
		this.myLevelNum.source = "num"+ data.level +"_png";
		this.myChangeTxt.text = data.exp;
		this.myHeadIcon.source = data.avatar;
		egret.callLater(()=>{
			this.lvGroup.x = this.nameTxt.x + this.nameTxt.width + 10;
		}, this);
	}
	private click(e: egret.TouchEvent)
	{
		var data = <vo.RankAllItem>this.data;
		if(e.target == this.addBtn)
		{
			console.log("加他");
			GameController.getInstance().addFriend(parseInt(data.id));
			UIManager.openUI(UIConst.TipAddFriendUI, LayerManager.Layer_Tip);
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