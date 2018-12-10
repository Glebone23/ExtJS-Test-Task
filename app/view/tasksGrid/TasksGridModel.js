Ext.define('TestTask.view.tasksGrid.TasksGridModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.tasksgrid',
    requires: [
        'TestTask.store.Tasks',
    ],
    data: {
        filter: '',
    },
    stores: {
        tasks: {
            type: 'tasks',
            filters: {
                property: 'name',
                value: '{filter}',
            }
        }
    },
});
