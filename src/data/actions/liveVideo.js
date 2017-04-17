import * as liveVideoSchema from '../dataAdapters/liveVideo';
import * as types from './constants';
import Api from '../api/apiRequests';

const showMetaDataResponseSuccess = (data) => {
  return {type: types.LOAD_SHOW_METADATA_SUCCESS, data};
};

export const getShowMetaData = (id) => (dispatch) => {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return Api.getShowMetaData(id).then(liveVideoData => {
    dispatch(showMetaDataResponseSuccess(liveVideoSchema.returnNormalizedResponse(liveVideoData)));
  }).catch(error => {
    throw(error);
  });
};
