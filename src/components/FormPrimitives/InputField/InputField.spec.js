import React from 'react'
import InputField from './InputField'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const baseProps = {
  name: 'name',
  onChange: jest.fn(),
  error: null,
  label: 'label'
}

describe('InputField', () => {
  test('renders styled.label', () => {
    const wrapper = shallow(<InputField {...baseProps} />);
    expect(wrapper.find('InputBox').length).toEqual(1);
  });

  test('renders styled.label', () => {
    const propsWithError = {
      ...baseProps,
      error: 'error text message'
    };
    const wrapper = shallow(<InputField {...propsWithError} />);
    expect(wrapper.find('[className="error"]').length).toEqual(1);
    expect(wrapper.find('[className="error"]').text()).toEqual('error text message');
  });


  test('match snapshot', () => {
    const wrapper = shallow(<InputField/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


