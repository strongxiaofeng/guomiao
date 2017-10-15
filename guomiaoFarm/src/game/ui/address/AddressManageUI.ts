class AddressManageUI extends BaseUI{
	private addAddressBtn: eui.Image;
	private addressList: eui.List;
	private ac:eui.ArrayCollection;

	public constructor() {
		super();
		this.skinName = "resource/skins/addressManage.exml";
	}

	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
		this.addressList.itemRenderer = AddressListItem;

		GameController.getInstance().getAddressList();

		this.ac = new eui.ArrayCollection();
		this.addressList.dataProvider = this.ac;
	}

	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.addAddressBtn, egret.TouchEvent.TOUCH_TAP, this.clickAdd, this);

		this.addRegister(NotifyConst.Notify_AddressList, this.onAddressList, this);
	}
	/**刷新列表 */
	private onAddressList()
	{
		this.ac.removeAll();
		this.ac.addItem({});
		this.ac.addItem({});
		this.ac.addItem({});
		this.ac.refresh();
	}
	private clickAdd()
	{
		console.log("新增地址");
		UIManager.openUI(UIConst.AddAddressUI);
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}