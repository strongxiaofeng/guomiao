module vo {
	/**仓库 */
	export class StoreInfo {
		public list: Array<StoreItem>;
	}

	/**仓库中的单个物品 */
	export class StoreItem {
		public id: number;
		public user_id: number;
		/**物品配置ID */
		public item_id: number;
		public name: string;
		/**物品类型 */
		public type: number;
		public num: number;
		/**过期时间，0不过期 */
		public expire_time: number;
		public created_at: number;
		public updated_at: number;
	}
}