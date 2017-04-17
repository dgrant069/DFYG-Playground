import uuid from 'uuid/v1';
import * as _ from 'lodash';
import { normalize, schema } from 'normalizr';

// Data from the API is deeply nested and poorly thought through.
// Requires flattening the response first, creating immutable records, and finally, normalizing it

const dataModel = (metaData) => {
  let videoUrl = _.hasIn(metaData, 'media:content.url') ? metaData['media:content'].url : null;
  let isVideo = _.hasIn(metaData, 'media:content.medium') ? metaData['media:content'].medium === 'video' : false;
  return {
    id: uuid(), // NOTE: add this unique id for avoiding duplicated guid coming from API
    guid: _.hasIn(metaData, 'guid.content') ? metaData.guid.content : null,
    description: _.hasIn(metaData, 'description') ? metaData.description : null,
    title: _.hasIn(metaData, 'title') ? metaData.title : null,
    isLive: _.hasIn(metaData, 'media:content.expression') ? metaData['media:content'].expression === 'nonstop' : false,
    videoUrl: videoUrl,
    isVideo: isVideo
  };
};

// Scrub the response data and return a UI friendly response
const flattenResponse = (metaDataArray) => {
  // Data adapters used for normalizing API data
  let showMetaDataArray = {
    showMetaData: []
  };

  if (Array.isArray(metaDataArray)) {
    _.forEach(metaDataArray, (metaData) => {
      showMetaDataArray.showMetaData.push(dataModel(metaData.item));
    });
  }
  return normalize(showMetaDataArray, showMetaDataschema);
};

const metaDataSchema = new schema.Entity('showMetaData');
// Set up the normalizr schemas
const showMetaDataschema = {
  showMetaData: [metaDataSchema]
};

// Namespaced method
const returnNormalizedResponse = (responseData) => {
  // data response is little different than teaser ribbon and hero: pagecomponent is array.
  let isValidData = !!responseData && !!responseData.rss && !!responseData.rss.channel &&
                    !!responseData.rss.channel.pagecomponent && responseData.rss.channel.pagecomponent.length !== '0' &&
                    !!responseData.rss.channel.pagecomponent[0].component;
  
  var data = isValidData ? flattenResponse(responseData.rss.channel.pagecomponent[0].component) : flattenResponse(null);
  return data;
};

export { returnNormalizedResponse };
