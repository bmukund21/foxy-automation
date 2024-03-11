const ProfilePageScreen = require("../../test/screenobjects/android/profile-page");
const userData = require("../../global-config")


const {
  phoneNumber,
  contactName,  
  email,
  addressLine1,
  addressLine2,
  pinCode,
} = userData;

describe('profile-page-actions', async () => {

  it('fill address form', async () => {

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
    await ProfilePageScreen.addressLine2.addValue(addressLine2);
    await driver.pause(2000);

    //add user pincode
    await ProfilePageScreen.pinCode.addValue(pinCode);
    await driver.pause(3000);

    //Save user address
    await ProfilePageScreen.foxyContinueButton.click();
  });


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
