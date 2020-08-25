import React from 'react'
import Page from './Page'
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

describe('Page', () => {
  test('renders page', () => {
    const wrapper = shallow(<Page/>);
    expect(wrapper.find('StyledMainContainer').length).toEqual(1);
    expect(wrapper.find('Memo(Header)[pathname="/pomoc-sasiedzka"]').length).toEqual(1);
  });

  test('page is wrapped with ThemeProvider and MuiThemeProvider', () => {
    const wrapper = shallow(<Page/>);
    expect(wrapper.find('ThemeProvider').length).toEqual(2);
  });

  test('match snapshot', () => {
    const wrapper = shallow(<Page/>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


