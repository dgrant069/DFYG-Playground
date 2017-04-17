import React from 'react';
import Api from '../src/data/api/apiRequests';

// TODO These need to be mocked response objects. Relies on real API responses will cause these to fail if response changes
describe('# Integration Test : Api', () => {
  it('should return 4 data when call home page layout endpoint', (done) => {
    Api.getHeroInfo().then(data => {
      expect(data).toBeDefined();
      expect(data.rss).toBeDefined();
      expect(data.rss.channel).toBeDefined();
      expect(data.rss.channel.pagecomponent).toBeDefined();
      expect(data.rss.channel.pagecomponent.component).toBeDefined();
      expect(data.rss.channel.pagecomponent.component.length).toBe(3); // TODO No
      done();
    });
  });

  it('should return a vaild data when call show meta data endpoint', (done) => {
    Api.getShowMetaData('80db9c0a-8d97-48ba-b535-2701ef82b91tl').then(data => {
      expect(data).toBeDefined();
      expect(data.rss).toBeDefined();
      expect(data.rss.channel).toBeDefined();
      expect(data.rss.channel.pagecomponent).toBeDefined();
      expect(data.rss.channel.pagecomponent.length).toBe(1);
      expect(data.rss.channel.pagecomponent[0].component).toBeDefined();
      expect(data.rss.channel.pagecomponent[0].component.length).toBe(1); // TODO No
      done();
    });
  });
});
