import React from 'react'
import TextareaField from './TextareaField'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const baseProps = {
  name: 'name',
  onChange: jest.fn(),
  label: 'label',
  error: null
}

describe('TextareaField', () => {
  test('renders textarea field', () => {
    const wrapper = shallow(<TextareaField {...baseProps} />);
    expect(wrapper.find('InputBox').length).toEqual(1);
  });

  test('renders textarea field with error', () => {
    const propsWithError = {
      ...baseProps,
      error: 'error text message'
    };
    const wrapper = shallow(<TextareaField {...propsWithError} />);
    expect(wrapper.find('[className="error"]').length).toEqual(1);
  });

  test('match snapshot', () => {
    const wrapper = shallow(<TextareaField {...baseProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


