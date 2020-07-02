import React from 'react'
import { mainContactEmail } from 'constants/constants'
import styled from 'styled-components'
import {
  MainContainer,
  Container,
  FullTextContent,
  Header,
  Description,
  DefinitionsContainer,
  AdvancedList,
  ListItem,
  ExternalLink,
  PageLink,
  EmailLink
} from 'pages/sharedStyles'

const TermsOfUsePage = () => {
  return (
    <MainContainer>
      <Container>
        <FullTextContent>
          <Header>Regulamin strony </Header>
          <AdvancedList noLeftSpace>
            <ListItem>
              <strong>Definicje:</strong>
              <DefinitionsContainer>
                <Description small>
                  <strong>Regulamin</strong> – oznacza niniejszy regulamin.
                </Description>
                <Description small concise>
                  <strong>Administrator</strong> – Netguru Spółka Akcyjna z
                  siedzibą w Poznaniu (61-756), ul. Małe Garbary 9, wpisana do
                  rejestru przedsiębiorców Krajowego Rejestru Sądowego pod nr
                  KRS 0000745671, której dokumentacja przechowywana jest przez
                  Sąd Rejonowy - Nowe Miasto i Wilda w Poznaniu, VIII Wydział
                  Gospodarczy Krajowego Rejestru Sądowego, NIP 7781454968, REGON
                  300826280, kapitał zakładowy: 104 525,96 zł, w całości
                  wpłacony.
                </Description>
                <Description small concise>
                  <strong>Inicjatywy Otwarte</strong> – ruch społeczny
                  dobrowolnych wolontariuszy działający pro bono, zajmujący się
                  gromadzeniem w jednym miejscu możliwie wszystkich Inicjatyw
                  społecznych dotyczących walki z COVID-19 w Polsce, aby
                  umożliwić do nich łatwiejszy dostęp oraz promocję wśród
                  społeczeństwa poprzez Serwis.
                </Description>
                <Description small concise>
                  <strong>Inicjatywy Społeczne</strong> – wszelkie inicjatywy
                  społeczne stworzone oraz prowadzone przez indywidualne osoby
                  fizyczne lub osoby prawne, o zasięgu lokalnym lub
                  ogólnopolskim przez społeczność lokalną lub inne podmioty, w
                  celu szerzenia pomocy społecznej w walce z pandemią COVID-19.
                  Inicjatywy Społeczne są dobrowolnie umieszczane w Serwisie
                  przez Użytkowników oraz gromadzone w Bazie Danych Inicjatywy
                  Otwarte.
                </Description>
                <Description small concise>
                  <strong>Baza Danych</strong> – oznacza zbiór danych
                  zgromadzonych według określonej systematyki i metody Inicjatyw
                  Społecznych, dostępnych indywidualnie, również za pomocą
                  środków elektronicznych, zawierających dane Inicjatyw
                  Społecznych, do którego prawa wyłączne przysługują Inicjatywom
                  Otwartym.
                </Description>
                <Description small concise>
                  <strong>Serwis</strong> – zorganizowana platforma
                  informatyczno-informacyjna podłączona do sieci Internet
                  stworzona przez Netguru oraz Inicjatywy Otwarte, umożliwiająca
                  Użytkownikom korzystanie z mechanizmów wyszukiwania oraz z
                  usług dodatkowych, dostępna pod adresem internetowym&nbsp;
                  <ExternalLink href='https://inicjatywyotwarte.pl/'>
                    https://inicjatywyotwarte.pl/
                  </ExternalLink>
                  .
                </Description>
                <Description small concise>
                  <strong>Użytkownik</strong> – oznacza każdą osobę, która w
                  jakikolwiek sposób korzysta z Serwisu.
                </Description>
                <Description small concise>
                  <strong>Wyszukiwarka</strong> – oznacza narzędzie do
                  zarządzania danymi, umożliwiające Użytkownikowi wyszukiwanie i
                  zestawienie danych zawartych w Bazie Danych, integralnie
                  związanych z Bazą Danych.
                </Description>
                <Description small concise>
                  <strong>Usługi informacyjne</strong> – udostępnianie treści na
                  indywidualne żądanie Użytkownika (poprzez wyświetlenie strony
                  o określonym adresie URL).
                </Description>
                <Description small concise>
                  <strong>Usługi wyszukiwawcze</strong> – usługi pozwalające
                  Użytkownikom na zdalne korzystanie z mechanizmów
                  informatycznych pozwalających wyszukać i wyświetlić dane
                  zapisane na serwerach; Usługi wyszukiwawcze stanowią część
                  Usług informacyjnych.
                </Description>
              </DefinitionsContainer>
            </ListItem>
            <ListItem>
              <strong>Postanowienia ogólne</strong>
              <AdvancedList>
                <ListItem small concise>
                  Regulamin ma na celu zapewnienie niezakłóconego, zgodnego z
                  prawem i uporządkowanego korzystania z Serwisu przez
                  Użytkowników. Regulacje zawarte w Regulaminie oraz Polityce
                  Prywatności służą w szczególności zapewnieniu prywatności
                  Użytkowników, ochronie gromadzonych i przetwarzanych danych
                  osobowych oraz ich bezpieczeństwu.
                </ListItem>
                <ListItem small concise>
                  Użytkownicy Serwisu pozostają anonimowi. Informacje zawarte w
                  logach systemowych, wykorzystywane są przez Administratora,
                  Inicjatywy Otwarte lub inne uprawnione podmioty wyłącznie w
                  celach technicznych, związanych z administracją serwerami oraz
                  do zbierania ogólnych, statystycznych informacji
                  demograficznych niezbędnych dla funkcjonowania Serwisu.
                </ListItem>
                <ListItem small concise>
                  Administrator zastrzega sobie prawo do jednostronnego
                  decydowania o zawartości Serwisu, a także dokonywania w nim
                  zmian i modyfikacji. Użytkownikom przysługuje prawo
                  korzystania, na warunkach określonych w Regulaminie z treści
                  udostępnionych w ramach Serwisu wraz prawem do ingerencji,
                  modyfikacji lub zmiany takich treści, które dotyczą ich
                  bezpośrednio.
                </ListItem>
                <ListItem small concise>
                  Uzyskując dostęp do Serwisu, Użytkownik wyraża zgodę na
                  przestrzeganie postanowień Regulaminu, a także obowiązujących
                  przepisów prawa. Jeśli nie zgadzasz się z którymkolwiek z
                  warunków określonych w Regulaminie, zabronione jest
                  korzystanie z Serwisu lub uzyskiwanie do niego dostępu.{' '}
                </ListItem>
              </AdvancedList>
            </ListItem>
            <ListItem>
              <strong>Odpowiedzialność za korzystanie z Serwisu</strong>
              <AdvancedList>
                <ListItem small concise>
                  Administrator zastrzega, że korzystanie z Serwisu odbywa się
                  wyłącznie na koszt i ryzyko Użytkownika.
                </ListItem>
                <ListItem small concise>
                  Użytkownik gwarantuje, że będzie korzystał z Serwisu, zarówno
                  w zakresie odbioru, jak i przesyłania informacji, wyłącznie w
                  sposób zgodny z obowiązującym prawem, zasadami współżycia
                  społecznego i dobrymi obyczajami, niniejszym Regulaminem oraz
                  innymi regulaminami znajdującymi zastosowanie do Serwisu w
                  poszanowaniu dla praw własności intelektualnej. Zabronione
                  jest korzystanie z Serwisu w jakikolwiek sposób, który jest
                  niezgodny z prawem, zasadami współżycia społecznego lub
                  dobrymi obyczajami, w szczególności w sposób, który ma na celu
                  lub może prowadzić do naruszenia obowiązującego prawa, a także
                  do wysyłania, świadomego odbierania, przesyłania, używania lub
                  ponownego wykorzystywania treści niezgodnych z Regulaminem;
                  przekazywania lub wysyłania jakichkolwiek niezamówionych lub
                  nieautoryzowanych materiałów reklamowych lub promocyjnych,
                  „spamu”; do świadomego przesyłania jakichkolwiek materiałów
                  zawierających wirusy, trojany, oprogramowanie szpiegujące,
                  oprogramowanie reklamowe lub inne złośliwe oprogramowanie,
                  które może negatywnie wpływać na działanie jakiegokolwiek
                  oprogramowania, sieci lub sprzętu komputerowego. Zabronione
                  jest podejmowanie prób uzyskania nieautoryzowanego dostępu do
                  serwera, na którym przechowywany jest Serwis,, a także
                  wszelkiego nieautoryzowanego dostępu mającego na celu lub
                  powodującego uszkodzenie lub zakłócenie działania
                  jakiejkolwiek części Serwisu, sprzętu lub sieci.
                </ListItem>
                <ListItem small concise>
                  Administrator nie ponosi odpowiedzialności oraz nie udziela
                  gwarancji, że korzystanie przez Użytkownika z Serwisu będzie
                  przebiegało bez zakłóceń, błędów, przerw, czy wad innej
                  natury, jak też, że rezultat poszukiwań, w tym informacje
                  dostępne w ramach Serwisu lub innych serwisów, do których
                  Użytkownik uzyskał dostęp w związku z korzystaniem z Serwisu,
                  będzie odpowiadał oczekiwaniom Użytkownika, co do
                  merytorycznej zawartości, dokładności czy przydatności
                  uzyskanych informacji, a także nie ponosi odpowiedzialności i
                  nie gwarantuje, że informacje powyższe są rzetelne i prawdziwe
                  oraz nie gwarantuje, że informacje powyższe nie naruszają
                  przepisów prawa lub praw podmiotów trzecich (w tym praw
                  autorskich). Administrator wyłącza swoją odpowiedzialność za
                  jakiekolwiek straty lub szkody wynikające z korzystania z
                  Serwisu w sposób sprzeczny z Regulaminem Strony lub Polityką
                  Prywatności. Administrator ma w szczególności prawo zawiesić
                  działalność Serwisu, zmienić jego treść oraz układ.
                </ListItem>
                <ListItem small concise>
                  Administrator nie ponosi odpowiedzialności za jakiekolwiek
                  skutki wykorzystania przez Użytkownika informacji uzyskanych
                  za pośrednictwem Serwisu, w szczególności za konsekwencje
                  podjętych na ich podstawie decyzji. Serwis może zawierać
                  materiały podmiotów trzecich lub linki do innych stron
                  internetowych. Linki do innych stron internetowych są dostępne
                  w Serwisie wyłącznie w celach informacyjnych i dla wygody
                  Użytkownika. Administrator nie ma kontroli nad tymi stronami
                  internetowymi, nie sprawdza, nie nadzoruje, nie weryfikuje,
                  ani nie zatwierdza treści tam dostępnych. Administrator nie
                  ponosi odpowiedzialności za dostępność tych stron
                  internetowych, ich zawartość ani za jakiekolwiek szkody, które
                  mogą zostać wyrządzone Użytkownikowi lub podmiotom trzecim w
                  wyniku dostępu do tych stron. Korzystanie z takich stron
                  internetowych odbywa się na wyłączne ryzyko Użytkownika.
                </ListItem>
                <ListItem small concise>
                  Administrator nie ponosi odpowiedzialności za jakiekolwiek
                  transakcje realizowane w serwisach dostarczanych przez
                  Inicjatywy. Wszelkie roszczenia, w szczególności wykonywanie
                  uprawnień wynikających z ustaw regulujących świadczenie usług
                  drogą elektroniczną lub uprawnień przysługujących konsumentom
                  należy kierować do podmiotów dostarczających serwis, w ramach,
                  którego zawarta została transakcja.
                </ListItem>
                <ListItem small concise>
                  W najszerszym zakresie dopuszczalnym przez prawo polskie,
                  Administrator wyłącza swoją odpowiedzialność oraz
                  odpowiedzialność podmiotów, którymi posługuje się przy
                  wykonywaniu działalności, za szkody poniesione przez
                  Użytkowników lub utracone przez nich korzyści.
                </ListItem>
                <ListItem small concise>
                  W najszerszym zakresie dopuszczalnym przez prawo polskie
                  Administrator wyłącza swoją odpowiedzialność oraz
                  odpowiedzialność podmiotów, którymi posługuje się przy
                  wykonywaniu działalności , zgodnie z art. 12, 13 oraz 14
                  ustawy o świadczeniu usług drogą elektroniczną.
                </ListItem>
                <ListItem small concise>
                  Zakazane jest dostarczanie do Serwisu przez Użytkowników
                  treści (w szczególności komentarzy do wiadomości, opinii) o
                  charakterze bezprawnym, sprzecznych z dobrymi obyczajami oraz
                  naruszających prawa osób trzecich. Administrator nie ponosi
                  odpowiedzialności za formę i treść opinii umieszczanych przez
                  Użytkownika w Serwisie{' '}
                </ListItem>
                <ListItem small concise>
                  Administrator nie ponosi odpowiedzialności, w szczególności
                  cywilnej, karnej lub administracyjnej, za korzystanie z
                  Serwisu przez Użytkownika w sposób sprzeczny z postanowieniami
                  Regulaminu oraz z powszechnie obowiązującymi przepisami prawa.
                </ListItem>
                <ListItem small concise>
                  W przypadku uzyskania przez Administratora informacji o
                  naruszeniu Regulaminu lub zaistnienia uzasadnionej obawy
                  takiego naruszenia, Administrator może niezwłocznie wdrożyć
                  działania prewencyjne lub naprawcze, w tym zablokować dostęp
                  do Serwisu lub usunąć wszelkie informacje, dane i treści
                  dostarczone przez Użytkownika lub jakikolwiek inny podmiot w
                  dowolnym czasie, w dowolnym zakresie i bez powiadomienia.
                </ListItem>
              </AdvancedList>
            </ListItem>
            <ListItem>
              <strong>Prawa własności intelektualnej</strong>
              <AdvancedList>
                <ListItem small concise>
                  Wszelkie prawa do Bazy Danych podlegają ochronie prawnej.
                  Użytkownicy mają dostęp do danych zgromadzonych w Bazie Danych
                  poprzez Wyszukiwarkę oraz świadczone w ramach Serwisu Usługi
                  wyszukiwawcze. Dane uzyskane w sposób, o którym mowa w zdaniu
                  poprzednim, z zastrzeżeniem innych postanowień Regulaminu, nie
                  mogą służyć do stworzenia innej bazy danych lub do włączenia
                  do innej bazy danych, do innego publicznego komercyjnego
                  rozpowszechniania ani nie mogą być wykorzystywane w sposób
                  niezgodny z prawem, dobrymi obyczajami oraz zasadami
                  współżycia społecznego. Wszelkie modyfikacje, uzupełnienia,
                  opracowania Bazy Danych oraz inne związane z nią czynności
                  konieczne do świadczenia Usług wyszukiwawczych mogą być
                  dokonywane wyłącznie przez Administratora lub podmioty
                  działające na jego zlecenie.
                </ListItem>
                <ListItem small concise>
                  Administrator niniejszym informuje, że Serwis zawiera lub
                  wykorzystuje dobra chronione prawem autorskim, znaki towarowe
                  oraz inne oryginalne materiały, w szczególności teksty,
                  zdjęcia, grafikę, dźwięki oraz materiały wideo i zakazane jest
                  jakiekolwiek ich używanie lub rozpowszechnianie, bez
                  uprzedniej zgody uprawnionego podmiotu. Przyjęty w Serwisie
                  wybór i układ prezentowanych w nim treści stanowi samoistny
                  przedmiot ochrony prawno-autorskiej.
                </ListItem>
                <ListItem small concise>
                  Użytkownicy, udostępniając materiały/treści w ramach Serwisu
                  niniejszym wyrażają zgodę na wykorzystanie takich
                  materiałów/treści, w granicach osobistego użytku, przez
                  pozostałych Użytkowników, a Administratorowi udzielają
                  nieodpłatnego i nieograniczonego czasowo i terytorialnie prawa
                  do ich kopiowania, opracowania, i publicznego udostępniania w
                  sieci Internet.
                </ListItem>
              </AdvancedList>
            </ListItem>
            <ListItem>
              <strong>Ochrona Prywatności</strong>
              <AdvancedList>
                <ListItem small concise>
                  Działanie Serwisu oparte jest na założeniu możliwie
                  najmniejszej ingerencji w sferę prywatności Użytkowników.
                </ListItem>
                <ListItem small concise>
                  Administrator zastrzega jednak, że dostęp do określonych
                  treści/serwisów w ramach Serwisu może być uzależniony od
                  podania określonych informacji, które mogą, ale nie muszą
                  stanowić danych osobowych w rozumieniu ustawy o ochronie
                  danych osobowych Użytkownik w każdej chwili ma prawo
                  zrezygnować z korzystania z Serwisu wymagającego podania
                  dodatkowych danych.
                </ListItem>
                <ListItem small concise>
                  Zasady przetwarzania danych osobowych zawarte są w Polityce
                  Prywatności, dostępnej za pośrednictwem Serwisu.
                </ListItem>
                <ListItem small concise>
                  W przypadku danych przekazanych przez Użytkownika niebędących
                  danymi osobowymi, Administrator dołoży staranności, aby dane
                  takie były gromadzone i przetwarzane z poszanowaniem
                  prywatności Użytkowników. Wykorzystywanie takich danych odbywa
                  się wyłącznie w celach administracyjnych, statystycznych oraz
                  w celu lepszego dostosowania świadczonych usług do potrzeb
                  Użytkowników.
                </ListItem>
                <ListItem small concise>
                  Użytkownicy zobowiązani są zachować w poufności parametry
                  dające dostęp do osobistych części Serwisu, w szczególności
                  odpowiednie hasła. Jakiekolwiek dobrowolne udostępnianie
                  danych osobowych do publicznego użytku w sieci Internet odbywa
                  się na ryzyko Użytkowników i może spowodować wykorzystanie
                  tych danych w sposób niezamierzony przez Użytkownika i
                  podjęcie odpowiednich działań przez Administratora.
                </ListItem>
              </AdvancedList>
            </ListItem>
            <ListItem>
              <strong>Postanowienia końcowe</strong>
              <AdvancedList>
                <ListItem small concise>
                  Administrator ma prawo w każdym czasie dokonywać zmian
                  niniejszego Regulaminu oraz Polityki Prywatności.
                </ListItem>
                <ListItem small concise>
                  Aktualna treść Regulaminu znajduje się na stronie&nbsp;
                  <ExternalLink href='https://inicjatywyotwarte.pl/'>
                    https://inicjatywyotwarte.pl/
                  </ExternalLink>
                  .
                </ListItem>
                <ListItem small concise>
                  Wszelkie roszczenia lub spory związane z korzystaniem z
                  Serwisu lub wynikające ze stosowania niniejszego Regulaminu
                  podlegają prawu Rzeczypospolitej Polskiej bez względu na
                  przepisy kolizyjne. Wszelkie roszczenia i spory będą
                  rozstrzygane przez właściwy polski sąd powszechny właściwy dla
                  siedziby Administratora.
                </ListItem>
                <ListItem small concise>
                  Wszelkie zapytania Użytkowników powinny być kierowane pod
                  adres mailowy <EmailLink href={ `mailto: ${mainContactEmail}` }>{mainContactEmail}</EmailLink>.
                </ListItem>
              </AdvancedList>
            </ListItem>
          </AdvancedList>
        </FullTextContent>
      </Container>
    </MainContainer>
  )
}

export default TermsOfUsePage
