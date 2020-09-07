import React from 'react'
import Loader from './Loader'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Loader', () => {
  test('renders loader', () => {
    const wrapper = shallow(<Loader/>);
    expect(wrapper.find('StyledLoader').length).toEqual(1);
    expect(wrapper.find('StyledLoader').text()).toEqual('Ładowanie...');
  });


  test('match snapshot', () => {
    const wrapper = shallow(<Loader/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


