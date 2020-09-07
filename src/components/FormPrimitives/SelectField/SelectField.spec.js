import React from 'react'
import SelectField from './SelectField'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const baseProps = {
  name: 'name',
  options: {
    codes: [1, 2, 3],
    getText: jest.fn()
  },
  label: 'label'
}

describe('SelectField', () => {
  test('renders select field', () => {
    const wrapper = shallow(<SelectField {...baseProps} />);
    expect(wrapper.find('InputBox').length).toEqual(1);
    expect(wrapper.find('Select').children().length).toEqual(baseProps.options.codes.length)
  });

  test('match snapshot', () => {
    const wrapper = shallow(<SelectField {...baseProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


