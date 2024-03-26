Ext.define('Study.view.main.MainViewModel',{
    extend : 'Ext.app.ViewModel',
    alias : 'viewmodel.main',
    stores: {
        menuList: {
            type: 'tree',
            root: {
                expanded: true,
                children: [{
                    text: '상품관리',
                    iconCls: 'x-fa fa-gift',
                    expanded: true,
                    selectable: false,
                    children: [{
                        text: '상품목록',
                        page: 'productList',
                        leaf: true
                    }]
                }, {
                    text: '주문관리',
                    iconCls: 'x-fa fa-shopping-cart',
                    expanded: true,
                    selectable: false,
                    children: [{
                        text: '주문목록',
                        page: 'orderList',
                        leaf: true
                    }]
                }, {
                    text: '회원관리',
                    iconCls: 'x-fa fa-users',
                    expanded: true,
                    selectable: false,
                    children: [{
                        text: '회원목록',
                        page: 'memberList',
                        leaf: true
                    }]
                }]
            }
        }
    }
});