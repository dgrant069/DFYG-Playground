import * as heroSchema from '../src/data/dataAdapters/hero';

describe('DataAdapter: Hero', () => {
  it('should return empty data when responseData is undefined or null', () => {
    let responseData;
    let result = heroSchema.returnNormalizedResponse(responseData);
    expect(result.result.sliderCards.length).toBe(0);

    responseData = null;
    result = heroSchema.returnNormalizedResponse(responseData);
    expect(result.result.sliderCards.length).toBe(0);
  });
  it('should return empty data when responseData.rss is undefined or null', () => {
    let responseData = {
      rss: undefined
    };
    let result = heroSchema.returnNormalizedResponse(responseData);
    expect(result.result.sliderCards.length).toBe(0);

    responseData.rss = null;
    result = heroSchema.returnNormalizedResponse(responseData);
    expect(result.result.sliderCards.length).toBe(0);
  });
  it('should return empty data when responseData.rss.channel is undefined or null', () => {
    let responseData = {
      rss: {
        channel: undefined
      }
    };
    let result = heroSchema.returnNormalizedResponse(responseData);
    expect(result.result.sliderCards.length).toBe(0);

    responseData.rss.channel = null;
    result = heroSchema.returnNormalizedResponse(responseData);
    expect(result.result.sliderCards.length).toBe(0);
  });
  it('should return empty data when responseData.rss.channel.pagecomponent is undefined or null', () => {
    let responseData = {
      rss: {
        channel: {
          pagecomponent: undefined
        }
      }
    };
    let result = heroSchema.returnNormalizedResponse(responseData);
    expect(result.result.sliderCards.length).toBe(0);

    responseData.rss.channel.pagecomponent = null;
    result = heroSchema.returnNormalizedResponse(responseData);
    expect(result.result.sliderCards.length).toBe(0);
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
    let result = heroSchema.returnNormalizedResponse(responseData);
    expect(result.result.sliderCards.length).toBe(0);

    responseData.rss.channel.pagecomponent.component = null;
    result = heroSchema.returnNormalizedResponse(responseData);
    expect(result.result.sliderCards.length).toBe(0);
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
    let result = heroSchema.returnNormalizedResponse(responseData);
    expect(result.result.sliderCards.length).toBe(0);
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
    let result = heroSchema.returnNormalizedResponse(responseData);
    expect(result.result.sliderCards.length).toBe(1);
  });

  // TODO Code smell, must update if API schema changes... Needs to not rely on response structure
  it('should return single data with title when responseData.rss.channel.pagecomponent.component.item is defined', () => {
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
    let result = heroSchema.returnNormalizedResponse(responseData);
    expect(result.result.sliderCards.length).toBe(1);
    expect(result.entities.sliderCards[result.result.sliderCards[0]].title).toBe('test title');
  });
})
