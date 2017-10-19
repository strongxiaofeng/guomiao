class AddFriendUI extends BaseUI{
	private searchBtn: eui.Image;
	private input: eui.EditableText;
	private closeBtn: eui.Image;
	private list: eui.List;
	private ac: eui.ArrayCollection;
	public constructor() {
		super();
		this.skinName = "resource/skins/addFriend.exml";
	}

	public initSetting()
	{
		super.initSetting();
		this.ac = new eui.ArrayCollection();
		this.list.itemRenderer = SearchUserItem;
		this.list.useVirtualLayout = false;
		this.list.dataProvider = this.ac;
	}
	protected initListener()
	{
		this.registerEvent(this.searchBtn, egret.TouchEvent.TOUCH_TAP, this.search, this );
		this.registerEvent(this.closeBtn, egret.TouchEvent.TOUCH_TAP, this.dispose, this );

		this.addRegister(NotifyConst.Notify_FindUser, this.onSearch, this);
	}
	private search()
	{
		var str = this.input.text;
		GameController.getInstance().findUser(str);
	}
	private onSearch(info: vo.SearchUserResult)
	{
		console.log("search ",info)
		this.ac.removeAll();
		if(info && info.list && info.list.length>0)
		{
			for(var i=0; i<info.list.length; i++)
			{
				this.ac.addItem(info.list[i]);
			}
		}
		this.ac.refresh();
	}
	public dispose()
	{
		super.dispose();
		this.removeRegister(this);
	}
}