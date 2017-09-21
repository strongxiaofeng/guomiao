class AddressManageUI extends BaseUI{
	private addAddressBtn: eui.Image;
	private addressList: eui.List;

	public constructor() {
		super();
		this.skinName = "resource/skins/addressManage.exml";
	}

	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
		this.addressList.itemRenderer = AddressListItem;

		var ac = new eui.ArrayCollection();
		ac.addItem({});
		ac.addItem({});
		ac.addItem({});
		ac.addItem({});
		this.addressList.dataProvider = ac;
	}

	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.addAddressBtn, egret.TouchEvent.TOUCH_TAP, this.clickAdd, this);
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