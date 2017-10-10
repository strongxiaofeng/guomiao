module vo {
	/**用户信息 */
	export class UserInfo{
		/**是否激活 */
		public active: number;
		public id: string;
		public openid: string;
		public nickname: string;
		public avatar: string;
		public gold: number;
		public level: number;
		/**贡献度 */
		public exp: number;
		/**总贡献度 */
		public total_exp: number;
		/**点赞次数 */
		public thumbs_up: number;
		/**标识一个用户 */
		public token: string;
		public created_at: number;
		public updated_at: number;
	}
}