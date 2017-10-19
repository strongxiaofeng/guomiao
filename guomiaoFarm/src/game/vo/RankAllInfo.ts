module vo {
	export class RankAllInfo {
		public list: Array<RankAllItem>;
		public offset: number;
		public page_count: number;
		public total_count: number;
	}

	export class SearchUserResult
	{
		public list: Array<RankAllItem>;
	}

	export class RankAllItem{
		public active: string;
		public avatar: string;
		public created_at: string;
		public exp: string;
		public gold: string;
		public id: string;
		public index: string;
		public level: string;
		public nickname: string;
		public openid: string;
		public thumbs_up: string;
		public total_exp: string;
		public updated_at: string;
		
	}
}