import React from 'react'
import Error from './FieldError'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Error', () => {
  test('renders styled.p', () => {
    const wrapper = shallow(<Error/>);
    expect(wrapper.find('p').length).toEqual(1);
  });

  test('match snapshot', () => {
    const wrapper = shallow(<Error/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


