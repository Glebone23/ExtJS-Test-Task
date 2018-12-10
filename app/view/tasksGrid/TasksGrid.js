Ext.define('TestTask.view.tasksGrid.TasksGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'tasksgrid',
    reference: 'tasksGrid',
    requires: [
        'TestTask.store.Tasks',
        'TestTask.view.tasksGrid.TasksGridController',
        'TestTask.view.tasksGrid.TasksGridModel',
    ],
    controller: 'tasksgrid',
    viewModel: {
        type: 'tasksgrid',
    },
    width: '60%',
    height: 500,
    scrollable: true,
    cls: 'tasks-list-grid',
    frame: true,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    store: {
        type: 'tasks'
    },
    bind: {
        selection: '{theRow}',
    },
    columnLines: true,
    selModel: {
        selType: 'checkboxmodel'
    },
    columns: [
        { text: 'Id',  dataIndex: 'id' },
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'Start date', dataIndex: 'startDate', flex: 1, renderer: Ext.util.Format.dateRenderer('d-m-Y H:i:s') },
        { text: 'End date', dataIndex: 'endDate', flex: 1, renderer: Ext.util.Format.dateRenderer('d-m-Y H:i:s') },
        { text: 'Status', dataIndex: 'status', flex: 1 },
    ],
    listeners: {
        selectionChange: 'onSelectChange',
    }
});
