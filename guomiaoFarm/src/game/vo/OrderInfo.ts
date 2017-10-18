module vo {
	/**订单列表 */
	export class OrderInfo {
		public list: Array<OrderItem>;
		public offset: number;
		public page_count: number;
		public total_count: string;
	}
	/**一个订单 */
	export class OrderItem {
		public address_id: number;
		public created_at: number;
		/**是否删除 */
		public del: number;
		/**快递公司 */
		public express_company: number;
		/**快递单号 */
		public express_sn: number;
		public id: number;
		public list: Array<OrderOneItem>;
		/***订单号 */
		public ordersn: number;
		/**金币总价 */
		public price: number;
		/**状态 */
		public status: number;
		public updated_at: number;
		public user_id: number;
		public user_message: number;
	}
	/**一个订单中的一个物品 */
	export class OrderOneItem {
		public created_at: number;
		public gold: number;
		public id: number;
		public item_id: number;
		public name: string;
		public num: number;
		public order_id: number;
		public updated_at: number;
		public user_id: number;
	}
}