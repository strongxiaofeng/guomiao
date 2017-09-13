class UIManager {
	/**存放打开过的UI */
	private static pool:any = {};

	/**打开一个UI */
	public static addUI(name:string, layer:number = LayerManager.Layer_UI)
	{
		/**根据ui名获取UI */
		let ui;
		if(this.pool[name])
		{
			ui = this.pool[name];
		}
		else
		{
			let cls = egret.getDefinitionByName(name);
			ui = new cls();
			ui.layer = layer;
		}
		
		//如果要在UI层打开新UI，关闭之前的UI层的UI
		for(let key in this.pool)
		{
			let poolUI:BaseUI = this.pool[key];
			if(poolUI.layer == LayerManager.Layer_UI && poolUI.isShow)
			{
				poolUI.dispose();
			}
		}
		
		LayerManager.getInstance().addUI(ui, layer);
	}
}