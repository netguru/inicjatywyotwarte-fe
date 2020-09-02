import React from 'react'
import Footer from './Footer'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Footer', () => {
  test('renders footer', () => {
    const wrapper = shallow(<Footer/>);
    expect(wrapper.find('FooterMainContainer').length).toEqual(1);
  });

  test('renders proper links', () => {
    const wrapper = shallow(<Footer/>);

    expect(wrapper.find('[to="/polityka-prywatnosci"]').length).toEqual(1);
    expect(wrapper.find('[to="/regulamin-strony"]').length).toEqual(1);
    expect(wrapper.find('[to="/pomoc"]').length).toEqual(1);
    expect(wrapper.find('[to="/o-nas"]').length).toEqual(1);
  });

  test('match snapshot', () => {
    const wrapper = shallow(<Footer/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


