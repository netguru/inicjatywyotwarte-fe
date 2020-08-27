import React from 'react'
import HelpTile from './HelpTile'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('HelpTile', () => {
  test('renders help til with proper ', () => {
    const wrapper = shallow(
      <HelpTile
        headerText="header text"
        descriptionText="description text"
      />
      );
    expect(wrapper.find('HeaderText').text()).toEqual('header text')
    expect(wrapper.find('Description').text()).toEqual('description text')
  });

  test('has dropdown arrow working', () => {
    const wrapper = shallow(
      <HelpTile
        headerText="header text"
        descriptionText="description text"
      />
    );
    expect(wrapper.find('ArrowDropDownIcon').length).toEqual(1);
    wrapper.find('Tile').simulate('click');
    expect(wrapper.find('ArrowDropUpIcon').length).toEqual(1);
  });

  test('match snapshot', () => {
    const wrapper = shallow(
      <HelpTile
        headerText="header text"
        descriptionText="description text"
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


