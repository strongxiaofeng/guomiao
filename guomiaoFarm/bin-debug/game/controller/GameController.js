var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameController = (function () {
    function GameController() {
        this.sequence = 0;
        this.key = "jgo0AUOng7nbPbMf";
    }
    GameController.getInstance = function () {
        if (!this._instance)
            this._instance = new GameController();
        return this._instance;
    };
    GameController.prototype.getSeq = function () {
        this.sequence++;
        return this.sequence;
    };
    /**对要发出的数据进行包装 */
    GameController.prototype.transformData = function (sendData) {
        sendData.seq = this.getSeq();
        var jsonStr = JSON.stringify(sendData);
        var md5 = MD5Util.parse(jsonStr + this.key);
        var upStr = md5.toUpperCase();
        sendData.sign = upStr;
        return sendData;
    };
    /**用户信息 */
    GameController.prototype.getUserInfo = function (sendData) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/get-user-info', true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onload = function (e) {
            switch (xhr.status) {
                case 200:
                    var obj = JSON.parse(xhr.responseText);
                    if (obj.status > 0) {
                        console.log("返回异常", obj);
                    }
                    else {
                        GameModel.getInstance().userInfo = obj.data;
                        NotifyManager.getInstance().sendNotify(NotifyConst.Notify_UserInfo, obj.data);
                    }
                    break;
            }
        };
        sendData = this.transformData(sendData);
        xhr.send("data=" + JSON.stringify(sendData));
    };
    /**仓库信息 */
    GameController.prototype.getStoreInfo = function (sendData) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=user/item-list', true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onload = function (e) {
            switch (xhr.status) {
                case 200:
                    var obj = JSON.parse(xhr.responseText);
                    if (obj.status > 0) {
                        console.log("返回异常", obj);
                    }
                    else {
                        GameModel.getInstance().storeInfo = obj.data;
                        NotifyManager.getInstance().sendNotify(NotifyConst.Notify_StoreInfo, obj.data);
                    }
                    break;
            }
        };
        sendData = this.transformData(sendData);
        xhr.send("data=" + JSON.stringify(sendData));
    };
    /**农田信息 */
    GameController.prototype.getFarmInfo = function (sendData) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://fruit-meow-farm.cteee.cn/frontend/web/index.php?r=farm/land-list', true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onload = function (e) {
            switch (xhr.status) {
                case 200:
                    var obj = JSON.parse(xhr.responseText);
                    if (obj.status > 0) {
                        console.log("返回异常", obj);
                    }
                    else {
                        GameModel.getInstance().landInfo = obj.data;
                        NotifyManager.getInstance().sendNotify(NotifyConst.Notify_LandInfo, obj.data);
                    }
                    break;
            }
        };
        sendData = this.transformData(sendData);
        xhr.send("data=" + JSON.stringify(sendData));
    };
    return GameController;
}());
__reflect(GameController.prototype, "GameController");
//# sourceMappingURL=GameController.js.map