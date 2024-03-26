Ext.define('Study.view.window.UpdatePassword', {
    extend : 'Ext.window.Window',
    xtype : 'updatePassword', // alias
    width : 350,
    height : 200,
    title : '비밀번호 변경',
    controller : 'updatePasswordList',
    viewModel : 'updatePasswordList',
    autoShow : true,
    modal : true,
    closable : false,
    items : [{
        xtype : 'form',
        margin : 20,
        items : [{
            xtype : 'textfield',
            inputType : 'password',
            name : 'password',
            fieldLabel : '비밀번호'
        },{
            xtype : 'textfield',
            inputType : 'password',
            name : 'rePassword',
            fieldLabel : '비밀번호 확인'
        }]
    }],
    bbar : [{
        xtype: 'tbfill' // 가운데로 정렬을 위한 빈 공간
    },{
        xtype : 'button',
        text : '비밀번호 변경',
        handler : 'changeBtn'
    },{
        xtype : 'button',
        text : '닫기',
        handler : 'closeBtn'
    },{
        xtype: 'tbfill' // 가운데로 정렬을 위한 빈 공간
    }]
})