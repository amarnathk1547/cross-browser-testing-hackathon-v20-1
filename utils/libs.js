const fs = require('fs');
const {remote} = require('webdriverio');
const constants = require('./constants');
const {
    VisualGridRunner,
    Eyes,
    Configuration,
    BatchInfo,
    BrowserType,
    RectangleSize,
    DeviceName,
    ScreenOrientation
} = require('@applitools/eyes-webdriverio');
let runner = new VisualGridRunner(10);

// Create chrome browser session
async function createBrowserSession() {
    const chrome = {
        capabilities: {
            browserName: 'chrome'
        },
        logLevel: 'silent',
    };
    // Create a new chrome web driver
    browser = await remote(chrome);
}

// Delete browser session
async function deleteBrowserSession() {
    await browser.deleteSession();
}

// Launch hackathon App
async function launchApp (appVersion) {
    switch (appVersion) {
        case constants.APP_VERSION_V1:
            await browser.url('https://demo.applitools.com/gridHackathonV1.html');
            break;
        case constants.APP_VERSION_V2:
            await browser.url('https://demo.applitools.com/gridHackathonV2.html');
            break;
        default:
            console.log('Invalid App Version: Please refer to app versions present in constants.js');
    }
}

// Set Applitools configuration
function configApplitools() {
    let eyes = new Eyes(runner);
    const configuration = new Configuration();

    configuration.setApiKey('YX99R0SqPTBgbHr2v6C1ccX2oN8WkjuC0f7F5fMZ1065Bw110')
    configuration.setBatch(new BatchInfo('UFG Hackathon'))

    // Add browsers with different viewports for Laptop resolution
    configuration.addBrowser(1200, 700, BrowserType.CHROME);
    configuration.addBrowser(1200, 700, BrowserType.FIREFOX);
    configuration.addBrowser(1200, 700, BrowserType.EDGE_CHROMIUM);

    // Add browsers with different viewports for Tablet resolution
    configuration.addBrowser(768, 700, BrowserType.CHROME);
    configuration.addBrowser(768, 700, BrowserType.FIREFOX);
    configuration.addBrowser(768, 700, BrowserType.EDGE_CHROMIUM);

    // Add mobile emulation devices in Portrait mode
    configuration.addDeviceEmulation(DeviceName.iPhone_X, ScreenOrientation.PORTRAIT);

    // Set the configuration to eyes
    eyes.setConfiguration(configuration);

    return eyes;
}

// Open eyes
async function openEyes(eyes, appId, taskId) {
    await eyes.open(browser, appId, taskId, new RectangleSize(800, 600));
}

// Check with Eyes
async function checkWithEyes(eyes, testName, region) {
    await eyes.check(testName, region);
}

// Close eyes
async function closeEyes(eyes) {
    await eyes.closeAsync();
}

// Abort eyes
async function abortEyes(eyes) {
    await eyes.abortAsync();
}

// Log results
async function logResults() {
    const results = await runner.getAllTestResults(false);
    console.log(results);
}

// Set browser size
async function setBrowserViewPort (viewPort){
    await browser.setWindowSize(Number(viewPort.split('x')[0]), Number(viewPort.split('x')[1]));
}

// Wait for necessary element to be displayed on screen and return isDisplayed status
async function isDisplayed(element) {
    try {
        const getElement = await browser.$(element);
        await getElement.waitForDisplayed(constants.WAIT_TIME);
        return getElement.isDisplayed();
    } catch (e) {
        return false;
    }
}

async function clickElement(element) {
    if(await isDisplayed(element)) {
        const getElement = await browser.$(element);
        getElement.click();
    } else {
        throw new Error(`Element: ${element} is not clickable`);
    }
}

// Hackathon reporter for traditional approach
function hackathonReporter(appVersion, task, testName, domId, viewPort, device, comparisonResult) {
    try{
        fs.appendFileSync(`./test/Traditional-${appVersion}-TestResults.txt`, `Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${JSON.stringify(browser.capabilities.browserName)}, Viewport: ${viewPort}, Device: ${device}, Status: ${(comparisonResult ? "Pass" : "Fail")}\n`);
    } catch (e) {
        console.log(e);
    }
    return comparisonResult;
}

module.exports = {
    createBrowserSession: createBrowserSession,
    deleteBrowserSession: deleteBrowserSession,
    launchApp: launchApp,
    configApplitools: configApplitools,
    openEyes: openEyes,
    checkWithEyes: checkWithEyes,
    closeEyes: closeEyes,
    abortEyes: abortEyes,
    logResults: logResults,
    setBrowserViewPort: setBrowserViewPort,
    isDisplayed : isDisplayed,
    clickElement: clickElement,
    hackathonReporter: hackathonReporter,
}