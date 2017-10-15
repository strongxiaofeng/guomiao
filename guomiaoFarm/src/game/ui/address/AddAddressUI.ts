class AddAddressUI extends BaseUI{
	private saveBtn: eui.Image;
	private input_name: eui.EditableText;
	private input_num: eui.EditableText;
	private input_zone: eui.EditableText;
	private input_address: eui.EditableText;
	public constructor() {
		super();
		this.skinName = "resource/skins/addAddress.exml";
	}

	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
	}

	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.saveBtn, egret.TouchEvent.TOUCH_TAP, this.clickSave, this);
	}
	private clickSave()
	{
		console.log("保存");
		GameController.getInstance().addAddress("收货的人", "13525648516", "成都市环球中心");
		UIManager.openUI(UIConst.AddressManageUI);
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}