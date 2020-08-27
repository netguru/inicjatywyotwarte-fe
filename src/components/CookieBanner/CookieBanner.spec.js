import React from 'react'
import CookieBanner from './CookieBanner'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('CookieBanner', () => {
  test('renders loader', () => {
    const wrapper = shallow(<CookieBanner/>);
    expect(wrapper.find('Banner').length).toEqual(1);
  });

  test('has proper text', () => {
    const wrapper = shallow(<CookieBanner/>);
    expect(wrapper.find('Banner').find('span').text()).toEqual(
      "Netguru SA korzysta z plików cookies w celu analizowania ruchu na stronie. Przez dalsze korzystanie z naszego Serwisu, bez zmian ustawień w zakresie prywatności, wyrażasz dobrowolną zgodę na zapisywanie plików cookies w Twojej przeglądarce. Więcej informacji na temat plików cookies znajdziesz w naszej “Polityce Prywatności\"."
    );
  });

  test('has proper lint', () => {
    const wrapper = shallow(<CookieBanner/>);
    expect(wrapper.find('Styled(Link)').props().to).toEqual('/polityka-prywatnosci')
  });


  test('match snapshot', () => {
    const wrapper = shallow(<CookieBanner/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should save to localStorage', () => {
    const wrapper = shallow(<CookieBanner/>);
    expect(localStorage.areCookiesAccepted).toEqual(undefined)
    wrapper.find('Styled(SummaryButton)').simulate('click');
    expect(localStorage.areCookiesAccepted).toEqual("true")
  });
});


