const answers = {
  1: `<div>Mam na imię Artem, mam 17 lat i jestem młodym, ambitnym i wysportowanym chłopakiem.\nJestem osobą otwartą, ambitną, spokojną i optymistyczną.\nJeżeli mówić o wadach, cóż to od czasu do czasu bywam leniwy, szczególnie wieczorami, jak wszyscy inni w moim wieku.\n\nJestem Ukraińcem, urodziłem się na Ukrainie w mieście Czernichów. Studiowałem w liceum matematycznym i kiedy w połowie grudnia ubiegłego roku przeprowadziłem się do Polski, kontynuowałem naukę w szkole ukraińskiej online.\nTeraz mieszkam w Poznaniu z rodziną.\n\nJeśli mówimy o rodzinie. Mam dużą rodzinę. Mam starszą siostrę, która ma 19 lat, młodszego brata, który ma 3 lata i kota.\nMoja siostra też studiuje w Poznaniu na uniwersytecie w Poznaniu.\n\nNa koniec chciałbym powiedzieć, że jestem osobą spokojną i powściągliwą, nie jestem zbyt rozmowna, więc na niektóre pytania mogę odpowiedzieć krótko.</div>`,
  2: `<div>Wybrałem Collegium Da Vinci, ponieważ moim zdaniem to najbardziej kreatywna i ciekawa uczelnia, która oferuje nowoczesne podejście do nauki.\n\nPodoba mi się, że collegium stawia na nowoczesne technologie i daje możliwość nauki w międzynarodowym środowisku.\n\nNa uczelni jest wiele ciekawych klubów, które przyciągają swoją różnorodnością. Planuję zapisać się do jednego z nich, ale jeszcze nie wiem, do którego.\n\nDo Poznania przyjechaliśmy ponieważ w tym mieście studiuje moja siostra, a także mieszka tu wielu naszych znajomych.</div>`,
  3: `<div>Wybrałem kierunek E-commerce, ponieważ interesuję się internetem i nowymi technologiami. E-commerce to nowoczesna dziedzina, która zmienia sposób sprzedaży i kontaktu z klientem. Chcę nauczyć się, jak tworzyć sklepy internetowe, jak sprzedawać produkty online i jak prowadzić marketing w internecie.\n\nDzięki E-commerce ludzie mogą robić zakupy szybciej, łatwiej i bez wychodzenia z domu. To dla mnie ciekawe i ważne, ponieważ zakupy online stają się coraz bardziej popularne na całym świecie.</div>`,
  4: `<div>Zdecydowałem się studiować za granicą, bo to wydaje mi się bardziej przyszłościowe. Studia w innym kraju to nie tylko dobra edukacja, ale też szansa poznać nową kulturę, poprawić języki obce i nauczyć się samodzielności. Za granicą jest więcej możliwości rozwoju osobistego i zawodowego, a także większe szanse na międzynarodową karierę. Uważam, że takie studia mogą otworzyć przede mną więcej drzwi w przyszłości.</div>`,
  5: `<div>Po studiach chciałbym znaleźć pracę w dobrej firmie, żeby zdobyć doświadczenie i wykorzystać wiedzę w praktyce. Może w przyszłości otworzę własny sklep albo firmę, ale jeszcze o tym nie myślałem. Wszystko zależy od możliwości, które będę miał.</div>`,
  6: `<div>Nie miałem wcześniej okazji być w Polsce. Przyjechałem tutaj po raz pierwszy w grudniu zeszłego roku. Wszystko było dla mnie nowe, ale szybko się przyzwyczaiłem i teraz czuję się tu dobrze.</div>`,
  7: `<div>Uczę się języka polskiego od około dwóch lat. Na początku uczyłem się przez półtora roku, później miałem przerwę. Od września tego roku znów kontynuuję naukę.\n\nPlanuję dalej rozwijać swój polski, ucząc się regularnie, rozmawiając z ludźmi i używając języka w pracy oraz w codziennym życiu.</div>`,
  8: `<div>Wybrałem naukę po polsku, bo tak będzie mi łatwiej. Znam angielski, ale ten język bardzo różni się od mojego. W czasie nauki mogą być trudności. Polski jest podobny do mojego języka, dlatego lepiej rozumiem i łatwiej mi się uczyć. Chcę też dalej rozwijać polski i używać go w przyszłości.</div>`,
  9: `<div>Jeszcze dużo o tym nie myślałem. Na początku chcę dobrze się uczyć i zdobyć zawód. Ale jeśli będzie możliwość pracy w czasie studiów, to chętnie spróbuję. Myślę, że to może być ciekawy i przydatny doświadczenie.<hr>\n<strong>Jako kto chciałbyś dorabiać? (Jaką pracę chciałbyś wykonywać?)</strong>\nNie wiem jeszcze, jaka to może być praca. Jeśli będzie taka opcja, wybiorę coś z dostępnych ofert. Każda praca da mi nowe doświadczenie i umiejętności – to na pewno się przyda.</div>`,
  10: `<div>Moje miasto to Czernihów. Znajduje się na północy Ukrainy, blisko granicy z Białorusią.\n To jedno z najstarszych miast w kraju. Jest tam dużo ciekawych miejsc i zabytków, na przykład stare cerkwie i klasztory. W centrum miasta jest ładny park, w którym ludzie spacerują i odpoczywają. Mamy też rzekę, gdzie można posiedzieć i podziwiać przyrodę.\nCzernihów nie jest bardzo duży, ale jest spokojny i zielony.</div>`,
  11: `<div>W moim życiu ważne są takie rzeczy jak: czytanie, granie w gry, sport, programowanie, astronomia i oglądanie anime.\n\nNajwiększą moją pasją jest oglądanie anime i czytanie książek. Kiedyś robiłem to codziennie, bo przenosiło mnie to do innego, ciekawego świata. Bardzo lubiłem oglądać filmy i anime z kolegami, a także czytać książki fantastyczne i przygodowe. Teraz robię to rzadziej, bo mam mniej wolnego czasu.\n\nCzas od czasu gram w gry komputerowe, zazwyczaj z kolegami. Lubię też sport – uprawiam go prawie codziennie.\n\nInteresuję się również astronomią, bo to bardzo ciekawa nauka o wszechświecie.\n\nPodsumowując, hobby to bardzo ważna część mojego życia. Pomaga mi odpocząć, rozwijać się i mieć czas tylko dla siebie.</div>`, 
  12: `<div>Ostatnia książka, którą przeczytałem, to „Na ostrzu noża” Patricka Nessa.\n\nTo książka science fiction. Akcja dzieje się w dziwnym świecie, gdzie wszyscy ludzie słyszą myśli innych — to się nazywa Szum. Główny bohater to chłopak o imieniu Todd. Mieszka w małym mieście i myśli, że zna całą prawdę o świecie.\nPewnego dnia znajduje miejsce, gdzie nie ma Szumu — jest cisza. Tam spotyka dziewczynę i razem muszą uciekać.\n\nPodczas podróży mają wiele trudnych sytuacji i uczą się, że świat nie jest taki, jak myśleli.\nKsiążka mówi o dorastaniu, wyborach, dobru i złu, zaufaniu i szukaniu prawdy.\nPodobała mi się, bo jest ciekawa, emocjonalna i daje do myślenia.</div>`,
  13: `<div>Ostatni film, który oglądałem, to „Wyspa tajemnic”, nakręcony w 2010 roku <strong><i>(dwa tysiące dziesiątym)</i></strong> przez reżysera Martina Scorsese, jeśli się nie mulę. Główną rolę zagrał Leonardo DiCaprio.\n\nTo psychologiczny thriller. Akcja dzieje się w 1954 roku <strong><i>(tysiąc dziewięćset pięćdziesiątym czwartym)</i></strong>. Główny bohater Teddy Daniels (marszałek federalny) — przyjeżdża z partnerem na wyspę, gdzie jest zamknięty szpital psychiatryczny dla niebezpiecznych przestępców.\nProwadzą śledztwo w sprawie zniknięcia pacjentki.\n\nPodczas śledztwa dzieją się dziwne rzeczy. Personel nie chce pomagać, dokumenty są ukrywane, a Teddy zaczyna mieć dziwne sny i halucynacje związane z jego przeszłością. Przypomina sobie żonę, która zginęła, i wojnę, w której walczył.\n\nSzczególnie podobał mi się moment, kiedy przyszedł do latarni morskiej i jego oczekiwania okazały się fałszywe.\n\nPodobał mi się ten film, bo jest bardzo głęboki, z ciekawą fabułą i dobrą grą aktorską. Daje do myślenia o tym, czym jest rzeczywistość i jak łatwo ją stracić.</div>`,
  14: `<div>Zainteresowałem się programowaniem już kilka lat temu. Na początku było to tylko hobby, ale z czasem bardzo mnie to spodobało. Teraz uczę się programowania w akademii IT i rozwijam się też samodzielnie.\n\nZnam podstawy C++, C#, JavaScript, dobrze radzę sobie z HTML i CSS. Mam też wysoki poziom angielskiego, co bardzo pomaga mi w nauce programowania i w codziennym życiu.</div>`,
  15: `<div>Lubię słuchać różnej muzyki — ważne, żeby dobrze brzmiała i miała tekst z przesłaniem.\nMoja ulubiona piosenka to Impossible w wykonaniu Jamesa Arthura. Podoba mi się, ponieważ ma bardzo silne emocje, szczery wokal i głęboki tekst o stracie i przeżyciach. Ta piosenka porusza serce i łatwo wzbudza emocje.</div>`,
  16: `<div>Lubię sushi, ponieważ jest lekkie, smaczne i zdrowe. Podoba mi się różnorodność smaków i to, że można je jeść na wiele sposobów. To także ciekawa kuchnia, która łączy tradycję z nowoczesnością.</div>`,
  17: `<div>Nie podążam za modą. Wolę ubierać się tak, jak mi wygodnie i co mi się podoba. Dla mnie ważniejszy jest własny styl niż aktualne trendy.</div>`,
  18: `<div>Poznań bardzo mi się podoba, bo to zielone miasto — jest tu dużo parków, drzew i miejsc na spacery. W mieście są ciekawe kawiarnie, muzea, ładne ulice i historyczne centrum. Lubię, że można tu odpocząć i miło spędzić czas z przyjaciółmi.\n\nPoznań to spokojne i nowoczesne miasto, ma dobrą komunikację i wszystko jest blisko.\nMoja siostra też tu studiuje i mamy tu też znajomych.\nMiasto daje możliwość rozwoju, nauki i odkrywania nowych rzeczy.</div>`,
  19: `<div>Lubię spacerować po parkach w Poznaniu, szczególnie w Cytadeli. Jest tam dużo zieleni, jest ładnie i spokojnie. Lubię też chodzić na Stare Miasto – są tam przytulne uliczki, zabytkowe budynki i miła atmosfera.\n\nCzasami chodzę nad Maltę – to miejsce, gdzie można usiąść, odpocząć i cieszyć się przyrodą. Takie spacery pomagają mi się zrelaksować i oderwać od wszystkiego.</div>`,
  20: `<div>Chciałbym odwiedzić różne miejsca w Polsce. Na pewno Warszawę, bo to stolica i jest tam dużo ciekawych miejsc – Stare Miasto, Pałac Kultury i Nauki, muzea.\n\nChciałbym też zobaczyć Kraków – piękne miasto z historią. Są tam Wawel, Rynek i Kościół Mariacki.\n\nInteresuje mnie też Gdańsk nad morzem – można tam odpocząć i spacerować. Chciałbym też pojechać w góry – do Zakopanego i w Tatry.\n\nLubię zamki, więc chciałbym zobaczyć Zamek Królewski w Warszawie i Malbork.\n\nW Polsce jest wiele ciekawych miejsc i chciałbym je poznać.</div>`,
  21: `<div>Chciałbym odwiedzić Japonię, ponieważ bardzo interesuje mnie ta kultura. Podziwiam, jak szybko kraj się rozwinął po wojnie. Lubię japońską kuchnię, tradycje i nowoczesne technologie. Marzę o tym, żeby zobaczyć Tokio i spokojne świątynie w Kioto.\n\nChciałbym też pojechać do Włoch, żeby zobaczyć starożytny Koloseum i spróbować prawdziwej włoskiej pizzy.\n\nInnym krajem, który chciałbym odwiedzić, są Niemcy — chciałbym zobaczyć Katedrę w Kolonii i poznać jego historię.</div>`,
  22: `<div><strong>Co wiem o Polsce:</strong>\nPolska leży w Europie Środkowej i ma długą historię. Jest znana z pięknych miejsc, zabytków i bogatej kultury. Należy do Unii Europejskiej i NATO. W ostatnich latach szybko się rozwija.\nW Polsce urodziło się wielu znanych pisarzy, np. <i>Adam Mickiewicz</i>, <i>Henryk Sienkiewicz</i>, <i>Bolesław Prus</i>, <i>Wisława Szymborska</i> i <i>Czesław Miłosz</i>.\n<hr>\n<strong>Co wiem o Poznaniu:</strong>\nPoznań to jedno z najstarszych miast w Polsce. Leży nad rzeką Wartą. Jest ważnym miastem naukowym i gospodarczym. Znany jest z pięknego Starego Rynku, koziołków na ratuszu i Międzynarodowych Targów. W Poznaniu są też teatry, biblioteki i inne miejsca kultury.</div>`,
  
  1.1: `<h3>Uniwersalny schemat opisu obrazka (Maket)</h3>
        <ol style="font-size: 16px; line-height: 1.6; text-align: left;">
          <li><strong>Na obrazku widzimy...</strong> \njedną osobę / dwie osoby / kilka osób / rodzinę / dziecko i dorosłego / zwierzęta / budynek / park / ulicę / szkołę<br></li>
          <li><strong>Osoba / osoby znajdują się...</strong>\n na zewnątrz / w pomieszczeniu / w parku / na ulicy / w sklepie / w szkole / na plaży / w kuchni / w salonie<br></li>
          <li><strong>Po lewej stronie / po prawej stronie jest / są...</strong>\n mężczyzna / kobieta / dziecko / grupa osób / pies / rower / drzewo / stół<br></li>
          <li><strong>Osoby mają na sobie...</strong>\n kurtkę (czarną, niebieską, czerwoną) / sweter / koszulkę / dres / czapkę / spodnie<br> <i>Mężczyzna nosi... / Kobieta ubrana jest w...</i><br></li>
          <li><strong>Wyglądają na...</strong>\n szczęśliwych / zmęczonych / zadowolonych / smutnych / zdenerwowanych<br> Uśmiechają się / rozmawiają / patrzą gdzieś / spacerują / odpoczywają<br></li>
          <li><strong>Pogoda jest...</strong>\n ładna / słoneczna / pochmurna / zimna / ciepła / deszczowa<br> Na niebie widać: słońce / chmury / śnieg<br></li>
          <li><strong>Możliwe, że... / Myślę, że...</strong>\n robią zakupy / spędzają czas razem / uprawiają sport / odpoczywają / bawią się / idą do pracy / są na wakacjach<br></li>
          <li><strong>W tle widzimy...</strong>\n drzewa / budynki / domy / ludzi / samochody / park / morze / góry / ławki / plac zabaw<br></li>
          <li><strong>Obrazek pokazuje...</strong>\n codzienną sytuację / czas wolny / rodzinny spacer / aktywność na świeżym powietrzu / naukę / zakupy</li>
        </ol>`,

  1.2: `<div>Na obrazku widzimy rodzinę w lesie – ojca i dwie córki.\nOjciec ma na sobie ciemnoniebieską kurtkę, dżinsowe spodnie, buty, czapkę i plecak.\nMłodsza córka stoi w środku. Jest ubrana w różową kurtkę, czapkę, szalik, ciemne spodnie i buty.\nMłodsza córka stoi w środku. Jest ubrana w różową kurtkę, czapkę, szalik, ciemne spodnie i buty.\nStarsza córka jest po prawej stronie. Ma jasną kurtkę, czapkę, spodnie i buty. Trzyma pluszowego misia.\nWygląda na to, że spacerują i odpoczywają od hałasu miasta w weekend.\nNa ścieżce i wokół widać żółte liście, więc pewnie jest jesień.</div><hr><img src="img/ludzi_w_lesie.jpg" alt="Poznań" style="display: block; margin: 20px auto; max-width: 50%; height: auto; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.2);">`,
  1.3: `<div>Na obrazku widzimy trzy osoby w parku. To prawdopodobnie chłopak i dwoje dzieci – być może jego siostra i brat.\nChłopak ubrany jest w żółtą kurtkę, spodnie i czarne buty. Młodsze dziecko ma na sobie niebieską kurtkę, spodnie i pomarańczowe kalosze. Ma też czapkę na głowie.\nDrugie dziecko ubrane jest w piaskową kurtkę, dżinsowe spodnie i buty w kropki.\nW tle widzimy jezioro, las i drzewa. Myślę, że to park, a pogoda jest dość pochmurna – wygląda na jesień.\nMoim zdaniem oni odpoczywają i cieszą się przyrodą razem z rodziną.</div><hr><img src="img/obok_jeziora.jpg" alt="Poznań" style="display: block; margin: 20px auto; max-width: 50%; height: auto; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.2);">`,
  1.4: `<div>Na obrazku widzimy jedną osobę – młodą dziewczynę, która wygląda na około 25 lat.\nWygląda na to, że czeka na pociąg albo na nadjeżdżającą lokomotywę. Sprawia wrażenie smutnej – może ma jakieś problemy w życiu albo tęskni za kimś.\nMa na sobie czarną kurtkę, czarne spodnie i buty, a na głowie bordową czapkę. Obok niej stoi czerwona walizka.\nW tle widzimy lokomotywę, która właśnie wjeżdża na stację.\nMyślę, że jest jesień, bo dziewczyna jest ciepło ubrana, a drzewa w tle są bez liści, co wskazuje na późniejszą porę roku.</div><hr>
        <img src="img/dziewczyna_na_stancje.jpg" alt="Poznań" style="display: block; margin: 20px auto; max-width: 50%; height: auto; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.2);">`,
  1.5: `<div>Na obrazku widzimy osoby, które znajdują się w szkole. Są oni różnie ubrani — niektórzy mają na sobie sweter, inni bluzę. Aktualnie mają lekcję.\nW klasie można zobaczyć różne plakaty na ścianach oraz nauczycielkę, która trzyma coś w rękach. W tle widzimy tablicę z zapisanymi wzorami i równaniami.\nMoim zdaniem to jest lekcja matematyki albo fizyki.</div>
        <hr><img src="img/w_szkole.jpg" alt="Poznań" style="display: block; margin: 20px auto; max-width: 80%; height: auto; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.2);">`,


  2.1: `<h3>Przydatne zwroty do opisu obrazu / zdjęcia</h3>
        <ul style="font-size: 16px; line-height: 1.6; text-align: left;">
          <li><strong>Na pierwszym planie</strong> – на переднем плане</li>
          <li><strong>W tle</strong> – на заднем плане</li>
          <li><strong>Po lewej stronie / Po prawej stronie</strong> – слева / справа</li>
          <li><strong>W centrum</strong> – в центре</li>
          <li><strong>Obraz przedstawia...</strong> – Картина изображает...</li>
          <li><strong>Na obrazie widzimy...</strong> – На картине мы видим...</li>
          <li><strong>Kolory są jasne / ciemne / żywe</strong> – Цвета светлые / тёмные / яркие</li>
          <li><strong>Osoba wygląda na szczęśliwą / zmęczoną / smutną</strong> – Человек выглядит счастливым / уставшим / грустным</li>
          <li><strong>Podoba mi się ten obraz, bo...</strong> – Мне нравится эта картина, потому что...</li>
        </ul>`,

  2.2: `<h3>Opis obrazu - Vincent van Gogh „Gwiaździsta nос" (Звёздная ночь)</h3>
        <div>
          To obraz znanego holenderskiego malarza Vincenta van Gogha.
          Obraz pokazuje nocne niebo nad małym miastem. Niebo jest pełne wirujących gwiazd i dużego, jasnego księżyca. Kolory to głównie granatowy, niebieski, żółty i biały. 
          W dolnej części obrazu widać ciemne drzewa i małe domy.\n
          Van Gogh namalował ten obraz, gdy był w szpitalu psychiatrycznym. Pokazuje w nim swoje emocje i sposób, w jaki widzi świat. Obraz jest bardzo znany i często uważany za symbol emocji i samotności.\n
          Podoba mi się ten obraz, bo ma piękne kolory i głębokie znaczenie. Pokazuje, że sztuka może wyrażać uczucia bez słów.<hr>
        </div>
        <img src="img/van_gogh.jpg" alt="zdjęcia" style="display: block; margin: 10px auto; max-width: 90%; height: auto; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.2);">`,



  404: `<div class="table-block">
          <h3>I. Rozpoczęcie rozmowy (Начало беседы)</h3>
          <table>
            <thead>
              <tr>
                <th>Polski</th>
                <th>Русский</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Dzień dobry</td><td>Добрый день</td></tr>
              <tr><td>Nazywam się…</td><td>Меня зовут…</td></tr>
              <tr><td>Czy dobrze mnie słychać i widać?</td><td>Меня слышно и видно нормально?</td></tr>
              <tr><td>Jestem gotowy / gotowa</td><td>Я готов / готова</td></tr>
              <tr><td>Zacznijmy</td><td>Давайте начнём</td></tr>
              <tr><td>Miło mi</td><td>Очень приятно</td></tr>
            </tbody>
          </table>
        </div><hr>
        <div class="table-block">
          <h3>II. Zwroty pomocnicze (Вспомогательные фразы)</h3>
          <table>
            <thead>
              <tr>
                <th>Polski</th>
                <th>Русский</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Myślę, że…</td><td>Я думаю, что…</td></tr>
              <tr><td>Jeśli się nie mylę</td><td>Если не ошибаюсь</td></tr>
              <tr><td>To ciekawe pytanie</td><td>Это интересный вопрос</td></tr>
              <tr><td>Trudno powiedzieć, ale…</td><td>Трудно сказать, но…</td></tr>
              <tr><td>Nie jestem pewien, ale spróbuję</td><td>Не уверен(а), но попробую</td></tr>
            </tbody>
          </table>
        </div><hr>
        <div class="table-block">
          <h3>III. Zakończenie rozmowy (Окончание разговора)</h3>
          <table>
            <thead>
              <tr>
                <th>Polski</th>
                <th>Русский</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Dziękuję za rozmowę</td><td>Спасибо за разговор</td></tr>
              <tr><td>Będę nad tym pracować</td><td>Буду над этим работать</td></tr>
              <tr><td>Bardzo się cieszę, że mi się udało</td><td>Очень рад, что у меня получилось</td></tr>
              <tr><td>Miło było porozmawiać</td><td>Было приятно поговорить</td></tr>
              <tr><td>Do widzenia</td><td>До свидания</td></tr>
            </tbody>
          </table>
        </div>`,


  0: `<h3>1. Czasy (Teraźniejszy, Przeszły, Przyszły)</h3>
      <div class="table-block">
        <table>
          <tr><th>Czas</th><th>Pytanie</th><th>Przykład (czytać)</th></tr>
          <tr><td>Teraźniejszy</td><td>Co robię?</td><td>czytam, czytasz, czyta...</td></tr>
          <tr><td>Przeszły</td><td>Co zrobiłem?</td><td>czytałem, czytałaś...</td></tr>
          <tr><td>Przyszły</td><td>Co zrobię?</td><td>będę czytać / przeczytam</td></tr>
        </table> 
      </div><hr>
      <h3>2. Odmiana czasowników (teraźniejszy)</h3>
      <div class="table-block">
        <table>
          <tr><th>Osoba</th><th>Końcówka</th><th>Przykład</th></tr>
          <tr><td>ja</td><td>-ę / -m</td><td>robię</td></tr>
          <tr><td>ty</td><td>-sz</td><td>robisz</td></tr>
          <tr><td>on/ona</td><td>-a / -e</td><td>robi</td></tr>
          <tr><td>my</td><td>-my</td><td>robimy</td></tr>
          <tr><td>wy</td><td>-cie</td><td>robicie</td></tr>
          <tr><td>oni/one</td><td>-ą / -ją</td><td>robią</td></tr>
        </table>  
      </div><hr>
      <h3>3. Przypadki (Odmiana rzeczowników)</h3>
      <div class="table-block">
        <table>
          <tr><th>Przypadek</th><th>Pytanie</th><th>Przykład (dom)</th></tr>
          <tr><td>Mianownik (Називний)</td><td>kto? co?</td><td>dom</td></tr>
          <tr><td>Dopełniacz (Родовий)</td><td>kogo? czego?</td><td>domu</td></tr>
          <tr><td>Celownik (Давальний)</td><td>komu? czemu?</td><td>domowi</td></tr>
          <tr><td>Biernik (Знахідний)</td><td>kogo? co?</td><td>dom</td></tr>
          <tr><td>Narzędnik (Орудний)</td><td>kim? czym?</td><td>domem, piękną dziewczyną</td></tr>
          <tr><td>Miejscownik (Місцевий)</td><td>o kim? o czym?</td><td>o domu</td></tr>
          <tr><td>Wołacz (Кличний)</td><td>–</td><td>domu!</td></tr>
        </table>  
      </div><hr>
      <h3>4. Stopniowanie przymiotników</h3>
      <div class="table-block">
        <table>
          <tr><th>Stopień</th><th>Przymiotnik (Прикметник)</th><th>Przysłówek (Прислівник)</th></tr>
          <tr><td>Równy</td><td>szybki</td><td>szybko</td></tr>
          <tr><td>Wyższy</td><td>szybszy</td><td>szybciej</td></tr>
          <tr><td>Najwyższy</td><td>najszybszy</td><td>najszybciej</td></tr>
        </table>
      </div><hr>
      <h3>5. Spójniki (Союзы)</h3>
      <div class="table-block">
        <table>
          <tr><th>Polski</th><th>Rosyjski</th></tr>
          <tr><td>i</td><td>и</td></tr>
          <tr><td>ale</td><td>но</td></tr>
          <tr><td>bo</td><td>потому что</td></tr>
          <tr><td>więc</td><td>поэтому</td></tr>
          <tr><td>że</td><td>что</td></tr>
          <tr><td>żeby</td><td>чтобы</td></tr>
          <tr><td>chociaż</td><td>хотя</td></tr>
        </table> 
      </div><hr>
      <h3>6. Częste czasowniki (Важно запомнить!)</h3>
      <div class="table-block">
        <table>
          <tr><th>Polski</th><th>Rosyjski</th></tr>
          <tr><td>mówić</td><td>говорить</td></tr>
          <tr><td>robić</td><td>делать</td></tr>
          <tr><td>wiedzieć</td><td>знать</td></tr>
          <tr><td>jeść</td><td>есть</td></tr>
          <tr><td>iść</td><td>идти</td></tr>
          <tr><td>pisać</td><td>писать</td></tr>
          <tr><td>czytać</td><td>читать</td></tr>
          <tr><td>kupować</td><td>покупать</td></tr>
          <tr><td>uczyć się</td><td>учиться</td></tr>
          <tr><td>mieszkać</td><td>жить</td></tr>
        </table>
      </div><hr>
      <h3>7. Aspekt dokonany i niedokonany</h3>
      <div class="table-block">
        <table>
          <tr>
            <th>Polski (czasownik)</th>
            <th>Aspekt Niedokonany</th>
            <th>Aspekt Dokonany</th>
          </tr>
          <tr><td style="background-color:rgb(240, 240, 240)">pisać</td><td>pisać</td><td><b>na</b>pisać</td></tr>
          <tr><td style="background-color:rgb(240, 240, 240)">czytać</td><td>czytać</td><td><b>prze</b>czytać</td></tr>
          <tr><td style="background-color:rgb(240, 240, 240)">robić</td><td>robić</td><td><b>z</b>robić</td></tr>
          <tr><td style="background-color:rgb(240, 240, 240)">mówić</td><td>mówić</td><td><b>powiedzieć</b></td></tr>
          <tr><td style="background-color:rgb(240, 240, 240)">brać</td><td>brać</td><td>wziąć</td></tr>
          <tr><td style="background-color:rgb(240, 240, 240)">jeść</td><td>jeść</td><td>zjeść</td></tr>
          <tr><td style="background-color:rgb(240, 240, 240)">otwierać</td><td>otwierać</td><td>otworzyć</td></tr>
          <tr><td style="background-color:rgb(240, 240, 240)">oglądać</td><td>oglądać</td><td>obejrzeć</td></tr>
          <tr><td style="background-color:rgb(240, 240, 240)">dzwonić</td><td>dzwonić</td><td>zadzwonić</td></tr>
          <tr><td style="background-color:rgb(240, 240, 240)">kłaść</td><td>kłaść</td><td>położyć</td></tr>
          <tr><td style="background-color:rgb(240, 240, 240)">widzieć</td><td>widzieć</td><td>zobaczyć</td></tr>
          <tr><td style="background-color:rgb(240, 240, 240)">iść</td><td>iść</td><td>pójść</td></tr>
          <tr><td style="background-color:rgb(240, 240, 240)">dawać</td><td>dawać</td><td>dać</td></tr>
          <tr><td style="background-color:rgb(240, 240, 240)">przychodzić</td><td>przychodzić</td><td>przyjść</td></tr>
          <tr><td style="background-color:rgb(240, 240, 240)">wychodzić</td><td>wychodzić</td><td>wyjść</td></tr>
          <tr><td style="background-color:rgb(240, 240, 240)">siedzieć</td><td>siedzieć</td><td>usiąść</td></tr>
        </table>
      </div>
      <div class="note">
        <h4>Пояснення:</h4>
        <b>Niedokonany вид</b> — дія триває або повторюється (напр. читаю щодня).
        <b>Dokonany вид</b> — дія завершена або відбудеться один раз (напр. прочитав книгу).
      </div>`,



  101: `<div>
          <section id="ekstrenne-pytania">
            <h2>Ekstrenne pytania</h2>

            <p><strong>1. Dlaczego studenci szukają pracy dodatkowej?</strong><br>
            Studenci szukają pracy, żeby mieć własne pieniądze i być bardziej niezależni. Czasami potrzebują wsparcia finansowego, żeby zapłacić za mieszkanie, jedzenie albo studia.</p><hr>

            <p><strong>2. Jakie umiejętności są potrzebne studentom do pracy?</strong><br>
            Przydatne są: punktualność, odpowiedzialność, komunikatywność, umiejętność pracy w zespole oraz podstawowe umiejętności komputerowe.</p>

            <p><strong>3. Co interesuje studentów, kiedy szukają pracy?</strong><br>
            Studenci zwykle pytają o godziny pracy, wysokość wynagrodzenia, elastyczny grafik i kiedy dostaną wypłatę. Ważne jest też, czy praca nie będzie kolidowała z zajęciami.</p>

            <p><strong>4. Jakie umiejętności są ważne dla studentów?</strong><br>
            Ważne są: organizacja czasu, komunikacja, samodzielność, umiejętność pracy pod presją oraz gotowość do nauki nowych rzeczy.</p>

            <p><strong>5. Komu łatwiej znaleźć pracę — studentowi z doświadczeniem czy bez?</strong><br>
            Łatwiej jest studentowi z doświadczeniem, bo pracodawca wie, że już pracował i zna podstawowe obowiązki. Ale osoby bez doświadczenia też mają szansę, jeśli są chętne do pracy.</p>

            <p><strong>6. Dlaczego firmy zatrudniają studentów bez doświadczenia?</strong><br>
            Bo mogą ich łatwo przeszkolić. Studenci są elastyczni, otwarci i szybko się uczą. Dla wielu firm ważniejsze jest nastawienie niż doświadczenie.</p>
            
            <h3>Moja rodzina</h3>
            <p>Nazywam się Artem. Jestem Ukraińcem i mam siedemnaście lat. Mieszkam w mieście Poznań. Jestem studentem.</p>
            <p>Moja siostra Sofia ma 18 lat, też jest studentką. Mój brat Paweł ma zaledwie 2 lata. Moja matka ma na imię Katya, jest farmaceutką, ale teraz nie pracuje i głównie opiekuje się nami. Mój ojciec Sergiej ma czterdzieści cztery lata, pracuje w firmie logistycznej.</p>
          </section>
        </div>`,
};

document.getElementById("question_select").addEventListener("change", function () {
  const val = this.value;
  const container = document.getElementById("answer_container");
  container.innerHTML = answers[val] || "";
});

window.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("question_select");
  select.value = "404";
  select.dispatchEvent(new Event("change"));
});




const scroll_btn = document.getElementById("scroll_top_btn");

window.addEventListener("scroll", function () {
scroll_btn.style.display = (window.scrollY > 300) ? "block" : "none";
});

scroll_btn.addEventListener("click", function () {
window.scrollTo({ top: 0, behavior: "smooth" });
});
