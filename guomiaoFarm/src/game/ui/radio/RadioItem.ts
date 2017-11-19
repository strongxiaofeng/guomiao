class RadioItem extends AItemRenderer{
	private contentGroup: eui.Group;
	private emptyGroup: eui.Group;

	private bg: eui.Image;
	private title: eui.Label;
	private time: eui.Label;
	private content: eui.Label;
	private okBtn: eui.Image;
	private detailBtn: eui.Image;
	private newMsgIcon: eui.Image;
	public constructor() {
		super();
		this.skinName = "resource/skins/radioItem.exml";
	}

	protected onAdd()
	{
		this.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickOK, this);
		this.detailBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickDetail, this);
	}
	/**{type:"system", content:"由于果农XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", time:"2017-09-15"} */
	protected dataChanged()
	{
		if(this.data)
		{
			//空格子 占位
			if(this.data.type == "empty")
			{
				this.contentGroup.visible = false;
				this.emptyGroup.visible = true;
				this.height = this.emptyGroup.height;
			}
			else{
				this.contentGroup.visible = true;
				this.emptyGroup.visible = false;
				this.height = this.contentGroup.height;
				
				this.time.text = this.data.time;
				this.content.text = this.data.content;
				if(this.data.type == "system")
				{
					this.bg.source = "sysMsgBg_png";
					this.title.text = "系统广播";
					this.okBtn.visible = true;
					this.detailBtn.visible = false;
					this.newMsgIcon.visible = true;
				}
				else if(this.data.type == "weather")
				{
					this.bg.source = "weatherBg_png";
					this.title.text = "气象预警";
					this.okBtn.visible = true;
					this.detailBtn.visible = false;
					this.newMsgIcon.visible = false;
				}
				else if(this.data.type == "report")
				{
					this.bg.source = "reportBg_png";
					this.title.text = "盈亏报告";
					this.okBtn.visible = false;
					this.detailBtn.visible = true;
					this.newMsgIcon.visible = false;
				}
				else if(this.data.type == "leaveMsg")
				{
					this.bg.source = "chatMsgBg_png";
					this.title.text = "好友留言";
					this.okBtn.visible = false;
					this.detailBtn.visible = true;
					this.newMsgIcon.visible = false;
				}
			}
		}

	}
	private clickOK()
	{
		
	}
	private clickDetail()
	{
		if(this.data.type == "report")
		{
			UIManager.openUI(UIConst.ContributeDetailUI);
		}
		else if(this.data.type == "leaveMsg")
		{
			UIManager.openUI(UIConst.LeaveMsgUI, LayerManager.Layer_Tip);
		}
	}
	protected onRemove()
	{
		this.okBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickOK, this);
		this.detailBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickDetail, this);
		
	}
}