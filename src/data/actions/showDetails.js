import * as types from './constants';
import Api from '../api/apiRequests';

export function loadSeasonOneSuccess(data) {
    return {type: types.LOAD_SEASON_ONE_SUCCESS, data};
}

export const getSeasonOne = () => (dispatch) => {
    // make async call to api, handle promise, dispatch action when promise is resolved
    return Api.getSeasonOne().then(data => {
        dispatch(loadSeasonOneSuccess(data));
    }).catch(error => {
        throw(error);
    });
};

export function loadShowInfoSuccess(data) {
    return {type: types.LOAD_SHOW_INFO_SUCCESS, data};
}

export const getShowInfo = () => (dispatch) => {
    // make async call to api, handle promise, dispatch action when promise is resolved
    return Api.getShowInfo().then(data => {
        dispatch(loadShowInfoSuccess(data));
    }).catch(error => {
        throw(error);
    });
};
