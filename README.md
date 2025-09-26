
Testar skapa en branch

# Skapa en REACT application

## Skapa ett react projekt i nuvarande folder med hjälp av vite

npm create vite@latest ./

* Select a framework:

Välj React

* Select a variant:

Välj Javascript

## För att använda applikation

npm install

npm run dev

Nu finns det och körs en react applikation med dess default start sida lokalt.


# Att köra  React tillsammans med Express

Genom att hämta och skicka json data via fetch kan react applicationen
fungera tillsammans med en helt fristående backend.

I exemplet nedan visas vår komponent AllDocs som hämtar data ifrån i detta fallet ett api byggt i express. Informationen visas sedan upp i en lista. I 
exemplet används variablen api_url vilken hämtas från en extern fil, denna
variabel ändras till antingen localhost:{port som appen körs på} för att testa
lokalt eller den riktiga urlen express appen har i produktion. För att det skall fungera att köra måste både react applikationen och express 
applikationen vara igång samtidigt antingen lokalt eller  i produktion.

```
import api_url from "../url.js";
import { useState, useEffect } from "react";

function AllDocs({ onEdit }) {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
      fetch(`${api_url}/all`)
        .then(res => res.json())
        .then(data => setDocs(data.data));
    }, []);

    return (
        <div>
            <h2 className="title">All documents</h2>
            <ul className="list">
                {docs.map(doc => (
                    <li key={doc.id}>
                        <strong>{doc.title}</strong>
                        {onEdit && (<button className="list-button" onClick={() => onEdit(doc)}>Edit</button>)}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default AllDocs;
```
Alldocs har stor likhet med en vanlig java-script funktion men är här en React komponent vilken vi kan använda i andra komponenter.
I exemplet nedan ser vi hur komponenten används i App.jsx.

```
import AllDocs from "./components/AllDocs";

function App() {

  return (
    <div className='container'>

      <div className='editor'>
        {view === "editor" && !editDoc && (
          <AllDocs onEdit={doc => setDoc(doc)} />
        )}

      </div>
    </div>
  )
}
```

# Testning i React

## Installera beroenden

För att kunna skriva tester krävs verktyg och vi har valt att använda Vitest ihop med Istanbul. Vitest är själva test ramverket medan Istanbul används för att generera täcknings rapporter. Jsdom änvänds för att simulera en webbläsare i node.js. Utöver detta installeras ytterligare bibliotek för att underlätta testning, jest-dom ger ytterligare möjligheter att testa DOM-trädet och user-event ger möjlighet att testa till exempel knapptryckningar.

Börja med att installera verktygen.


npm install -D vitest

npm install -D jsdom

npm install -D @testing-library/react

npm install -D @testing-library/jest-dom

npm install -D @testing-library/user-event

npm install -D @vitest/coverage-istanbul


## Förbered Miljön

Vi lägger i package.json filen till ett par kommandon under "scripts".

```
  "scripts": {
    //
    "test": "vitest",
    "coverage": "vitest run --coverage"
  },
```
Vi lägger till test variabler i vår vite.config.js fil så att vår test miljö fungerar korrekt.
```
export default defineConfig({
  plugins: [react()],
  base: '/front-end-ssr-editor/',
  test: {
    environment: "jsdom",
    globals: true,
    css: true,
    setupFiles: "./setup.js",
    coverage: {
      provider: 'istanbul',
    }
  }
})
```
Vi skapar en filen setup.js i vilken vi kan specificera ytterligare beroenden för våra tester i detta fall importeras jest-dom för att kunna använda
matchers för DOM-trädet.
```
import '@testing-library/jest-dom';
```

Vi kan nu köra "npm run test" för att köra våra tester samt "npm run coverage" för att få
en testrapport ifrån Istanbul.

## Skriva ett test

