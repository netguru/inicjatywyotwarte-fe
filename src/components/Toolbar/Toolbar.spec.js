import React from 'react'
import Toolbar from './Toolbar'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

function mockedUseLocation() {
  const original = require.requireActual('react-router-dom');
  return {
    ...original,
    useLocation: jest.fn().mockReturnValue({
      pathname: '/pomoc-sasiedzka',
    }),
  };
}

jest.mock('react-router-dom', () => mockedUseLocation());

describe('Toolbar', () => {
  test('has five items', () => {
    let wrapper = shallow(<Toolbar />);

    expect(wrapper.find('Item').length).toEqual(5);
  });

  test('match snapshot', () => {
    let wrapper = shallow(<Toolbar />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});



