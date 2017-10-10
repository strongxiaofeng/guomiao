class BaseUI extends eui.Component{
	private eventPool:Array<EventObj> = [];
	public isShow: boolean;
	public layer:number;
	public constructor() {
		super();

		this.addEventListener(egret.Event.COMPLETE, this.initSetting, this);
	}
	/**注册事件 会在dispose时自动移除 */
	protected registerEvent(target:any, type:any, callback:Function, callbackobj:any)
	{
		target.addEventListener(type, callback, callbackobj);
		this.eventPool.push({target:target, type:type, callback:callback, callbackobj:callbackobj});
	}
	/**移除全部事件 */
	private clearEvent()
	{
		if(this.eventPool.length>0)
		{
			for(let i=0; i<this.eventPool.length; i++)
			{
				let target = this.eventPool[i].target;
				let type = this.eventPool[i].type;
				let callback = this.eventPool[i].callback;
				let callbackobj = this.eventPool[i].callbackobj;
				target.removeEventListener(type, callback, callbackobj);
			}
		}
	}
	/**初始界面 */
	public initSetting()
	{
		this.isShow = true;
		this.initListener();
	}
	/**初始监听 */
	protected initListener()
	{
	}
	/**注册通知 由子类调用*/
	protected addRegister(type:string, callback:Function, callbackobj:any)
	{
		NotifyManager.getInstance().registerNotify(type, callback, callbackobj);
	}
	/**移除通知 由子类调用*/
	protected removeRegister(obj: any)
	{
		NotifyManager.getInstance().removeRegister(obj);
	}

	/**关闭界面 */
	public dispose()
	{
		this.isShow = false;
		this.clearEvent();
		if(this.parent) this.parent.removeChild(this);
	}

}

class EventObj{
	target: any;
	type: any;
	callback: Function;
	callbackobj: any;
}