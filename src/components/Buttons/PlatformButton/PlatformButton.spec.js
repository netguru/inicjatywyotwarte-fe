import React from 'react'
import PlatformButton from './PlatformButton'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import AndroidIcon from '@material-ui/icons/Android'
import AppleIcon from '@material-ui/icons/Apple'
import FacebookIcon from '@material-ui/icons/Facebook'

const baseProps = {
  url: 'http://example.test',
  platform: 'android',
  size: '50'
};

describe('PlatformButton', () => {
  test('renders button', () => {
    const wrapper = shallow(<PlatformButton {...baseProps} />);
    expect(wrapper.find('PlatformButton').length).toEqual(1);
  });

  test('renders proper size and url', () => {
    const wrapper = shallow(<PlatformButton {...baseProps} />);
    expect(wrapper.find('PlatformButton[href="http://example.test"][size="50"]'))
  });

  test('has proper icon', () => {
    const androidWrapper = shallow(<PlatformButton {...baseProps} />);
    expect(androidWrapper.children().first().equals(<AndroidIcon fontSize='inherit' />)).toEqual(true);

    const appleProps = {
      ...baseProps,
      platform: 'ios'
    }
    const appleWrapper = shallow(<PlatformButton {...appleProps} />);
    expect(appleWrapper.children().first().equals(<AppleIcon fontSize='inherit' />)).toEqual(true);

    const facebookProps = {
      ...baseProps,
      platform: 'fb'
    }
    const facebookWrapper = shallow(<PlatformButton {...facebookProps} />);
    expect(facebookWrapper.children().first().equals(<FacebookIcon fontSize='inherit' />)).toEqual(true);
  });

  test('match snapshot', () => {
    const wrapper = shallow(<PlatformButton {...baseProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


