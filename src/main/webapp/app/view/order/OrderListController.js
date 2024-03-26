Ext.define('Study.view.order.OrderListController',{
    extend : 'Ext.app.ViewController',
    alias : 'controller.orderList',
    // 최초 데이터 로드
    onLoadData : function(obj) {
        let me = this;
        let view = me.getView();
        let viewModel = me.getViewModel();
        let store = viewModel.getStore(view['xtype']);
        store.load();
    },
    searchBtn : function(btn) {
        let me = this;
        let view = me.getView();
        let viewModel = me.getViewModel();
        let store = viewModel.getStore(view['xtype']);

        let searchValue = view.down("[name=searchValue]").getValue();

        store.getProxy().setExtraParam("searchValue", searchValue);
        store.load();
    },
    openDeliveryInfo : function(btn) {
        let record = btn.getWidgetRecord();
        Ext.widget("selectDelivery", {
            deliveryNm : record.get("deliveryNm"),
            deliveryAddr : record.get("deliveryAddr"),
            deliveryZipcode : record.get("deliveryZipcode"),
            deliveryStatusNm : record.get("deliveryStatusNm")
        })
    }
});