Ext.define('TestTask.view.tasksGrid.TasksGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tasksgrid',
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
        setTimeout(() => {
            this.getViewModel().getStore('tasks').commitChanges();
        }, 100) // fix onCancelButtonClick
    },
});
