import React from 'react'
import Tag from './Tag'
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Tag', () => {
  test('renders empty fragment when tag not active', () => {
    let wrapper = shallow(<Tag />);
    expect(wrapper.equals(<React.Fragment />)).toEqual(true);
  });

  test('renders TagItem when active', () => {
    let wrapper = shallow(<Tag active={true} />);
    expect(wrapper.find('TagItem').length).toEqual(1);
    expect(wrapper.find('Styled(CloseIcon)').length).toEqual(1);
  });

  test('match snapshot', () => {
    let wrapper = shallow(<Tag />);

    expect(toJson(wrapper)).toMatchSnapshot();

  });
});




