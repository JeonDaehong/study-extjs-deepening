Ext.define('Study.view.product.OrderList', {
    extend : 'Ext.grid.Panel',
    listeners : {
        boxready : 'onLoadData',
    },
    xtype : 'orderList',
    title : '주문목록',
    margin : 15,
    controller : 'orderList',
    viewModel : 'orderList',
    columnLines : true,
    tbar : [{
        xtype : 'combo',
        displayField : 'key',
        valueField : 'value',
        queryMode : 'local',
        value : 'memberId',
        name : 'searchCode',
        store : {
            fields : ['key', 'value'],
            data : [{
                key : '주문자명',
                value : 'memberId'
            }]
        }

    },{
        xtype : 'textfield',
        name : 'searchValue',
        emptyText : '검색어를 입력하세요'
    }, {
        xtype : 'button',
        text : '검색',
        handler : 'searchBtn'
    }],
    columns : [{
        xtype : 'rownumberer'
    },{
        text : '주문자명',
        flex : 1,
        dataIndex : 'memberNm'
    },{
        text : '주문일',
        flex : 1,
        dataIndex : 'orderRegDt',
        renderer : function(value) {
            if ( value !== undefined && value != null && value !== "") {
                return Ext.util.Format.date(new Date(value), "Y-m-d H:i:s");
            }
            return value;
        }
    },{
        text : '주문상태',
        flex : 1,
        dataIndex : 'orderStatus',
        renderer : function(value) {
            if ( value !== undefined && value != null && value !== "") {
                if ( value === "I" ) {
                    value = "주문완료"
                } else {
                    value = "주문취소"
                }
            }
            return value;
        }
    },{
        text : '제품명',
        flex : 1,
        dataIndex : 'orderName'
    },{
        text : '수량',
        flex : 1,
        dataIndex : 'orderCount',
        renderer : function(value) {
            return Ext.util.Format.number(value, "0,000");
        }
    },{
        text : '금액',
        flex : 1,
        dataIndex : 'orderTotalPrc',
        renderer : function(value) {
            return Ext.util.Format.number(value, "0,000");
        }
    },{
        xtype : 'widgetcolumn',
        widget : {
            xtype : 'button',
            text : '배송정보',
            handler : 'openDeliveryInfo'
        }
    }],
    bind : {
        store : '{orderList}'
    },
    bbar : {
        xtype : 'pagingtoolbar',
        displayInfo : true
    }
})