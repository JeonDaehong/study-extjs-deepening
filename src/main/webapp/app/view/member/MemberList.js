Ext.define('Study.view.product.MemberList', {
    extend : 'Ext.grid.Panel',
    listeners : {
        boxready : 'onLoadData',
    },
    xtype : 'memberList',
    title : '회원목록',
    margin : 15,
    controller : 'memberList',
    viewModel : 'memberList',
    columnLines : true,
    plugins : 'cellediting',
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
                key : '아이디',
                value : 'memberId'
            }]
        }

    },{
        xtype : 'textfield',
        name : 'searchMemberId',
        emptyText : '아이디를 입력하세요'
    }, {
        xtype : 'button',
        text : '검색',
        handler : 'searchBtn'
    }],
    columns : [{
        xtype : 'rownumberer'
    },{
        text : '아이디',
        flex : 1,
        dataIndex : 'memberId',
        editor : {
            xtype : 'textfield'
        }
    },{
        text : '이름',
        flex : 1,
        dataIndex : 'memberName',
        editor : {
            xtype : 'textfield'
        }
    },{
        text : '주소',
        flex : 1,
        dataIndex : 'memberDftAddr',
        editor : {
            xtype : 'textfield'
        }
    },{
        text : '가입일',
        flex : 1,
        dataIndex : 'memberRegDate',
        renderer : function(value) {
            if ( value !== undefined && value != null && value !== "") {
                return Ext.util.Format.date(new Date(value), "Y-m-d H:i:s");
            }
            return value;
        }
    }],
    bind : {
        store : '{memberList}'
    },
    bbar : {
        xtype : 'pagingtoolbar',
        plugins : 'ux-slidingpager',
        // plugins : 'ux-progressbarpager',
        displayInfo : true
    }
})