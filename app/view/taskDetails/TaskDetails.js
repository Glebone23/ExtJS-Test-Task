Ext.define('TestTask.view.taskDetails.TaskDetails', {
    extend: 'Ext.tab.Panel',
    xtype: 'taskdetails',
    cls: 'task-details-panel',
    requires: [
        'TestTask.view.taskDetails.TaskDetailsController',
    ],
    controller: 'taskDetails',
    frame: true,
    bodyPadding: 10,
    width: '39%',
    height: 500,
    hidden: true,
    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 115,
        msgTarget: 'side'
    },
    viewModel: {
        data: {
            id: 0,
            name: '',
            startDate: '',
            endDate: '',
        }
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
                            validator(){
                                const minValue = this.previousNode('datefield').getValue();
                                if (minValue < this.getValue()) return true;
                                return 'End Date should me more than Start Date';
                            },
                            listeners: {
                                change: 'onInputChange',
                            },
                            bind: {
                                minValue: '{startDate}',
                                value: '{endDate}',
                            },
                        },
                    ],
                },
            ],
        },
    ],
});
