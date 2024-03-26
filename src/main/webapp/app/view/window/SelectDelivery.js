Ext.define('Study.view.window.SelectDelivery',{
    extend : 'Ext.window.Window',
    xtype : 'selectDelivery',
    controller : 'selectDelivery',
    viewModel : 'selectDelivery',
    listeners : {
        boxready : 'onLoadData'
    },
    width : 610,
    height : 260,
    title : '배송 정보 조회',
    autoShow : true,
    modal : true,
    layout : {
        type : 'vbox',
        align : 'stretch'
    },
    bodyPadding : 10,
    items : [{
        xtype : 'textfield',
        fieldLabel : '받는사람',
        bind : {
            value : '{deliveryNm}'
        }
    }, {
        xtype : 'textfield',
        fieldLabel : '주소',
        bind : {
            value : '{deliveryAddr}'
        }
    }, {
        xtype : 'textfield',
        fieldLabel : '배송상태',
        bind : {
            value : '{deliveryStatusNm}'
        }
    }],
    buttons : [{
        text : '닫기',
        handler : function(btn) {
            btn.up("window").close();
        }
    }]
});