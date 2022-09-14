const BASE_URL = 'https://restcountries.com/v3.1';
function fetchCountries(inputValue) {
  const url = `${BASE_URL}/name/${inputValue}?fields=name,capital,population,flags,languages`;
  return fetch(url).then(response => {
    return response.json();
  });
}
export { fetchCountries };
