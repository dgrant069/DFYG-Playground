import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import VideoPlayer from './../src/components/VideoPlayer';

describe('VideoPlayer', () => {
  it('has important default props', () => {
    const wrapper = shallow(<VideoPlayer />);
    expect(wrapper.instance().props.id).toMatch(/jwplayer-root-[a-z0-9-]*/);
    expect(wrapper.instance().props.aspectRatio).toEqual('16:9');
    expect(wrapper.instance().props.width).toEqual('100%');
  });

  it('calls setup, pause, and setVolume on mount', () => {
    let result;
    const player = sinon.spy(() => {
      result =  {
        setup: sinon.spy(),
        pause: sinon.spy(),
        setVolume: sinon.spy(),
      }
      return result;
    });
    const wrapper = mount(<VideoPlayer jwplayer={player} />);
    expect(result.setup.callCount).toEqual(1);
    expect(result.pause.callCount).toEqual(1);
    expect(result.setVolume.callCount).toEqual(1);
  });

  // it('registers events', () => {
  //   let result;
  //   const player = sinon.spy(() => {
  //     result =  {
  //       setup: sinon.spy(),
  //       pause: sinon.spy(),
  //       setVolume: sinon.spy(),
  //     }
  //     return result;
  //   });
  //   const wrapper = mount(<VideoPlayer jwplayer={player} />);
  //   const registerSpy = spyOn(VideoPlayer.prototype, 'registerEvents');
  //   expect(registerSpy).toHaveBeenCalled();
  // });
});
