Ext.define('Study.store.ProductList',{
    extend : 'Ext.data.BufferedStore',
    alias : 'store.productList',
    storeId : 'productList',
    autoLoad : false,
    fields : ['itemNm', 'itemPrc', 'itemAmt', 'itemRegDt'],
    proxy : {
        type : 'ajax',
        actionMethods: {
            read : 'post'
        },
        url : '/api/list/product',
        reader : {
            type : 'json',
            rootProperty : 'data',
            totalProperty : 'totalCount'
        }
    }
});