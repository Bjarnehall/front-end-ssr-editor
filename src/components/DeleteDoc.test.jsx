import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import DeleteDoc from './DeleteDoc'

global.handleSubmit = vi.fn((e) =>
    e.preventDefault()
);

test('Clicks button classname "delete-button" check if clicked hiddenInput has value', async () => {
    render(<DeleteDoc preselectedDoc={{ id: '1' }}/>);
    
    const user = userEvent.setup();
    const form = document.querySelector('form');
    const button = screen.getByText(/Delete document/);
    const hiddenInput = screen.getByDisplayValue('1');
    
    form.addEventListener('submit', handleSubmit);
    await user.click(button);
    
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(hiddenInput).toBeInTheDocument();
});