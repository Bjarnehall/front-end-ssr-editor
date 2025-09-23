
Testar skapa en branch

# Hur jag skapade REACT

### Skapa ett react projekt i nuvarande folder med hjälp av vite

npm create vite@latest ./

* Select a framework:

Välj React

* Select a variant:

Välj Javascript


# För att använda applikation

npm install
npm run dev

# Att köra tillsammans med express

i components/HelloJson.jsx finns en component som hämtar
json värde från express när den körs lokalt på port 8080

Både react och express applikation måste vara igång samtidigt.




# Guide to testing in react

## Set up a react project and make tests

To create a new react project
npm create vite@latest myproject

Install dependencies
npm install

Remove boilerplate code from App.jsx and add a h1
function App() {
  return (
    <>
      <h1>Hello</h1>
    </>
  )
}
export default App

Start server to see that everything works
npm run dev


## Install dependencies

Install vitest
npm install -D vitest

Install jsdom
npm install -D jsdom

Install library for testing
npm install -D @testing-library/react
npm install -D @testing-library/jest-dom
npm install -D @testing-library/user-event

Install istanbul for coverage report
npm install -D @vitest/coverage-istanbul

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