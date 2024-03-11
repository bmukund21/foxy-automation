class searchPageScreen {
    
    get searchIconHeader() {
        return $('//*[@resource-id="header-search-icon"]');
    }

    get searchInputField() {
        return $('//*[@resource-id="search-input-field"]');
    }

    get searchBackButton() {
       return $('//*[@resource-id="search-back-btn"]')
    }

    get searchClearButton() {
      return $('//android.widget.TextView[@text="Clear"]')
    }
}

module.exports = new searchPageScreen();