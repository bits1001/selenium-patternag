const { By } = require('selenium-webdriver');
module.exports = {
    video: By.id('32eaa3f6-96ee-bf15-f12a-07a4b05b88f7-video'),
    getInTouch: By.className('hero-button'),
    form: By.id('wf-form-Home-Page'),
    customerPortal: By.linkText('Customer Portal'),
    masterHeading: By.className('master-heading'),
    subHeading: By.className('master-sub'),
    expectedHeadingText: "Your Soil Is Talking, It's Time To Listen Pattern Ag offers the most advanced soil analysis to optimize your crop protection and fertility plans",
};