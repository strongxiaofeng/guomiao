class RankFriendCoinUI extends BaseUI{
	private friendRank: eui.Image;
	private allRank: eui.Image;
	private byCoin: eui.Image;
	private myRankNum: eui.Label;
	private myHeadIcon: eui.Image;
	private myNameTxt: eui.Label;
	private myChangeTxt: eui.Label;
	private addFriendBtn: eui.Image;
	private friendRequestBtn: eui.Image;
	private list: eui.List;
	private ac: eui.ArrayCollection;
	public constructor() {
		super();
		this.skinName = "resource/skins/rank_friend_coin.exml";
	}
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
		var user = GameModel.getInstance().getUserInfo();
		this.myHeadIcon.source = user.avatar;
		this.myNameTxt.text = user.nickname;
		this.myChangeTxt.text = user.gold+"";

		this.ac = new eui.ArrayCollection();
		this.list.itemRenderer = RankItem_Friend_coin;
		this.list.useVirtualLayout = false;
		this.list.dataProvider = this.ac;
		GameController.getInstance().getFriendList(0,10,0);
		GameController.getInstance().getMyRankInFriends(1);
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.allRank, egret.TouchEvent.TOUCH_TAP, this.clickAllRank, this);
		this.registerEvent(this.byCoin, egret.TouchEvent.TOUCH_TAP, this.clickByContri, this);
		this.registerEvent(this.addFriendBtn, egret.TouchEvent.TOUCH_TAP, this.clickAddFriend, this);
		this.registerEvent(this.friendRequestBtn, egret.TouchEvent.TOUCH_TAP, this.clickFriendRequests, this);

		this.addRegister(NotifyConst.Notify_FriendList, this.onList, this);
		this.addRegister(NotifyConst.Notify_MyRankInFriends, this.onMyRank, this);
	}
	private clickAllRank()
	{
		UIManager.openUI(UIConst.RankAllCoinUI);
	}
	private clickByContri()
	{
		UIManager.openUI(UIConst.RankFriendContributeUI);
	}
	/**去加好友 */
	private clickAddFriend()
	{
		UIManager.openUI(UIConst.AddFriendUI, LayerManager.Layer_Tip);
	}
	private clickFriendRequests()
	{
		UIManager.openUI(UIConst.FriendRequestsUI, LayerManager.Layer_Tip);
	}
	/**我的排行返回 */
	private onMyRank(info:any)
	{
		console.log("我在全部人中的排行 ",info);
	}
	private onList(info:vo.FriendListInfo)
	{
		console.log("收到好友列表 ",info);
		this.ac.removeAll();
		if(info && info.list && info.list.length>0)
		{
			for(var i=0; i<info.list.length; i++)
			{
				this.ac.addItem(info.list[i]);
			}
		}
		this.ac.refresh();
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
		this.removeRegister(this);
	}
}