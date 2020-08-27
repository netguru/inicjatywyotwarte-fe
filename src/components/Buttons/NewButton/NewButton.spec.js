import React from 'react'
import NewButton from './NewButton'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('NewButton', () => {
  test('renders button', () => {
    const wrapper = shallow(<NewButton/>);
    expect(wrapper.find('AddButton[to="/dodaj-inicjatywe"]').length).toEqual(1);
    expect(wrapper.find('AddButton[to="/dodaj-inicjatywe"]').text()).toEqual('+ Dodaj inicjatywę');
  });

  test('match snapshot', () => {
    const wrapper = shallow(<NewButton/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


