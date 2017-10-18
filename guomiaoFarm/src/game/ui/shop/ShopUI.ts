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

	private ac_seed: eui.ArrayCollection;
	private ac_tool: eui.ArrayCollection;
	private ac_fruit: eui.ArrayCollection;

	public constructor() {
		super();
		this.skinName = "resource/skins/shop.exml";

	}
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
		UIManager.openUI(UIConst.ShopCarDetailUI, LayerManager.Layer_Tip);
		
		this.ac_seed = new eui.ArrayCollection;
		this.ac_tool = new eui.ArrayCollection;
		this.ac_fruit = new eui.ArrayCollection;
		this.seedList.itemRenderer = ShopSeedItem;
		this.toolList.itemRenderer = ShopToolItem;
		this.fruitList.itemRenderer = ShopFruitItem;
		this.seedList.dataProvider = this.ac_seed;
		this.toolList.dataProvider = this.ac_tool;
		this.fruitList.dataProvider = this.ac_fruit; 
		this.seedList.useVirtualLayout = false; 
		this.toolList.useVirtualLayout = false; 
		this.fruitList.useVirtualLayout = false; 

		var list = GameModel.getInstance().getShopItems();
		this.ac_seed.removeAll();
		this.ac_tool.removeAll();
		this.ac_fruit.removeAll();
		for(var i=0; i<list.length; i++)
		{
			var data = list[i];
			if(data.type1 == 1) this.ac_seed.addItem(data);
			else if(data.type1 == 2) this.ac_tool.addItem(data);
			else if(data.type1 == 3) this.ac_fruit.addItem(data);
		}
		this.ac_tool.addItem(null);
		this.ac_seed.refresh();
		this.ac_tool.refresh();
		this.ac_fruit.refresh();
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.chooseSeed, egret.TouchEvent.TOUCH_TAP, this.clickChooseSeed, this);
		this.registerEvent(this.chooseTool, egret.TouchEvent.TOUCH_TAP, this.clickChooseTool, this);
		this.registerEvent(this.chooseFruit, egret.TouchEvent.TOUCH_TAP, this.clickChooseFruit, this);

		this.addRegister(NotifyConst.Notify_ShopCar, this.onShopCarChange, this);
	}
	/**购物车数据变化 */
	private onShopCarChange()
	{
		let data =  GameModel.getInstance().getShopCarData();
		for(var i=0; i<this.ac_seed.length; i++)
		{
			(<ShopSeedItem>this.seedList.getChildAt(i)).updateShopCarData(data);
		}
		for(i=0; i<this.ac_fruit.length; i++)
		{
			(<ShopFruitItem>this.fruitList.getChildAt(i)).updateShopCarData(data);
		}
		for(i=0; i<this.ac_tool.length; i++)
		{
			(<ShopToolItem>this.toolList.getChildAt(i)).updateShopCarData(data);
		}
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
		this.removeRegister(this);
	}
}