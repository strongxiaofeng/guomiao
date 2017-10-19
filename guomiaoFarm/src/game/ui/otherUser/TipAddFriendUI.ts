class TipAddFriendUI extends  BaseUI{
	public constructor() {
		super();
		this.skinName = "resource/skins/tipAddFriend.exml";
	}
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
		setTimeout(() =>{
			this.dispose();
		}, 1000);
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