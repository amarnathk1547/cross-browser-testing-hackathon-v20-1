'use strict';
const constants = require('../../utils/constants');
const libs = require('../../utils/libs');
const { Target, By } = require('@applitools/eyes-webdriverio');

let eyes;

describe('Task 2 - v2 - Appliway', function () {

    before(async () => {
        await libs.createBrowserSession();
        eyes = libs.configApplitools();
    });

    it('Filter Results', async () => {

        await libs.launchApp(constants.APP_VERSION_V2);
        await libs.openEyes(eyes, constants.DEMO_APP, constants.TASK_ID_2);

        await libs.clickElement(constants.LOCATOR_OPEN_FILTERS);
        await libs.clickElement(constants.LOCATOR_BLACK_CHECK_BOX);
        await libs.clickElement(constants.LOCATOR_SUBMIT_FILTER_BUTTON);

        await libs.checkWithEyes(
            eyes,
            'Filter Results',
            Target.region(By.id(constants.REGION_PRODUCT_GRID))
        );

        await libs.closeEyes(eyes);
    });

    after(async () => {
        await libs.deleteBrowserSession();
        await libs.abortEyes(eyes);
        await libs.logResults();
    });

});