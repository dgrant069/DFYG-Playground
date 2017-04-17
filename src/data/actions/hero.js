import * as heroSchema from '../dataAdapters/hero';
import * as types from './constants';
import Api from '../api/apiRequests';

const loadHeroInfoSuccess = (response) => {
  return {type: types.LOAD_HERO_INFO_SUCCESS, response};
};

export const getHeroInfo = () => (dispatch) => {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return Api.getHeroInfo().then(heroData => {
    dispatch(loadHeroInfoSuccess(heroSchema.returnNormalizedResponse(heroData)));
  }).catch(error => {
    throw(error);
  });
};