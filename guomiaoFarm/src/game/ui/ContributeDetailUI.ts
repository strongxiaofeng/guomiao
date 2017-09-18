class ContributeDetailUI extends BaseUI{
	private leftBtn: eui.Button;
	private totalContri: eui.Label;
	private detailTxt: eui.Label;
	private attriDetailList: eui.List;
	public constructor() {
		super();
		this.skinName = "resource/skins/contributeDetail.exml";
	}

	/**初始界面 */
	public initSetting()
	{
		super.initSetting();

		let ac = new eui.ArrayCollection();
		ac.addItem({num:2000, date:"2017-09-30"});
		ac.addItem({num:502132132, date:"2017-08-31"});
		ac.addItem({num:5, date:"2017-07-02"});
		ac.addItem({num:20, date:"2017-09-30"});
		ac.addItem({num:800, date:"2017-09-30"});
		ac.addItem({num:6595, date:"2017-09-30"});

		this.attriDetailList.itemRenderer = ContriButeDetailItem;
		this.attriDetailList.dataProvider = ac;
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.leftBtn, egret.TouchEvent.TOUCH_TAP, this.goCoinDetail, this);
	}
	private goCoinDetail()
	{
		UIManager.openUI(UIConst.CoinDetailUI);
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}