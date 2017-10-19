class FriendRequestsItem extends AItemRenderer{
	private icon: eui.Image;
	private nameTxt: eui.Label;
	private lvNumImg: eui.Image;
	private lvGroup: eui.Group;
	private refuseBtn: eui.Button;
	private agreeBtn: eui.Button;
	public constructor() {
		super();
		this.skinName = "resource/skins/friendRequestsItem.exml";
	}
	protected onAdd()
	{
		this.agreeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickAgree, this);
		this.refuseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickRefuse, this);
	}
	protected dataChanged()
	{
		var data = <vo.FriendRequestsItem>this.data;
		this.nameTxt.text = data.nickname;
		this.lvNumImg.source = "num"+ data.level +"_png";
		egret.callLater(()=>{
			this.lvGroup.x = this.nameTxt.x + this.nameTxt.width + 10;
		}, this);
	}
	private clickAgree()
	{
		var data = <vo.FriendRequestsItem>this.data;
		GameController.getInstance().agreeOrRefuseAddFriend(data.user_id, 1);
	}
	private clickRefuse()
	{
		var data = <vo.FriendRequestsItem>this.data;
		GameController.getInstance().agreeOrRefuseAddFriend(data.user_id, 0);
	}
	protected onRemove()
	{
		this.agreeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickAgree, this);
		this.refuseBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickRefuse, this);
	}
}