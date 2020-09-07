import React from 'react'
import ResourceMockedIcon from './RecourceMockedIcon'
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('ResourceMockedIcon', () => {
  const [title, category, size] = ['Title', 'neighbourly_help', 50];

  test('renders mocked icon with proper title', () => {
    const wrapper = shallow(
      <ResourceMockedIcon
        title={title}
        category={category}
        size={size}
      />
      );
    expect(wrapper.find('Icon').length).toEqual(1);
    expect(wrapper.text()).toEqual('Title');
  });

  test('match snapshot', () => {
    let wrapper = shallow(
      <ResourceMockedIcon
        title={title}
        category={category}
        size={size}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


