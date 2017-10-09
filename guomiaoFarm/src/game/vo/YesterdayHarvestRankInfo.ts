module vo {
	export class YesterdayHarvestRankInfo {
		public myInfo: YesterdayHarvestRankItem;
		public list: Array<YesterdayHarvestRankItem>;
	}

	export class YesterdayHarvestRankItem{
		public id: number;
		public user_id: number;
		public nickname: number;
		/**头像 */
		public avatar: number;
		/**收成 */
		public gold: number;
		/**上一天果币收成 */
		public last_gold: number;
		/**昨日凌晨时间戳 */
		public day_time: number;
		/**排名 */
		public index: number;
		public created_at: number;
		public updated_at: number;
	}
}