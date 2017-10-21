class RadioUI extends BaseUI{
	private radioBtn: eui.Image;
	private recordBtn: eui.Image;
	private radioGroup: eui.Group;
	private recordGroup: eui.Group;
	private list: eui.List;
	private recordList: eui.List;

	public constructor() {
		super();
		this.skinName = "resource/skins/radio.exml";
	}
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
		this.clickRadio();
		
		this.list.itemRenderer = RadioItem;
		this.list.useVirtualLayout = false;
		var ac = new eui.ArrayCollection();
		ac.addItem({type:"system", content:"由于果农急速增长，我们将对服务器进行升级，以容纳更多果农，11月12日凌晨3点到5点将暂时关闭农场，请广大果农体谅。", time:"2017-09-15"});
		ac.addItem({type:"weather", content:"果瞄气象台预告，新一轮的雨水天气将对水果的产量产生影响，请各位果农使用保险卡以免除灾害带来的损失", time:"2017-09-15"});
		ac.addItem({type:"report", content:"勤劳的果农，由于您的辛勤看护，您盈利12果瞄币，再接再厉哦！", time:"2017-09-15"});
		ac.addItem({type:"leaveMsg", content:"留言人：木蚂蚁 \n看好你的水果，明天我又来偷，哈哈哈哈哈", time:"2017-09-15"});
		this.list.dataProvider = ac;


		this.recordList.itemRenderer = RadioRecordItem;
		this.recordList.useVirtualLayout = false;
		var recordAc = new eui.ArrayCollection();
		recordAc.addItem({});
		recordAc.addItem({});
		recordAc.addItem({});
		recordAc.addItem({});
		recordAc.addItem({});
		recordAc.addItem({});
		recordAc.addItem({});
		recordAc.addItem({});
		recordAc.addItem({});
		recordAc.addItem({});
		recordAc.addItem({});
		recordAc.addItem({});
		recordAc.addItem({});
		recordAc.addItem({});
		recordAc.addItem({});
		recordAc.addItem({});
		this.recordList.dataProvider = recordAc;
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.radioBtn, egret.TouchEvent.TOUCH_TAP, this.clickRadio, this);
		this.registerEvent(this.recordBtn, egret.TouchEvent.TOUCH_TAP, this.clickRecord, this);
	}
	private clickRadio()
	{
		console.log("radio");
		this.radioGroup.visible = true;
		this.recordGroup.visible = false;
	}
	private clickRecord()
	{
		console.log("record");
		this.radioGroup.visible = false;
		this.recordGroup.visible = true;
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}