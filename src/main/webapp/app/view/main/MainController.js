Ext.define('Study.view.main.MainController',{
    extend : 'Ext.app.ViewController',
    alias : 'controller.main',
    // 비밀번호 변경
    updatePasswordBtn : function(btn) {
        Ext.widget("updatePassword");
    },
    logoutBtn : function(btn) {
        // 1. 뷰 포트 삭제
        btn.up("viewport").destroy();
        // 2. 로그인 윈도우 출력
        Ext.widget("login");
    },
    menuChange : function(obj, record) {
        let centerPage = obj.up("viewport").down("component[region=center]");
        centerPage.removeAll();
        centerPage.add({
            xtype : record.get("page")
        })
    }
});