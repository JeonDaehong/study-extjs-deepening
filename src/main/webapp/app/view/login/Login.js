Ext.define('Study.view.login.Login',{
    extend : 'Ext.window.Window',
    xtype : 'login',
    controller : 'login',
    viewModel : 'login',
    layout : 'center',
    closable : false, // 닫기창 없애는 속성
    maximized : true,
    autoShow : true, // Window 창 자동으로 출력
    onEsc : function(){ // Esc 누르면 종료
        return false
    },
    items : [{
        xtype : 'form',
        layout : {
            type : 'vbox',
            align : 'center',
            pack : 'center'
        },
        items : [{
            xtype : 'textfield',
            name : 'adminId'
        },{
            xtype : 'textfield',
            inputType : 'password',
            name : 'adminPwd'
        },{
            xtype : 'button',
            width : 165,
            text : 'Login',
            handler : 'loginBtn'
        }]
    }]
});