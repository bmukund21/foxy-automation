import searchPage from '../screenobjects/android/search-page';
import userData from '../../global-config';

const { searchKeyword } = userData;

describe('search', async () => {
  it('search field input', async () => {
    // click on search icon in header
    await searchPage.searchIconHeader.click();
    await driver.pause(3000);

    //hide keyboard
    await driver.hideKeyboard();

    //scroll to the end of search page
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).flingToEnd(1)');
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).flingToBeginning(1)');

    //set value to search field
    await searchPage.searchInputField.addValue(searchKeyword);
    await driver.pause(3000);
  });

  it('search assertion using uiautomator', async () => {
    await $('android=new UiSelector().textContains("' + searchKeyword + '")');
    await driver.pause(6000);
    await $('//android.widget.TextView[@text="' + searchKeyword + '"]').click();
  });

  it('click on search back', async () => {
    //press back button on search result page
    // await driver.pause(3000);
    // await searchPage.searchBackButton.click();

    // //press clear CTA on empty search page
    // await driver.pause(3000);
    // await searchPage.searchClearButton.click();

    //scroll to the end of search page
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).flingToEnd(1)');
    await driver.pause(1000);
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).flingToBeginning(1)');
    await driver.pause(1000);
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
    const expandCOD = await $('//android.widget.TextView[@text="Cash On Delivery"]');
    await expandCOD.click();
    await driver.pause(2000);
    await checkoutBtn.click();
  });
});
