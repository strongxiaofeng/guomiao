class MyOrderUI extends BaseUI{
	public constructor() {
		super();
		this.skinName = "resource/skins/myOrder.exml";
	}
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
		//待支付
		// GameController.getInstance().getOrderList(0, 0, 10);
		GameController.getInstance().sendSureReceive(2);
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