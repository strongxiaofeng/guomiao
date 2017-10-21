class SkinItem extends AItemRenderer{
	private nameTxt: eui.Label;
	private selectedImg: eui.Image;
	public constructor() {
		super();
		this.skinName = "resource/skins/setSkinTypeItem.exml";
	}
	
	protected onAdd()
	{
		
	}
	protected dataChanged()
	{
		if(this.data)
		{
			this.nameTxt.text = this.data.name;
			if(this.data.isDefault)
			{
				this.selectedImg.visible = true;
			}
			else
			{
				this.selectedImg.visible = false;
			}
		}
	}
	protected onRemove()
	{
		
	}
}