// config.js

const PHONE_NUMBER_START = '369900';
const random4DigitNumber = Math.floor(Math.random() * 9000) + 1000;
const randomNumber = PHONE_NUMBER_START + random4DigitNumber;

const config = {
  searchKeyword: 'Minimalist',
  phoneNumber: '9582373060',
  contactName: 'BM',
  addressLine1: 'Casa BM',
  addressLine2: 'Plot 346',
  email: 'beginingbulls@gmail.com',
  pinCode: '201310',

};

module.exports = config;
