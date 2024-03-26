/**
 * Ext.create("Ext.panel.Panel", {
 *     width : 500,
 *     height : 500,
 *     renderTo : Ext.getBody(),
 *     items : [{
 *         xtype : 'button',
 *         text : 'Click',
 *         handler : function(btn) {
 *             alert("click !!");
 *         }
 *     }]
 * }
 *
 * app.js 에 Ext.application({ }) 이 이미 onReady 의 역할을 해주고 있다.
 * 그리고 이렇게 define 으로 할 때는 renderTo 가 없어도 알아서 위치를 찾아준다.
 */
/*
Ext.define("Study.view.main.Main",{
    extend : 'Ext.panel.Panel',
    xtype : 'app-main',
    width : 500,
    height : 500,
    items : [{
        xtype : 'button',
        text : 'Click',
        handler : function(btn) {
            // 1. Server
            // 2. API > ExtJS 연동
            Ext.Ajax.request({
                url : '/getList',
                success : function(res) {
                    let api = Ext.decode(res.responseText);
                    console.log("api", api);
                }
            })
        }
    }]
})
*/

/**
 * Web Program 만들어 보기
 */
Ext.define('Study.view.main.Main',{
    extend : 'Ext.container.Viewport',
    xtype : 'main',
    layout : 'border',
    controller : 'main',
    viewModel : 'main',
    items : [{
        xtype : 'panel',
        region : 'north',
        // title : 'Market Admin'
        title : '',
        header : false,
        items : [{
            xtype : 'toolbar',
            cls : 'top',
            items : [{
                xtype : 'label',
                html : '<h2>Market Admin</h2>'
            },'->', {
                xtype : 'button',
                scale : 'large',
                ui : 'materialbtn',
                text : '관리자님',
                menu : [{
                    text : '비밀번호변경',
                    handler : 'updatePasswordBtn'
                },{
                    text : '로그아웃',
                    handler : 'logoutBtn'
                }]
            }]
            
        }]
    },{
        xtype : 'panel',
        region : 'west',
        width : 230,
        layout : 'fit',
        items : [{
            xtype : 'treelist',
            ui : 'menulist',
            store : 'menuList',
            listeners : {
                selectionChange : 'menuChange'
            }
        }]
    },{
        xtype : 'panel',
        region : 'center'
    }]
});