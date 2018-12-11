Ext.define('TestTask.view.tasksWrapper.TasksWrapperModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.tasksWrapper',
    data: {
        grid: null,
        countOfGridSetting: 0,
    },
    formulas : {
        canRun(get) {
            get('countOfGridSetting'); // imitating changes 'cause grid always return same type of data
            return this.updateButtonState(get('grid'), 'run');
        },
        canStop(get) {
            get('countOfGridSetting'); // imitating changes 'cause grid always return same type of data
            return this.updateButtonState(get('grid'), 'stop');
        }
    },
    updateButtonState(grid, type) {
        let checkingStatus, disable = true;
        if (grid && type !== '') {
            if (type === 'run') checkingStatus = processes.stopped;
            else if (type === 'stop') checkingStatus = processes.running;
            const gridSelectionModel = grid.getSelectionModel();
            if (gridSelectionModel.hasSelection()) {
                const rows = gridSelectionModel.getSelection();
                for (let row of rows) {
                    if (row.getData().status === checkingStatus) {
                        disable = false;
                        break;
                    }
                }
            }
        }
        return disable;
    }
});
