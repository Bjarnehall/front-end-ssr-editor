import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import CreateDoc from './CreateDoc'

test('Has an H2 "title" of "Create new document" classname "title" is visible', () => {
        render(<CreateDoc />)
        
    const heading = screen.queryByText(/Create new document/);
    
    expect(heading.tagName).toBe('H2');
    expect(heading.className).toBe('title');
    expect(heading).toBeVisible();
});

test('Has a label of "Document Title" is visible', () => {
    render(<CreateDoc />);
    
    const labelDocumentTitle = screen.queryByText(/Document Title/);
    expect(labelDocumentTitle.tagName).toBe('LABEL');
    expect(labelDocumentTitle).toBeVisible();
});

test('Has a label of "Document Text" is visible', () => {
    render(<CreateDoc />);

    const labelDocumentText = screen.queryByText(/Document Text/);

    expect(labelDocumentText.tagName).toBe('LABEL');
    expect(labelDocumentText).toBeVisible();
});

global.fetch = vi.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(),
    }),
);

global.alert = vi.fn();

test('Submit title and content to create a document', async () => {
    render(<CreateDoc />);

    const user = userEvent.setup();
    const button = screen.getByText(/Create Document/);

    await user.type(screen.getByLabelText(/Document Title/), 'Hej');
    await user.type(screen.getByLabelText(/Document Text/), 'Lite text');
    await user.click(button);

    expect(button.className).toBe('create-button');
    expect(button).toBeVisible();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
        'http://localhost:8080/api/create',
        expect.objectContaining({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'Hej', content: 'Lite text' }),
        })
    );
});