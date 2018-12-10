const processes = {
  running: 'Running',
  stopped: 'Stopped',
};

Ext.define('TestTask.view.tasksWrapper.TasksWrapperController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.taskswrapper',
    onAddClick() {
        const grid = this.lookupReference('tasksGrid'),
            store = grid.getStore();
        store.insert(store.getRange().length, Ext.create('TestTask.model.Task', {}));
    },
    onRemoveClick() {
        const grid = this.lookupReference('tasksGrid'),
            gridSelectionModel = grid.getSelectionModel(),
            store = grid.getStore();
        if (gridSelectionModel.hasSelection()) {
            const rows = gridSelectionModel.getSelection();
            let tasksToRemove = [];
            rows.forEach(task => {
                const tasks = store.getRange().filter(storeTask => storeTask.getData().id === task.getData().id);
                tasksToRemove.push(tasks[0]);
            });
            store.remove(tasksToRemove);
        }
    },
    onProcessButtonClick(type) {
        let currentStatus, newStatus;
        if (type === 'run') {
            currentStatus = processes.stopped;
            newStatus = processes.running;
        } else if (type === 'stop') {
            currentStatus = processes.running;
            newStatus = processes.stopped;
        }

        const grid = this.lookupReference('tasksGrid'),
            gridSelectionModel = grid.getSelectionModel(),
            storeRange = grid.getStore().getRange();

        if (gridSelectionModel.hasSelection()) {
            const rows = gridSelectionModel.getSelection();
            rows.forEach(row => {
                storeRange.forEach(storeTask => {
                    const storeTaskData = storeTask.getData();
                    if (storeTaskData.id === row.getData().id && storeTaskData.status === currentStatus) {
                        storeTask.set('status', newStatus);
                    }
                });
            });
            this.updateToolbarButtonsState();
        }
    },
    onStopClick() {
        this.onProcessButtonClick('stop');
    },
    onRunClick() {
        this.onProcessButtonClick('run');
    },
    updateToolbarButtonsState() {
        this.updateToolbarButtonState('run');
        this.updateToolbarButtonState('stop');
    },
    updateToolbarButtonState(type) {
        if (type !== '') {
            let checkingStatus, disable = true;
            if (type === 'run') checkingStatus = processes.stopped;
            else if (type === 'stop') checkingStatus = processes.running;
            const grid = this.lookupReference('tasksGrid') || this.getView(),
                gridSelectionModel = grid.getSelectionModel();
            if (gridSelectionModel.hasSelection()) {
                const rows = gridSelectionModel.getSelection();
                for (let row of rows) {
                    if (row.getData().status === checkingStatus) {
                        disable = false;
                        break;
                    }
                }
            }
            const capitalizedType = type.charAt(0).toUpperCase().concat(type.slice(1).toLowerCase());
            Ext.get(`btn${capitalizedType}`).component.setDisabled(disable);
        }
    },
    showError(errors) {
        let errorMessage = '';
        for (let error in errors) {
            let subErrorMessage = '';
            errors[error].forEach(errorItem => {
                subErrorMessage += errorItem;
            });
            errorMessage += `Id: ${error}; ${subErrorMessage}`;
        }
        Ext.Msg.alert('Errors', errorMessage);
    },
    onSubmitClick() {
        const store = Ext.getStore('tasks'),
            storeItems = store.getRange();
        let isValid = true;
        let errors = {};
        storeItems.forEach(item => {
          const validation = item.validate(),
              validationItems = validation.items,
              itemId = item.id;
          if (validationItems.length > 0) {
              isValid = false;
              if (!errors[itemId]) errors[itemId] = [];
              validationItems.forEach(validationItem => {
                  const error = `Field: "${validationItem.field}" - ${validationItem.msg}. `;
                  errors[itemId].push(error);
              });
          }
        });

        isValid ? Ext.getStore('tasks').commitChanges() : this.showError(errors);
    },
    onFilterChange(input){
        const vm = this.lookupReference('tasksGrid').getViewModel();
        vm.set('filter', input.getValue());
    },
});
