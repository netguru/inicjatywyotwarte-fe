import React from 'react'
import ResourceTile from './ResourceTile'
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('ResourceTile', () => {
  const resourceObject = {
    id: '1',
    iconUrl: 'http://iconurl.test',
    title: 'Title',
    description: '',
    location: 'Warsaw',
    category: 'education',
    resourceUrl: 'http://resourceTesturl.test',
    androidUrl: 'http://androidTesturl.test',
    iosUrl: 'http://iosTesturl.test',
    fbUrl: 'http://fbTesturl.test',
    votes: 0
  }

  test('renders no tags text', () => {
    let wrapper = shallow(
      <ResourceTile
        id={resourceObject.id}
        iconUrl={resourceObject.iconUrl}
        title={resourceObject.title}
        description={resourceObject.description}
        category={resourceObject.category}
        location={resourceObject.location}
        resourceUrl={resourceObject.resourceUrl}
        votes={resourceObject.votes}
        androidUrl={resourceObject.androidUrl}
        iosUrl={resourceObject.iosUrl}
        fbUrl={resourceObject.fbUrl}
      />
    );
    expect(wrapper.find('ResourceTileContainer').length).toEqual(1);
    expect(wrapper.find('PlatformButton').length).toEqual(3);
    expect(wrapper.find('VoteButton').length).toEqual(1);
    expect(wrapper.find('ResourceUrl').length).toEqual(1);
  });

  test('match snapshot', () => {
    let wrapper = shallow(
      <ResourceTile
        id={resourceObject.id}
        iconUrl={resourceObject.iconUrl}
        title={resourceObject.title}
        description={resourceObject.description}
        category={resourceObject.category}
        location={resourceObject.location}
        resourceUrl={resourceObject.resourceUrl}
        votes={resourceObject.votes}
        androidUrl={resourceObject.androidUrl}
        iosUrl={resourceObject.iosUrl}
        fbUrl={resourceObject.fbUrl}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});




