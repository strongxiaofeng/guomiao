var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameModel = (function () {
    function GameModel() {
    }
    GameModel.getInstance = function () {
        if (!this._instance)
            this._instance = new GameModel();
        return this._instance;
    };
    Object.defineProperty(GameModel.prototype, "userInfo", {
        // --------------------------- 存储数据 -------------------------------------
        set: function (info) {
            this._userinfo = info;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameModel.prototype, "storeInfo", {
        set: function (info) {
            this._storeInfo = info;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameModel.prototype, "landInfo", {
        set: function (info) {
            this._landInfo = info;
        },
        enumerable: true,
        configurable: true
    });
    // --------------------------- 获取数据 -------------------------------------
    GameModel.prototype.getNickname = function () {
        if (this._userinfo) {
            return this._userinfo.nickname;
        }
        return "";
    };
    GameModel.prototype.getToken = function () {
        if (this._userinfo) {
            return this._userinfo.token;
        }
        return "";
    };
    GameModel.prototype.getId = function () {
        if (this._userinfo) {
            return this._userinfo.id;
        }
        return "";
    };
    GameModel.prototype.getGold = function () {
        if (this._userinfo) {
            return this._userinfo.gold;
        }
        return 0;
    };
    GameModel.prototype.getLevel = function () {
        if (this._userinfo) {
            return this._userinfo.level;
        }
        return 0;
    };
    /**贡献度 */
    GameModel.prototype.getContribute = function () {
        if (this._userinfo) {
            return this._userinfo.exp;
        }
        return 0;
    };
    /**总贡献度 */
    GameModel.prototype.getTotalContribute = function () {
        if (this._userinfo) {
            return this._userinfo.total_exp;
        }
        return 0;
    };
    return GameModel;
}());
__reflect(GameModel.prototype, "GameModel");
//# sourceMappingURL=GameModel.js.map