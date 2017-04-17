import * as teaserSchema from '../dataAdapters/teaserRibbon';
import * as types from './constants';
import Api from '../api/apiRequests';

const LiveStreamResponseSuccess = (response) => {
  return {type: types.LIVE_SUCCESSFUL_RESPONSE, response};
};

export const getLiveStreamRibbon = () => (dispatch) => {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return Api.getLiveStreamRibbon().then(ribbonData => {
    dispatch(LiveStreamResponseSuccess(teaserSchema.returnNormalizedResponse(ribbonData)));
  }).catch(error => {
    throw(error);
  });
};
