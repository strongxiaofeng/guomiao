class SetUI extends BaseUI{
	private msgSetBtn: eui.Group;
	private msgSetGroup: eui.Group;
	private landSetBtn: eui.Image;
	private landSetGroup: eui.Group;
	private skinList: eui.List;
	public constructor() {
		super();
		this.skinName = "resource/skins/set.exml";
	}
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
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

		this.clickMsgSet();
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.msgSetBtn, egret.TouchEvent.TOUCH_TAP, this.clickMsgSet, this);
		this.registerEvent(this.landSetBtn, egret.TouchEvent.TOUCH_TAP, this.clickLandSet, this);

	}
	private clickMsgSet()
	{
		this.msgSetGroup.visible = true;
		this.landSetGroup.visible = false;
		this.landSetBtn.y = this.msgSetGroup.y +this.msgSetGroup.height +10;
	}
	private clickLandSet()
	{
		this.msgSetGroup.visible = false;
		this.landSetGroup.visible = true;
		this.landSetBtn.y = this.msgSetBtn.y+ this.msgSetBtn.height+ 10;
		this.landSetGroup.y = this.landSetBtn.y + this.landSetBtn.height +10;
		console.log(this.landSetGroup)
		
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}