import React from 'react'
import Label from './FieldLabel'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Label', () => {
  test('renders styled.label', () => {
    const wrapper = shallow(<Label/>);
    expect(wrapper.find('label').length).toEqual(1);
  });

  test('match snapshot', () => {
    const wrapper = shallow(<Label/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


