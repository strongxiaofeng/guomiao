class StoreUI extends BaseUI{
	private btn_close: eui.Image;
	private itemGroup: eui.Group;
	private intervalId: any;
	private computearr:Array<any> = [];
	public constructor() {
		super();
		this.skinName = "resource/skins/store.exml";
	}
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();

		GameController.getInstance().getStoreInfo();
		this.intervalId = setInterval(()=>{
			this.computeTime();
		}, 100);
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
		console.log("仓库ui收到仓库信息 ",info);
		if(info && info.list && info.list.length > 0)
		{
			for(var i=0; i<info.list.length; i++)
			{
				var item: vo.StoreItem = info.list[i];
				var hor = i%2==0 ? -130: 130;
				var bottom = 200 + Math.floor((5-i)/2)*228;
				var img = new eui.Image();
				img.horizontalCenter = hor;
				img.bottom = bottom;
				//有过期时间
				if(item.type == 1) {
					img.source = "seed1_png";
					img.width = 70;
					img.height = 117;
					this.itemGroup.addChild(img);
					
					var whiteBg = new eui.Image("downtime_bg_png");
					whiteBg.width = 215;
					whiteBg.height = 54;
					whiteBg.horizontalCenter = hor;
					whiteBg.bottom = bottom-50;
					this.itemGroup.addChild(whiteBg);

					var serverTime = GameModel.getInstance().getServerTime();
					var passTime = item.expire_time-serverTime;
					var date = new Date();
					date.setSeconds(passTime);
					var str = passTime>0 ? date.getUTCHours()+":"+date.getUTCMinutes()+":"+date.getUTCSeconds()+ "后结束播种" : "结束播种";
					var timeTxt = new eui.Label(str);
					timeTxt.textColor = 0x727374;
					timeTxt.size = 20;
					timeTxt.horizontalCenter = hor;
					timeTxt.bottom = bottom-35;
					this.itemGroup.addChild(timeTxt);

					this.computearr.push({expire_time:item.expire_time, txt:timeTxt})
				}
				else{
					if(item.name == "化肥"){
						img.source = "shop_fertilizer_png";
					}
					else{
						img.source = "store_insurance_png";
					}
					img.width = 117;
					img.height = 117;
					this.itemGroup.addChild(img);
				}

			}
		}
	}
	/**循环计算种子过期时间 */
	private computeTime(){
		for(var i=0 ; i<this.computearr.length; i++)
		{
			var serverTime = GameModel.getInstance().getServerTime();
			var passTime = this.computearr[i].expire_time - serverTime;
			var date = new Date();
			date.setSeconds(passTime);
			var str = passTime>0 ? date.getUTCHours()+":"+date.getUTCMinutes()+":"+date.getUTCSeconds()+ "后结束播种" : "结束播种";
			this.computearr[i].txt.text = str;
		}
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
		clearInterval(this.intervalId);
		this.computearr = [];
		this.itemGroup.removeChildren();
	}
}