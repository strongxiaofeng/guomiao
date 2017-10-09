var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DataSender = (function () {
    function DataSender() {
    }
    DataSender.getInstance = function () {
        if (!this._instance)
            this._instance = new DataSender();
        return this._instance;
    };
    DataSender.prototype.send = function (data) {
        /**要发送的数据 */
        var jsonStr = JSON.stringify(data);
        /**验证key */
        var key = "";
        /**要发送的签名 */
        var upStr = MD5.parse(jsonStr + key).toUpperCase();
    };
    return DataSender;
}());
__reflect(DataSender.prototype, "DataSender");
//# sourceMappingURL=HttpUtil.js.map