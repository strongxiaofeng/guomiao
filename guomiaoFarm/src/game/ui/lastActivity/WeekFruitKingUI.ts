class WeekFruitKingUI extends BaseUI{
	private headImg: eui.Image;
	private nameTxt: eui.Label;
	private list: eui.List;
	private ac: eui.ArrayCollection;

	public constructor() {
		super();
		this.skinName = "resource/skins/lastActivityKing.exml";
	}
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
		this.list.itemRenderer = WeekFruitKingItem;
		this.list.useVirtualLayout = false;
		this.ac = new eui.ArrayCollection();
		this.ac.addItem({});
		this.ac.addItem({});
		this.ac.addItem({});
		this.ac.addItem({});
		this.ac.addItem({});
		this.ac.addItem({});
		this.ac.addItem({});
		this.ac.addItem({});
		this.ac.addItem({});
		this.ac.addItem({});
		this.ac.addItem({});
		this.list.dataProvider = this.ac;
	}
	/**初始监听 */
	protected initListener()
	{
	}
	public dispose()
	{
		super.dispose();
	}
}