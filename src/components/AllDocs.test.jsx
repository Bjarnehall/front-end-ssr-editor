import { render, screen } from '@testing-library/react'
import AllDocs from './AllDocs'

test('Has an H2 classname "title" of "All documents', () => {
    render(<AllDocs />)
    const heading = screen.queryByText(/All documents/)
    expect(heading.tagName).toBe('H2')
    expect(heading.className).toBe('title')
})
