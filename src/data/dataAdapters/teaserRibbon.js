import uuid from 'uuid/v4';
import * as _ from 'lodash';
import { normalize, schema } from 'normalizr';

// Data from the API is deeply nested and poorly thought through.
// Requires flattening the response first, and then normalizing it

// Need to protect against data issues like keys not being included from the API
const programModel = (program) => {
  return {
    id: _.hasIn(program, 'guid.content') ? program.guid.content : uuid(),
    componentId: _.hasIn(program, 'sinclair:pagecomponent.id') ? program['sinclair:pagecomponent'].id : null,
    componentName: _.hasIn(program, 'sinclair:pagecomponent.content') ? program['sinclair:pagecomponent'].content : null,
    linkUrl: _.hasIn(program, 'link') ? program.link : null,
    contentTypeHeader: _.hasIn(program, 'media:content.type') ? program['media:content'].type : null,
    categories: _.hasIn(program, 'category') ? program.category : null,
    mediumType: _.hasIn(program, 'media:content.medium') ? program['media:content'].medium : null,
    title: _.hasIn(program, 'media:content.media:title') ? program['media:content']['media:title'] : null,
    description: _.hasIn(program, 'media:content.media:description') ? program['media:content']['media:description'] : null,
    pubDate: _.hasIn(program, 'pubDate') ? program.pubDate : null,
    brandLogo: _.hasIn(program, 'media:content.sinclair:logo') ? program['media:content']['sinclair:logo'].url : null,
    isLive: _.hasIn(program, 'media:content.expression') ? program['media:content'].expression === 'nonstop' : false,
    thumbnailUrl: _.hasIn(program, 'media:content.media:thumbnail.url') ? program['media:content']['media:thumbnail'].url : null,
    thumbnailWidth: _.hasIn(program, 'media:content.media:thumbnail.width') ? program['media:content']['media:thumbnail'].width : null,
    thumbnailHeight: _.hasIn(program, 'media:content.media:thumbnail.height') ? program['media:content']['media:thumbnail'].height : null,
    restrictions: _.hasIn(program, 'media:content.media:restriction') ? program['media:content']['media:restriction'] : [],
    videoUrl: _.hasIn(program, 'media:content.url') ? program['media:content'].url : null
  };
};

// Scrub the response data and return a UI friendly response
const flattenResponse = (programsArray) => {
  const ProgramsObj = {
    programs: []
  };

  if (Array.isArray(programsArray)) {
    _.forEach(programsArray, (program) => {
      ProgramsObj.programs.push(programModel(program.item));
    });
  }

  return normalize(ProgramsObj, teaserRibbonSchemas);
};

// Set up the normalizr schemas
const program = new schema.Entity('programs');
const category = new schema.Entity('categories');
const restriction = new schema.Entity('restrictions');
// TODO category and restrictions don't seem to be doing anything. Adding ID's for them didn't help
const teaserRibbonSchemas = {
  programs: [program],
  restrictions: restriction,
  categories: category
};

// Namespaced method
const returnNormalizedResponse = (responseData) => {
  try {
    return flattenResponse(responseData.rss.channel.pagecomponent.component);
  }
  catch(err) {
    return flattenResponse(null);
  }
};

export { returnNormalizedResponse };
