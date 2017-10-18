module vo {
	/**徽章成就列表 */
	export class HonorInfo {
		public list: Array<HonorItem>;
	}

	export class HonorItem {
		public id: number;
		public user_id: number;
		/**配置id */
		public config_id: string;
		public name: number;
		public content: number;
		/**达成几次了 */
		public level: number;
		/**计数 */
		public count: number;
		/**最大计数 */
		public max_count: number;
		public created_at: number;
		public updated_at: number;
	}
}