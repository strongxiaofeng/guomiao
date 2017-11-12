class LoadingUI extends BaseUI{
	/**64 962 */
	private bar: eui.Image;
	private txt: eui.Label;
	public constructor() {
		super();
		this.skinName = "resource/skins/loadingSkin.exml";
	}
	
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
		UIManager.openUI(UIConst.TipErrorUI, LayerManager.Layer_Sys);
		UIManager.openUI(UIConst.TipGreenUI, LayerManager.Layer_Sys);
		// GameController.getInstance().getUserInfo(window["params"]); 
		GameController.getInstance().getUserInfo("token=d12951537f443efe9f5515cfe965321a"); 
		GameController.getInstance().getServerConfig();

		this.load();

		// var data = RES.getRes("loadingMovie_json");
		// var txtr = RES.getRes("loadingMovie_png");
		// var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, txtr );
		// var mc1:egret.MovieClip = new egret.MovieClip(mcFactory.generateMovieClipData("loading"));
		// mc1.x = 0;
		// mc1.y = 0;
		// mc1.width = 333;
		// mc1.height = 193;
		// this.addChild( mc1 );
		// mc1.gotoAndPlay(0);
		// console.log(mc1);
	}6
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this, egret.Event.ENTER_FRAME, this.onframe, this);

		this.addRegister(NotifyConst.Notify_UserInfo, this.onUserInfo, this);
	}

	private load()
	{
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
	}
	private onResourceLoadComplete(event: RES.ResourceEvent): void {
		if (event.groupName == "preload") {
			RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
			RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);

			UIManager.openUI(UIConst.WelcomeUI);
		}
	}
	private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
			this.setProgress(event.itemsLoaded/event.itemsTotal);
        }
    }
	private onUserInfo(info: vo.UserInfo)
	{
		console.log('收到了用户信息 ',info);
	}
	/**传入百分比 小数 */
	private setProgress(n:number)
	{
		this.bar.width = 898*n;
		this.txt.text = Math.ceil(n*100)+ "%";
	}

	private index=0;
	private mc: eui.Image;
	private onframe()
	{
		this.index++;
		if(this.index>=10) this.index=0;
		this.mc.source = "loading"+ (Math.floor(this.index/2)+1) +"_png";
	}
	
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}