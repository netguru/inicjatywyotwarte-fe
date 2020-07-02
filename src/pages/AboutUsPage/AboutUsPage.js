import React from 'react'
import { mainContactEmail } from 'constants/constants'
import { ReactComponent as Illustration } from 'assets/about_us_illustration.svg'
import styled from 'styled-components'
import PersonTile from 'components/PersonTile/PersonTile'
import ManPlaceholder from 'assets/man_placeholder.png'

import Szyrle from 'assets/team_members/Szyrle.png'
import IlonaSkarbowska from 'assets/team_members/IlonaSkarbowska.png'
import Ilias from 'assets/team_members/Ilias.png'
import Maslikowska from 'assets/team_members/Maslikowska.png'
import Bartosiewicz from 'assets/team_members/Bartosiewicz.png'
import Dlugosz from 'assets/team_members/Dlugosz.png'
import Hebda from 'assets/team_members/Hebda.png'
import KatarzynaKaminska from 'assets/team_members/KatarzynaKaminska.png'
import Burtan from 'assets/team_members/Burtan.png'
import RadekBaczynski from 'assets/team_members/RadekBaczynski.png'
import Bartek from 'assets/team_members/Bartek.jpg'
import Dawid from 'assets/team_members/Dawid.jpg'
import Kacper from 'assets/team_members/Kacper.jpg'
import Kamil from 'assets/team_members/Kamil.jpg'
import Karol from 'assets/team_members/Karol.jpg'
import Basia from 'assets/team_members/Basia.jpg'
import TomaszKujawski from 'assets/team_members/TomaszKujawski.png'
import Ira from 'assets/team_members/Ira.jpg'
import AdamSzummer from 'assets/team_members/AdamSzummer.png'
import BlazejKordzinski from 'assets/team_members/BlazejKordzinski.png'
import Pawel from 'assets/team_members/Pawel.png'

import {
  MainContainer,
  Container,
  FullTextContent,
  TextContent,
  Header,
  Description,
  PageLink,
  EmailLink
} from 'pages/sharedStyles'

const IllustrationContainer = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1.5rem;

  @media (max-width: 800px) {
    width: 100%;
    margin-top: 34px;
    padding-left: 0;
  }
`

const TeamContainer = styled.div`
  margin: 34px auto 0 auto;

  display: grid;
  grid-row-gap: 4rem;
  grid-template-columns: repeat(4, ${props => props.theme.personTileWidth});
  justify-content: space-between;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, ${props => props.theme.personTileWidth});
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, ${props => props.theme.personTileWidth});
  }
`

const StyledHr = styled.hr`
  width: 100%;
  border: 1px solid ${props => props.theme.modalColorVeryLight};
