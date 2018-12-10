Ext.define('TestTask.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    requires: [
        'TestTask.view.tasksWrapper.TasksWrapper'
    ],
    defaults: {
        bodyPadding: 20,
    },
    items: [{
        title: 'Dummy tasks',
        items: [{ xtype: 'taskswrapper' }]
    }],
});
