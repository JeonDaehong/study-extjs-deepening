Ext.define('Study.view.member.MemberListController',{
    extend : 'Ext.app.ViewController',
    alias : 'controller.memberList',
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

        let searchMemberId = view.down("[name=searchMemberId]").getValue();

        store.getProxy().setExtraParam("searchMemberId", searchMemberId);
        store.load();
    }
});