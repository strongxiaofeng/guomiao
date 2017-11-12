class HomeUI extends BaseUI {
	private levelTxt: eui.Label;
	private headBg: eui.Image;
	private signBtn: eui.Button;
	private storeBtn: eui.Button;
	private btn_radio: eui.Button;
	private btn_shop: eui.Button;
	private btn_charge: eui.Button;
	private btn_rank: eui.Button;
	private noticeGroup: eui.Group;
	private noticeLabel: eui.Label;
	private noticeMask: eui.Rect;
	private btn_game: eui.Button;
	private btn_gift: eui.Button;
	private btn_weed: eui.Button;
	private btn_fertilizer: eui.Button;
	private btn_water: eui.Button;
	private btn_seed: eui.Button;
	private waterCount: eui.Image;

	private tree1: eui.Image;
	private tree2: eui.Image;
	private tree3: eui.Image;
	private tree4: eui.Image;
	private tree5: eui.Image;
	private tree6: eui.Image;
	private tree7: eui.Image;
	private tree8: eui.Image;
	private tree9: eui.Image;
	private tree10: eui.Image;
	private tree11: eui.Image;
	private tree12: eui.Image;

	private seedGroup: eui.Group;
	private seed1: eui.Image;
	private seed2: eui.Image;
	private seed3: eui.Image;
	/**正在播种的图 */
	private seedingImg: eui.Image;

	private intervalId: any;
	private clickWaterCount = 0;

	public constructor() {
		super();
		this.skinName = "resource/skins/home.exml";
	}

	/**初始界面 */
	public initSetting() {
		super.initSetting();
		this.clickWaterCount = 0;
		this.levelTxt.text = "Lv" + GameModel.getInstance().getLevel();
		this.noticeLabel.text = "";
		this.noticeLabel.mask = this.noticeMask;
		this.noticeGroup.visible = false;
		this.seedingImg.visible = false;
		this.seedGroup.visible = false;

		//循环播放假公告
		this.showNotice("这是一条测试公告这是一条测试公告一条测试公告");
		setInterval(() => {
			this.showNotice("这是一条测试公告");
		}, 20000);

		this.updateLand(1);
		//昨日排行只请求一次
		if (!GameModel.getInstance().isYesterdayRankGot) GameController.getInstance().getYesterdayHarvestRank();
		GameController.getInstance().getFarmInfo();
		GameController.getInstance().getAddressList();
		GameController.getInstance().getStoreInfo();
		GameController.getInstance().getHonorList();

		this.intervalId = setInterval(() => { this.computeTime() }, 100);
	}
	/**展示一条公告 */
	public showNotice(str: string) {
		this.noticeGroup.visible = true;
		this.noticeLabel.text = str;
		this.noticeLabel.x = 537;
		egret.callLater(() => {
			var textWidth = this.noticeLabel.textWidth;
			var time = (537 - 64 + textWidth) * 15;
			egret.Tween.get(this.noticeLabel)
				.to({ x: 64 - textWidth }, time)
				.wait(1000)
				.call(() => {
					egret.Tween.removeTweens(this.noticeLabel);
					this.noticeGroup.visible = false;
				}, this)
		}, this)

	}
	/**初始监听 */
	protected initListener() {
		this.registerEvent(this.headBg, egret.TouchEvent.TOUCH_TAP, this.clickHead, this);
		this.registerEvent(this.signBtn, egret.TouchEvent.TOUCH_TAP, this.clickSign, this);
		this.registerEvent(this.storeBtn, egret.TouchEvent.TOUCH_TAP, this.clickStore, this);
		this.registerEvent(this.btn_radio, egret.TouchEvent.TOUCH_TAP, this.clickRadio, this);
		this.registerEvent(this.btn_shop, egret.TouchEvent.TOUCH_TAP, this.clickShop, this);
		this.registerEvent(this.btn_charge, egret.TouchEvent.TOUCH_TAP, this.clickCharge, this);
		this.registerEvent(this.btn_rank, egret.TouchEvent.TOUCH_TAP, this.clickRank, this);
		this.registerEvent(this.btn_game, egret.TouchEvent.TOUCH_TAP, this.clickGame, this);
		this.registerEvent(this.btn_gift, egret.TouchEvent.TOUCH_TAP, this.clickGift, this);
		this.registerEvent(this.btn_weed, egret.TouchEvent.TOUCH_TAP, this.clickWeed, this);
		this.registerEvent(this.btn_fertilizer, egret.TouchEvent.TOUCH_TAP, this.clickFertilizer, this);
		this.registerEvent(this.btn_water, egret.TouchEvent.TOUCH_TAP, this.clickWater, this);
		this.registerEvent(this.btn_seed, egret.TouchEvent.TOUCH_TAP, this.clickSeed, this);

		this.registerEvent(this.tree1, egret.TouchEvent.TOUCH_TAP, this.clickTree, this);
		this.registerEvent(this.tree2, egret.TouchEvent.TOUCH_TAP, this.clickTree, this);
		this.registerEvent(this.tree3, egret.TouchEvent.TOUCH_TAP, this.clickTree, this);
		this.registerEvent(this.tree4, egret.TouchEvent.TOUCH_TAP, this.clickTree, this);
		this.registerEvent(this.tree5, egret.TouchEvent.TOUCH_TAP, this.clickTree, this);
		this.registerEvent(this.tree6, egret.TouchEvent.TOUCH_TAP, this.clickTree, this);
		this.registerEvent(this.tree7, egret.TouchEvent.TOUCH_TAP, this.clickTree, this);
		this.registerEvent(this.tree8, egret.TouchEvent.TOUCH_TAP, this.clickTree, this);
		this.registerEvent(this.tree9, egret.TouchEvent.TOUCH_TAP, this.clickTree, this);
		this.registerEvent(this.tree10, egret.TouchEvent.TOUCH_TAP, this.clickTree, this);
		this.registerEvent(this.tree11, egret.TouchEvent.TOUCH_TAP, this.clickTree, this);
		this.registerEvent(this.tree12, egret.TouchEvent.TOUCH_TAP, this.clickTree, this);

		this.registerEvent(this.seedGroup, egret.TouchEvent.TOUCH_TAP, ()=>{this.seedGroup.visible=false;}, this);
		this.registerEvent(this.seed1, egret.TouchEvent.TOUCH_TAP, this.clickSeedItem, this);
 

		this.addRegister(NotifyConst.Notify_LandInfo, this.onLandInfo, this);
		this.addRegister(NotifyConst.Notify_YesterdayHarvestRank, this.onYesterdayHarvestRank, this);
		this.addRegister(NotifyConst.Notify_SeedResult, this.onSeed, this);
		this.addRegister(NotifyConst.Notify_GatherResult, this.onGather, this);
		this.addRegister(NotifyConst.Notify_OperLandResult, this.onOper, this);

	}
	/**昨日收成排行 */
	private onYesterdayHarvestRank(info: vo.YesterdayHarvestRankInfo) {
		console.log('主界面收到昨日排行 ', info);
		GameModel.getInstance().isYesterdayRankGot = true;
		UIManager.openUI(UIConst.LastHarvestRankUI, LayerManager.Layer_Tip);
	}
	/**农田信息 */
	private onLandInfo(info: vo.FarmInfo) {
		// console.log("农田信息",info);
		if (!info) return;
		var data = info.list[0];
		if (data.crop_id == 0) {
			this.updateLand(0);
		}
		else {
			var pass = GameModel.getInstance().getServerTime() - data.crop_start_time;
			if (pass < GameModel.getInstance().getTreeYoungTime(data.crop_id)) {
				this.updateLand(1);
			}
			else if (pass < GameModel.getInstance().getTreeGrowTime(data.crop_id)) {
				this.updateLand(2);
			}
			else if (pass < GameModel.getInstance().getTreeRipeTime(data.crop_id)) {
				this.updateLand(3);
			}
			else {
				this.updateLand(4);
			}
		}
	}
	/**刷新种植状态 0没有种植 1种子 2幼苗 3成长 4成熟*/
	private updateLand(n: number) {
		for (var i = 1; i <= 12; i++) {
			if (n == 0) 
			{
				this["tree" + i].source = "";
			}
			else if (n == 1) 
			{
				this["tree" + i].source = "tree_seed_png";
			}
			else if (n == 2) 
			{
				this["tree" + i].source = "tree_young_png";
			}
			else if (n == 3) 
			{
				this["tree" + i].source = "tree_grow_png";
			}
			else if (n == 4) 
			{
				this["tree" + i].source = "tree_ripe_png";
			}
		}
	}
	/**播种动画 */
	private showSeeding()
	{
		this.seedingImg.visible = true;
		this.seedingImg.alpha = 1;
		this.seedingImg.scaleX = 1;
		this.seedingImg.scaleY = 1;
		egret.Tween.get(this.seedingImg)
			.to({scaleX: 1.2, scaleY: 1.2, alpha:0.5}, 500)
			.to({alpha:0.01},500)
			.call(()=>{
				this.seedingImg.visible = false;
				this.seedingImg.alpha = 1;
				this.seedingImg.scaleX = 1;
				this.seedingImg.scaleY = 1;
			}, this)
	}
	/**个人 */
	private clickHead() {
		UIManager.openUI(UIConst.UserMenuUI);
		UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
	}
	/**签到 */
	private clickSign() {
		UIManager.openUI(UIConst.SignUI, LayerManager.Layer_Tip);
	}
	/**仓库 */
	private clickStore() {
		UIManager.openUI(UIConst.StoreUI, LayerManager.Layer_Tip);
	}
	/**广播 */
	private clickRadio() {
		UIManager.openUI(UIConst.RadioUI);
		UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
	}
	/**商店 */
	private clickShop() {
		UIManager.openUI(UIConst.ShopUI);
		UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
	}
	/**充值 */
	private clickCharge() {
		UIManager.openUI(UIConst.ChargeUI);
		UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
	}
	/**排行 */
	private clickRank() {
		UIManager.openUI(UIConst.RankFriendContributeUI);
		UIManager.openUI(UIConst.TopBarUI, LayerManager.Layer_Top);
	}
	/**小游戏 */
	private clickGame() {
	}
	/**礼物呀 */
	private clickGift() {
		UIManager.openUI(UIConst.GiftUI, LayerManager.Layer_Tip);
	}
	/**除草 */
	private clickWeed() {
		GameController.getInstance().sendOperLand(5);
	}
	/**施肥 */
	private clickFertilizer() {
		GameController.getInstance().sendOperLand(6);
	}

	/**浇水 */
	private clickWater() {
		if (this.clickWaterCount == 0) {
			GameController.getInstance().sendOperLand(3);
		}
		else {
			UIManager.openUI(UIConst.InviteWaterUI, LayerManager.Layer_Tip);
		}
		this.clickWaterCount++;
	}
	/**除草 施肥 浇水 返回 */
	private onOper(obj: BaseResponse) {
		console.log("播种 浇水 施肥 返回 ", obj);
		if (obj.status == 0) {

		}
	}
	/**播种 打开种子选择面板*/
	private clickSeed() {
		this.seedGroup.visible = true;
	}
	/**播种一个种子 种仓库里的id*/
	private clickSeedItem() {
		this.seedGroup.visible = false;
		var seedid = GameModel.getInstance().getSeedId();
		GameController.getInstance().sendSeed(seedid);
		this.showSeeding();
	}
	/**播种返回*/
	private onSeed() {
		GameController.getInstance().getFarmInfo();
	}
	/**鼠标点植物 */
	private clickTree() {
		var landinfo = GameModel.getInstance().getLandInfo();
		if(!landinfo || !landinfo.list) return;

		var data = landinfo.list[0];
		var pass = GameModel.getInstance().getServerTime() - data.crop_start_time;
		if (data.is_ripe || pass >= GameModel.getInstance().getTreeRipeTime(data.crop_id)) {
			//已经成熟 可以收割
			GameController.getInstance().sendGather();
		}
		else {
			console.log('还不能收割');
		}

	}
	/**收割返回 */
	private onGather(obj: BaseResponse) {
		console.log("收割返回 ", obj);
		if (obj.status == 0) {
			var count = (<vo.HarvestInfo>obj.data).count;
			var id = (<vo.HarvestInfo>obj.data).item_id;
			var item = GameModel.getInstance().getItemById(parseInt(id));
			NotifyManager.getInstance().sendNotify(NotifyConst.Notify_Green, count + " " + item.name);
			GameController.getInstance().getFarmInfo();
		}
	}

	/**一直计算生长期 */
	private computeTime() {
		var landinfo = GameModel.getInstance().getLandInfo();
		this.onLandInfo(landinfo);
	}
	/**关闭界面 */
	public dispose() {
		super.dispose();
		this.removeRegister(this);
		clearInterval(this.intervalId);
	}
}