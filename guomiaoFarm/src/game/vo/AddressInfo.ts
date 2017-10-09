module vo {
	export class AddressInfo {
		public list: Array<AddressItem>;
	}

	export class AddressItem{
		public id: number;
		public user_id: number;
		/**真实姓名 */
		public realname: number;
		public phone: number;
		public address: number;
		/**默认 */
		public is_default: number;
		public created_at: number;
		public updated_at: number;

	}
}