class UIManager {
	/**存放打开过的UI */
	private static pool:any = {};

	/**打开一个UI */
	public static openUI(name:string, layer:number = LayerManager.Layer_UI)
	{
		if(layer == LayerManager.Layer_UI) this.checkLastUI();

		/**根据ui名获取UI */
		let ui;
		if(this.pool[name])
		{
			ui = <BaseUI>this.pool[name];
			LayerManager.getInstance().addUI(ui, layer);
			ui.initSetting();
		}
		else
		{
			let cls = egret.getDefinitionByName(name);
			ui = new cls();
			ui.layer = layer;
			this.pool[name] = ui;
			LayerManager.getInstance().addUI(ui, layer);
		}
		
	}
	//如果要在UI层打开新UI，关闭之前的UI层的UI
	private static checkLastUI()
	{
		for(let key in this.pool)
		{
			let poolUI:BaseUI = this.pool[key];
			if(poolUI.layer == LayerManager.Layer_UI && poolUI.isShow)
			{
				poolUI.dispose();
			}
		}
	}
	/**判断某个UI是否打开 */
	public static isUIOpen(name): boolean
	{
		if(this.pool[name])
		{
			return (<BaseUI>this.pool[name]).isShow;
		}
		return false;
	}
	/**关闭指定的UI */
	public static closeUI(name)
	{
		if(this.pool[name])
		{
			(<BaseUI>this.pool[name]).dispose();
		}
	}
}