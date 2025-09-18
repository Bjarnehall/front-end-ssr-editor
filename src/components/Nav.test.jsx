import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Nav from './Nav'

test('Has button of navigation "Editor, Create New, About" is visible', () => {
    render(<Nav />);

    const buttonEditor = screen.queryByText(/Editor/);
    const buttonCreateNew = screen.queryByText(/Create New/);
    const buttonAbout = screen.queryByText(/About/);

    expect(buttonEditor.tagName).toBe('BUTTON');
    expect(buttonEditor).toBeVisible();

    expect(buttonCreateNew.tagName).toBe('BUTTON');
    expect(buttonCreateNew).toBeVisible();

    expect(buttonAbout.tagName).toBe('BUTTON');
    expect(buttonAbout).toBeVisible();

});

test('Current is disabled while rest is not', () => {
    render(<Nav current="editor"/>);

    const buttonEditor = screen.queryByText(/Editor/);
    const buttonCreateNew = screen.queryByText(/Create New/);
    const buttonAbout = screen.queryByText(/About/);

    expect(buttonEditor).toBeDisabled();
    expect(buttonCreateNew).not.toBeDisabled();
    expect(buttonAbout).not.toBeDisabled();
});

test('Clicks all buttons of nav and checks if right value is used', async () => {
    const user = userEvent.setup();
    const mockNavigate = vi.fn();

    render(<Nav onNavigate={mockNavigate} />);

    const buttonEditor = screen.queryByText(/Editor/);
    const buttonCreateNew = screen.queryByText(/Create New/);
    const buttonAbout = screen.queryByText(/About/);

    await user.click(buttonEditor);
    await user.click(buttonCreateNew);
    await user.click(buttonAbout);

    expect(mockNavigate).toHaveBeenCalled(3);
    expect(mockNavigate).toHaveBeenCalledWith('editor');
    expect(mockNavigate).toHaveBeenCalledWith('create');
    expect(mockNavigate).toHaveBeenCalledWith('about');
});