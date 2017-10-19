module vo {
	export class FriendRequests {
		public list: Array<FriendRequestsItem>;
	}

	export class FriendRequestsItem{
		public be_gold: string;
		public be_level: string;
		public be_nickname: string;
		public be_total_exp: string;
		public be_user_id: string;
		public created_at: string;
		public gold: string;
		public id: string;
		public level: string;
		public nickname: string;
		public total_exp: string;
		public updated_at: string;
		public user_id: string;
	}
}