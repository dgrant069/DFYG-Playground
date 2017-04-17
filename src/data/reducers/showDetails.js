import * as types from '../actions/constants';
import merge from 'lodash/merge';

let initialState = {
    showInfo: {}
};


export const entities = (state = initialState, action) => {
    if (action.response && action.response.entities) {
        return merge({}, state, action.response.entities);
    }

    return state;
};

export const showReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LOAD_SHOW_INFO_SUCCESS:
            return {
                showInfo: action.data
            };

        case types.LOAD_SEASON_ONE_SUCCESS:
            return action.data;
        default:
            return state;
    }
};
