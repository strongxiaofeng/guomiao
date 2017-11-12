var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameModel = (function () {
    function GameModel() {
        /**是否收到过昨日排行  */
        this.isYesterdayRankGot = false;
        /**购物车数据 以物品id为key 数量为value */
        this.shopCarData = {};
    }
    GameModel.getInstance = function () {
        if (!this._instance)
            this._instance = new GameModel();
        return this._instance;
    };
    Object.defineProperty(GameModel.prototype, "curOtherUser", {
        // --------------------------- 存储数据 -------------------------------------
        set: function (info) {
            this._otherUser = info;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameModel.prototype, "currentHonorItem", {
        set: function (data) {
            this._currentHonorItem = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameModel.prototype, "honorInfo", {
        set: function (info) {
            this._honorInfo = info;
        },
        enumerable: true,
        configurable: true
    });
    GameModel.prototype.setServerTime = function (n) {
        this._serverTime = n;
        this._serverTimeStartRecord = new Date().getTime();
    };
    Object.defineProperty(GameModel.prototype, "userInfo", {
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
    Object.defineProperty(GameModel.prototype, "serverConfig", {
        set: function (info) {
            this._serverConfig = info;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameModel.prototype, "addressList", {
        set: function (info) {
            this._addressList = info;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameModel.prototype, "yesterdayRank", {
        set: function (info) {
            this._yesterdayRank = info;
        },
        enumerable: true,
        configurable: true
    });
    /**添加1个商品到购物车 */
    GameModel.prototype.addShopCarData = function (id) {
        if (this.shopCarData[id])
            this.shopCarData[id]++;
        else
            this.shopCarData[id] = 1;
        NotifyManager.getInstance().sendNotify(NotifyConst.Notify_ShopCar, this.shopCarData);
    };
    /**从购物车减少商品*/
    GameModel.prototype.reduceShopCarData = function (id) {
        if (this.shopCarData[id])
            this.shopCarData[id]--;
        if (this.shopCarData[id] == 0)
            delete this.shopCarData[id];
        NotifyManager.getInstance().sendNotify(NotifyConst.Notify_ShopCar, this.shopCarData);
    };
    /**清空购物车数据 */
    GameModel.prototype.clearShopCar = function () {
        this.shopCarData = [];
        NotifyManager.getInstance().sendNotify(NotifyConst.Notify_ShopCar, this.shopCarData);
    };
    /**获取购物车数据 */
    GameModel.prototype.getShopCarData = function () {
        return this.shopCarData;
    };
    /**根据物品id获取物品配置 */
    GameModel.prototype.getItemById = function (id) {
        if (this._serverConfig && this._serverConfig.item_list && this._serverConfig.item_list[id]) {
            return this._serverConfig.item_list[id];
        }
        return null;
    };
    // --------------------------- 获取数据 -------------------------------------
    GameModel.prototype.getCurOtherUser = function () {
        return this._otherUser;
    };
    GameModel.prototype.getUserInfo = function () {
        return this._userinfo;
    };
    /**勋章墙item详情数据 */
    GameModel.prototype.getHonorItemDetail = function () {
        return this._currentHonorItem;
    };
    GameModel.prototype.getHonorInfo = function () {
        return this._honorInfo;
    };
    GameModel.prototype.getHonorConfig = function () {
        return this._serverConfig.achievement_list;
    };
    GameModel.prototype.getGift = function () {
        return this._serverConfig.gift_bag;
    };
    GameModel.prototype.getLandInfo = function () {
        return this._landInfo;
    };
    /**仓库里有什么种子 这个种子在仓库里的id*/
    GameModel.prototype.getSeedId = function () {
        if (this._storeInfo && this._storeInfo.list && this._storeInfo.list.length > 0) {
            var list = this._storeInfo.list;
            for (var i = 0; i < list.length; i++) {
                if (list[i].type == 1) {
                    return list[i].id;
                }
            }
        }
        return 0;
    };
    GameModel.prototype.getShopItems = function () {
        var list = [];
        if (this._serverConfig && this._serverConfig.store_list) {
            for (var key in this._serverConfig.store_list) {
                list.push(this._serverConfig.store_list[key]);
            }
        }
        console.log('获取货物 ', list);
        return list;
    };
    GameModel.prototype.getAddressList = function () {
        console.log("获取地址 ", this._addressList);
        return this._addressList;
    };
    GameModel.prototype.getDefaultAddress = function () {
        console.log("获取默认地址 ", this._addressList);
        var defaultAddress = null;
        if (this._addressList && this._addressList.list && this._addressList.list.length > 0) {
            var list = this._addressList.list;
            for (var i = 0; i < list.length; i++) {
                if (list[i].is_default) {
                    defaultAddress = list[i];
                    break;
                }
            }
            if (!defaultAddress)
                defaultAddress = list[0];
        }
        return defaultAddress;
    };
    /**获取服务器时间 */
    GameModel.prototype.getServerTime = function () {
        return Math.floor((new Date().getTime() - this._serverTimeStartRecord) / 1000 + this._serverTime);
    };
    /**获取某植物的幼苗期 */
    GameModel.prototype.getTreeYoungTime = function (id) {
        var list = this._serverConfig.crop_list;
        for (var key in list) {
            if (key == id) {
                return list[key].seedling_time;
            }
        }
        return 0;
    };
    /**获取某植物的生长期 */
    GameModel.prototype.getTreeGrowTime = function (id) {
        var list = this._serverConfig.crop_list;
        for (var key in list) {
            if (key == id) {
                return list[key].grow_time + list[key].seedling_time;
            }
        }
        return 0;
    };
    /**获取某植物的成熟期 */
    GameModel.prototype.getTreeRipeTime = function (id) {
        var list = this._serverConfig.crop_list;
        for (var key in list) {
            if (key == id) {
                return list[key].ripe_time + list[key].grow_time + list[key].seedling_time;
            }
        }
        return 0;
    };
    GameModel.prototype.getYesterdayRank = function () {
        return this._yesterdayRank;
    };
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