Ext.define('Study.store.MemberList',{
    extend : 'Ext.data.Store',
    alias : 'store.memberList',
    storeId : 'memberList',
    autoLoad : false,
    fields : ['memberSeq', 'memberId', 'memberName', 'memberDftAddr', 'memberRegDate'],
    // 한 페이지에 몇 개 호출?
    pageSize : 5,
    proxy : {
        type : 'ajax',
        actionMethods: {
            read : 'post'
        },
        url : '/api/list/member',
        reader : {
            type : 'json',
            rootProperty : 'data',
            totalProperty : 'totalCount'
        }
    }
});