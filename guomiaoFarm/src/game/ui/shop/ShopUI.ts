class ShopUI extends BaseUI{
	private chooseSeed: eui.Image;
	private chooseTool: eui.Image;
	private chooseFruit: eui.Image;
	private seedGroup: eui.Group;
	private toolGroup: eui.Group;
	private fruitGroup: eui.Group;
	private seedList: eui.List;
	private toolList: eui.List;
	private fruitList: eui.List;

	public constructor() {
		super();
		this.skinName = "resource/skins/shop.exml";
	}
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();

		var ac = new eui.ArrayCollection();
		ac.addItem({});
		ac.addItem({});
		ac.addItem({});
		ac.addItem({});
		ac.addItem({});
		ac.addItem({});
		this.seedList.itemRenderer = ShopSeedItem;
		this.seedList.dataProvider = ac;

		this.toolList.itemRenderer = ShopToolItem;
		this.toolList.dataProvider = ac;

		this.fruitList.itemRenderer = ShopFruitItem;
		this.fruitList.dataProvider = ac;

		UIManager.openUI(UIConst.ShopCarDetailUI, LayerManager.Layer_Tip);
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.chooseSeed, egret.TouchEvent.TOUCH_TAP, this.clickChooseSeed, this);
		this.registerEvent(this.chooseTool, egret.TouchEvent.TOUCH_TAP, this.clickChooseTool, this);
		this.registerEvent(this.chooseFruit, egret.TouchEvent.TOUCH_TAP, this.clickChooseFruit, this);
	}
	/**选择种子页 */
	private clickChooseSeed()
	{
		this.chooseSeed.source = "choice_png";
		this.chooseTool.source = "choice_not_png";
		this.chooseFruit.source = "choice_not_png";
		this.seedGroup.visible = true;
		this.toolGroup.visible = false;
		this.fruitGroup.visible = false;
	}
	/**选择工具页 */
	private clickChooseTool()
	{
		this.chooseSeed.source = "choice_not_png";
		this.chooseTool.source = "choice_png";
		this.chooseFruit.source = "choice_not_png";
		this.seedGroup.visible = false;
		this.toolGroup.visible = true;
		this.fruitGroup.visible = false;
	}
	/**选择水果页 */
	private clickChooseFruit()
	{
		this.chooseSeed.source = "choice_not_png";
		this.chooseTool.source = "choice_not_png";
		this.chooseFruit.source = "choice_png";
		this.seedGroup.visible = false;
		this.toolGroup.visible = false;
		this.fruitGroup.visible = true;
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
		UIManager.closeUI(UIConst.ShopCarDetailUI);
	}
}