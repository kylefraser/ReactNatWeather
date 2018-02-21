const _wundergroundURL = 'https://api.wunderground.com/api/';
const _APIKEY = '788047c1e45d8aa1'; // Get your api key from https://www.wunderground.com/weather/api/
const _baseURL = _wundergroundURL + _APIKEY;

export function weatherApi(query) {
  let url = `${_baseURL}/conditions/forecast/tide/q/ME/Kennebunkport.json?`;
  return fetch(url, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(json => {
    return json;
  });
}