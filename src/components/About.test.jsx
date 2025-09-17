import { render, screen } from '@testing-library/react'
import About from './About'

test('Has an H2 classname "title" of "About this project" child of classname "about"', () => {
    render(<About />)
    const heading = screen.queryByText(/About this project/)
    const headingParent = heading.closest('div.about')
    expect(heading.tagName).toBe('H2')
    expect(heading.className).toBe('title')
    expect(headingParent.className).toBe('about')
})

test('The word "React" in a Paragaph and is a child of classname "presentation"', () => {
    render(<About />)
    const text = screen.queryByText(/React/)
    const parentOfText = text.closest('div.presentation')
    expect(text.tagName).toBe('P')
    expect(parentOfText.className).toBe('presentation')
})

test('The authors is named on page and belongs to a classname of "authors"', () => {
    render(<About />)
    const authorOne = screen.queryByText(/Jonas/)
    const authorTwo = screen.queryByText(/Valeriia/)
    expect(authorOne.tagName).toBe('P')
    expect(authorTwo.tagName).toBe('P')
    expect(authorOne.className).toBe('authors')
    expect(authorTwo.className).toBe('authors')
})

