import React from 'react'
import SummaryButton from './SummaryButton'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const baseProps = {
  onClick: jest.fn('mocked-function'),
  children: <p>Child</p>,
  className: 'mocked-class-name'
}

describe('SummaryButton', () => {
  test('renders button', () => {
    const wrapper = shallow(<SummaryButton {...baseProps} />);
    expect(wrapper.find('SummaryButton').length).toEqual(1);
    expect(wrapper.find('[className="mocked-class-name"]').length).toEqual(1);
    expect(wrapper.children().first().equals(<p>Child</p>)).toEqual(true);
  });

  test('renders link when to attr in props', () => {
    const propsWithToAttribute = {
      ...baseProps,
      to: 'mocked-to'
    }
    const wrapper = shallow(<SummaryButton {...propsWithToAttribute} />);
    expect(wrapper.find('SummaryLink[className="mocked-class-name"][to="mocked-to"]').length).toEqual(1);
    expect(wrapper.children().first().equals(<p>Child</p>)).toEqual(true);
  });

  test('match snapshot', () => {
    const wrapper = shallow(<SummaryButton/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


