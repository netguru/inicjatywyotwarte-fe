import React from 'react'
import NoInitiatives from './NoInitiatives'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('NoInitiatives', () => {
  test('renders no initiatives div', () => {
    const wrapper = shallow(<NoInitiatives/>);
    expect(wrapper.find('div[className="no-initiatives"]').length).toEqual(1);
  });

  test('it displays no initiatives text', () => {
    const wrapper = shallow(<NoInitiatives/>);
    expect(wrapper.find('p').text()).toEqual('Żadna inicjatywa nie została jeszcze dodana.Kliknij poniżej, aby dodać swoją');
  });

  test('match snapshot', () => {
    const wrapper = shallow(<NoInitiatives/>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


