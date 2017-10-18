class TipGreenUI extends BaseUI{
	private txt: eui.Label;
	public constructor() {
		super();
		this.skinName = "resource/skins/tipGreen.exml";
	}

	public initSetting()
	{
		super.initSetting();
		this.txt.text = "";
	}
	/**初始监听 */
	protected initListener()
	{
		this.addRegister(NotifyConst.Notify_Green, this.showGreen, this);
	}

	private showGreen(data)
	{
		egret.Tween.removeTweens(this.txt);
		this.txt.text = data;
		this.txt.verticalCenter = 0;
		egret.Tween.get(this.txt)
			.to({verticalCenter:-50},1000)
			.call(()=>{
				this.txt.text = "";
				this.txt.verticalCenter = 0;
				egret.Tween.removeTweens(this.txt);
			})
	}
}