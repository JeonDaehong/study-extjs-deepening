Ext.define('Study.view.product.ProductListController',{
    extend : 'Ext.app.ViewController',
    alias : 'controller.productList',
    // 최초 데이터 로드
    onLoadData : function(obj) {
        let me = this;
        let view = me.getView();
        let viewModel = me.getViewModel();
        let store = viewModel.getStore(view['xtype']);
        store.load({
            callback : function(data) {
                console.log(data);
            }
        })
    },
    // 상품 목록 그리드 리사이트
    setGridHeight : function(obj) {
        obj.down("grid").setHeight(Ext.Element.getViewportHeight()-150);
    },
    // 상품 저장/수정
    addProduct : function(obj) {
        let me = this;
        let view = me.getView();
        let viewModel = me.getViewModel();
        let name = viewModel.get("itemNm");
        let price = viewModel.get("itemPrc");
        let amt = viewModel.get("itemAmt");

        let url = "/api/add/product"
        let params = {
            itemNm : name,
            itemPrc : price,
            itemAmt : amt
        };

        /**
         * UPDATE
         */
        if ( viewModel.get("itemSeq") > 0) {
            params.itemSeq = viewModel.get("itemSeq");
            url = '/api/update/product'
        }

        Ext.Ajax.request({
            url : url,
            method : 'post',
            params : params,
            success : function(res) {
                let result = Ext.decode(res.responseText);
                if ( result['code'] === 200 ) {
                    viewModel.getStore(view['xtype']).load();
                } else {
                    Ext.Msg.alert("알림", result['msg']);
                    return;
                }
            }
        })
    },
    // 상품 검색
    searchBtn : function(btn) {
        let me = this;
        let view = me.getView();
        let viewModel = me.getViewModel();
        let store = viewModel.getStore(view['xtype']);

        store.getProxy().setExtraParam("searchProductNm", viewModel.get("searchProductNm"));

        store.load({
            callback : function(data) {
                console.log(data);
            }
        })
    },
    // 정보수정을 위한 메서드
    onUpdateForm : function(obj, td, cellIndex, record, tr, rowIndex, e, eOpt) {
        let me = this;
        let view = me.getView();
        let viewModel = me.getViewModel();
        viewModel.set("itemSeq", record.get("itemSeq"));
        viewModel.set("itemNm", record.get("itemNm"));
        viewModel.set("itemPrc", record.get("itemPrc"));
        viewModel.set("itemAmt", record.get("itemAmt"));
    },
    // 포멧 버튼
    formatBtn : function(btn) {
        let me = this;
        let view = me.getView();
        let viewModel = me.getViewModel();
        viewModel.set("itemSeq", 0);
        viewModel.set("itemNm", "");
        viewModel.set("itemPrc", 0);
        viewModel.set("itemAmt", 0);
    },
    // 삭제 버튼
    removeBtn : function(btn) {
        let me = this;
        let view = me.getView();
        let viewModel = me.getViewModel();
        let record = btn.getWidgetRecord();

        Ext.Ajax.request({
            url : '/api/remove/product',
            method : 'delete',
            params : {
                itemSeq : record.get("itemSeq")
            },
            success : function(res) {
                let result = Ext.decode(res.responseText);
                if ( result['code'] === 200 ) {
                    viewModel.getStore(view['xtype']).load();
                } else {
                    Ext.Msg.alert("알림,", result['msg']);
                    return;
                }
            }
        })
    }
});