import * as teaserSchema from '../src/data/dataAdapters/teaserRibbon';

describe('DataAdapter: Teaser Ribbons', () => {
  it('should return empty data when responseData is undefined or null', () => {
    let responseData;
    let result = teaserSchema.returnNormalizedResponse(responseData);
    expect(result.result.programs.length).toBe(0);
    expect(result.result.restrictions).toBe(undefined);
    expect(result.result.categories).toBe(undefined);

    responseData = null;
    result = teaserSchema.returnNormalizedResponse(responseData);
    expect(result.result.programs.length).toBe(0);
    expect(result.result.restrictions).toBe(undefined);
    expect(result.result.categories).toBe(undefined);
  });
  it('should return empty data when responseData.rss is undefined or null', () => {
    let responseData = {
      rss: undefined
    };
    let result = teaserSchema.returnNormalizedResponse(responseData);
    expect(result.result.programs.length).toBe(0);

    responseData.rss = null;
    result = teaserSchema.returnNormalizedResponse(responseData);
    expect(result.result.programs.length).toBe(0);
  });
  it('should return empty data when responseData.rss.channel is undefined or null', () => {
    let responseData = {
      rss: {
        channel: undefined
      }
    };
    let result = teaserSchema.returnNormalizedResponse(responseData);
    expect(result.result.programs.length).toBe(0);

    responseData.rss.channel = null;
    result = teaserSchema.returnNormalizedResponse(responseData);
    expect(result.result.programs.length).toBe(0);
  });
  it('should return empty data when responseData.rss.channel.pagecomponent is undefined or null', () => {
    let responseData = {
      rss: {
        channel: {
          pagecomponent: undefined
        }
      }
    };
    let result = teaserSchema.returnNormalizedResponse(responseData);
    expect(result.result.programs.length).toBe(0);

    responseData.rss.channel.pagecomponent = null;
    result = teaserSchema.returnNormalizedResponse(responseData);
    expect(result.result.programs.length).toBe(0);
  });
  it('should return empty data when responseData.rss.channel.pagecomponent.component is undefined or null', () => {
    let responseData = {
      rss: {
        channel: {
          pagecomponent: {
            component: undefined
          }
        }
      }
    };
    let result = teaserSchema.returnNormalizedResponse(responseData);
    expect(result.result.programs.length).toBe(0);

    responseData.rss.channel.pagecomponent.component = null;
    result = teaserSchema.returnNormalizedResponse(responseData);
    expect(result.result.programs.length).toBe(0);
  });

  it('should return empty data when responseData.rss.channel.pagecomponent.component is NOT array', () => {
    let responseData = {
      rss: {
        channel: {
          pagecomponent: {
            component: {}
          }
        }
      }
    };
    let result = teaserSchema.returnNormalizedResponse(responseData);
    expect(result.result.programs.length).toBe(0);
  });

  it('should return single data when responseData.rss.channel.pagecomponent.component.item is undefined', () => {
    let responseData = {
      rss: {
        channel: {
          pagecomponent: {
            component: [
              {
                item: undefined
              }
            ]
          }
        }
      }
    };
    let result = teaserSchema.returnNormalizedResponse(responseData);
    expect(result.result.programs.length).toBe(1);
  });

  // TODO Code smell, must update if API schema changes... Needs to not rely on response structure
  it('should return single program item when responseData is defined', () => {
    let responseData = {
      rss: {
        channel: {
          pagecomponent: {
            component: [
              {
                item: {
                  "media:content": {
                    "media:title": 'test title',
                    "media:description": 'test description'
                  }
                }
              }
            ]
          }
        }
      }
    };
    let result = teaserSchema.returnNormalizedResponse(responseData);
    expect(result.result.programs.length).toBe(1);
    expect(result.result.programs).toEqual(jasmine.any(Array));
    let program = result.entities.programs[result.result.programs[0]];
    expect(program.title).toBe('test title');
    expect(program.description).toBe('test description');
  });
});
