Ext.define('Study.view.product.ProductList', {
    extend : 'Ext.panel.Panel',
    xtype : 'productList',
    title : '상품목록',
    margin : 15,
    controller : 'productList',
    viewModel : 'productList',
    listeners : {
        boxready : 'onLoadData',
        resize : 'setGridHeight'
    },
    items : [{
        xtype : 'toolbar',
        items : [{
            xtype : 'textfield',
            fieldLabel : '상품명',
            labelAlign: 'left', // 레이블을 왼쪽으로 정렬
            labelWidth: 50, // 레이블 너비 설정, 필요에 따라 조정
            margin: '0 50 0 0', // 오른쪽 마진 추가
            name : 'itemNm',
            bind : {
                value : '{itemNm}'
            }
        },{
            xtype : 'numberfield',
            fieldLabel : '가격',
            labelAlign: 'left',
            labelWidth: 35,
            margin: '0 50 0 0',
            name : 'itemPrc',
            bind : {
                value : '{itemPrc}'
            }
        },{
            xtype : 'numberfield',
            fieldLabel : '재고량',
            labelAlign: 'left',
            labelWidth: 50,
            flex : 1,
            name : 'itemAt',
            bind : {
                value : '{itemAmt}'
            }
        },'->',{
            xtype : 'button',
            text : '저장',
            handler : 'addProduct'
        },{
            xtype : 'button',
            text : '초기화',
            handler: 'formatBtn'
        }]
    },{
        xtype : 'grid',
        listeners : {
            celldblclick : 'onUpdateForm'
        },
        viewConfig : {
            emptyText : '상품이 존재하지 않습니다.'
        },
        height : 150,
        columnLines : true,
        tbar : [{
            xtype : 'textfield',
            name : 'searchProductNm',
            flex : 1,
            emptyText : '찾으실 상품명을 입력하세요',
            bind : {
                value : '{searchProductNm}'
            }
        }, {
            xtype : 'button',
            text : '검색',
            handler : 'searchBtn'
        }],
        columns : [{
            xtype : 'rownumberer'
        },{
            text : '상품명',
            flex : 1,
            dataIndex : 'itemNm'
        },{
            text : '가격',
            flex : 1,
            dataIndex : 'itemPrc'
        },{
            text : '재고량',
            flex : 1,
            dataIndex : 'itemAmt'
        },{
            text : '등록일',
            flex : 1,
            dataIndex : 'itemRegDt',
            renderer : function(value) {
                if ( value !== undefined && value != null && value !== "") {
                    return Ext.util.Format.date(new Date(value), "Y-m-d H:i:s");
                }
                return value;
            }
        },{
            xtype : 'widgetcolumn',
            text : '삭제',
            align : 'center',
            flex : 1,
            widget : {
                xtype : 'button',
                text : '상품삭제',
                handler : 'removeBtn'
            }
        }],
        bind : {
            store : '{productList}'
        }
    }]
})