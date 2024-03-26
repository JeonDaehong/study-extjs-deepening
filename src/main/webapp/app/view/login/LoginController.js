Ext.define('Study.view.login.LoginController',{
    extend : 'Ext.app.ViewController',
    alias : 'controller.login',
    // 로그인 버튼 클릭
    loginBtn : function(btn) {
        let id = btn.up("form").down("[name=adminId]").getValue();
        let pwd = btn.up("form").down("[name=adminPwd]").getValue();
        // let values = btn.up("form").getForm().getValues();
        Ext.Ajax.request({
           url : 'loginInfo',
           method : 'post',
           params : {
               adminId : id,
               adminPwd : pwd
           },
           success : function (res) {
               let api = Ext.decode(res.responseText);
               if ( api['code'] === 200 ) {
                   btn.up("window").close();
                   Ext.widget("main"); // 해당 Page 불러오기
               } else {
                   Ext.Msg.alert('Login Error', api['msg']);
                   return;
               }
           }
        });
        // console.log("클릭 이벤트 실행");
        // btn.up("window").close();
        // Ext.widget("main"); // 해당 Page 불러오기
    }
});