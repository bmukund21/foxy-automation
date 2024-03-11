class ProfilePageScreen {
    get addAddressButton() {
        return $('~add-address-profile');
    }

    get addressPhoneNumber() {
        return $('//*[@resource-id="phone-number-input"]');
    }

    get contactName() {
        return $('//*[@resource-id="contact-name-input"]');
    }

    get email(){
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
        return $('~foxy-continue-button');
    }

    get profileLoginButton() {
        return $('~profile-login-btn');
    }

    get loginModalNumberInput() {
        return $('~login-number');
    }

    get changeNumberButton() {
        return $(
            'android= new UiSelector().className(android.widget.TextView).text("Change")',
          );
    }

}

module.exports = new ProfilePageScreen();