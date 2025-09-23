import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import UpdateDoc from './UpdateDoc'


const preselectedDoc = {
    id: 1,
    title: "Hej",
    content: "Lite text",
};

global.fetch = vi.fn(() =>
    Promise.resolve({
    json: () => Promise.resolve({}),
    })
);

test(' ', async () => {
    render(<UpdateDoc preselectedDoc={preselectedDoc} />);
    const heading = await screen.findByText(/Document Title/);

    expect(heading.tagName).toBe('LABEL');
    expect(heading).toBeVisible();
});

test(' ', async () => {
    const user = userEvent.setup();
    render(<UpdateDoc preselectedDoc={preselectedDoc} />);

    const titleDocument = screen.getByDisplayValue(/Hej/);
    const contentDocument = screen.getByDisplayValue(/Lite text/);

    await user.clear(titleDocument);
    await user.type(titleDocument, "Ny Hej");
    await user.clear(contentDocument);
    await user.type(contentDocument, "Ny text");

    const button = screen.getByRole('button', { name: /Save document/});

    await user.click(button);

    expect(global.fetch).toHaveBeenCalledWith(
        "http://localhost:8080/api/update/1",
        expect.objectContaining({
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: "Ny Hej",
                content: "Ny text",
            }),
        })
    );
});
