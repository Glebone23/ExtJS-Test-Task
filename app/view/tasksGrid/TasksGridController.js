Ext.define('TestTask.view.tasksGrid.TasksGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tasksgrid',
    store: {
        type: 'tasks',
    },
    onSelectChange() {
        const tasksWrapper = Ext.ComponentQuery.query('taskswrapper')[0];
        tasksWrapper.getController().updateToolbarButtonsState();
        this.toggleTaskDetails();
    },
    toggleTaskDetails() {
        const details = Ext.ComponentQuery.query('taskdetails')[0],
            grid = this.getView();
        details.getController().toggleTaskDetails(grid);
    },
    init() {
        // commit store on init because "rejectChanges" removing any data from store
        setTimeout(() => {
            this.getStore('tasks').commitChanges();
        }, 150)
    },
});
