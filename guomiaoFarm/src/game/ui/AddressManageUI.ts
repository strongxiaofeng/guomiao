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
		// this.addressList.itemRenderer = 
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