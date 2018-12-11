Ext.define('TestTask.view.taskDetails.TaskDetailsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.taskDetails',
    onInputChange(input) {
        const store = Ext.getStore('tasks').getRange(),
            value = input.getValue(),
            name = input.getName(),
            task = store.filter(task => task.getData().id === this.getViewModel().get('id'))[0],
            setTask = (name, value) => task.set(name, value);
        if (task && input.validate()) {
            const taskData = task.getData();
            if (name === 'endDate' || name === 'startDate') {
                const dateToSet = new Date(value);
                if ((!taskData[name] && value) ||
                    ((taskData[name] && value) &&
                        taskData[name].toString() !== value.toString()) &&
                    dateToSet && dateToSet.toString() !== 'Invalid Date'
                ) setTask(name, dateToSet);
            } else {
                setTask(name, value);
            }
        }
    },
    toggleTaskDetails(grid) {
        const gridSelectionModel = grid.getSelectionModel(),
            vm = this.getViewModel();
        let hidden = true;
        if (gridSelectionModel.hasSelection()) {
            const rows = gridSelectionModel.getSelection(), row = rows[0].getData();
            if (rows.length === 1) {
                ['id', 'name', 'startDate', 'endDate'].forEach(field => vm.set(field, row[field]));
                hidden = false;
            }
        }
        vm.set('hidden', hidden);
    },
});
