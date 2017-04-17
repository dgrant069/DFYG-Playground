import * as types from '../actions/constants';
import merge from 'lodash/merge';

// I hate this. Right now without it, the component will throw an error and never update
let initialState = {
  vodTeaserRibbonInfo: {
    entities: {
      programs: {}
    },
    result: {
      programs: []
    }
  }
};

export const vodTeaserRibbonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.VOD_SUCCESSFUL_RESPONSE:
      return {
        vodTeaserRibbonInfo: action.response
      };
    default:
      return state;
  }
};

