import * as types from '../actions/constants';

// I hate this. Right now without it, the component will throw an error and never update
let initialState = {
  liveVideo: {
    entities: {
      showMetaData: {}
    },
    result: {
      showMetaData: []
    }
  }
};

export const liveVideoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_SHOW_METADATA_SUCCESS:
      return {
        liveVideo: action.data
      };

    default:
      return state;
  }
};

