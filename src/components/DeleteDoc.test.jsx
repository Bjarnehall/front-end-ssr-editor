import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import DeleteDoc from './DeleteDoc'
import api_url from "../url.js";


const preselectedDoc = {
    id: 1,
};

global.fetch = vi.fn(() =>
    Promise.resolve({
    json: () => Promise.resolve({}),
    })
);

test(' ', async () => {
    const user = userEvent.setup();
    render(<DeleteDoc preselectedDoc={preselectedDoc} />);

    const button = screen.getByRole('button', { name: /Delete document/});

    await user.click(button);

    expect(global.fetch).toHaveBeenCalledWith(
        `${api_url}/api/delete/1`,
        { method: "POST" }
    )
});
