class RankAllContributeUI extends BaseUI{
	private friendRank: eui.Image;
	private allRank: eui.Image;
	private byCoin: eui.Image;
	private myRankNum: eui.Label;
	private myHeadIcon: eui.Image;
	private myNameTxt: eui.Label;
	private lvBg: eui.Image;
	private lv: eui.Image;
	private myLevelNum: eui.Image;
	private myChangeTxt: eui.Label;
	private addFriendBtn: eui.Image;
	private friendRequestBtn: eui.Image;
	private list: eui.List;
	private ac: eui.ArrayCollection;
	public constructor() {
		super();
		this.skinName = "resource/skins/rank_all_contri.exml";
	}
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();

		var user = GameModel.getInstance().getUserInfo();
		this.myHeadIcon.source = user.avatar;
		this.myNameTxt.text = user.nickname;
		this.myLevelNum.source = "num"+ user.level +"_png";
		this.myChangeTxt.text = user.exp+"";
		egret.callLater(()=>{
			this.lvBg.x = this.myNameTxt.x + this.myNameTxt.width+ 2;
			this.lv.x = this.lvBg.x+10;
			this.myLevelNum.x = this.lvBg.x+35;
		}, this);

		this.ac = new eui.ArrayCollection();
		this.list.itemRenderer = RankItem_All_contri;
		this.list.useVirtualLayout = false;
		this.list.dataProvider = this.ac;
		GameController.getInstance().getRankList(0,10,0);
		GameController.getInstance().getMyRankInAll(0);
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.byCoin, egret.TouchEvent.TOUCH_TAP, this.clickByCoin, this);
		this.registerEvent(this.friendRank, egret.TouchEvent.TOUCH_TAP, this.clickFriendRank, this);
		this.registerEvent(this.addFriendBtn, egret.TouchEvent.TOUCH_TAP, this.clickAddFriend, this);
		this.registerEvent(this.friendRequestBtn, egret.TouchEvent.TOUCH_TAP, this.clickFriendRequests, this);

		this.addRegister(NotifyConst.Notify_RankList, this.onList, this);
		this.addRegister(NotifyConst.Notify_MyRankInAll, this.onMyRank, this);
	}
	/**通过金币排行 */
	private clickByCoin()
	{
		UIManager.openUI(UIConst.RankAllCoinUI);
	}
	/**前往好友排行 */
	private clickFriendRank()
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
	private onList(data:vo.RankAllInfo)
	{
		console.log("全部排行 ",data);
		this.ac.removeAll();
		if(data && data.list && data.list.length > 0)
		{
			var list = data.list;
			for(var i=0; i<list.length; i++)
			{
				this.ac.addItem(list[i]);
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