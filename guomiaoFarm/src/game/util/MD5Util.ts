class MD5Util{
	private static md5:any;
	public constructor()
	{

	}

	/**将传入的string转为md5
	 */
	public static parse(str: string): string
	{
		if(!this.md5) this.md5 = eval("new YaMD5()");
		this.md5.start();
		this.md5.appendStr(str);
		return this.md5.end();
	}

}