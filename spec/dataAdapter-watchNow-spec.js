import * as metaData from '../src/data/dataAdapters/liveVideo';

describe('DataAdapter: Live Video', () => {
  it('should return empty data when responseData is undefined or null', () => {
    let responseData;
    let result = metaData.returnNormalizedResponse(responseData);
    expect(result.result.showMetaData.length).toBe(0);

    responseData = null;
    result = metaData.returnNormalizedResponse(responseData);
    expect(result.result.showMetaData.length).toBe(0);
  });
  it('should return empty data when responseData.rss is undefined or null', () => {
    let responseData = {
      rss: undefined
    };
    let result = metaData.returnNormalizedResponse(responseData);
    expect(result.result.showMetaData.length).toBe(0);

    responseData.rss = null;
    result = metaData.returnNormalizedResponse(responseData);
    expect(result.result.showMetaData.length).toBe(0);
  });
  it('should return empty data when responseData.rss.channel is undefined or null', () => {
    let responseData = {
      rss: {
        channel: undefined
      }
    };
    let result = metaData.returnNormalizedResponse(responseData);
    expect(result.result.showMetaData.length).toBe(0);

    responseData.rss.channel = null;
    result = metaData.returnNormalizedResponse(responseData);
    expect(result.result.showMetaData.length).toBe(0);
  });
  it('should return empty data when responseData.rss.channel.pagecomponent is undefined or null', () => {
    let responseData = {
      rss: {
        channel: {
          pagecomponent: undefined
        }
      }
    };
    let result = metaData.returnNormalizedResponse(responseData);
    expect(result.result.showMetaData.length).toBe(0);

    responseData.rss.channel.pagecomponent = null;
    result = metaData.returnNormalizedResponse(responseData);
    expect(result.result.showMetaData.length).toBe(0);
  });
  it('should return empty data when responseData.rss.channel.pagecomponent.component is undefined or null', () => {
    let responseData = {
      rss: {
        channel: {
          pagecomponent: [{
            component: undefined
          }]
        }
      }
    };
    let result = metaData.returnNormalizedResponse(responseData);
    expect(result.result.showMetaData.length).toBe(0);

    responseData.rss.channel.pagecomponent.component = null;
    result = metaData.returnNormalizedResponse(responseData);
    expect(result.result.showMetaData.length).toBe(0);
  });

  it('should return empty data when responseData.rss.channel.pagecomponent.component is NOT array', () => {
    let responseData = {
      rss: {
        channel: {
          pagecomponent: [{
            component: {}
          }]
        }
      }
    };
    let result = metaData.returnNormalizedResponse(responseData);
    expect(result.result.showMetaData.length).toBe(0);
  });

  it('should return single data when responseData.rss.channel.pagecomponent.component.item is undefined', () => {
    let responseData = {
      rss: {
        channel: {
          pagecomponent: [{
            component: [
              {
                item: undefined
              }
            ]
          }]
        }
      }
    };
    let result = metaData.returnNormalizedResponse(responseData);
    expect(result.result.showMetaData.length).toBe(1);
  });

  it('should return single data with title when responseData.rss.channel.pagecomponent.component.item is defined', () => {
    let responseData = {
      rss: {
        channel: {
          pagecomponent: [{
            component: [
              {
                item: {
                  title: 'test title'
                }
              }
            ]
          }]
        }
      }
    };
    let result = metaData.returnNormalizedResponse(responseData);
    expect(result.result.showMetaData.length).toBe(1);
    expect(result.entities.showMetaData[result.result.showMetaData[0]].title).toBe('test title');
  });
})
