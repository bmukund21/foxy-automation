const ProfilePageScreen = require('../../test/screenobjects/android/profile-page');
const homePage = require('../screenobjects/android/home-page');

const userData = require('../../global-config');
const profilePage = require('../../test/screenobjects/android/profile-page');

const { phoneNumber, contactName, email, addressLine1, addressLine2, pinCode, usnCode } = userData;

describe('profile-page-add-address', async () => {
  it.only('fill address form', async () => {

    // click on profile page in header
    await driver.pause(3000);
    // await homePage.profileButtonHeader.isDisplayed(1000);
    // await homePage.profileButtonHeader.click();

    // click on add address button in profile page
    await ProfilePageScreen.addAddressButton.click();
    await driver.pause(2000);

    //add user phone number
    await driver.hideKeyboard();
    await ProfilePageScreen.addressPhoneNumber.clearValue();
    await ProfilePageScreen.addressPhoneNumber.addValue(phoneNumber);
    await driver.pause(1000);

    //add user name
    await ProfilePageScreen.contactName.addValue(contactName);
    await driver.pause(1000);

    //add user email
    await ProfilePageScreen.email.clearValue();
    await ProfilePageScreen.email.addValue(email);
    await driver.pause(1000);

    //add user address
    await ProfilePageScreen.addressLine1.addValue(addressLine1);
    await driver.pause(1000);

    //add user address line 2
    await driver.hideKeyboard();
    (await ProfilePageScreen.addressLine2).waitForDisplayed(1000);
    await ProfilePageScreen.addressLine2.addValue(addressLine2);
    await driver.pause(2000);

    //add user pincode
    try {
      await driver.pause(2000);
      await ProfilePageScreen.pinCode.addValue(pinCode);
      await driver.pause(1000);
    } catch (error) {
      console.log('pin code error');
    }
    //Save user address
    try {
      await driver.pause(1000);
      await ProfilePageScreen.foxyContinueButton.click();
    } catch (error) {
      console.log('Add address failed');
    }
  });
});

describe('profile page login action', async () => {
  it('should enter OTP and proceed', async () => {
    // Login action from profile page
    await ProfilePageScreen.profileLoginButton.click();
    await driver.pause(4000);

    // enter OTP by finding OTP input field through their xpath
    await driver.pressKeyCode(8); // Key code for '1'
    await driver.pressKeyCode(10); // Key code for '3'
    await driver.pressKeyCode(8); // Key code for '1'
    await driver.pressKeyCode(16); // Key code for '9'

    // wait for login to complete
    await driver.pause(2000);
  });
});

describe('user profile complete', async () => {
  it('should click on complete profile', async () => {
    //post login, click on complete profile button
    await profilePage.completeProfileBtn.click();
    await driver.pause(1000);

    //input profile name
    await profilePage.nameInputUserProfile.clearValue();
    await profilePage.nameInputUserProfile.addValue(contactName);

    //click on save button
    await profilePage.userProfileSaveBtn.click();
    await driver.pause(1000);
    await expect($('//*[@text="' + contactName + '"]')).toBeDisplayed();
  });
});

describe('profile page actions', async () => {
  it('should click on all options on profile page, and validate', async () => {
    //scroll to the scan qr code button
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Scan a QR Code")');

    // click on Scan QR Code
    await profilePage.scanQRCodeBtn.click();
    await driver.pause(1000);

    // validate camera screen

    // open manual USN add modal
    await driver.pause(1000);
    await profilePage.manualUsnEntry.click();

    // enter USN code
    await profilePage.usnInputField.addValue(usnCode);
    await profilePage.foxyContinueButton.click();
    await driver.pause(2000);

    // Perform add to bag action
    await profilePage.addToBagUsnModal.click();
    await driver.pause(2000);

    // verify view bag cta
    await expect($('//*[@text="View Bag"]')).toBeDisplayed();
    await driver.pause(2000);

    // tap on View bag button
    await profilePage.viewBagUsnModal.click();
    await driver.pause(2000);

    // verify USN code on user cart
    await expect($('//*[@text="' + usnCode + '"]')).toBeDisplayed();
    await driver.pause(2000);

    // remove item from cart
    await driver.back();
  });
});
