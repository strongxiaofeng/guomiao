module vo {
	export class AnnounceInfo {
		public offset: any;
		/**总数量 */
		public total_count: any;
		public list: Array<AnnounceItem>;
	}

	export class AnnounceItem {
		public id: number;
		public title: number;
		public message: number;
		public created_at: number;
		public updated_at: number;
	}
}