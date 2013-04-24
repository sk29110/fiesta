Ext.define("Fiesta.view.Viewport", {
    extend: "Ext.container.Viewport",
    layout: 'border',
    margins: 5,
    initComponent: function () {
        Ext.apply(this, {
            items: [
                {
                    region  : 'north',
                    xtype   : 'userpanel'
                },
                {
                    xtype   : 'mainView',
                    region  : 'center',
                    border  : false
                },

                {
                    region  : 'west',
                    width   : 320,
                    layout  : {
                        type    : 'vbox',
                        align   : 'stretch'
                    },
                    border  : false,
                    split   : true,
                    items   : [
                        {
                            xtype       : 'searchForm',
                            bodyPadding : 5
                        },
                        {
                            xtype       : 'testCasesList',
                            region      : 'center',
                            layout      : 'fit',
                            margins     : 2,
                            forceFit    : true,
                            flex        : true
                        }
                    ]
                }
            ],
            // EoF items
            listeners: {
                render: function () {
                    var initialToken = Ext.util.History.getToken();

                    if (initialToken) {
                        Ext.util.History.fireEvent('change', initialToken, true);
                    }
                }
            }
        });

        // EoF apply

        this.callParent();

    }

});