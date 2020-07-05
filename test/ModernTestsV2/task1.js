'use strict';
const constants = require('../../utils/constants');
const libs = require('../../utils/libs');
const { Target } = require('@applitools/eyes-webdriverio');

let eyes;
describe('Task 1 - v2 - Appliway', function () {

    before(async () => {
        await libs.createBrowserSession();
        eyes = libs.configApplitools();
    });

    it('Cross-Device Elements Test', async () => {
        await libs.launchApp(constants.APP_VERSION_V2);
        await libs.openEyes(eyes, constants.DEMO_APP, constants.TASK_ID_1);

        await libs.checkWithEyes(
            eyes,
            'Cross-Device Elements Test',
            Target.window().fully()
        );

        await libs.closeEyes(eyes);
    });

    after(async () => {
        await libs.deleteBrowserSession();
        await libs.abortEyes(eyes);
        await libs.logResults();
    });

});