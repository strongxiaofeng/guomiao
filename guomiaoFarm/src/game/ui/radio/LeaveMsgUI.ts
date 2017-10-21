class LeaveMsgUI extends BaseUI{

	private leftPage: eui.Image;
	private rightPage: eui.Image;
	private clearBtn: eui.Image;
	private closeBtn: eui.Image;
	private list: eui.List;

	public constructor() {
		super();
		this.skinName = "resource/skins/leaveMsgs.exml";
	}
	
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();

		this.list.useVirtualLayout = false;
		this.list.itemRenderer = LeaveMsgItem;
		var ac = new eui.ArrayCollection();
		ac.addItem({});
		ac.addItem({});
		ac.addItem({});
		ac.addItem({});
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
		this.registerEvent(this.closeBtn, egret.TouchEvent.TOUCH_TAP, this.dispose, this);
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}