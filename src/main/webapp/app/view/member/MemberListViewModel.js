Ext.define('Study.view.member.MemberListViewModel',{
    extend : 'Ext.app.ViewModel',
    alias : 'viewmodel.memberList',
    stores : {
        memberList : {
            type : 'memberList'
        }
    }
});