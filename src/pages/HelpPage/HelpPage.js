import React from 'react'
import HelpTile from '../../components/HelpTile/HelpTile'
import { ReactComponent as FAQ } from 'assets/FAQ.svg'
import styled from 'styled-components'

const Container = styled.div`
  width: ${props => props.theme.resourceTilesWidth};
  margin: 0 auto;
  
  @media (max-width: 1000px) {
    width: ${props => props.theme.mobileResourceTilesWidth};
  }
`

const HeaderContainer = styled.div`
  display: flex;
  height: 11.5rem;
}
`

const IllustrationContainer = styled.div`
  height: 100%;
  margin: 0 auto;

  svg {
    width: 100%;
    height: 100%;
  }
`

const Header = styled.h2`
  font-weight: 400;
  font-size: 1.4rem;
  margin-top: 5rem;
`

const TileWrapper = styled.div`
  & > * {
    margin-bottom: 1.5rem;
  }
`

const HelpPage = () => {
  return (
    <Container>
      <HeaderContainer>
        <Header>Najczęściej zadawane pytania</Header>
        <IllustrationContainer>
          <FAQ />
        </IllustrationContainer>
      </HeaderContainer>
      <TileWrapper>
        <HelpTile
          headerText='Dlaczego powstał ten portal?'
          descriptionText={
            <>
              <p>
                Portal zbiera w jednym miejscu wszystkie inicjatywy dotyczące
                walki z COVID-19 w Polsce. Jeśli szukasz wsparcia lub chcesz go
                udzielić - na naszej stronie uzyskasz bezpłatny dostęp do
                szeregu inicjatyw z całej Polski podzielonych na cztery
                kategorie: dla szpitali, edukacja, pomoc sąsiedzka i lokalne
                firmy.
              </p>
              <p>
                Jest mnóstwo osób i podmiotów, które chcą się zaangażować w
                walkę z epidemią. Przykładowo, fabryki zmieniają swoje linie
                produkcyjne i chcą szyć maski, ale brakuje im pracowników i
                kanałów dotarcia do potrzebujących instytucji. Inne firmy mają w
                stanach magazynowych potrzebny sprzęt, ale nie wiedzą jak go
                przekazać i potrzebują specjalizujących się w tym zagadnieniu
                prawników. Także Drukarnie 3D, media, oraz inne lokalne
                inicjatywy i organizacje, jak np. lokale gastronomiczne
                przekazujące posiłki medykom - każdy stara się pomóc.
              </p>
              <p>To wspaniałe! Jednak ma miejsce też… CHAOS.</p>
              <p>
                Jako ruch społeczny zdecydowaliśmy się pomóc poprzez stworzenie
                największej aktualnej bazy inicjatyw dotyczących walki z
                COVID-19 w Polsce.
              </p>
              <div>
                <strong>
                  Korzystanie z platformy InicjatywyOtwarte.pl pozwala:
                </strong>
                <ul>
                  <li>
                    dotrzeć do szerszej grupy odbiorców, osób i organizacji,
                    które są chętne nieść pomoc,
                  </li>
                  <li>
                    zapoznać się z lokalnymi i ogólnopolskimi inicjatywami,
                    które są odpowiednio skategoryzowane na stronie i wybrać te,
                    które chcemy wesprzeć,
                  </li>
                  <li>dodać nowe inicjatywy społeczne na platformę,</li>
                  <li>
                    zdobyć wiedzę na temat skali działań społecznych w walce z
                    COVID-19,{' '}
                  </li>
                  <li>sprawdzić jakie inicjatywy już istnieją,</li>
                </ul>
              </div>
            </>
          }
        />
        <HelpTile
          headerText='Do czego służy ta strona?'
          descriptionText={
            <>
              <p>
                InicjatywyOtwarte.pl to platforma skierowana do dwóch stron -
                osób potrzebujących pomocy, oraz osób udzielających wsparcia
                indywidualnie lub w sposób zorganizowany:
              </p>
              <ul>
                <li>
                  <strong>
                    Platforma promuje lokalne i ogólnokrajowe inicjatywy,
                    których autorzy poszukują wsparcia,
                  </strong>{' '}
                  np. reprezentanci szpitali poszukujący grup szyjących maski,
                  reprezentanci DPS, lokalne restauracje, rodzice dzieci w wieku
                  szkolnym, nauczyciele, instytucje publiczne, fundacje.
                </li>
                <li>
                  <strong>
                    Baza inicjatyw kierowana jest do osób/grup/organizacji/firm
                    chcących wesprzeć lokalne i ogólnokrajowe inicjatywy,
                  </strong>{' '}
                  np. osoby z umiejętnościami i sprzętem krawieckim chcące pomóc
                  z szyciem masek ochronnych, osoby/firmy posiadające zaplecze
                  logistyczne, chętne do pomocy z dowozem posiłków/środków
                  medycznych, osoby, które mają wolny czas i chciałyby go
                  spożytkować niosąc pomoc, np. poprzez wsparcie uczniów w
                  zdalnej nauce.
                </li>
              </ul>
            </>
          }
        />
        <HelpTile
          headerText='Jak mogę pomóc?'
          descriptionText={
            <>
              <p>Możesz pomóc na kilka sposobów:</p>
              <ol>
                <li>
                  <strong>Dołączając do wybranej inicjatywy.</strong>
                  <br />
                  Prezentowane inicjatywy oferują możliwość zaangażowania się na
                  wiele sposobów: podzielenie się czasem, kompetencjami,
                  dofinansowaniem. Linki zamieszczone przy inicjatywach kierują
                  do aplikacji lub stron poświęconym konkretnym akcjom. Wybierz
                  interesującą Cię kategorię, znajdź inicjatywę, którą chciałbyś
                  wesprzeć i przejdź na stronę organizatora akcji.
                </li>
                <li>
                  <strong>Promując stronę wśród znajomych.</strong>
                  <br />
                  Jest mnóstwo osób i podmiotów, które chcą się zaangażować w
                  walkę z epidemią. Przykładowo, fabryki zmieniają swoje linie
                  produkcyjne i chcą szyć maski, ale brakuje im pracowników i
                  kanałów dotarcia do potrzebujących instytucji. Inne firmy mają
                  w stanach magazynowych maski, ale nie wiedzą jak je przekazać,
                  więc potrzebują specjalizujących się w tym zakresie prawników.
                  Platforma łączy obydwa środowiska, dzięki czemu niesienie
                  pomocy staje się dużo bardziej efektywne.
                </li>
                <li>
                  <strong>Dodając nową inicjatywę</strong>
                  <br />
                  Jeśli znasz akcję, której celem jest przeciwdziałanie skutkom
                  COVID-19 w Polsce, poszukującej wsparcia i zaangażowania osób
                  indywidualnych lub grup i organizacji - zgłoś ją poprzez
                  formularz.
                  <br /> Uwaga: ta strona nie prowadzi bazy danych wolontariuszy
                </li>
              </ol>
            </>
          }
        />
        <HelpTile
          headerText='Jak mogę otrzymać pomoc?'
          descriptionText='Prezentowane inicjatywy oferują wsparcie finansowe, rzeczowe, posiłkowe, czas wolontariuszy. Wybierz interesującą Cię kategorię i przejdź na stronę organizatora akcji.'
        />
        <HelpTile
          headerText='Co oznacza guzik “pomocne”?'
          descriptionText='Guzik “pomocne” oznacza, że dana informacja o tej inicjatywie była pomocna, przydała się do dalszych działań, rozmyślań, rozpoznania tematu, działania, zdobycia kontaktu, czy rozpoczęcia współpracy. :)'
        />
      </TileWrapper>
    </Container>
  )
}

export default HelpPage
