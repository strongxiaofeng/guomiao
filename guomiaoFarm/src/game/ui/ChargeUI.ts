class ChargeUI extends BaseUI{
	private moneyTxt: eui.Label;
	private inputMoney: eui.EditableText;
	private choice1: eui.Image;
	private choice2: eui.Image;
	private choice3: eui.Image;
	private payTxt: eui.Label;
	private sureBtn: eui.Button;
	private chargeNum: number;
	public constructor() {
		super();
		this.skinName = "resource/skins/charge.exml";
	}
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
	}
	/**初始监听 */
	protected initListener()
	{
		console.log('init charge listener');
		this.registerEvent(this.choice1, egret.TouchEvent.TOUCH_TAP, this.clickChoice1, this);
		this.registerEvent(this.choice2, egret.TouchEvent.TOUCH_TAP, this.clickChoice2, this);
		this.registerEvent(this.choice3, egret.TouchEvent.TOUCH_TAP, this.clickChoice3, this);
		this.registerEvent(this.inputMoney, egret.TouchEvent.TOUCH_TAP, this.changeInput, this);
		this.registerEvent(this.sureBtn, egret.TouchEvent.TOUCH_TAP, this.sure, this);
	}
	private changeInput()
	{
		this.chargeNum = parseInt(this.inputMoney.text);
		this.choice1.source = "chargeChoiceBg_png";
		this.choice2.source = "chargeChoiceBg_png";
		this.choice3.source = "chargeChoiceBg_png";
	}
	private clickChoice1()
	{
		this.chargeNum = 100;
		this.choice1.source = "chargeChoiceBg_s_png";
		this.choice2.source = "chargeChoiceBg_png";
		this.choice3.source = "chargeChoiceBg_png";
	}
	private clickChoice2()
	{
		this.chargeNum = 300;
		this.choice1.source = "chargeChoiceBg_png";
		this.choice2.source = "chargeChoiceBg_s_png";
		this.choice3.source = "chargeChoiceBg_png";
	}
	private clickChoice3()
	{
		this.chargeNum = 500;
		this.choice1.source = "chargeChoiceBg_png";
		this.choice2.source = "chargeChoiceBg_png";
		this.choice3.source = "chargeChoiceBg_s_png";
	}
	private sure()
	{
		console.log("确定充值 "+this.chargeNum);
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}