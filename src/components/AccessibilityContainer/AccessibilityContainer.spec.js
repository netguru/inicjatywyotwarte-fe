import React from 'react'
import AccessibilityContainer from './AccessibilityContainer'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const baseProps = {
  theme: jest.fn(),
  toggleContrast: jest.fn()
};

describe('AccessibilityContainer', () => {
  test('has button to toggle contrast', () => {
    const wrapper = shallow(<AccessibilityContainer {...baseProps} />);
    expect(wrapper.find('StyledToggleContrastButton').length).toEqual(1)
    expect(wrapper.find('StyledToggleContrastButton').text()).toEqual("\u00a0Kontrast")
  });

  test('calls function when button clicked', () => {
    const wrapper = shallow(<AccessibilityContainer {...baseProps} />);
    wrapper.find('StyledToggleContrastButton').simulate('click');
    expect(baseProps.toggleContrast).toHaveBeenCalledTimes(1);
  });

  test('match snapshot', () => {
    const wrapper = shallow(<AccessibilityContainer {...baseProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


