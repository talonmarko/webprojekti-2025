// for scoreboard
let points = 0; 


// modal quiz functionality


    const questions = {
        1: {
            question: "Itämeri on altis rehevöitymiselle ja saasteille. Rannikkovesiämme rehevöittävät erityisesti... ",
            answers: ["Risteilyliikenne", "Maa- ja metsätaloudesta valuvat ravinteet", "Mereen päätynyt muovi", "Öljyonnettomuudet"],
            correct: 1, 
        info: "Itämeri on erityisen herkkä ja altis saasteille, sillä se on matala sisämeri, jonka vesi vaihtuu hitaasti. Ylimääräisten maa- ja metsätalousravinteiden aiheuttama rehevöityminen on Itämeren ongelmista suurin. Myös ylikalastus, ilmastonmuutos, öljykuljetukset sekä lisääntyvä laivaliikenne uhkaavat Itämerta. Itämeren rantavaltiot ovat sitoutuneet parantamaan meren tilaa merkittävästi. Tämä vaatii poliittista sitoutumista ilmastohaittojen vähentämiseen sekä riittävää rahoitusta. (WWF Suomi 2025.)"
        },
        2: {
            question: "Mikä näistä lämpövyöhykkeistä koskevista väitteistä ei pidä paikkaansa?",
            answers: ["Lämpimään eli subtrooppiseen vyöhykkeeseen tyypillistä on leuto, kostea talvi sekä kuuma, kuiva kesä.", "Eurooppa kuuluu suurimmaksi osaksi lauhkeaan vyöhykkeeseen.", "Kylmä vyöhyke sijoittuu pelkästään maapallon pohjoisimmille alueille.", "Kasveja ja eläimiä, kuten hyönteisiä ja matelijoita, on eniten kuumassa vyöhykkeessä."],
            correct: 2,
            info: "Kylmä vyöhyke ei sijaitse pelkästään pohjoisessa, vaan kylmän vyöhykkeen alue on myös maapallon eteläisimmissä osissa etelänavalla. Lämpövyöhykkeet perustuvat alueen etäisyyteen päiväntasaajalta, jolle aurinko paistaa kohtisuoraan. Lisäksi lämpövyöhykkeeseen vaikuttavat tuulet, merivirrat, etäisyys merestä ja pinnanmuodot.  (Peda.net 2025.)"
        },
        3: {
            question: "Mistä tunnetusta maamerkistä löytyy alkuperäinen Mona Lisa -teos?",
            answers: ["Louvre", "Notre-Dame", "Versaillesin palatsi", "Palais Idéal"],
            correct: 0,
            info: "Louvre on tunnettu taidemuseo Ranskassa. Se on yksi maailman vanhimpia museoita ja pinta-alaltaan maailman kolmanneksi suurin. Museon tunnetuimpiin teoksiin kuuluvat muun muassa maailman kalleimmaksi maalaukseksi arvioitu Leonardo da Vincin Mona Lisa, Raphaëlin Kaunis puutarhuri (Belle Jardinière), Véronèsen Kaanaan häät (Les Noces de Cana) sekä veistokset Milon Venus ja Samothraken Nike. (Airaksinen & Savolainen 2019.)"
        },
        4: {
            question: "Mikä saari? Tällä Välimeren saarella aurinko paistaa läpi vuoden. Siellä on roomalaisia raunioita, bysanttilaisia linnoituksia, mosaiikkeja, Afroditen patsaita ja keskiaikaisia kirkkoja. Turistit asuvat usein esimerkiksi Ayia Napassa tai Larnacassa.",
            answers: ["Rodos", "Kreeta", "Sardinia", "Kypros"],
            correct: 3,
            info: "Kypros on suosittu matkakohde, joka tarjoaa turisteille sekä aurinkoista säätä että kulttuurillisia elämyksiä. Saaren historiaan ja kulttuuriin ovat vaikuttaneet helleenien, foinikialaisten, roomalaisten, Bysantin ja Osmanian aikakaudet.  Kypros on kuitenkin jakautunut kahtia kreikkalaisen ja turkkilaisen väestön kesken konfliktien seurauksena.  Pohjois-Kyproksen turkkilaiseksi tasavallaksi kutsuttu Turkin miehittämä alue perustettiin vuonna 1983, mutta sitä ei ole tunnustanut yksikään valtio Turkin lisäksi. Kahta kolmasosaa saaresta hallitseva Kyproksen tasavalta liittyi EU:n jäseneksi vuonna 2004. Kyproksen konflikti on yksi syistä, jonka takia Turkki ei edelleenkään ole EU:n jäsen. (Luikku 2023.)"
        },
        5: {
            question: "Kuinka monta prosenttia egyptiläisistä asuu Nillin suistoalueella?",
            answers: ["Noin 75%", "Noin 55%",  "Noin 90%", "Noin 30%"],
            correct: 2,
            info: "Niili on joki, joka virtaa koko Egyptin halki Sudanista Välimerelle. Se laskee mereen 250 kilometriä leveänä monihaaraisena suistona. Tällä suistoalueella elää yli 30 miljoonaa ihmistä ja yli 90% Egyptin kaikista asukkaista. Ilman jokea koko Egyptin alue olisi aavikkoa. Niilin tulvien tuoma hedelmällinen liete on ollut maanviljelyn perustana jo tuhansien vuosien ajan. Joki on myös ollut tärkeä kulkuväylä egyptiläisille. (Globalis 2025.)"
        },
        6: {
            question: "Mikä historiallisen kaupan ja tieteen keskuksena tunnettu kaupunki sijaitsee Malissa?", 
            answers: ["Luxor", "Timbuktu", "Marrakesh", "Kairo"],
            correct: 1,
            info: "Timbuktu on historiallinen kaupunki Malissa, joka sijaitsee Saharan autiomaassa. Se oli merkittävä kaupan ja tieteen keskus erityisesti 1400- ja 1500-luvuilla. UNESCO on julistanut Timbuktun maailmanperintökohteeksi vuonna 1988. Sen kirjoituksia ja historiallisia rakennuksia pyritään suojelemaan. Tänä päivänä Malin valtio on sotilaallisessa kriisissä, mikä uhkaa myös Timbuktun kulttuurillista perintöä. (Atlas Guide 2025.)"

        },
        7: {
            question: "Montako virallista kieltä on Zimbabwen valtiolla?",
            answers: ["4", "9", "16", "21"],
            correct: 2,
            info: "Zimbabwe on kielellisesti ja etnisesti monimuotoinen valtio, jolla on 16 virallista kieltä. Virallisia kieliä ovat englanti, shona, ndebele, chewa, chibarwe, kalanga, koisan, nambya, ndau, shangani, sotho, tonga, tswana, venda, xhosa sekä viittomakieli. (Original Travel 2025.)" 
        },
        8: {
            question: "Mikä näistä kuuluisista maamerkeistä sijaitsee Etelä-Afrikan valtiossa?",
            answers: ["Pöytävuori", "Victorian putoukset", "Kilimanjaro", "Bwindin kansallispuisto"],
            correct: 0,
            info: "Pöytävuori on kuuluisa hiekkakivivuori Etelä-Afrikan Kapkaupungin lähellä. Se on tunnettu täysin litteästä huipustaan, joka kohoaa 1 087 metrin korkeuteen äkkijyrkillä rinteillä. (Tiedonportailla.fi 2025a.) Victorian putoukset ovat kuuluisa vesiputous, joka sijaitsee Sambian ja Zimbabwen rajalla. Kilimanjaro on Afrikan korkein vuori, joka kohoaa 5895 metrin korkeuteen Tansaniassa. Bwindin kansallispuisto puolestaan sijaitsee Ugandassa. Se on luonnonpuisto, joka on kuuluisa sademetsästään.  (Tourcompass 2019.)" 
        },
        9: {
            question: "Mikä on Venäjän väkiluku?",
            answers: ["Reilu 132,2 miljoonaa", "Reilu 143,6 miljoonaa", "Reilu 167,1 miljoonaa", "Reilu 190,8 miljoonaa"],
            correct: 1,
            info: "Worldometerin koosteen mukaan Venäjän väkiluku on arviolta noin 143 655 000 asukasta vuoden 2025 marraskuussa. Venäjän väkiluku on ollut laskussa vuodesta 1994, jolloin maassa asui 149 miljoonaa ihmistä. Tämän laskusuhdanteen arvioidaan jatkuvan seuraavien vuosien ajan. (Worldometer 2025.) Venäjällä on vuosikymmeniä ollut matala syntyvyys, joka ei yllä korkean kuolleisuuden tasolle. Newsweek-lehden mukaan venäläisten kuolleisuus on myös lisääntynyt merkittävästi sen jälkeen, kun Venäjä aloitti hyökkäyssodan Ukrainaa vastaan vuoden 2022 helmikuussa. (Cole, 2024.)"
        },
        10: {
            question: "Mikä merkittävä vuorenhuippu sijaitsee Nepalin ja Tiibetin rajalla?",
            answers: ["Mount Everest", "K2", "Fuji", "Aconcagua"],
            correct: 0,
            info: "Maailman korkein vuorenhuippu Mount Everest sijoittuu Nepalin ja Tiibetin rajalle. Korkeutta sillä on arvioitu olevan 8 848 metriä. Mount Everest kuuluu merkittävään Himalajan vuoristoon, josta löytyy myös muita maailman korkeimpiin lukeutuvia vuorenhuippuja (mm. Kangchenjunga, Lhotse ja Makalu).  Mount Everest tuo alueelle joka vuosi satoja ulkomaalaisia vuorikiipeilijöitä. Vuonna 2023 Everestille kiipeämisen hinta oli yli 30 000 euroa kiipeilijää kohden. Ikävä kyllä vuorikiipeily on tuonut mukanaan myös ympäristöongelmia, sillä vuosien varrella kiipeilijät ovat jättäneet jälkeensä tonneittain erilaista jätettä. (Globalis 2023a."
        },
        11: {
            question: "Mikä näistä on merkittävin uskonto Intiassa?",
            answers: ["Islam", "Buddhalaisuus", "Sikhiläisyys", "Hindulaisuus"],
            correct: 3,
            info: "Intia on etnisiltä ryhmiltään sekä uskonnoiltaan monimuotoinen maa. Noin 80% maan väestöstä on hindulaisia. Valtiossa on lisäksi myös merkittävä määrä muslimeita (14% väestöstä) sekä muita pienempiä ryhmiä, kuten kristittyjä, sikhiläisiä, buddhalaisia ja jainalaisia.  Hindulaisuus vaikuttaa merkittävästi Intian kulttuuriin sekä perinteisiin. (Globalis 2023b.)"
        },
        12: {
            question: "Kuvassa näkyvä alue tunnetaan nimellä Tyynenmeren tulirengas (Pacific Ring of Fire). Mistä tämä nimitys johtuu?",
            answers: ["Alueella on tukalan kuuma trooppinen ilmasto.", "Alueella on runsaasti tulivuoria ja maanjäristyksiä.", "Alueella esiintyy usein valtavia metsäpaloja.", "Alueella kulkee lämmin merivirta, joka lämmittää vyöhykkeen ilmastoa."],
            correct: 1,
            info: "Alueelle tyypillistä on vulkaaninen eli tulivuorellinen toiminta sekä tektoninen eli litosfäärilaattojen liikettä kuvaava toiminta. Vyöhykkeellä sijaitsee 75% maapallon kaikista tulivuorista ja sinne sijoittuu jopa 90% maapallon kaikista maanjäristyksistä. Vyöhyke on hevosenkengän muotoinen ja 40 000 kilometriä pitkä. Alueella sijaitsevia valtioita ovat muun muassa Japani, Filippiinit, Uusi-Seelanti sekä Chile. (National Geographic 2019.)"
        },
        13: {
            question: "Mikä näistä on tunnettu vesiputous Kanadassa?",
            answers: ["Iguassun putoukset", "Angelinputous", "Yosemiten putoukset", "Niagaran putoukset"],
            correct: 3,
            info: "Niagaran putoukset on kolmiosainen vesiputous, joka sijaitsee Niagarajoessa Eriejärven ja Ontariojärven välissä. Kummallakin puolen jokea putousten kohdalla sijaitsee kaksi erillistä Niagara Falls -nimistä kaupunkia. Kaupunkien välille on rakennettu kaksi siltaa. Niagaran putoukset ovat myös kuuluisa nähtävyys: niitä ihailee vuosittain noin kaksitoista miljoonaa ihmistä. (Tiedonportailla.fi 2025b.)"
        },
        14: {
            question: "Montako osavaltiota Yhdysvalloissa on? ",
            answers: ["52", "51", "50", "49"],
            correct: 2,
            info: "Yhdysvallat on liittovaltio, joka koostuu 50 osavaltiosta. Jokaisella osavaltiolla on oma hallituksensa, lainsäädäntönsä ja erityispiirteensä. Yhdysvaltojen eri osavaltioiden välillä onkin valtavasti kulttuurillisia ja maantieteellisiä eroja. Yhdysvaltojen lipun valkoiset tähdet symboloivat osavaltioita: niitä on lipussa myös 50. (Nieminen, Löyttyniemi & Lehtola, 2024.) Bonus: osaatko kaikki osavaltiot? Tee Ylen testi <a href='https://yle.fi/a/74-20085924' target='_blank' style='color: #1AFF8C; text-decoration: underline;'>täällä</a>!"
        },
        15: {
            question: "Perussa sijaitsee maailmankuulu muinainen vuoristokaupunki, joka kuuluu inkojen historiaan. Mikä sen nimi on?",
            answers: ["Mesa Verde", "Chichen Itza", "Machu Picchu", "Teotihuacan"],
            correct: 2,
            info: "Machu Picchu on ketšuan kieltä ja tarkoittaa “vanhaa vuorta” tai “vanhaa huippua”. Kaupunki sijoittuu 2430 metrin korkeuteen Andien rinteelle lähelle inkavaltakunnan pääkaupunkia. Machu Picchu on nykyisin Perun suosituin turistikohde sekä yksi koko Etelä-Amerikan tärkeimmistä arkeologisista keskuksista. Vuonna 1983 Unesco lisäsi sen maailmanperintökohteeksi. Se kuuluu myös NewOpenWorld Corporationin uusiin maailman seitsemään ihmeeseen. (Unesco World Heritage Centre 2025.)"
        },
        16: {
         question: "Brasilian merkittävin elinkeino on maa- ja metsätalous. Mikä näistä Brasilian maatalouteen liittyvistä väitteistä ei pidä paikkaansa?",
            answers: ["Maatalous on jakautunut tasaisesti ympäri valtiota ja valtaosa maatiloista on suurtiloja.", "Brasilian valtiontuki maataloudelle sekä laaja maataloustutkimus on edesauttanut maatalouden kasvua ja kehitystä.", "Brasilia on maailman suurin kahvin ja sokerin tuottaja ja viejä.", "Brasilialla on maailman suurimmat makean veden varannot, mikä edesauttaa maataloutta."],
            correct: 0,
            info: "Brasilia on maailman suurin kahvin, sokerin ja appelsiinimehun tuottaja ja viejä sekä maailman toiseksi suurin soijapapujen viejä. Brasiliassa merkittävää on myös karjatalous. 2000-luvulta lähtien valtion maatalouskeskittymä on sijoittunut maan keskiosiin trooppiseen savannialue cerradoon. Brasilian maatalous on hyvin keskittynyttä, sillä vain pieni osa valtion maatiloista tuottaa valtaosan maan maataloustuloista. Enemmistö maatiloista on pienviljelytiloja. (Ulkoministeriö 2016.)"
        }

    };



