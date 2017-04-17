import * as types from '../actions/constants';
import merge from 'lodash/merge';

// I hate this. Right now without it, the component will throw an error and never update
let initialState = {
  liveTeaserRibbonInfo: {
    entities: {
      programs: {}
    },
    result: {
      programs: []
    }
  }
};

// export const entities = (state = initialState, action) => {
//   if (action.response) {
//     return { teaserRibbonInfo: action.response };
//   }
//
//   return state;
// };

export const teaserRibbonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIVE_SUCCESSFUL_RESPONSE:
      return {
        liveTeaserRibbonInfo: action.response
      };
    default:
      return state;
  }
};

