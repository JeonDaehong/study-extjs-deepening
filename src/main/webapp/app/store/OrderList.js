Ext.define('Study.store.OrderList',{
    extend : 'Ext.data.Store',
    alias : 'store.orderList',
    storeId : 'orderList',
    autoLoad : false,
    fields : ['memberNm', 'orderRegDt', 'orderStatus', 'orderName', 'orderCount', 'orderTotalPrc', 'deliveryNm', 'deliveryAddr', 'deliveryZipcode', 'deliveryStatusNm'],
    // 한 페이지에 몇 개 호출?
    pageSize : 2,
    proxy : {
        type : 'ajax',
        actionMethods: {
            read : 'post'
        },
        url : '/api/list/order',
        reader : {
            type : 'json',
            rootProperty : 'data',
            totalProperty : 'totalCount'
        }
    }
});