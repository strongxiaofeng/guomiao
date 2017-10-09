module vo {
	export class ContributeDetailInfo {
		/**总贡献度 */
		public total_score: number;
		/**总共数量 */
		public total_count: number;
		public offset: number;
		public page_count: number;
		public list: Array<ContributeDetailItem>;
	}

	export class ContributeDetailItem{
		public id: number;
		public user_id: number;
		/**总分 */
		public total_score: number;
		/**每日标记 */
		public day_time: number;
		/**分享次数 */
		public share_count: number;
		/**自己浇水次数 */
		public self_water_count: number;
		/**好友浇水次数 */
		public friend_water_count: number;
		/**除草次数 */
		public grass_count: number;
		/**施肥次数 */
		public fer_count: number;
		/**偷取次数 */
		public steal_count: number;
		/**被偷取次数 */
		public be_steal_count: number;
		public created_at: number;
		public updated_at: number;
	}
}