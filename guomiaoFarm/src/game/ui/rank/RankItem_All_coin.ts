class RankItem_All_coin  extends AItemRenderer{
	private myRankNum: eui.Label;
	private myHeadIcon: eui.Image;
	private nameTxt: eui.Label;
	private myChangeTxt: eui.Label;
	private addBtn: eui.Button;
	private arrow: eui.Image;
	private handAbleImg: eui.Image;
	private waterAbleImg: eui.Image;
	public constructor() {
		super();
		this.skinName = "resource/skins/rankItem_all_coin.exml";
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
		this.myChangeTxt.text = data.exp;
		this.myHeadIcon.source = data.avatar;
		if(Math.random()<0.5){
			this.handAbleImg.visible = true;
			this.waterAbleImg.visible = false;
		}
		else{
			this.handAbleImg.visible = false;
			this.waterAbleImg.visible = true;
		}
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
		else if(e.target == this.handAbleImg)
		{
			console.log("去偷菜");
			UIManager.openUI(UIConst.OtherLandUI);
		}
		else if(e.target == this.waterAbleImg)
		{
			console.log("去浇水");
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