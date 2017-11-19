class SetUI extends BaseUI{
	private msgSetGroup: eui.Group;
	private landSetGroup: eui.Group;
	private skinList: eui.List;
	private check_leaveMsg: eui.Image;
	private check_radio: eui.Image;
	private check_weather: eui.Image;
	private check_report: eui.Image;
	private check_steal: eui.Image;
	private check_bgm: eui.Image;
	private check_effectSound: eui.Image;

	/**scroller 184 798 */
	public constructor() {
		super();
		this.skinName = "resource/skins/set.exml";
	}
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
		
		this.check_leaveMsg.source = GameModel.getInstance().check_leaveMsg ? "opend_png" : "closed_png";
		this.check_radio.source = GameModel.getInstance().check_radio ? "opend_png" : "closed_png";
		this.check_weather.source = GameModel.getInstance().check_weather ? "opend_png" : "closed_png";
		this.check_report.source = GameModel.getInstance().check_report ? "opend_png" : "closed_png";
		this.check_steal.source = GameModel.getInstance().check_steal ? "opend_png" : "closed_png";
		this.check_bgm.source = GameModel.getInstance().check_bgm ? "opend_png" : "closed_png";
		this.check_effectSound.source = GameModel.getInstance().check_effectSound ? "opend_png" : "closed_png";

		this.skinList.itemRenderer = SkinItem;
		this.skinList.useVirtualLayout = false;
		var ac = new eui.ArrayCollection();
		ac.addItem({name:"默认",isDefault:true});
		ac.addItem({name:"皮肤名称",isDefault:false});
		ac.addItem({name:"皮肤名称",isDefault:false});
		ac.addItem({name:"皮肤名称",isDefault:false});
		ac.addItem({name:"皮肤名称",isDefault:false});
		ac.addItem({name:"皮肤名称",isDefault:false});
		ac.addItem({name:"皮肤名称",isDefault:false});
		this.skinList.dataProvider = ac;

		// this.clickMsgSet();
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.check_leaveMsg, egret.TouchEvent.TOUCH_TAP, this.clickCheckleaveMsg, this);
		this.registerEvent(this.check_radio, egret.TouchEvent.TOUCH_TAP, this.clickCheckradio, this);
		this.registerEvent(this.check_weather, egret.TouchEvent.TOUCH_TAP, this.clickCheckweather, this);
		this.registerEvent(this.check_report, egret.TouchEvent.TOUCH_TAP, this.clickCheckreport, this);
		this.registerEvent(this.check_steal, egret.TouchEvent.TOUCH_TAP, this.clickChecksteal, this);
		this.registerEvent(this.check_bgm, egret.TouchEvent.TOUCH_TAP, this.clickCheckbgm, this);
		this.registerEvent(this.check_effectSound, egret.TouchEvent.TOUCH_TAP, this.clickCheckeffectSound, this);
	}
	/**开关 留言 */
	private clickCheckleaveMsg()
	{
		GameModel.getInstance().check_leaveMsg = !GameModel.getInstance().check_leaveMsg;
		this.check_leaveMsg.source = GameModel.getInstance().check_leaveMsg ? "opend_png" : "closed_png";
	}
	private clickCheckradio()
	{
		GameModel.getInstance().check_radio = !GameModel.getInstance().check_radio;
		this.check_radio.source = GameModel.getInstance().check_radio ? "opend_png" : "closed_png";
	}
	private clickCheckweather()
	{
		GameModel.getInstance().check_weather = !GameModel.getInstance().check_weather;
		this.check_weather.source = GameModel.getInstance().check_weather ? "opend_png" : "closed_png";
	}
	private clickCheckreport()
	{
		GameModel.getInstance().check_report = !GameModel.getInstance().check_report;
		this.check_report.source = GameModel.getInstance().check_report ? "opend_png" : "closed_png";
	}
	private clickChecksteal()
	{
		GameModel.getInstance().check_steal = !GameModel.getInstance().check_steal;
		this.check_steal.source = GameModel.getInstance().check_steal ? "opend_png" : "closed_png";
	}
	private clickCheckbgm()
	{
		GameModel.getInstance().check_bgm = !GameModel.getInstance().check_bgm;
		this.check_bgm.source = GameModel.getInstance().check_bgm ? "opend_png" : "closed_png";
	}
	private clickCheckeffectSound()
	{
		GameModel.getInstance().check_effectSound = !GameModel.getInstance().check_effectSound;
		this.check_effectSound.source = GameModel.getInstance().check_effectSound ? "opend_png" : "closed_png";
	}
	// private clickMsgSet()
	// {
	// 	this.msgSetGroup.visible = true;
	// 	this.landSetGroup.visible = false;
	// 	this.landSetBtn.y = this.msgSetGroup.y +this.msgSetGroup.height +10;
	// }
	// private clickLandSet()
	// {
	// 	this.msgSetGroup.visible = false;
	// 	this.landSetGroup.visible = true;
	// 	this.landSetBtn.y = this.msgSetBtn.y+ this.msgSetBtn.height+ 10;
	// 	this.landSetGroup.y = this.landSetBtn.y + this.landSetBtn.height +10;
	// 	console.log(this.landSetGroup)
		
	// }
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}