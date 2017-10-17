module vo {
	/**已签到信息 */
	export class SignInfo {
		public list: Array<SignItem>;
	}

	export class SignItem {
		public id: number;
		/**签到时间 */
		public sign_time: number;
		/**是否为补签 */
		public is_remedy : number;
		/**周一时间，标记每周 "2017-10-16"*/
		public week: string;
		/**日时间，标记每日 "2017-10-16"*/
		public day: string;
		public created_at: number;
		public updated_at: number;
	}
}