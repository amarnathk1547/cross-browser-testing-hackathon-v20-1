//Note: This is just an example in JavaScript. This shows how to print and also how to call that method.
//Feel free to change it to your language and framework needs

const constants = require('../../utils/constants');
const libs = require('../../utils/libs');

const assert = require('assert');

describe('Task 1 - Header location', function() {
    before(async () => {
        await libs.createBrowserSession();
    });

    // Search field/icon related test cases
    it('Search field should be displayed in laptop', async () => {
        await libs.setBrowserViewPort(constants.VIEWPORT_LAPTOP);
        await libs.launchApp(constants.APP_VERSION_V1);
        let isSearchBarDisplayed = await libs.isDisplayed(constants.LOCATOR_SEARCH_BAR);
        assert.ok(libs.hackathonReporter(
            constants.APP_VERSION_V1,
            constants.NUMBER_ONE,
            constants.SUCCESS_MESSAGE_SEARCH_FIELD_DISPLAYED_LAPTOP,
            constants.LOCATOR_SEARCH_BAR,
            constants.VIEWPORT_LAPTOP,
            constants.DEVICE_LAPTOP,
            isSearchBarDisplayed
        ), constants.FAILURE_MESSAGE_SEARCH_FIELD_NOT_DISPLAYED_LAPTOP);
    });

    it('Search field should be displayed in tablet', async () => {
        await libs.setBrowserViewPort(constants.VIEWPORT_TABLET);
        await libs.launchApp(constants.APP_VERSION_V1);
        let isDisplayed = await libs.isDisplayed(constants.LOCATOR_SEARCH_BAR);
        assert.ok(libs.hackathonReporter(
            constants.APP_VERSION_V1,
            constants.NUMBER_ONE,
            constants.SUCCESS_MESSAGE_SEARCH_FIELD_DISPLAYED_TABLET,
            constants.LOCATOR_SEARCH_BAR,
            constants.VIEWPORT_TABLET,
            constants.DEVICE_TABLET,
            isDisplayed
        ), constants.FAILURE_MESSAGE_SEARCH_FIELD_NOT_DISPLAYED_TABLET);
    });

    it('Search Icon should be displayed in mobile', async () => {
        await libs.setBrowserViewPort(constants.VIEWPORT_MOBILE);
        await libs.launchApp(constants.APP_VERSION_V1);
        let isDisplayed = await libs.isDisplayed(constants.LOCATOR_SEARCH_ICON);
        assert.ok(libs.hackathonReporter(
            constants.APP_VERSION_V1,
            constants.NUMBER_ONE,
            constants.SUCCESS_MESSAGE_SEARCH_ICON_DISPLAYED_MOBILE,
            constants.LOCATOR_SEARCH_ICON,
            constants.VIEWPORT_MOBILE,
            constants.DEVICE_MOBILE,
            isDisplayed
        ), constants.FAILURE_MESSAGE_SEARCH_ICON_NOT_DISPLAYED_MOBILE);
    });

    // Wishlist related test cases
    it('Wishlist should be displayed in laptop', async () => {
        await libs.setBrowserViewPort(constants.VIEWPORT_LAPTOP);
        await libs.launchApp(constants.APP_VERSION_V1);
        let isWishlistDisplayed = await libs.isDisplayed(constants.LOCATOR_WISHLIST);
        assert.ok(libs.hackathonReporter(
            constants.APP_VERSION_V1,
            constants.NUMBER_TWO,
            constants.SUCCESS_MESSAGE_WISHLIST_DISPLAYED_LAPTOP,
            constants.LOCATOR_WISHLIST,
            constants.VIEWPORT_LAPTOP,
            constants.DEVICE_LAPTOP,
            isWishlistDisplayed
        ), constants.FAILURE_MESSAGE_WISHLIST_NOT_DISPLAYED_LAPTOP);
    });

    it('Wishlist should not be displayed in tablet', async () => {
        await libs.setBrowserViewPort(constants.VIEWPORT_TABLET);
        await libs.launchApp(constants.APP_VERSION_V1);
        let isWishlistDisplayed = await libs.isDisplayed(constants.LOCATOR_WISHLIST);
        assert.ok(libs.hackathonReporter(
            constants.APP_VERSION_V1,
            constants.NUMBER_TWO,
            constants.SUCCESS_MESSAGE_WISHLIST_NOT_DISPLAYED_TABLET,
            constants.LOCATOR_WISHLIST,
            constants.VIEWPORT_TABLET,
            constants.DEVICE_TABLET,
            !isWishlistDisplayed
        ), constants.FAILURE_MESSAGE_WISHLIST_DISPLAYED_TABLET);
    });

    it('Wishlist should not be displayed in mobile', async () => {
        await libs.setBrowserViewPort(constants.VIEWPORT_MOBILE);
        await libs.launchApp(constants.APP_VERSION_V1);
        let isWishlistDisplayed = await libs.isDisplayed(constants.LOCATOR_WISHLIST);
        assert.ok(libs.hackathonReporter(
            constants.APP_VERSION_V1,
            constants.NUMBER_TWO,
            constants.SUCCESS_MESSAGE_WISHLIST_NOT_DISPLAYED_MOBILE,
            constants.LOCATOR_WISHLIST,
            constants.VIEWPORT_MOBILE,
            constants.DEVICE_MOBILE,
            !isWishlistDisplayed
        ), constants.FAILURE_MESSAGE_WISHLIST_DISPLAYED_MOBILE);
    });

    // Filter icon related test cases
    it('Filter icon should not be displayed in laptop', async () => {
        await libs.setBrowserViewPort(constants.VIEWPORT_LAPTOP);
        await libs.launchApp(constants.APP_VERSION_V1);
        let isFilterIconDisplayed = await libs.isDisplayed(constants.LOCATOR_FILTER_ICON);
        assert.ok(libs.hackathonReporter(
            constants.APP_VERSION_V1,
            constants.NUMBER_THREE,
            constants.SUCCESS_MESSAGE_FILTER_ICON_NOT_DISPLAYED_LAPTOP,
            constants.LOCATOR_FILTER_ICON,
            constants.VIEWPORT_LAPTOP,
            constants.DEVICE_LAPTOP,
            !isFilterIconDisplayed
        ), constants.FAILURE_MESSAGE_FILTER_ICON_DISPLAYED_LAPTOP);
    });

    it('Filter icon should be displayed in tablet', async () => {
        await libs.setBrowserViewPort(constants.VIEWPORT_TABLET);
        await libs.launchApp(constants.APP_VERSION_V1);
        let isFilterIconDisplayed = await libs.isDisplayed(constants.LOCATOR_FILTER_ICON);
        assert.ok(libs.hackathonReporter(
            constants.APP_VERSION_V1,
            constants.NUMBER_THREE,
            constants.SUCCESS_MESSAGE_FILTER_ICON_DISPLAYED_TABLET,
            constants.LOCATOR_FILTER_ICON,
            constants.VIEWPORT_TABLET,
            constants.DEVICE_TABLET,
            isFilterIconDisplayed
        ), constants.FAILURE_MESSAGE_FILTER_ICON_NOT_DISPLAYED_TABLET);
    });

    it('Filter icon should be displayed in mobile', async () => {
        await libs.setBrowserViewPort(constants.VIEWPORT_MOBILE);
        await libs.launchApp(constants.APP_VERSION_V1);
        let isFilterIconDisplayed = await libs.isDisplayed(constants.LOCATOR_FILTER_ICON);
        assert.ok(libs.hackathonReporter(
            constants.APP_VERSION_V1,
            constants.NUMBER_THREE,
            constants.SUCCESS_MESSAGE_FILTER_ICON_DISPLAYED_MOBILE,
            constants.LOCATOR_FILTER_ICON,
            constants.VIEWPORT_MOBILE,
            constants.DEVICE_MOBILE,
            isFilterIconDisplayed
        ), constants.FAILURE_MESSAGE_FILTER_ICON_NOT_DISPLAYED_MOBILE);
    });

    // Filter text related test cases
    it('Filter text should not be displayed in laptop', async () => {
        await libs.setBrowserViewPort(constants.VIEWPORT_LAPTOP);
        await libs.launchApp(constants.APP_VERSION_V1);
        let isFilterIconDisplayed = await libs.isDisplayed(constants.LOCATOR_FILTER_TEXT);
        assert.ok(libs.hackathonReporter(
            constants.APP_VERSION_V1,
            constants.NUMBER_FOUR,
            constants.SUCCESS_MESSAGE_FILTER_TEXT_NOT_DISPLAYED_LAPTOP,
            constants.LOCATOR_FILTER_TEXT,
            constants.VIEWPORT_LAPTOP,
            constants.DEVICE_LAPTOP,
            !isFilterIconDisplayed
        ), constants.FAILURE_MESSAGE_FILTER_TEXT_DISPLAYED_LAPTOP);
    });

    it('Filter text should be displayed in tablet', async () => {
        await libs.setBrowserViewPort(constants.VIEWPORT_TABLET);
        await libs.launchApp(constants.APP_VERSION_V1);
        let isFilterIconDisplayed = await libs.isDisplayed(constants.LOCATOR_FILTER_TEXT);
        assert.ok(libs.hackathonReporter(
            constants.APP_VERSION_V1,
            constants.NUMBER_FOUR,
            constants.SUCCESS_MESSAGE_FILTER_TEXT_DISPLAYED_TABLET,
            constants.LOCATOR_FILTER_TEXT,
            constants.VIEWPORT_TABLET,
            constants.DEVICE_TABLET,
            isFilterIconDisplayed
        ), constants.FAILURE_MESSAGE_FILTER_TEXT_NOT_DISPLAYED_TABLET);
    });

    it('Filter text should not be displayed in mobile', async () => {
        await libs.setBrowserViewPort(constants.VIEWPORT_MOBILE);
        await libs.launchApp(constants.APP_VERSION_V1);
        let isFilterIconDisplayed = await libs.isDisplayed(constants.LOCATOR_FILTER_TEXT);
        assert.ok(libs.hackathonReporter(
            constants.APP_VERSION_V1,
            constants.NUMBER_FOUR,
            constants.SUCCESS_MESSAGE_FILTER_TEXT_NOT_DISPLAYED_MOBILE,
            constants.LOCATOR_FILTER_TEXT,
            constants.VIEWPORT_MOBILE,
            constants.DEVICE_MOBILE,
            !isFilterIconDisplayed
        ), constants.FAILURE_MESSAGE_FILTER_TEXT_DISPLAYED_MOBILE);
    });

    after(async () => {
        // Close the browser
        await libs.deleteBrowserSession();
    });
});