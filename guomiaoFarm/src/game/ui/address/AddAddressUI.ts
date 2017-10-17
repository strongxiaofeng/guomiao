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

		this.addRegister(NotifyConst.Notify_AddAddress, this.onAddCallback, this);
	}
	private clickSave()
	{
		GameController.getInstance().addAddress(this.input_name.text, this.input_num.text, this.input_zone.text+this.input_address.text);
		
	}
	private onAddCallback(obj: BaseResponse)
	{
		//添加成功的话就返回地址列表
		if(obj.status == 0)
		{
			UIManager.openUI(UIConst.AddressManageUI);
		}
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}