//
const config = {
  method: 'GET',
  headers: { 'Accept': 'application/json' },
  mode: 'cors'
};

let BASE_API_OLD = 'http://54.186.241.171:5012/api/content';
let BASE_API = 'https://s3-us-west-2.amazonaws.com/tennischannelmock/watchhummingbird/json';

let seasonOneUrl = 'season/80db9c0a-8d97-48ba-b535-2701ef82b92tl';
let showInfoUrl = 'show/80db9c0a-8d97-48ba-b535-2701ef82b91tl';
let carouselUrl = 'f1d54d1c-05f5-48e6-8571-fce7d7840aa0.json';
let liveStreamTeaserRibbonUrl = 'f7b75fef-8ff2-4844-8072-2bce0c8039d0.json';
let videoOnDemandTeaserRibbonUrl = 'e51c8761-311c-41e5-b047-7a75da9f6ed7.json';

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

  static getLiveStreamRibbon() {
    return makeApiCall(`${BASE_API}/${liveStreamTeaserRibbonUrl}`);
  }

  static getVideoOnDemandRibbons() {
    return makeApiCall(`${BASE_API}/${videoOnDemandTeaserRibbonUrl}`);
  }

  static getShowInfo() {
    return makeApiCall(`${BASE_API_OLD}/${showInfoUrl}`);
  }

  static getSeasonOne() {
    return makeApiCall(`${BASE_API_OLD}/${seasonOneUrl}`);
  }

  static getShowMetaData(id) {
    return makeApiCall(`${BASE_API_OLD}/show/${id}/info`);
  }
}

export default Api;