`

const AboutUsPage = () => {
  return (
    <MainContainer>
      <Container>
        <FullTextContent>
          <Header>O nas</Header>
          <Description>
            Inicjatywy Otwarte to część szerokiego ruchu społecznego,
            działającego pro bono, ze wsparciem technologicznym i merytorycznym
            Netguru, który zbiera w jednym miejscu wszystkie inicjatywy
            dotyczące walki z COVID-19 w Polsce.
          </Description>
        </FullTextContent>
      </Container>

      <Container>
        <TextContent>
          <Description small light>
            Nasz ruch łączy w sobie osoby z bogatym doświadczeniem z różnych
            branż i sektorów: osoby rozwijające rodzinne biznesy (Akurat),
            pracujące w reklamie (DEM Interactive), branży technologicznej
            (Netguru, foodtech.ac, Tooploox), budowlanej (ISG), korporacji
            (Accenture), będący freelancerami czy doktorantami (Uniwersytet w
            Lugano). Wierzymy, że wspólnymi siłami możemy pomóc potrzebującym.
          </Description>
        </TextContent>
        <IllustrationContainer>
          <Illustration />
        </IllustrationContainer>
      </Container>

      <Container>
        <Header>Nasz zespół</Header>
      </Container>
      <TeamContainer>
        <PersonTile
          photo={Pawel}
          name='Paweł Radziwił'
          role='Project Manager'
          company='Dem Interactive'
        />
        <PersonTile
          photo={IlonaSkarbowska}
          name='Ilona Skarbowska'
          role='Prezes'
          company='Carrots'
        />
        <PersonTile
          photo={Szyrle}
          name='Matylda Szyrle'
          role='Project Manager'
          company='foodtech.ac'
        />
        <PersonTile
          photo={KatarzynaKaminska}
          name='Katarzyna Kamińska'
          role='Partnerships Manager'
          company='Tooploox'
        />
        <PersonTile
          photo={Bartosiewicz}
          name='Łukasz Bartosiewicz'
          role='Owner'
          company='Akurat'
        />
        <PersonTile
          photo={AdamSzummer}
          name='Adam Szummer'
          role='Automation Engineer'
          company=''
        />
        <PersonTile
          photo={BlazejKordzinski}
          name='Błażej Kordziński'
          role='VDC Consultant'
          company=''
        />
        <PersonTile
          photo={ManPlaceholder}
          name='Jan Czarczyński'
          role='konsultant eCommerce'
          company='Accenture'
        />
        <PersonTile
          photo={ManPlaceholder}
          name='Bartosz Trocha'
          role='startup inwestor'
          company=''
        />
        <PersonTile
          photo={RadekBaczynski}
          name='Radek Baczyński'
          role='Head of Engineering'
          company=''
        />
        <PersonTile
          photo={Maslikowska}
          name='Monika Maślikowska'
          role='Doktorantka i Koordynator Programu'
          company='University of Lugano'
        />
        <PersonTile
          photo={Dlugosz}
          name='Karolina Długosz'
          role='Sustainability Lead'
          company='Netguru'
        />
        <PersonTile
          photo={Burtan}
          name='Anna Burtan'
          role='Content Marketing Specialist'
          company='Netguru'
        />
        <PersonTile
          photo={Hebda}
          name='Marta Hebda'
          role='Marketing &amp; Communication Specialist'
          company='Netguru'
        />
      </TeamContainer>

      <Container>
        <Header>Kto to stworzył</Header>
      </Container>
      <TeamContainer>
        <PersonTile
          photo={Kacper}
          name='Kacper Świątek'
          role='React Developer'
          company='Netguru'
        />
        <PersonTile
          photo={Bartek}
          name='Bartosz Sobczyński'
          role='Ruby on Rails developer'
          company='Netguru'
        />
        <PersonTile
          photo={Dawid}
          name='Dawid Janiga'
          role='Senior Frontend Developer'
          company='Netguru'
        />
        <PersonTile
          photo={Kamil}
          name='Kamil Stawski'
          role='Frontend Developer'
          company='Netguru'
        />
        <PersonTile
          photo={Ilias}
          name='Ilias Papounidis'
          role='Junior Project Manager'
          company='Netguru'
        />
        <PersonTile
          photo={Karol}
          name='Karol Kruszewski'
          role='Product Designer'
          company='Netguru'
        />
        <PersonTile
          photo={Basia}
          name='Barbara Terka'
          role='QA'
          company='Netguru'
        />
        <PersonTile
          photo={TomaszKujawski}
          name='Tomasz Kujawski'
          role='Product Design'
          company='Netguru'
        />
        <PersonTile
          photo={Ira}
          name='Iryna Korshak'
          role='Illustrator'
          company='Netguru'
        />
      </TeamContainer>

      <Container>
        <TextContent>
          <Header>Chcesz pomóc?</Header>
          <Description small>
            Jeśli szukasz wsparcia lub chcesz go udzielić - na naszej stronie
            możesz bezpłatnie przejrzeć szereg inicjatyw z całej Polski i
            odszukać te najbardziej adekwatne do Twoich potrzeb i możliwości.
          </Description>
        </TextContent>
        <TextContent>
          <Header>Kontakt</Header>
          <Description small>
            Jeśli chcesz do nas dołączyć, napisz na adres{' '}
            <EmailLink href={ `mailto: ${mainContactEmail}` }>{mainContactEmail}</EmailLink> i połączmy siły! Razem
            możemy więcej!
          </Description>
        </TextContent>
      </Container>

      <Container>
        <StyledHr />
      </Container>

      <Container>
        <TextContent>
          <Header>Szukasz więcej?</Header>
          <Description small>
            Zobacz także{' '}
            <PageLink to='/pomoc'>“Najczęściej zadawane pytania"</PageLink>
          </Description>
        </TextContent>
      </Container>
    </MainContainer>
  )
}

export default AboutUsPage
