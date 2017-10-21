class InviteWaterUI extends BaseUI{
	private btn_close: eui.Image;
	private list: eui.List;
	private inviteFriends: eui.Image;
	private inviteWxFriends: eui.Image;
	public constructor() {
		super();
		this.skinName = "resource/skins/inviteWater.exml";
	}
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
		this.list.itemRenderer = InviteWaterItem;
		var ac = new eui.ArrayCollection();
		ac.addItem({});
		ac.addItem({});
		ac.addItem({});
		ac.addItem({});
		ac.addItem({});
		this.list.dataProvider = ac;
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.btn_close, egret.TouchEvent.TOUCH_TAP, this.clickClose, this);
		this.registerEvent(this.inviteFriends, egret.TouchEvent.TOUCH_TAP, this.clickInviteFriends, this);
		this.registerEvent(this.inviteWxFriends, egret.TouchEvent.TOUCH_TAP, this.clickInviteWxFriends, this);
	}
	private clickInviteFriends()
	{
		UIManager.closeUI(UIConst.InviteWaterUI);
		UIManager.openUI(UIConst.RankFriendContributeUI);
		UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
	}
	private clickInviteWxFriends()
	{
		
	}
	/**点击关闭 */
	private clickClose()
	{
		UIManager.closeUI(UIConst.InviteWaterUI);
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}