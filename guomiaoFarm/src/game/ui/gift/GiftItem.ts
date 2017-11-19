class GiftItem extends AItemRenderer{
	private txt1: eui.Label;
	private txt2: eui.Label;
	private getAbleImg: eui.Image;
	public constructor() {
		super();
		this.skinName = "resource/skins/giftItem.exml";
	}
	protected onAdd()
	{
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickItem, this);
	}
	protected dataChanged()
	{
		var data = <vo.Gift_bagItem>this.data;
		this.txt1.text = "邀请"+ data.invitation +"个好友";
		this.txt2.text = "可获得"+ data.gold +"个喵币";
		this.getAbleImg.visible = data.share ? false : true;
	}
	private clickItem()
	{
		UIManager.openUI(UIConst.TipGetCoinUI, LayerManager.Layer_Tip);
	}
	protected onRemove()
	{
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickItem, this);
	}
}