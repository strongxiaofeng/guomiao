module vo {
	/**好友列表 带排行功能 */
	export class FriendListInfo {
		/**总共数量 */
		public total_count: number;
		public offset: number;
		public page_count: number;
		public list: Array<FriendListItem>;
	}
	
	export class FriendListItem{
		public be_gold: string;
		public be_level: string;
		public be_nickname: string;
		public be_steal: string;
		public be_total_exp: string;
		public be_user_id: string;
		public created_at: string;
		public gold: string;
		public id: string;
		public index: string;
		public level: string;
		public nickname: string;
		public ripe: string;
		public total_exp: string;
		public updated_at: string;
		public user_id: string;
	}

}