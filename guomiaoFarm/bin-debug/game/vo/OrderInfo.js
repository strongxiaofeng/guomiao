var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var vo;
(function (vo) {
    /**订单列表 */
    var OrderInfo = (function () {
        function OrderInfo() {
        }
        return OrderInfo;
    }());
    vo.OrderInfo = OrderInfo;
    __reflect(OrderInfo.prototype, "vo.OrderInfo");
    /**一个订单 */
    var OrderItem = (function () {
        function OrderItem() {
        }
        return OrderItem;
    }());
    vo.OrderItem = OrderItem;
    __reflect(OrderItem.prototype, "vo.OrderItem");
    /**一个订单中的一个物品 */
    var OrderOneItem = (function () {
        function OrderOneItem() {
        }
        return OrderOneItem;
    }());
    vo.OrderOneItem = OrderOneItem;
    __reflect(OrderOneItem.prototype, "vo.OrderOneItem");
})(vo || (vo = {}));
//# sourceMappingURL=OrderInfo.js.map