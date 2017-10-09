module vo {
	/**好友列表 带排行功能 */
	export class FriendListInfo {
		/**总共数量 */
		public total_count: number;
		public offset: number;
		public page_count: number;
		public list: Array<UserInfo>;
	}

}