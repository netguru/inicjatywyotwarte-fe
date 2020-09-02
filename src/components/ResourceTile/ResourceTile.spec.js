import React from 'react'
import ResourceTile from './ResourceTile'
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('ResourceTile', () => {
  const baseProps = {
    id: '1',
    iconUrl: 'http://iconurl.test',
    description: '',
    category: 'education',
    location: 'Warsaw',
    resourceUrl: 'http://resourceTesturl.test',
    votes: 0,
    androidUrl: 'http://androidTesturl.test',
    iosUrl: 'http://iosTesturl.test',
    fbUrl: 'http://fbTesturl.test',
  }

  test('renders no tags text', () => {
    let wrapper = shallow(<ResourceTile {...baseProps} />);
    expect(wrapper.find('ResourceTileContainer').length).toEqual(1);
    expect(wrapper.find('PlatformButton').length).toEqual(3);
    expect(wrapper.find('VoteButton').length).toEqual(1);
    expect(wrapper.find('ResourceUrl').length).toEqual(1);
  });

  test('match snapshot', () => {
    let wrapper = shallow(<ResourceTile {...baseProps} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});




