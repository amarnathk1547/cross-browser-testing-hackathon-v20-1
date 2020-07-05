### Pre-requisites:

1. Download Selenium Standalone server [here](https://www.seleniumhq.org/download/)
    * Note that this is a `jar` file. So you should also have Java installed on your machine.
2. Chrome Webdriver and chrome browser 83 version are on your machine.  
3. Run the standalone server jar file along with chrome driver - it should look something like below:
    * `java -Dwebdriver.chrome.driver="chromedriver.exe" -jar selenium-server-standalone-3.141.59.jar` (Replace the jar file name with your jar file name) 
    * This will run Selenium on localhost and on port 4444
4. Install Node.js from [here](https://nodejs.org/en/)


### Running the example:

1. Download the code from here
    * Option 1: `https://github.com/amarnathk1547/cross-browser-testing-hackathon-v20-1`
     * Option 2: Download it as a Zip file and extract it
2. CD into the `cross-browser-testing-hackathon-v20-1` folder
3. Change the `APPLITOOLS_API_KEY` in `utils/libs.js` with your own.
    * Login to Applitools > Click on the Person icon > My API Key
4. run `npm install`
5. run `npm run task1v1modern` to create base line for task1 in v1 app
6. run `npm run task1v2modern` to run tests on v2 app, against v1 baseline
7. Identify the differences wrt to baseline, mark the bug regions, select 'Fail tests', give thumbs up and then save it. Ignore duplicate defect regions.
8. run `npm run task1v2modern` again to see the failure results with applitools grid
9. Repeat steps 5,6,7 and 8 for tasks 2 and 3 with respective commands `task2v1modern`, `task2v2modern`, `task3v1modern` and `task3v2modern`
10. Now that modern approach is considering to be done as stated in hackathon instructions, let's start running traditional approach for task 1
11. run `task1v1traditional` to run task1 for v1 app, see the results in test/Traditional-V1-TestResults.txt file
12. run `task1v2traditional` to run task1 for v2 app, see the results in test/Traditional-V2-TestResults.txt file

Thanks for wonderful hackathon - It just took couple of hours to go through Applitools videos and implement modern approach from cross browser testing. Traditional approach is not so congenial to find out the defects, it kills time.

Using AI to the best possible extent inorder to reduce testing efforts from days to hours and thereby reducing time to market. Clear winner, kudos Applitools team !!  