class StoreUI extends BaseUI{
	private btn_close: eui.Image;
	public constructor() {
		super();
		this.skinName = "resource/skins/store.exml";
	}
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();

		GameController.getInstance().getStoreInfo();
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.btn_close, egret.TouchEvent.TOUCH_TAP, this.clickClose, this);

		this.addRegister(NotifyConst.Notify_StoreInfo, this.onStoreInfo, this);
	}
	/**收到仓库信息 */
	public onStoreInfo(info: vo.StoreInfo)
	{
		console.log("仓库ui收到仓库信息 ",info)
	}
	/**点击关闭 */
	private clickClose()
	{
		UIManager.closeUI(UIConst.StoreUI);
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
		this.removeRegister(this);
	}
}