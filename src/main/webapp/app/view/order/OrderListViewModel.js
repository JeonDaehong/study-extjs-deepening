Ext.define('Study.view.order.OrderListViewModel',{
    extend : 'Ext.app.ViewModel',
    alias : 'viewmodel.orderList',
    stores : {
        orderList : {
            type : 'orderList'
        }
    }
});