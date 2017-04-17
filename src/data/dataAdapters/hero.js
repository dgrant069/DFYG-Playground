import uuid from 'uuid/v4';
import * as _ from 'lodash';
import { normalize, schema } from 'normalizr';

// TODO possibly consolidate this with the teaserRibbon DA. Lots of dupe code
// Data from the API is deeply nested and poorly thought through.
// Requires flattening the response first, creating immutable records, and finally, normalizing it
const sectionModel = (sliderCard) => {
  const fallbackUrl = _.hasIn(sliderCard, 'media:content.url') ? sliderCard['media:content'].url : null;

  return {
    id: _.hasIn(sliderCard, "guid.content") ? sliderCard.guid.content : uuid(),
    componentId: _.hasIn(sliderCard, "sinclair:pagecomponent.id") ? sliderCard["sinclair:pagecomponent"].id : null,
    componentName: _.hasIn(sliderCard, "sinclair:pagecomponent.content") ? sliderCard["sinclair:pagecomponent"].content : null,
    linkUrl: _.hasIn(sliderCard, "link") ? sliderCard.link : null,
    contentTypeHeader: _.hasIn(sliderCard, "media:content.type") ? sliderCard["media:content"].type : null,
    categories: _.hasIn(sliderCard, "category") ? sliderCard.category : null,
    mediumType: _.hasIn(sliderCard, "media:content.medium") ? sliderCard["media:content"].medium : null,
    title: _.hasIn(sliderCard, 'media:content.media:title') ? sliderCard['media:content']['media:title'] : null,
    description: _.hasIn(sliderCard, 'media:content.media:description') ? sliderCard['media:content']['media:description'] : null,
    pubDate: _.hasIn(sliderCard, "pubDate") ? sliderCard.pubDate : null,
    heroImageUrl: _.hasIn(sliderCard, 'media:content.media:thumbnail.url') ? sliderCard['media:content']['media:thumbnail'].url : fallbackUrl,
    heroImageWidth: _.hasIn(sliderCard, "media:content.media:thumbnail.width") ? sliderCard["media:content"]["media:thumbnail"].width : null,
    heroImageHeight: _.hasIn(sliderCard, "media:content.media:thumbnail.height") ? sliderCard["media:content"]["media:thumbnail"].height : null,
    restrictions: _.hasIn(sliderCard, "media:content.media:restriction") ? sliderCard["media:content"]["media:restriction"] : [],
    videoUrl: _.hasIn(sliderCard, 'media:content.media:thumbnail.url') ? fallbackUrl : null
  };
};

// Scrub the response data and return a UI friendly response
const flattenResponse = (sliderCardArray) => {
  // Data adapters used for normalizing API data
  let heroSliderCards = {
    sliderCards: []
  };

  if (Array.isArray(sliderCardArray)) {
    _.forEach(sliderCardArray, (sliderCard) => {
      heroSliderCards.sliderCards.push(sectionModel(sliderCard.item));
    });
  }

  return normalize(heroSliderCards, heroSchemas);
};

// Set up the normalizr schemas
const heroSchema = new schema.Entity('sliderCards');

const heroSchemas = {
  sliderCards: [heroSchema]
};

// Namespaced method
const returnNormalizedResponse = (responseData) => {
  try {
    return flattenResponse(responseData.rss.channel.pagecomponent.component)
  }
  catch(err) {
    return flattenResponse(null);
  }
};

export { returnNormalizedResponse };
