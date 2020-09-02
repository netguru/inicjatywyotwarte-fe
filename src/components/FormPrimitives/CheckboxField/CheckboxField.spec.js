import React from 'react'
import CheckboxField from './CheckboxField'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('CheckboxField', () => {
  test('renders div with proper class', () => {
    const wrapper = shallow(<CheckboxField/>);
    expect(wrapper.find('Checkbox').length).toEqual(1);
  });

  test('match snapshot', () => {
    const wrapper = shallow(<CheckboxField/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


