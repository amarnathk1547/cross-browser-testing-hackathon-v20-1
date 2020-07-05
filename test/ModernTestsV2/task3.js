'use strict';

const constants = require('../../utils/constants');
const libs = require('../../utils/libs');
const { Target } = require('@applitools/eyes-webdriverio');

let eyes;

describe('Task 3 - v2 - Appliway', function () {

    before(async () => {
        await libs.createBrowserSession();
        eyes = libs.configApplitools();
    });


    it('Product Details test', async () => {

        await libs.launchApp(constants.APP_VERSION_V2);
        await libs.openEyes(eyes, constants.DEMO_APP, constants.TASK_ID_3);

        await libs.clickElement(constants.LOCATOR_OPEN_FILTERS);
        await libs.clickElement(constants.LOCATOR_BLACK_CHECK_BOX);
        await libs.clickElement(constants.LOCATOR_SUBMIT_FILTER_BUTTON);
        await libs.clickElement(constants.LOCATOR_GRID_ITEM);

        await libs.checkWithEyes(
            eyes,
            'Product Details test',
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