import React from 'react'
import {
  MainContainer,
  Container,
  FullTextContent,
  Header,
  Description,
  List,
  OrderedList,
  ListItem,
  ExternalLink,
  EmailLink
} from 'pages/sharedStyles'

const PrivacyPolicyPage = () => {
  return (
    <MainContainer>
      <Container>
        <FullTextContent>
          <Header>Polityka prywatności</Header>
          <Description small>
            Prywatność użytkowników naszej witryny jest dla nas bardzo ważna,
            dlatego opracowaliśmy niniejszą Politykę prywatności, abyś mógł
            zrozumieć, w jaki sposób gromadzimy, przetwarzamy, ujawniamy i
            wykorzystujemy Twoje dane osobowe. Netguru SA jest administratorem
            danych osobowych i zapewniamy, że:
          </Description>
          <OrderedList>
            <ListItem small>
              Dane są zawsze gromadzone w jasno określonych celach oraz w
              zakresie niezbędnym do ich osiągnięcia.
            </ListItem>
            <ListItem small>
              Dane osobowe są przechowywane tak długo, jak jest to konieczne do
              osiągnięcia tych celów. Dane osobowe są gromadzone zgodnie z
              prawem i rzetelnie przez cały czas, w stosownych przypadkach, za
              wiedzą lub zgodą osoby, której dane dotyczą.
            </ListItem>
            <ListItem small>
              Dane osobowe są chronione przy pomocy odpowiednich zabezpieczeń
              przed utratą lub kradzieżą, a także przed nieuprawnionym dostępem,
              ujawnieniem, kopiowaniem, wykorzystaniem lub modyfikacją.
            </ListItem>
            <ListItem small>
              Użytkownicy otrzymują informacje o zasadach i praktykach
              związanych z zarządzaniem danymi osobowymi.
            </ListItem>
          </OrderedList>
          <Header>Artykuł 1. Informacje o prywatności i przetwarzaniu.</Header>
          <OrderedList>
            <ListItem small>
              Administratorem danych osobowych jest Netguru SA, z siedzibą przy
              ul. Małe Garbary 9, 61- 756 Poznań, wpisane do rejestru
              przedsiębiorców Krajowego Rejestru Sądowego prowadzonego przez Sąd
              Rejonowy dla Poznania - Nowe Miasto i Wilda w Poznaniu, VIII
              Wydział Gospodarczy Krajowego Rejestru Sądowego, pod numerem KRS:
              0000745671, NIP: 7781454968, kapitał zakładowy 101 520.99 PLN.
            </ListItem>
            <ListItem small>
              Netguru SA jako administrator danych osobowych (zwany dalej
              „Administratorem”) przywiązuje dużą wagę do ochrony prywatności i
              poufności danych osobowych użytkowników, którzy udostępniają swoje
              dane w formie elektronicznej za pośrednictwem formularzy
              dostępnych na stronie internetowej w domenie inicjatywyotwarte.pl
              (zwane dalej „inicjatywyotwarte.pl”), którego zasady są określone
              w Regulaminie korzystania z serwisu (zwanego dalej „Warunkami
              użytkowania”).
            </ListItem>
            <ListItem small>
              Inspektorem Ochrony Danych Osobowych jest Katarzyna Muszyńska, z
              którą możesz się kontaktować pod adresem:{' '}
              <EmailLink href={ 'mailto: dpo@netguru.com' }>dpo@netguru.com</EmailLink>
            </ListItem>
            <ListItem small>
              Administrator z należytą starannością wybiera i stosuje
              odpowiednie środki techniczne i organizacyjne w celu ochrony
              przetwarzanych danych osobowych. Pełny dostęp do baz danych mają
              tylko osoby upoważnione przez Administratora.
            </ListItem>
            <ListItem small>
              Administrator chroni dane osobowe przed nieuprawnionym dostępem i
              przetwarzaniem zgodnie z obowiązującymi przepisami.{' '}
            </ListItem>
            <ListItem small>
              Odwiedzający inicjatywyotwarte.pl mogą przeglądać podstrony
              witryny bez podawania danych osobowych.{' '}
            </ListItem>
          </OrderedList>
          <Header>Artykuł 2. Podstawy przetwarzania danych osobowych</Header>
          <OrderedList>
            <ListItem small>
              Administrator danych przetwarza dane osobowe zgodnie z prawem, w
              szczególności rozporządzeniem Parlamentu Europejskiego i Rady (UE)
              2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
              fizycznych w związku z przetwarzaniem danych osobowych i swobodny
              przepływ takich danych i uchylające dyrektywę 95/46 / WE (zwane
              dalej „RODO”).
            </ListItem>
            <ListItem small>
              Dane osobowe przetwarzane są w celu:
              <OrderedList type='a'>
                <ListItem small>
                  opublikowania inicjatywy dotyczącej i wspierającej walkę z
                  koronawirusem i podanie danych kontaktowych do opiekuna danej
                  inicjatywy (zgodnie z art. 6 ust. 1 lit. b RODO);
                </ListItem>
                <ListItem small>
                  odpowiedzi na pytania skierowane do Administratora za pomocą
                  adresu mailowego podanego na stronie internetowej
                  inicjatywyotwarte.pl (zgodnie z art. 6 ust. 1 lit. f RODO);
                </ListItem>
                <ListItem small>
                  przesyłania treści informacyjnych, w tym informacji o
                  planowanych wydarzeniach i warsztatach, lub innych informacji
                  na podstawie udzielonej zgody (art. 6 ust. 1 lit. a RODO);
                </ListItem>
                <ListItem small>
                  nawiązania kontaktu w celu pomocy przy przygotowaniu i dodaniu
                  inicjatywy do strony (art. 6 ust. 1 lit. b RODO),{' '}
                </ListItem>
                <ListItem small>
                  dostosowywanie i rozwijanie funkcjonalności strony
                  internetowej, w tym jej struktury i zawartości, do potrzeb
                  użytkowników Internetu, tworzenie zagregowanych statystyk oraz
                  zachowanie bezpieczeństwa i jakości usług świadczonych przez
                  usługę - w oparciu o uzasadniony interes administratora (art.
                  6 ust. 1) (f) RODO);{' '}
                </ListItem>
                <ListItem small>
                  dochodzenie lub zabezpieczenie przed ewentualnymi roszczeniami
                  (zgodnie z art. 6 ust. 1 lit. f RODO).{' '}
                </ListItem>
              </OrderedList>
            </ListItem>
            <ListItem small>
              Bez względu na cel przetwarzania podanie danych jest dobrowolne,
              jednak ich niepodanie może uniemożliwić, w zależności od
              konkretnego przypadku, korzystanie z wybranych usług, kontakt lub
              odbiór treści informacyjnych.
            </ListItem>
            <ListItem small>
              Użytkownik nie powinien przekazywać Administratorowi danych
              osobowych osób trzecich. W przypadku przekazania danych osób
              trzecich Użytkownik jest zobowiązany do podpisania oświadczenia,
              że ​​posiada zgodę stron trzecich na przekazanie danych
              Administratorowi.
            </ListItem>
          </OrderedList>
          <Header>Artykuł 3. Zakres przetwarzania danych osobowych</Header>
          <Description small>
            Administrator przetwarza dane osobowe tylko w zakresie niezbędnym do
            osiągnięcia ściśle określonego celu, zgodnie z informacjami
            wskazanymi poniżej:
          </Description>
          <OrderedList>
            <ListItem small>
              Wysłanie wiadomości: adres e-mail lub z numer telefonu oraz
              wszelkie inne informacje, które użytkownik poda z własnej woli;
            </ListItem>
            <ListItem small>
              Przesyłanie biuletynów, treści informacji: imię i nazwisko, adres
              e-mail, numer telefonu;{' '}
            </ListItem>
            <ListItem small>
              Pomoc w przygotowaniu i dodaniu inicjatywy: imię i nazwisko, adres
              e-mail, numer telefonu i inne informacje zawarte w przesłanej
              przez użytkownika wiadomości;{' '}
            </ListItem>
            <ListItem small>
              Dostosowywanie i rozwój funkcjonalności strony internetowej:
              adresy IP gromadzone podczas połączeń internetowych w celach
              technicznych związanych z administrowaniem serwerem.{' '}
            </ListItem>
          </OrderedList>
          <Description small>
            Administrator nie podejmuje zautomatyzowanych decyzji na podstawie
            danych gromadzonych na temat Użytkowników.
          </Description>
          <Header>Artykuł 4. Okres retencji danych</Header>
          <Description small>
            Dane osobowe są przechowywane tylko przez czas niezbędny do
            osiągnięcia określonego celu, dla którego zostały przesłane, lub
            zapewnienia zgodności, jak określono poniżej:
          </Description>
          <OrderedList>
            <ListItem small>
              Dane osobowe zebrane w celu udzielenia odpowiedzi na pytania będą
              przetwarzane nie dłużej niż 12 miesięcy po ostatnim kontakcie;
            </ListItem>
            <ListItem small>
              Dane gromadzone w celu wysyłania treści informacyjnych,
              biuletynów, będą przetwarzane do momentu wycofania zgody przez
              użytkownika;{' '}
            </ListItem>
            <ListItem small>
              Dane gromadzone w celu umożliwienia kontaktu z opiekunami
              inicjatyw związanych z walką z koronawirusem.{' '}
            </ListItem>
          </OrderedList>
          <Header>Artykuł 5. Odbiorcy danych osobowych</Header>
          <OrderedList>
            <ListItem small>
              Dane użytkowników mogą być udostępniane podmiotom uprawnionym do
              otrzymywania danych zgodnie z obowiązującymi przepisami, w tym
              odpowiednim organom sądowym.
            </ListItem>
            <ListItem small>
              Dane osobowe mogą być przekazywane podmiotom współpracującym z
              Administratorem na podstawie odpowiednich umów, w tym partnerom
              świadczącym usługi techniczne (rozwój i utrzymanie systemów
              informatycznych i stron internetowych).
            </ListItem>
            <ListItem small>
              Dane osobowe mogą być przekazywane do państwa trzeciego /
              organizacji międzynarodowej, jak opisano w poniższych punktach:
              <OrderedList type='a'>
                <ListItem small>
                  Dane osobowe użytkowników mogą być przetwarzane na serwerach
                  znajdujących się poza ich krajem zamieszkania;
                </ListItem>
                <ListItem small>
                  Dane osobowe użytkowników mogą być przekazywane poza
                  Europejski Obszar Gospodarczy (EOG) do państwa trzeciego, tj.
                  USA, podmiotom spełniającym wymagany poziom ochrony na mocy
                  decyzji Komisji Europejskiej z dnia 12 lipca 2016 r., Tzw.
                  Tarczy Prywatności. Podmioty te przestrzegają zasad
                  ustanowionych przez Departament Handlu USA w ramach programów
                  ramowych Tarczy Prywatności UE-USA, regulujących gromadzenie,
                  wykorzystywanie i zatrzymywanie danych osobowych z państw
                  członkowskich Unii Europejskiej.{' '}
                </ListItem>
              </OrderedList>
            </ListItem>
            <ListItem small>
              Dane osobowe będą przekazywane organizacji PolandSafe (
              <ExternalLink href='https://www.polandsafe.com/'>
                https://www.polandsafe.com/
              </ExternalLink>
              ), która jest partnerem Netguru SA i współtworzy
              inicjatywyotwarte.pl
            </ListItem>
          </OrderedList>
          <Header>Artykuł 6. Prawa osób</Header>
          <OrderedList>
            <ListItem small>
              Użytkownik jest zobowiązany do dostarczenia kompletnych,
              aktualnych i aktualnych danych.
            </ListItem>
            <ListItem small>
              Każdy użytkownik, którego dane osobowe są przetwarzane przez
              Administratora, ma prawo do:
              <OrderedList type='a'>
                <ListItem small>uzyskania dostępu do danych</ListItem>
                <ListItem small>poprawy danych</ListItem>
                <ListItem small>usunięcia danych</ListItem>
                <ListItem small>ograniczenia przetwarzanie danych</ListItem>
                <ListItem small>przeniesienia danych</ListItem>
                <ListItem small>
                  sprzeciwienia się przetwarzaniu danych, które odbywa się na
                  podstawie uzasadnionego interesu Administratora
                </ListItem>
                <ListItem small>
                  wycofać zgodę (jeżeli przetwarzanie odbywa się na podstawie
                  zgody) w dowolnym momencie, bez wpływu na zgodność z prawem
                  przetwarzania przeprowadzonego na podstawie zgody przed
                  wycofaniem
                </ListItem>
              </OrderedList>
            </ListItem>
            <ListItem small>
              Możesz skorzystać z praw określonych w powyższej sekcji, wysyłając
              odpowiednie żądanie na adres e-mail:{' '}
              <EmailLink href={ 'mailto: dpo@netguru.com' }>dpo@netguru.com</EmailLink>.
            </ListItem>
            <ListItem small>
              Użytkownik ma prawo odwołać się do organu nadzorczego, jeśli uzna,
              że ​​przetwarzanie danych osobowych narusza przepisy RODO.
            </ListItem>
            <ListItem small>
              Aby zrezygnować z otrzymywania wiadomości, wybierz przycisk
              „Anuluj subskrypcję” na dole otrzymanej od nas wiadomości e-mail,
              zaktualizuj preferencje wiadomości e-mail w drugim kroku,
              odznaczając typy wiadomości, których nie chcesz otrzymywać, i
              zaakceptuj ustawienia . Możesz również skontaktować się z nami za
              pośrednictwem maila: <EmailLink href={ 'mailto: dpo@netguru.com' }>dpo@netguru.com</EmailLink>.
            </ListItem>
          </OrderedList>
          <Header>Artykuł 7. Ciasteczka</Header>
          <Description small>
            Netguru SA gromadzi dane w logach, które są wykorzystywane wyłącznie
            do celów administrowania usługą, a dane te nie są przekazywane
            stronom trzecim.
          </Description>
          <OrderedList>
            <ListItem small>
              Zgodnie z ustaloną praktyką przechowujemy zapytania HTTP kierowane
              na nasz serwer. Przeglądane zasoby identyfikowane są poprzez
              adresy URL. Gromadzone informacje to:
              <List>
                <ListItem small>
                  publiczny adres IP komputera, z którego pochodzi zapytanie
                </ListItem>
                <ListItem small>
                  Nazwa stacji użytkownika - identyfikacja realizowana za pomocą
                  protokołu HTTP, jeśli to możliwe
                </ListItem>
                <ListItem small>
                  nazwa użytkownika podana podczas procesu autoryzacji
                </ListItem>
                <ListItem small>czas przybycia zapytania</ListItem>
                <ListItem small>pierwsza linia żądania http</ListItem>
                <ListItem small>kod odpowiedzi http</ListItem>
                <ListItem small>liczba bajtów wysłanych przez serwer</ListItem>
                <ListItem small>
                  adres URL strony poprzednio odwiedzanej przez użytkownika, w
                  przypadku gdy strona internetowa firmy została uzyskana przez
                  link
                </ListItem>
                <ListItem small>Informacje o przeglądarce</ListItem>
                <ListItem small>
                  Informacje o błędach, które wystąpiły podczas wykonywania
                  transakcji http
                </ListItem>
              </List>
            </ListItem>
            <ListItem small>
              Te dane nie są powiązane z konkretnymi osobami przeglądającymi
              strony Administratora.
            </ListItem>
            <ListItem small>
              W celu zapewnienia najwyższej jakości usług Administrator okresowo
              analizuje pliki dziennika w celu ustalenia, które strony są
              najczęściej odwiedzane, jakie przeglądarki internetowe są używane,
              czy struktura witryny nie zawiera błędów etc.
            </ListItem>
            <ListItem small>
              Zebrane logi przechowywane są przez 24 miesiące jako materiał
              pomocniczy służący do administrowania serwisem - na podstawie
              plików cookies można generować statystyki, które nie zawierają
              żadnych cech identyfikujących osoby odwiedzające
              inicjatywyotwarte.pl.
            </ListItem>
            <ListItem small>
              Na stronie wykorzystywane są następujące rodzaje plików cookie:
              <OrderedList type='a'>
                <ListItem small>
                  “bezpieczne” pliki cookie, np. do wykrywania niewłaściwego
                  użycia uwierzytelnienia;
                </ListItem>
                <ListItem small>
                  „wydajnościowe” pliki cookie, umożliwiające zbieranie
                  informacji o sposobie korzystania ze strony internetowej;
                </ListItem>
                <ListItem small>
                  „funkcjonalne” pliki cookies, umożliwiające „zapamiętywanie”
                  wybranych przez użytkownika ustawień.
                </ListItem>
              </OrderedList>
            </ListItem>
            <ListItem small>
              Pliki cookie nie są wykorzystywane do przetwarzania ani
              przechowywania danych osobowych. Nie można ich używać do
              bezpośredniej identyfikacji użytkownika i wprowadzać żadnych zmian
              konfiguracji w przeglądarce ani urządzeniach telekomunikacyjnych.
            </ListItem>
          </OrderedList>
        </FullTextContent>
      </Container>
    </MainContainer>
  )
}

export default PrivacyPolicyPage