I exemplet nedan visas hur en rubrik testas i komponenten About.jsx. Först skapas en fil med namnet
About.test.jsx där komponenten vilken ska testas importeras. Sedan kan man initiera ett test genom
nyckelordet "it" eller "test" då "test" är mer explicit har detta valts för tydlighet. Komponenten
renderas sedan i det enskilda testet och DOM-trädet finns nu tillgänligt precis som i webbläsaren
tak vare att vi använder jsdom. Vi ser hur rubriken kan hittas genom "screen.queryByText(/About this project/).
Rubriken hittas genom dess textinnehål och vi kan nu komma åt ytterligare information till exempel
förälder noden. Genom nyckelordet "expect" utförs assertions och i detta exemplet testas om rubriken
har den html tag och class som förväntas. Även "toBeVisable" körs vilken vi kan använda eftersom jest-dom
finns tillgängligt och kontrollerar inte bara att rubriken finns i DOM-trädet utan även att den är synlig.
```
import About from './About'

test('Has an H2 classname "title" of "About this project" child of classname "about"', () => {
    render(<About />);
    
    const heading = screen.queryByText(/About this project/);
    const headingParent = heading.closest('div.about');
    
    expect(heading.tagName).toBe('H2');
    expect(heading.className).toBe('title');
    expect(headingParent.className).toBe('about');
    expect(heading).toBeVisible();
});
```
### Exempel på Testrapport från istanbul
```
 % Coverage report from istanbul
---------------------|---------|----------|---------|---------|-------------------
File                 | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------------|---------|----------|---------|---------|-------------------
All files            |   79.41 |    21.42 |   80.64 |   81.53 |                   
 src                 |   11.11 |        0 |       0 |    12.5 |                   
  App.jsx            |       0 |        0 |       0 |       0 | 12-41             
  main.jsx           |       0 |      100 |     100 |       0 | 6                 
  url.js             |     100 |      100 |     100 |     100 |                   
 src/assets/wrappers |     100 |      100 |     100 |     100 |                   
  About.js           |     100 |      100 |     100 |     100 |                   
  AllDocs.js         |     100 |      100 |     100 |     100 |                   
  DeleteDoc.js       |     100 |      100 |     100 |     100 |                   
  Nav.js             |     100 |      100 |     100 |     100 |                   
  UpdateCreateDoc.js |     100 |      100 |     100 |     100 |                   
 src/components      |   88.88 |       75 |   92.59 |   90.38 |                   
  About.jsx          |     100 |      100 |     100 |     100 |                   
  AllDocs.jsx        |     100 |      100 |     100 |     100 |                   
  CreateDoc.jsx      |     100 |      100 |     100 |     100 |                   
  DeleteDoc.jsx      |      70 |       50 |     100 |      70 | 16-17,22          
  Header.jsx         |   76.92 |      100 |   66.66 |   81.81 | 10-11             
  Nav.jsx            |     100 |      100 |     100 |     100 |                   
  UpdateDoc.jsx      |     100 |      100 |     100 |     100 |                   
---------------------|---------|----------|---------|---------|-------------------
```

För att hitta information kring att skriva tester har följande källor använts tillsammans med
metoden FAFO "F**k around and find out"

https://dev.to/samuel_kinuthia/testing-react-applications-with-vitest-a-comprehensive-guide-2jm8

https://vitest.dev/

https://www.youtube.com/watch?v=G-4zgIPsjkU

https://markus.oberlehner.net/blog/using-testing-library-jest-dom-with-vitest/

https://testing-library.com/docs/user-event/setup/?utm_source=chatgpt.com

https://vitest.dev/guide/browser/interactivity-api

https://stackoverflow.com/questions/60113292/when-to-use-act-in-jest-unit-tests-with-react-dom

https://runthatline.com/how-to-mock-fetch-api-with-vitest/


## Styled-components

I slutskedet av arbetet med refaktorering har konceptet "Styled-components" implementerats för att få en bra struktur på css/styling.
I nuläget finns ingen direkt nödvändig anledning till detta men kan hjälpa oss att få en bättre struktur i kommande kursmoment och känns
som en bra "best-practice" för att utveckla i React.

För att använda styled components behövs ett beroende installeras

npm install styled-components

Vi skapar sedan wrappers för de komponenter som skall stylas enligt exempel nedan.

```
import Wrapper from './App.js';
function App() {
  return (
    <Wrapper>
      <h1>Hello</h1>
    <Wrapper/>
  )
}
export default App
```

I filen App.js kan vi sedan definera specifik style för komponenten enligt exempel.

```
import styled from 'styled-components';

const Wrapper = styled.section`
  h1 {
    color: blue;
  }
`;

export default Wrapper;
```

## Sammanfattning av applikationen

Vår applikation har nu samma funktionalitet som tidigare express applikation hade med views och routes. Applikationen fungerar
som en SPA-applikation har en egen stil och användarvänligt gränssnitt. Appen lever sitt eget liv och har ingen kodmässig sammanslutning
med vår backend utan används som en ett gränssnitt till vår backend som blivit ett JSON-api. Applikationen har värdefulla tester och känns
robust och enkel att fortsätta arbeta med.

## Github Pages

Vår applikation är driftsatt på github genom pages och finns att hitta https://bjarnehall.github.io/front-end-ssr-editor/

