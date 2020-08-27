import React from 'react'
import TagsList from './TagsList'
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('TagsList', () => {
  test('renders', () => {
    let wrapper = shallow(<TagsList />);
    expect(wrapper.text()).toEqual('Brak tagów');
  });

  test('match snapshot', () => {
    let wrapper = shallow(<TagsList />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});




