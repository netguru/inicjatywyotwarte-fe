import React from 'react'
import NoResults from './NoResults'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('NoResults', () => {
  test('renders no results', () => {
    const wrapper = shallow(<NoResults/>);
    expect(wrapper.find('NoResultsContainer').length).toEqual(1);
  });

  test('it displays no results text', () => {
    const wrapper = shallow(<NoResults/>);
    expect(wrapper.find('NoResultsParagraph').text()).toEqual('Nie udało nam się znaleźć pasujących inicjatyw.');
  });

  test('match snapshot', () => {
    const wrapper = shallow(<NoResults/>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


