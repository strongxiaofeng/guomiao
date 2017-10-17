class AddressListItem extends AItemRenderer{
	private nameTxt: eui.Label;
	private numTxt: eui.Label;
	private addressTxt: eui.Label;
	private editTxt: eui.Label;
	private deleteTxt: eui.Label;
	private editIcon: eui.Image;
	private deleteIcon: eui.Image;
	private selectIcon: eui.Image;
	public constructor() {
		super();
		this.skinName = "resource/skins/addressItem.exml";
	}

	
	protected onAdd()
	{
		this.editTxt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEdit, this);
		this.editIcon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEdit, this);
		this.deleteTxt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDelete, this);
		this.deleteIcon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDelete, this);
		this.selectIcon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelect, this);
	}
	protected dataChanged()
	{
		var data = <vo.AddressItem>this.data;
		
		this.nameTxt.text = data.realname;
		this.numTxt.text = data.phone;
		this.addressTxt.text = data.address;
		this.selectIcon.source = data.is_default ? "selected_png" : "select_no_png";               
	}
	private onEdit()
	{
		console.log(' 编辑');
	}
	private onDelete()
	{
		var data = <vo.AddressItem>this.data;
		GameController.getInstance().deleteAddress(data.id);
	}
	private onSelect()
	{
		var data = <vo.AddressItem>this.data;
		GameController.getInstance().setDefaultAddress(data.id);
	}
	protected onRemove()
	{
		this.editTxt.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onEdit, this);
		this.editIcon.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onEdit, this);
		this.deleteTxt.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onDelete, this);
		this.deleteIcon.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onDelete, this);
		this.selectIcon.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelect, this);
	}

}