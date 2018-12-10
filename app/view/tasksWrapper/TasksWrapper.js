Ext.define('TestTask.view.tasksWrapper.TasksWrapper', {
    extend: 'Ext.panel.Panel',
    xtype: 'taskswrapper',
    requires: [
        'TestTask.store.Tasks',
        'TestTask.view.tasksGrid.TasksGrid',
        'TestTask.view.taskDetails.TaskDetails',
        'TestTask.view.tasksWrapper.TasksWrapperController',
    ],
    viewModel: {
        // data: {
        //     nameFilter: this.view,
        // },
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
                },
                {
                    text: 'Stop',
                    tooltip: 'Stop the selected tasks',
                    iconCls: 'x-fa fa-stop',
                    id: 'btnStop',
                    disabled: true,
                    handler: 'onStopClick',
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
                    width: '96.5%',
                    // bind: '{nameFilter}',
                    listeners: {
                        change: 'onFilterChange',
                    },
                },
            ]
        }
    ],
    fbar : {
        items : [
            {
                text : 'Submit',
                listeners: {
                    click: 'onSubmitClick',
                }
            },
            {
                text : 'Cancel',
                listeners: {
                    click() {
                        Ext.getStore('tasks').rejectChanges();
                    }
                }
            }
        ],
    },
    items: [
        { xtype: 'tasksgrid' },
        { xtype: 'taskdetails' },
    ],
});
