var webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit: (10000)});
require('../utils/locators');

class BasePage{
    constructor(){
        global.driver = driver;
    }
    async go_to_url(theURL){
        await driver.get(theURL);
    }

    async close_browser(){
        await driver.quit();
    }

    async maximize_window(){
        await driver.manage().window().maximize();
    }

    async findByCss(css){
        await driver.findElement(By.css("a[title*='Custom Order']"));
    }

    async isElementDisplayed(locator) {
        await this.driver.findElement(locator).isDisplayed();
      }}

module.exports = BasePage;