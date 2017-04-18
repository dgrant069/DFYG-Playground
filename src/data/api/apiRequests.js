const config = {
  method: 'GET',
  headers: { 'Accept': 'application/json' },
  mode: 'cors'
};

let BASE_API = 'http://api.content.fake.url';
let carouselUrl = 'f1d54d1c-05f5-48e6-8571-fce7d7840aa0';

const makeApiCall = (requestUrl) => {
  return fetch(requestUrl, config).then(response => {
    return response.json();
  }).catch(error => {
    return error;
  });
};

class Api {
  static getHeroInfo() {
    return makeApiCall(`${BASE_API}/${carouselUrl}`);
  }
}

export default Api;
