import React from 'react'
import PersonTile from './PersonTile'
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('PersonTile', () => {
  test('renders person tile container', () => {
    const wrapper = shallow(<PersonTile/>);
    expect(wrapper.find('PersonTileContainer').length).toEqual(1);
  });

  test('renders proper attributes', () => {
    const wrapper = shallow(
      <PersonTile
        name={"person name"}
        role={"person role"}
        company={"person company"}
      />
      );

    expect(wrapper.find('Name').text()).toEqual('person name');
    expect(wrapper.find('Role').text()).toEqual('person role');
    expect(wrapper.find('Company').text()).toEqual('person company');
  });

  test('match snapshot', () => {
    const wrapper = shallow(<PersonTile/>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


