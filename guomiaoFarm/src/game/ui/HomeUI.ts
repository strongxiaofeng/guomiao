class HomeUI extends BaseUI{
	private signBtn: eui.Button;
	private storeBtn: eui.Button;
	private btn_radio: eui.Button;
	private btn_shop: eui.Button;
	private btn_charge: eui.Button;
	private btn_rank: eui.Button;
	private noticeGroup: eui.Group;
	private noticeLabel: eui.Label;
	private btn_game: eui.Button;
	private btn_gift: eui.Button;
	private btn_weed: eui.Button;
	private btn_fertilizer: eui.Button;
	private btn_water: eui.Button;
	private btn_seed: eui.Button;
	private waterCount: eui.Image;
	public constructor() {
		super();
		this.skinName = "resource/skins/home.exml";
	}
	
	/**初始界面 */
	public initSetting()
	{
		super.initSetting();
	}
	/**初始监听 */
	protected initListener()
	{
	}
	/**关闭界面 */
	public dispose()
	{
		super.dispose();
	}
}