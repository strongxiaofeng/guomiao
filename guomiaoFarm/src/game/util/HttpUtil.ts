class DataSender {
	private static _instance: DataSender;
	public constructor() {
	}
	public static getInstance(): DataSender
	{
		if(!this._instance) this._instance = new DataSender();
		return this._instance;
	}

	public send(data:Object)
	{
		/**要发送的数据 */
		var jsonStr = JSON.stringify(data);
		/**验证key */
		var key = "";
		/**要发送的签名 */
		var upStr = <string>MD5.parse(jsonStr+key).toUpperCase();
	}
}