function openQuestion(id) {
    const modalElement = document.getElementById("quizModal");
    const modal = new bootstrap.Modal(modalElement);
    const q = questions[id];

    document.getElementById("questionTitle").innerText = q.question;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    q.answers.forEach((answerText, index) => {
        const btn = document.createElement("button");
        btn.className = "btn btn-primary w-100 my-2";
        btn.innerText = answerText;

        btn.onclick = () => handleAnswer(id, index);

        choicesDiv.appendChild(btn);
    });

    modal.show();
}

function handleAnswer(id, chosenIndex) {
    const q = questions[id];
    const choicesDiv = document.getElementById("choices");

    // Remove/hide all answer buttons
    choicesDiv.innerHTML = "";

    // show correct/incorrect message
    const resultMsg = document.createElement("p");
    resultMsg.className = "fw-bold";
    if (chosenIndex === q.correct) {
        resultMsg.innerText = "Oikea vastaus!";
        points++;
        console.log("Points:", points);
    } else {
        resultMsg.innerText = "Väärä vastaus!";
    }
    choicesDiv.appendChild(resultMsg);

    // show info text
    const explanation = document.createElement("p");
    explanation.className = "answer-info mt-2";
    explanation.innerHTML = q.info;
    choicesDiv.appendChild(explanation);


    // localStorage.setItem('game5', (Number(localStorage.getItem('game5')) || 0) + points);
}