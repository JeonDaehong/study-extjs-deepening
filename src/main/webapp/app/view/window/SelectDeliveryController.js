Ext.define('Study.view.window.SelectDeliveryController',{
    extend : 'Ext.app.ViewController',
    alias : 'controller.selectDelivery',
    // 최초 데이터 로드
    onLoadData : function(obj) {
        let me = this;
        let view = me.getView();
        let viewModel = me.getViewModel();
        let store = viewModel.getStore(view['xtype']);

        viewModel.set("deliveryNm", view['deliveryNm']);
        viewModel.set("deliveryAddr", "(" + view['deliveryZipcode'] + ")" + view['deliveryAddr']);

        let deliveryStatusNm = "";
        if ( view['deliveryStatusNm'] === "I" ) {
            deliveryStatusNm = "배송중"
        } else {
            deliveryStatusNm = "배송완료"
        }

        viewModel.set("deliveryStatusNm", deliveryStatusNm);

        store.load();
    }
});