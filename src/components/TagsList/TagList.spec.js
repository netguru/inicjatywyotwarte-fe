import React from 'react'
import TagsList from './TagsList'
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('TagsList', () => {
  test('renders', () => {
    let wrapper = shallow(<TagsList />);
    expect(wrapper.text()).toEqual('Brak tagów');
  });

  // test('renders tags list', () => {
  //   const tags = ['tag1', 'tag2', 'tag3'];
  //   let wrapper = shallow(<ResourceTile tags={tags} />);
  //
  //   expect(wrapper.find('Tag').length).toEqual(3);
  // });

  test('match snapshot', () => {
    let wrapper = shallow(<TagsList />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});




