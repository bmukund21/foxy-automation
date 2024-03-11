const homePage = require('../screenobjects/android/home-page');
const searchPage = require('../screenobjects/android/search-page');

const userData = require("../../global-config")


const {
  searchKeyword
} = userData;


describe('search', async () => {
  it('search field input', async () => {
    // click on search icon in header
    await driver.pause(2000);
    await searchPage.searchIconHeader.click();
    await driver.pause(2000);
    await searchPage.searchInputField.setValue(searchKeyword);
    await driver.pause(8000);
  });


  it('search assertion using uiautomator', async () => {
    await $('android=new UiSelector().textContains("'+searchKeyword+'")');
    await driver.pause(6000);
    await $('//android.widget.TextView[@text="'+searchKeyword+'"]').click();
 });

  it('click on search back', async () => {
    await driver.pause(3000);
    await searchPage.searchBackButton.click();
    await driver.pause(6000);
  });

  it('look for Clear text and tap on it', async () => {
    await driver.pause(3000);
    await searchPage.searchClearButton.click();
  });

  


  it('empty cart and product navigation', async () => {
    await driver.pause(2000);
    //open cart page from app header
    const headerCartIcon = await $('//*[@resource-id="header-cart-icon"]');
    await headerCartIcon.click();
    await driver.pause(2000);

    //click on add to bag button
    const listCartBtn = await $('//*[@resource-id="list-add-to-bag-Button"]');
    await listCartBtn.click();
    await driver.pause(6000);

    //click on checkout button
    const checkoutBtn = await $('//*[@resource-id="foxy-continue-button"]');
    await checkoutBtn.click();
    await driver.pause(2000);

    //expand and click on cash on delivery button
    const expandCOD = await $(
      '//android.widget.TextView[@text="Cash On Delivery"]',
    );
    await expandCOD.click();
    await driver.pause(2000);
    await checkoutBtn.click();
  });
});
