import { defineSupportCode } from 'cucumber';
import { Builder, By, until } from 'selenium-webdriver';

defineSupportCode(async ({ Given, Then, When }) => {
  const driver = await new Builder().forBrowser('chrome').build();

  Given('I am on google', async () => {
    await driver.get('www.google.com');
  });

  When('I search for cats', async () => {
    await driver.findElement(By.className('gLFyf')).sendKeys('cats');
    await driver.wait(until.titleIs('cats - Google Search'), 5000);
  });

  Then('I should see cats', async () => {
    const foundCatImage = await driver.findElement(By.id('dimg_16')).isDisplayed();
    expect(foundCatImage).toEqual(true);
  });
});
