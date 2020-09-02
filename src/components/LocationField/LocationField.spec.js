import React from 'react'
import LocationField from './LocationField'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const baseProps = {
  name: 'name',
  getLocation: jest.fn(),
  hasError: false,
  label: 'label'
}

describe('LocationField', () => {
  test('renders div with proper class', () => {
    const wrapper = shallow(<LocationField {...baseProps} />);
    expect(wrapper.find('PlacesAutocomplete').length).toEqual(1);
  });

  test('match snapshot', () => {
    const wrapper = shallow(<LocationField {...baseProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


