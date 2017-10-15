module vo {
	export class Config {
		public achievement_list: any;
		public common: any;
		public contribution_list: any;
		public crop_list: any;
		public gift_bag: any;
		public init: any;
		public itam_list: any;
		public pay_list: any;
		public player_level: any;
		public sign: any;
		public store_list: any;
	}

	/**成就 {id: 1, achievement_icon: 801000, name: "菜鸟喵", content: "参与1次游戏", complete: "1", gold_id: "11"} */
	export class Achievement_listItem{
		public id: number;
		public achievement_icon: number;
		public name: string;
		public content: string;
		public complete: string;
		public gold_id: string;
	}
	/**{id: 4, namg: "每块土地保底产量比例", type: 1, min: 60, max: 60} 
	 * {id: 7, namg: "干旱每次出现概率", type: 1, min: 20, max: 20}*/
	export class CommonItem{
		public id: number;
		public name: string;
		public type: number;
		public min: number;
		public max: number;
	}
	/** {id: 1, judge_share: 0, judge_water_count: 0, share_score: 0, water_score: 0, friend_water_count: 5,…}*/
	export class Contribution_listItem
	{
		public be_steal_count: number;
		public cold: number;
		public drought: number;
		public earthquake: number;
		public fer_count: number;
		public fer_score: number;
		public friend_water_count: number;
		public friend_water_score: number;
		public game_score: number;
		public grass_count: number;
		public grass_score: number;
		public id: number;
		public insect: number;
		public judge_share: number;
		public judge_water_count: number;
		public rainstorm: number;
		public share_score: number;
		public steal_count: number;
		public steal_score: number;
		public steal_sub_score: string;//"5;10;15"
		public water_score: number;
	}
	export class Crop_listItem{
		public grow_id: number;
		public grow_time: number;
		public id: number;
		public item_id: number;
		public name: string;
		public output: number;
		public ripe_id: number;
		public ripe_time: number;
		public seedling_id: number;
		public seedling_time: number;
	}
	/**{id: 1, gold: 10, invitation: 1, share: 1} */
	export class Gift_bagItem{
		public id: number;
		public gold: number;
		public invitation: number;
		public share: number;
	}
	/**{id: 1, gold: 99999, bg_image_id: 104004, land_num: 12} */
	export class InitItem{
		public id: number;
		public gold: number;
		public bg_image_id: number;
		public land_num: number;
	}
	export class Item_listItem{
		public effect_id: number;
		public graphical_id: number;
		public id: number;
		public name: string;
		public player_level: number;
		public sell_gold: number;
		public type1: number;
		public type2: number;
	}
	export class Pay_listItem{
		public id: number;
		public gold: number;
		public rmb: number;
	}
	export class Player_levelItem{
		public id: number;
		public exp: number;
	}
	export class SignItemConfig{
		public id: number;
		public days_id: number;
		public days: number;
		public accumulation: number;
	}
	export class Store_listItem{
		public id: number;
		public type: number;
		public item_id: number;
		public player_level: number;
		public gold: number;
	}
}