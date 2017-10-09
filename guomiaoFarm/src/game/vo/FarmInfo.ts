module vo {
	/**农场信息 */
	export class FarmInfo {
		public list: Array<FarmItem>;
	}

	export class FarmItem {
		public id: number;
		public user_id: number;
		/**农田在农场中的位置 */
		public position: number;
		/**种植的植物ID,0未种植 */
		public crop_id: number;
		/**农作物播种时间 */
		public crop_start_time: number;
		/**是否成熟,1:成熟 */
		public is_ripe: number;
		/**可以收获的果实斤数 */
		public crop_num: number;
		/**保底产量 */
		public crop_min_num: number;
		/**是否干旱;1:干旱; */
		public has_dry: number;
		/**是否有虫;1:有虫; */
		public has_bug: number;
		/**是否有草;1:有草; */
		public has_grass: number;
		/**是否收获 0.未收获 1.已收获 */
		public has_gather: number;
		/**上次病虫害随机时间 */
		public disease_rand_time: number;
		public created_at: number;
		public updated_at: number;
	}
}