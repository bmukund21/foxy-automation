const homePage = require('../screenobjects/android/home-page');
const searchPage = require('../screenobjects/android/search-page');


describe('user logs in with device prompt', () => {
  it('Find elements by ID', async () => {
    // tap on the element ID
    await driver.pause(3000);
    await searchPage.deviceIdLoginModal.click();
  });
});

it('gender specific page', async () => {
  // click on Men button on guest home page
  await driver.pause(26000);
  await homePage.genderButton.click();

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
