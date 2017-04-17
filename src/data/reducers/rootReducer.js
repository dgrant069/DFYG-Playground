import {combineReducers} from 'redux';
import {teaserRibbonReducer} from './teaserRibbon';
import {vodTeaserRibbonReducer} from './vodTeaserRibbon';
import {heroReducer} from './hero';
import {liveVideoReducer} from './liveVideo';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  heroReducer,
  teaserRibbonReducer,
  vodTeaserRibbonReducer,
  liveVideoReducer,
  routing: routerReducer
});

export default rootReducer;
