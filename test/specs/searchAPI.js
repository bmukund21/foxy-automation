const API_DOMAIN = 'https://api.foxy.in';
const LISTS_API_VERSION = 'v7';
const EMPTY_SEARCH_URL = `${API_DOMAIN}/api/${LISTS_API_VERSION}/empty-search`;

async function emptySearchAsync() {
  try {
    const response = await fetch(EMPTY_SEARCH_URL);
    const data = await response.json();
    if (response.status === 200) {
      var searchResult = JSON.stringify(data);
      console.log(searchResult);
    } else {
      console.log('Server error' , data.error.message);
    }
  } catch (error) {
    console.log('Fetch error: ' , error);
  }
}

emptySearchAsync();


  

