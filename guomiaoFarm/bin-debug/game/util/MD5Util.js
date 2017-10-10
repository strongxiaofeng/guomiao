var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MD5Util = (function () {
    function MD5Util() {
    }
    /**将传入的string转为md5
     */
    MD5Util.parse = function (str) {
        if (!this.md5)
            this.md5 = eval("new YaMD5()");
        this.md5.start();
        this.md5.appendStr(str);
        return this.md5.end();
    };
    return MD5Util;
}());
__reflect(MD5Util.prototype, "MD5Util");
//# sourceMappingURL=MD5Util.js.map