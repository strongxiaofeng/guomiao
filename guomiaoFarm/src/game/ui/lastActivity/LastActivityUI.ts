class LastActivityUI extends BaseUI{
	private list: eui.List;
	public constructor() {
		super();
		this.skinName = "resource/skins/lastActivity.exml";

	}

	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
		this.list.itemRenderer = LastActivityItem;
		var ac = new eui.ArrayCollection();
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
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}