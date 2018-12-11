Ext.define('TestTask.view.taskDetails.TaskDetails', {
    extend: 'Ext.tab.Panel',
    xtype: 'taskdetails',
    cls: 'task-details-panel',
    controller: 'taskDetails',
    frame: true,
    bodyPadding: 10,
    width: '39%',
    height: 500,
    hidden: true,
    bind: {
        hidden: '{hidden}',
    },
    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 115,
        msgTarget: 'side'
    },
    viewModel: {
        type: 'taskdetails',
    },
    items: [
        {
            xtype: 'panel',
            title: 'Details',
            items: [
                {
                    xtype: 'fieldset',
                    title: 'General options',
                    defaultType: 'textfield',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Id',
                            name: 'id',
                            value: '',
                            bind: {
                                value: '{id}',
                            },
                        },
                        {
                            fieldLabel: 'Name',
                            emptyText: 'Name',
                            name: 'name',
                            allowBlank: false,
                            minLength: 1,
                            maxLength: 255,
                            value: '',
                            bind: {
                                value: '{name}',
                            },
                            listeners: {
                                change: 'onInputChange',
                            }
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: 'Start Date',
                            reference: 'startDateRef',
                            name: 'startDate',
                            allowBlank: false,
                            format: 'd/m/Y H:i:s',
                            id: 'startDate',
                            value: '',
                            listeners: {
                                change: 'onInputChange',
                            },
                            bind: {
                                value: '{startDate}',
                            },
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: 'End Date',
                            name: 'endDate',
                            allowBlank: false,
                            format: 'd/m/Y H:i:s',
                            value: '',
                            onTriggerClick() {
                                // sorry for this solution, just when I used ViemModel for bind minValue - I've got some bugs
                                const me = this;
                                me.setMinValue(Ext.getCmp('startDate').value);
                                Ext.form.DateField.prototype.onTriggerClick.apply(me, arguments);
                            },
                            validator() {
                                const minValue = Ext.getCmp('startDate').getValue();
                                if (minValue < this.getValue()) return true;
                                return 'End Date should me more than Start Date';
                            },
                            listeners: {
                                change: 'onInputChange',
                            },
                            bind: {
                                // minValue: '{minEndDate}',
                                value: '{endDate}',
                            },
                        },
                    ],
                },
            ],
        },
    ],
});
