const {By,Key,Builder} = require("selenium-webdriver");
const assert = require('assert');
require("chromedriver");
const homepage = require("../pages/homepage");
const { truncate } = require("fs");
const { getInTouch, video, form, customerPortal, masterHeading, subHeading, expectedHeadingText} = require("../utils/locators");

async function example(){
     //Visit pattern.ag from the browser.
     var baseurl = 'http://pattern.ag/';
     await homepage.enter_url(baseurl);

     //Maximize the browser window
     await homepage.maximize_window();

     //Check that the video is displayed
     var isVideoDisplayed = await driver.findElement(video).isDisplayed();
     assert.equal(isVideoDisplayed, true);

     //Check that the Get In Touch link is displayed
     var isGetInTouchDisplayed = await driver.findElement(getInTouch).isDisplayed();
     assert.equal(isGetInTouchDisplayed, true);

     //Check that the Learn More form is visible
     var isFormDisplayed = await driver.findElement(form).isDisplayed();
     assert.equal(isFormDisplayed, true);

     //Check that the link to Customer Portal is visible
     var linkToCustomerPortal = await driver.findElement(customerPortal).isDisplayed();
     assert.equal(linkToCustomerPortal, true);

     //Validate that the `Soil is talking` header is displayed with the expected text.
     var headingText = await driver.findElement(masterHeading).getText();
     var subHeadingText = await driver.findElement(subHeading).getText();
     var headingText = headingText + " " + subHeadingText;
     assert.equal(headingText, expectedHeadingText);

     //It is always a safe practice to quit the browser after execution
     await homepage.close_browser();

}

example()