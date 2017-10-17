class SignUI extends BaseUI{
	private btn_close: eui.Image;
	private btn_sign: eui.Image;
	private sign1: eui.Image;
	private sign2: eui.Image;
	private sign3: eui.Image;
	private sign4: eui.Image;
	private sign5: eui.Image;
	private sign6: eui.Image;
	private sign7: eui.Image;
	public constructor() {
		super();
		this.skinName = "resource/skins/sign.exml";
	}
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
		GameController.getInstance().getSignList();
	}
	/**初始监听 */
	protected initListener()
	{
		this.registerEvent(this.btn_close, egret.TouchEvent.TOUCH_TAP, this.clickClose, this);
		this.registerEvent(this.btn_sign, egret.TouchEvent.TOUCH_TAP, this.clickSign, this);

		this.addRegister(NotifyConst.Notify_SignList, this.onSignList, this);
	}
	private onSignList(info: vo.SignInfo)
	{
		console.log('收到签到',info);
		for(var n=1; n<=7;n++)
		{
			this["sign"+n].source = "nosign"+n+"_png";
		}
		for(var i=0; i<info.list.length; i++)
		{
			var data = info.list[i];
			var day = this.getDay(data.week, data.day);
			this["sign"+day].source = "signed"+day+"_png";
		}
	}
	/**通过计算获取这一天是周几 2017-10-16 2017-10-17*/
	private getDay(week:string, day:string): number
	{
		var weekY = parseInt(week.split('-')[0]);
		var weekM = parseInt(week.split('-')[1]);
		var weekD = parseInt(week.split('-')[2]);
		var dayY = parseInt(day.split('-')[0]);
		var dayM = parseInt(day.split('-')[1]);
		var dayD = parseInt(day.split('-')[2]);

		if(weekY == dayY)
		{
			return this.getDaysByMonthAndDay(dayY, dayM, dayD) - this.getDaysByMonthAndDay(weekY, weekM, weekD) + 1;
		}
		else{
			return dayD+31-weekD;
		}

	}
	/**获取某一天是这一年的第几天 */
	private getDaysByMonthAndDay(y:number, m:number, d:number): number
	{
		var arr = [1,3,5,7,8,10,12];
		var days = 0;
		for(var i=1; i<m; i++)
		{
			if(arr.indexOf[i] > -1){
				days += 31;
			}
			else if(i==2)
			{
				if(y%4==0)
				{
					days += 29;
				}
				else{
					days += 28;
				}
			}
			else{
				days += 30;
			}
		}
		return days+ d;
	}
	private clickSign()
	{
		console.log('发出签到');
		GameController.getInstance().sendSign();
	}
	/**点击关闭 */
	private clickClose()
	{
		UIManager.closeUI(UIConst.SignUI);
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}