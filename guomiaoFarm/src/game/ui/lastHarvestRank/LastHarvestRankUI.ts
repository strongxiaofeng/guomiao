class LastHarvestRankUI extends BaseUI{
	private btn_close: eui.Image;
	private list: eui.List;
	public constructor() {
		super();
		this.skinName = "resource/skins/lastHarvestRank.exml";
	}
	
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
		this.list.itemRenderer = LastHarvestRankItem;
		this.list.useVirtualLayout = false;

		var info = GameModel.getInstance().getYesterdayRank();
		var ac = new eui.ArrayCollection;
		if(info && info.self)
		{
			ac.addItem({data:info.self, isSelf:true});
		}
		if(info && info.list && info.list.length>0)
		{
			for(var i=0; i<info.list.length; i++)
			{
				ac.addItem({data:info.list[i], isSelf:false});
			}
		}
		this.list.dataProvider = ac;
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.btn_close, egret.TouchEvent.TOUCH_TAP, this.clickClose, this);
	}
	/**点击关闭按钮 */
	private clickClose()
	{
		UIManager.closeUI(UIConst.LastHarvestRankUI);
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}