class FriendRequestsUI extends BaseUI{
	private onekeyAgree: eui.Image;
	private onekeyRefuse: eui.Image;
	private closeBtn: eui.Image;
	private list: eui.List;
	private ac: eui.ArrayCollection;
	private user_ids:Array<number> = [];
	public constructor() {
		super();
		this.skinName = "resource/skins/friendRequests.exml";
	}

	public initSetting()
	{
		super.initSetting();
		this.ac = new eui.ArrayCollection();
		this.list.itemRenderer = FriendRequestsItem;
		this.list.useVirtualLayout = false;
		this.list.dataProvider = this.ac;

		GameController.getInstance().getFriendRespondList();
	}
	protected initListener()
	{
		this.registerEvent(this.closeBtn, egret.TouchEvent.TOUCH_TAP, this.dispose, this);
		this.registerEvent(this.onekeyAgree, egret.TouchEvent.TOUCH_TAP, this.agreeAll, this);
		this.registerEvent(this.onekeyRefuse, egret.TouchEvent.TOUCH_TAP, this.refuseAll, this);
		this.addRegister(NotifyConst.Notify_FriendRespondList, this.onList, this);
	}
	private agreeAll()
	{
		GameController.getInstance().respondAddFriendList(this.user_ids, 1);
	}
	private refuseAll()
	{
		GameController.getInstance().respondAddFriendList(this.user_ids, 0);
	}
	private onList(info:vo.FriendRequests)
	{
		console.log("需要回复的列表 ",info)
		this.ac.removeAll();
		this.user_ids = [];
		if(info && info.list && info.list.length>0)
		{
			for(var i=0; i<info.list.length; i++)
			{
				this.ac.addItem(info.list[i]);
				this.user_ids.push(parseInt(info.list[i].user_id));
			}
		}
		this.ac.refresh();
	}
	public dispose()
	{
		super.dispose();
		this.removeRegister(this);
	}
}