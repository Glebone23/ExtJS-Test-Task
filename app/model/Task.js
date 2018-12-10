Ext.define('TestTask.field.customDate', {
    extend: 'Ext.data.field.Field',
    alias: 'data.field.customDate',
    validate(value) {
        const invalidDate = 'Invalid date';
        if (value !== '' && new Date(value).toString() !== invalidDate) return true;
        return invalidDate;
    },
    validators: {
        type: 'date'
    }
});

Ext.define('TestTask.model.Task', {
    extend: 'Ext.data.Model',
    identifier: 'sequential',
    fields: [
        {name: 'id',  type: 'int'},
        {name: 'name',   type: 'string', defaultValue: ''},
        {name: 'startDate', type: 'customDate', defaultValue: ''},
        {name: 'endDate', type: 'customDate', defaultValue: ''},
        {name: 'status', type: 'string', defaultValue: 'Stopped'},
    ],
    validators: {
        name: { type: 'length', min: 1, max: 255 },
    },
});
