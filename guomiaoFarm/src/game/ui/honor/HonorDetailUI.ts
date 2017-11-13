class HonorDetailUI extends BaseUI{
	private nameTxt: eui.Label;
	private icon: eui.Image;
	private timeTxt: eui.Label;
	private countTxt: eui.Label;
	private descTxt: eui.Label;
	private powerTxt: eui.Label;
	private setSDefaultBtn: eui.Image;
	private shareBtn: eui.Image;
	private light:eui.Image;
	public constructor() {
		super();
		this.skinName = "resource/skins/honorDetail.exml";
	}
	
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();


		var data = GameModel.getInstance().getHonorItemDetail();
		// this.icon.source = data.achievement_icon+"";
		this.nameTxt.text = data.name;
		this.timeTxt.text = data.name;
		this.countTxt.text = data.complete;
		this.descTxt.text = data.content;
		// this.powerTxt.text = data.name;
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.setSDefaultBtn, egret.TouchEvent.TOUCH_TAP, this.setDefault, this);
		this.registerEvent(this.shareBtn, egret.TouchEvent.TOUCH_TAP, this.share, this);
		this.registerEvent(this,egret.Event.ENTER_FRAME, this.onframe, this);
	}
	private onframe()
	{
		this.light.rotation+=1;
		if(this.light.rotation>360) this.light.rotation-=360;
	}
	private setDefault()
	{
		var data = GameModel.getInstance().getHonorItemDetail();
		GameController.getInstance().getHonorReward(data.id);
	}
	private share()
	{
		
	}
	public dispose()
	{
		super.dispose();
	}
}