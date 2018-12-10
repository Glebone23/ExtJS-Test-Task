Ext.define('TestTask.view.taskDetails.TaskDetailsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.taskDetails',
    onInputChange(input) {
        const store = Ext.getStore('tasks').getRange(),
            value = input.getValue(),
            name = input.getName(),
            task = store.filter(task => task.getData().id === this.getViewModel().get('id'))[0],
            taskData = task.getData(),
            setTask = (name, value) => task.set(name, value);
        if (input.validate()) {
            if (name === 'endDate' || name === 'startDate') {
                const dateToSet = new Date(value);
                if ((!taskData[name] && value) ||
                    ((taskData[name] && value) &&
                        taskData[name].toString() !== value.toString()) &&
                    dateToSet && dateToSet.toString() !== 'Invalid Date'
                ) setTask(name, dateToSet);
            } else setTask(name, value);
        }
    },
    toggleTaskDetails(grid) {
        const view = this.getView(), gridSelectionModel = grid.getSelectionModel();
        if (gridSelectionModel.hasSelection()) {
            const rows = gridSelectionModel.getSelection(), row = rows[0].getData();
            if (rows.length === 1) {
                const vm = this.getViewModel();
                ['id', 'name', 'startDate', 'endDate'].forEach(field => vm.set(field, row[field]));
                view.setHidden(false);
            } else view.setHidden(true);
        } else view.setHidden(true);
    },
});
