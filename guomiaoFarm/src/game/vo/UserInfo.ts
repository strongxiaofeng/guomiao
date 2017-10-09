module vo {
	/**用户信息 */
	export class UserInfo{
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
		/**是否激活 */
		public active: number;
		/**标识一个用户 */
		public token: number;
	}
}