class CoinDetailUI extends BaseUI{
	private rightBtn: eui.Button;
	private totalContri: eui.Label;
	private detailTxtIcon: eui.Image;
	private detailTxt: eui.Label;
	private coinDetailList: eui.List;
	public constructor() {
		super();
		this.skinName = "resource/skins/coinDetail.exml";
	}

	/**初始界面 */
	public initSetting()
	{
		super.initSetting();

		let ac = new eui.ArrayCollection();
		ac.addItem({type:"充值",num:2000, date:"2017-09-30"});
		ac.addItem({type:"充值",um:502132132, date:"2017-08-31"});
		ac.addItem({type:"充值",num:5, date:"2017-07-02"});
		ac.addItem({type:"充值",num:20, date:"2017-09-30"});
		ac.addItem({type:"充值",num:800, date:"2017-09-30"});
		ac.addItem({type:"充值",num:6595, date:"2017-09-30"});

		this.coinDetailList.itemRenderer = CoinDetailItem;
		this.coinDetailList.dataProvider = ac;
		ac.refresh();
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.rightBtn, egret.TouchEvent.TOUCH_TAP, this.goContributeDetail, this);
		this.registerEvent(this.detailTxtIcon, egret.TouchEvent.TOUCH_TAP, this.goCoinDetailDesc, this);
		this.registerEvent(this.detailTxt, egret.TouchEvent.TOUCH_TAP, this.goCoinDetailDesc, this);
	}
	private goContributeDetail()
	{
		UIManager.openUI(UIConst.ContributeDetailUI);
	}
	private goCoinDetailDesc()
	{
		UIManager.openUI(UIConst.CoinDetailDescUI, LayerManager.Layer_Tip);
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}