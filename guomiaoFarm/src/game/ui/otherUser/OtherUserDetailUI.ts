class OtherUserDetailUI extends  BaseUI{
	private honorImg: eui.Image;
	private nameTxt: eui.Label;
	private LevelTxtImg: eui.Image;
	private gameIdTxt: eui.Label;
	private timesTxt: eui.Label;
	private thmTxt: eui.Label;
	private friendCountTxt: eui.Label;
	private honorTxt: eui.Label;
	private leftBtn: eui.Button;
	private rightBtn: eui.Button;
	private honorList: eui.List;
	private addBtn: eui.Image;

	public constructor() {
		super();
		this.skinName = "resource/skins/OtherUserDetail.exml";
	}
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
		var data = GameModel.getInstance().getCurOtherUser();
		this.nameTxt.text = data.nickname;
		this.LevelTxtImg.source = "num"+ data.nickname+"_png";
		this.gameIdTxt.text = "游戏ID: "+data.id;
		this.timesTxt.text = "参与次数:"+0+"期";
		this.friendCountTxt.text = "拥有好友:"+0+"人";
		this.thmTxt.text = "获得赞数:"+data.thumbs_up+"个";
		this.honorTxt.text = "上榜次数:"+0+"次";

		this.honorList.itemRenderer = OtherUserHonorItem;
		this.honorList.useVirtualLayout = false;
		var ac = new eui.ArrayCollection();
		ac.addItem({});
		ac.addItem({});
		ac.addItem({});
		ac.addItem({});
		ac.addItem({});
		this.honorList.dataProvider = ac;
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.addBtn, egret.TouchEvent.TOUCH_TAP, this.addFriend, this);
	}
	private addFriend()
	{
		UIManager.openUI(UIConst.TipAddFriendUI, LayerManager.Layer_Tip);
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}