Ext.define('TestTask.view.taskDetails.TaskDetailsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.taskdetails',
    data: {
        id: 0,
        name: '',
        startDate: '',
        endDate: '',
        hidden: true,
    },
});
