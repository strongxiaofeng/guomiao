class TipErrorUI extends BaseUI{
	private errorTxt: eui.Label;
	public constructor() {
		super();
		this.skinName = "resource/skins/tipError.exml";
	}

	public initSetting()
	{
		super.initSetting();
		this.errorTxt.text = "";
	}
	/**初始监听 */
	protected initListener()
	{
		this.addRegister(NotifyConst.Notify_Error, this.showError, this);
	}

	private showError(data)
	{
		egret.Tween.removeTweens(this.errorTxt);
		this.errorTxt.text = data;
		this.errorTxt.alpha = 1;
		egret.Tween.get(this.errorTxt)
			.to({alpha:0},2000)
			.call(()=>{
				this.errorTxt.alpha = 1;
				this.errorTxt.text = "";
				egret.Tween.removeTweens(this.errorTxt);
			})
	}
}