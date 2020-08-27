import React from 'react'
import NewButton from './NewButton'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('NewButton', () => {
  test('match snapshot', () => {
    const wrapper = shallow(<NewButton/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


