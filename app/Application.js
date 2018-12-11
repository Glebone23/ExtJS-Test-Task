Ext.define('TestTask.Application', {
    extend: 'Ext.app.Application',
    name: 'TestTask',
    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    stores: [
        // TODO: add global / shared stores here
    ],
    launch: function () {
        // TODO - Launch the application
    },
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
