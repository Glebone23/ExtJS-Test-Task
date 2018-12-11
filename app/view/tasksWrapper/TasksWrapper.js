Ext.define('TestTask.view.tasksWrapper.TasksWrapper', {
    extend: 'Ext.panel.Panel',
    xtype: 'taskswrapper',
    viewModel: {
        type: 'tasksWrapper',
    },
    controller: 'taskswrapper',
    frame: true,
    padding: 10,
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    text: 'Add',
                    tooltip: 'Add a new task',
                    iconCls: 'x-fa fa-plus-circle',
                    handler: 'onAddClick',
                },
                {
                    text: 'Remove',
                    tooltip: 'Remove the selected tasks',
                    iconCls: 'x-fa fa-times-circle',
                    disabled: true,
                    handler: 'onRemoveClick',
                    bind: {
                        disabled: '{!theRow}'
                    }
                }, '-',
                {
                    text: 'Run',
                    tooltip: 'Run the selected tasks',
                    iconCls: 'x-fa fa-play',
                    id: 'btnRun',
                    disabled: true,
                    handler: 'onRunClick',
                    bind: {
                        disabled: '{canRun}',
                    }
                },
                {
                    text: 'Stop',
                    tooltip: 'Stop the selected tasks',
                    iconCls: 'x-fa fa-stop',
                    id: 'btnStop',
                    disabled: true,
                    handler: 'onStopClick',
                    bind: {
                        disabled: '{canStop}',
                    }
                }
            ]
        },
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                'Name: ',
                {
                    emptyText:'Enter filter text...',
                    text: 'category filter',
                    xtype: 'textfield',
                    width: 250,
                    listeners: {
                        change: 'onFilterChange',
                    },
                },
            ]
        }
    ],
    fbar: {
        items : [
            {
                text : 'Submit',
                listeners: {
                    click: 'commitChanges',
                }
            },
            {
                text : 'Cancel',
                listeners: {
                    click: 'rejectChanges'
                }
            }
        ],
    },
    items: [
        { xtype: 'tasksgrid' },
        { xtype: 'taskdetails' },
    ],
});
