import React from 'react'
import SelectFieldDownshift from './SelectFieldDownshift'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const baseProps = {
  selectedItem: {},
  handleSelectedItemChange: jest.fn(),
  label: 'label',
  items: [1, 2, 3],
  placeholder: 'placeholder'
}

describe('SelectFieldDownshift', () => {
  test('renders select field', () => {
    const wrapper = shallow(<SelectFieldDownshift {...baseProps} />);
    expect(wrapper.find('SelectButton').text()).toEqual('placeholder')
    expect(wrapper.find('ClearButton').length).toEqual(1)
  });

  test('match snapshot', () => {
    const wrapper = shallow(<SelectFieldDownshift {...baseProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


