import React from 'react'
import Error from './Error'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Error', () => {
  test('renders div with proper class', () => {
    const wrapper = shallow(<Error/>);
    expect(wrapper.find('div[className="error"]').length).toEqual(1);
  });

  test('renders children', () => {
    const wrapper = shallow(<Error/>);
    expect(wrapper.children.length).toEqual(1);
  });

  test('match snapshot', () => {
    const wrapper = shallow(<Error/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


