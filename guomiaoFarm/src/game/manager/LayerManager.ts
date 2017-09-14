class LayerManager {
	public constructor() {
	}
	private static _instance:LayerManager;
	public static getInstance()
	{
		if(!this._instance) this._instance = new LayerManager();
		return this._instance;
	}


	public static Layer_UI: number = 1;
	public static Layer_Top: number = 2;
	public static Layer_Tip: number = 3;
	private uiLayer: eui.Group;
	private topLayer: eui.Group;
	private tipLayer: eui.Group;

	/**初始层级 */
	public initLayer(root:eui.UILayer)
	{
		this.uiLayer = new eui.Group();
		this.topLayer = new eui.Group();
		this.tipLayer = new eui.Group();
		root.addChild(this.uiLayer);
		root.addChild(this.topLayer);
		root.addChild(this.tipLayer);
	}
	/**添加UI到舞台 */
	public addUI(ui:any, layer:number=1)
	{
		console.log("addui ",ui);
		var parent;
		switch(layer)
		{
			case LayerManager.Layer_UI:
				this.uiLayer.addChild(ui);
				break;
			case LayerManager.Layer_Top:
				this.topLayer.addChild(ui);
				break;
			case LayerManager.Layer_Tip:
				this.tipLayer.addChild(ui);
				break;
		}
	}
}