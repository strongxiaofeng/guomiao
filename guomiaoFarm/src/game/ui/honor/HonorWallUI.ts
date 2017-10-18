class HonorWallUI extends BaseUI{
	private list: eui.List;
	public constructor() {
		super();
		this.skinName = "resource/skins/honorWall.exml";
	}

	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
		this.list.itemRenderer = HonorItem;
		this.list.useVirtualLayout = false;
		var info = GameModel.getInstance().getHonorInfo();
		var config = GameModel.getInstance().getHonorConfig();
		var ac = new eui.ArrayCollection();
		console.log("徽章达成信息：" , info);
		for(var key in config)
		{
			var isAchieved:boolean = false;
			if(info && info.list)
			{
				for(var i=0; i<info.list.length; i++)
				{
					if(info.list[i].config_id == key) isAchieved=true;
				}
			}
			
			ac.addItem({itemdata:config[key], isAchieved:isAchieved});
		}
		this.list.dataProvider = ac;
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