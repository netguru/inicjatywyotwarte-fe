import React from 'react'
import PopUp from './PopUp'
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('PopUp', () => {
  test('renders mocked icon with proper title', () => {
    const wrapper = shallow(<PopUp/>);
    expect(wrapper.find({ shouldShowPopUp: true }).length).toEqual(1);
    expect(wrapper.find('Styled(SummaryButton)').text()).toEqual('Akceptuję');
  });

  test('shouldShowPopUp changes after clicking button', () => {
    const wrapper = shallow(<PopUp/>);
    wrapper.find('Styled(SummaryButton)').simulate('click');
    expect(wrapper.find({ shouldShowPopUp: false }).length).toEqual(1);
  });

  test('match snapshot', () => {
    const wrapper = shallow(<PopUp/>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


