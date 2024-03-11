class homePageScreen {
    
    get deviceIdLoginModal() {
       return $('//*[android.widget.TextView[@text="Log me in to this account"]');
    }

    get searchIconHeader() {
        return $('//*[@resource-id="header-search-icon"]');
    }

    get searchInputField() {
        return $('//*[@resource-id="search-input-field"]');
    }

    get genderButton() {
        return $('//*[@resource-id="men"]');
    }
}

module.exports = new homePageScreen();