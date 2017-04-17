import * as teaserSchema from '../dataAdapters/teaserRibbon';
import * as types from './constants';
import Api from '../api/apiRequests';

const VODResponseSuccess = (response) => {
  return {type: types.VOD_SUCCESSFUL_RESPONSE, response};
};

export const getVideoOnDemandRibbons = () => (dispatch) => {
  return Api.getVideoOnDemandRibbons().then(ribbonData => {
    dispatch(VODResponseSuccess(teaserSchema.returnNormalizedResponse(ribbonData)));
  }).catch(error => {
    throw(error);
  });
};
