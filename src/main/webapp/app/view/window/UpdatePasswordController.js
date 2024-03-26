Ext.define('Study.view.window.UpdatePasswordController',{
    extend : 'Ext.app.ViewController',
    alias : 'controller.updatePasswordList',
    changeBtn : function(btn) {
        let me = this;
        let view = me.getView();
        let viewModel = me.getViewModel();
        let store = viewModel.getStore(view['xtype']);

        let password = view.down("[name=password]").getValue();
        let rePassword = view.down("[name=rePassword]").getValue();

        if ( password !== rePassword ) {
            Ext.Msg.alert("알림", "두 비밀번호가 일치하지 않습니다.");
        } else {
            Ext.Ajax.request({
                url : '/api/changePwd',
                method : 'post',
                params : { password : password },
                success : function(res) {
                    let result = Ext.decode(res.responseText);
                    if ( result['code'] === 200 ) {
                        Ext.Msg.alert("알림", result['msg']);
                        btn.up("window").close();
                    } else {
                        Ext.Msg.alert("알림", result['msg']);
                    }
                    return;
                }
            })
        }

    },
    closeBtn : function(btn) {
        btn.up("window").close();
    }
});