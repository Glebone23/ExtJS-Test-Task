let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

Ext.define('TestTask.store.Tasks', {
    extend: 'Ext.data.Store',
    alias: 'store.tasks',
    storeId: 'tasks',
    model: 'TestTask.model.Task',
    data: [
        { name: 'Task 1', startDate: new Date(), endDate: tomorrow, status: 'Running' },
        { name: 'Task 2', startDate: new Date(), endDate: tomorrow, status: 'Stopped' },
    ],
    remoteFilter: true,
});
