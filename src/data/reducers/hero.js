import * as types from '../actions/constants';
import merge from 'lodash/merge';

// I hate this. Right now without it, the component will throw an error and never update
let initialState = {
  heroInfo: {
    entities: {
      sliderCards: {}
    },
    result: {
      sliderCards: []
    }
  },
};


export const entities = (state = initialState, action) => {
  if (action.response) {
    return { heroInfo: action.response };
  }

  return state;
};

export const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_HERO_INFO_SUCCESS:
      return {
          heroInfo: action.response
      };

    default:
      return state;
  }
};

