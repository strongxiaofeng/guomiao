class HonorWallUI extends BaseUI{
	private list: eui.List;
	private leftBtn: eui.Button;
	private rightBtn: eui.Button;
	/**当前是第几页勋章 从0开始 每页9个 */
	private curPage:number = 0;
	private maxPage:number;
	private array:Array<any>;
	private ac: eui.ArrayCollection;
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
		this.ac = new eui.ArrayCollection();
		this.list.dataProvider = this.ac;

		this.array = [];
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
			this.array.push({itemdata:config[key], isAchieved:isAchieved});
		}

		this.maxPage = Math.ceil(this.array.length/9);
		this.curPage = 0;
		this.showPage();
	}
	
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.leftBtn, egret.TouchEvent.TOUCH_TAP, this.onLeft, this);
		this.registerEvent(this.leftBtn, egret.TouchEvent.TOUCH_TAP, this.onRight, this);
	}
	private onLeft(e:egret.TouchEvent)
	{
		if(this.curPage>0) this.curPage--;
		this.showPage();
	}
	private onRight(e:egret.TouchEvent)
	{
		if(this.curPage<this.maxPage-1)this.curPage++;
		this.showPage();
	}
	/**展示当前页数据 */
	private showPage()
	{
		this.ac.source = this.getItemsByPage(this.curPage);
		this.ac.refresh();
		if(this.curPage==0) this.leftBtn.enabled = false;
		else this.leftBtn.enabled = true;

		if(this.curPage>=this.maxPage-1) this.rightBtn.enabled = false;
		else this.rightBtn.enabled = true;
	}
	/**获取当前页数据 */
	private getItemsByPage(n:number)
	{
		var arr = [];
		for(let i=0; i<9; i++)
		{
			if(this.array[n*9+i]) arr.push(this.array[n*9+0]);
		}
		return arr;
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}