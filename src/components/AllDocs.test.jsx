import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { act } from 'react';
import AllDocs from './AllDocs'

test('Has an H2 classname "title" of "All documents classname "title" is visible', async () => {
    render(<AllDocs />)
    
    const heading = await screen.findByText(/All documents/);
    
    expect(heading.tagName).toBe('H2');
    expect(heading.className).toBe('title');
    expect(heading).toBeVisible();
    }
);

function mockJsonResponse () {
    const mockApi = {
        data: [
            {id: 1, title: "Hej",},
        ],
    }
    return mockApi;
}
const mockResponse = mockJsonResponse();

global.fetch = vi.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(mockResponse),
    }),
);

const onEditMock = vi.fn();

test('Has document title of "Hej" has a parent of "li" and is visible', async () => {
        act(() => {
            render(<AllDocs onEdit={onEditMock}/>);
        });
        
    const docTitle = await screen.findByText(/Hej/);
    const docTitleParent = docTitle.closest('LI');

    expect(docTitleParent.tagName).toBe('LI');
    expect(docTitle).toBeVisible();
    }
);

test('Has a button with text of "Edit" classname is "list-button" called with document data', async () => {
    act(() => {
        render(<AllDocs onEdit={onEditMock}/>)
    });

    const button = await screen.findByText(/Edit/);
    
    await userEvent.click(button);
    
    expect(button.className).toBe('list-button');
    expect(button).toBeVisible();
    expect(onEditMock).toHaveBeenCalledTimes(1);
    expect(onEditMock).toHaveBeenCalledWith({ id: 1, title: 'Hej'});
    }
);
