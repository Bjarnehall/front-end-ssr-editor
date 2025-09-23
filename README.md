
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

Nu finns och körs en react applikation med dess default start sida lokalt.


# Att köra  React tillsammans med Express

Genom att hämta och skicka json data via fetch kan react applicationen
fungera tillsammans med en helt fristående backend.

I exemplet nedan visas vår komponent AllDocs som hämtar data ifrån i detta fallet ett api byggt i express. Informationen visas sedan upp i en lista. I 
exemplet används variablen api_url vilken hämtas från en extern fil, denna
variabel ändras till antingen localhost:{port som appen körs på} för att testa
lokalt eller den riktiga urlen appen har i produktion. För att det skall fungera att köra lokalt måste både react applikationen (startas med npm run dev) och express applikationen vara igång (startas med node app.mjs) samtidigt.

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

# Testning i React

## Installera beroenden

För att kunna skriva tester krävs verktyg och vi har valt att använda Vitest
ihop med Istanbul. Vitest är själva test ramverket medan Istanbul används för att generera täcknings rapporter. Jsdom 

Börja med att installera verktygen.


npm install -D vitest

Install jsdom
npm install -D jsdom

Install library for testing
npm install -D @testing-library/react
npm install -D @testing-library/jest-dom
npm install -D @testing-library/user-event

Install istanbul for coverage report
npm install -D @vitest/coverage-istanbul

```
function App() {
  return (
    <>
      <h1>Hello</h1>
    </>
  )
}
export default App
```





## Setting up environment

In package.json under scripts add test and coverage

  "scripts": {
    //
    "test": "vitest",
    "coverage": "vitest run --coverage"
  },

In vite.config.js add setup for testing

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setUpFiles : './setupTests.js',
    coverage: {
      provider: 'istanbul',
    }
  }
})

Add file setupTests.js in root folder

import { expect } from 'vitest'
import matchers from '@testing-library/jest-dom/matchers'

expect.extend(matchers)

## Writing a test

Add file App.test.jsx in src folder

import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the <h1> with text "Hello"', () => {
  render(<App />)
  const heading = screen.getByText(/Hello/)
  expect(heading).not.toBeNull()
})

## Running tests

Run tests
npm run test

Run coverage report
npm run coverage


Sources
https://dev.to/samuel_kinuthia/testing-react-applications-with-vitest-a-comprehensive-guide-2jm8
https://vitest.dev/
https://www.youtube.com/watch?v=G-4zgIPsjkU
https://markus.oberlehner.net/blog/using-testing-library-jest-dom-with-vitest/
https://testing-library.com/docs/user-event/setup/?utm_source=chatgpt.com
https://vitest.dev/guide/browser/interactivity-api
https://stackoverflow.com/questions/60113292/when-to-use-act-in-jest-unit-tests-with-react-dom
https://runthatline.com/how-to-mock-fetch-api-with-vitest/