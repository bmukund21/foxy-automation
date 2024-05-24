class ProfilePageScreen {
  get addAddressButton() {
    return $('//*[@resource-id="add-address-profile"]');
  }

  get addressPhoneNumber() {
    return $('//*[@resource-id="phone-number-input"]');
  }

  get contactName() {
    return $('//*[@resource-id="contact-name-input"]');
  }

  get email() {
    return $('//*[@resource-id="email-input"]');
  }

  get addressLine1() {
    return $('//*[@resource-id="address1-input"]');
  }

  get addressLine2() {
    return $('//*[@resource-id="address2-input"]');
  }

  get pinCode() {
    return $('//*[@resource-id="pincode-input"]');
  }

  get foxyContinueButton() {
    return $('//*[@resource-id="foxy-continue-button"]');
  }

  get profileLoginButton() {
    return $('~profile-login-btn');
  }

  get loginModalNumberInput() {
    return $('~login-number');
  }

  get changeNumberButton() {
    return $('android= new UiSelector().className(android.widget.TextView).text("Change")');
  }

  get completeProfileBtn() {
    return $('//android.widget.TextView[@text="Complete Profile"]');
  }

  get nameInputUserProfile() {
    return $('//*[@resource-id="name-field-complete-profile"]');
  }
  get emailInputUserProfile() {
    return $('//*[@resource-id="email-field-complete-profile"]');

  }
  get userProfileSaveBtn() {
    return $('//android.widget.TextView[@text="Save"]');
  }

  get scanQRCodeBtn() {
    return $('//android.widget.TextView[@text="Scan a QR Code"]');
  }

  get manualUsnEntry() {
    return $('//*[@resource-id="manual-usn-input"]');
  }

  get usnInputField() {
    return $('//*[@resource-id="usn-input-field"]');
  }
  get addToBagUsnModal() {
    return $('//android.widget.TextView[@text="Add to Bag"]');
  } 
  get viewBagUsnModal() {
    return $('//android.widget.TextView[@text="View Bag"]');
  } 

}

module.exports = new ProfilePageScreen();
