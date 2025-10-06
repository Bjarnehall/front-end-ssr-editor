import { render, screen } from '@testing-library/react'
import Header from '../Header'

test('Svg image is rendered', () => {
    render(<Header />);
    
    const svg = screen.getByTestId("header-svg");
    expect(svg).toBeInTheDocument();
});

test('Svg image is rendered', () => {
    render(<Header />);

    const heading = screen.getByText(/LOST IN REACT/);
    const subHeading = screen.getByText(/The Editor/);

    expect(heading).toHaveAttribute("fill", "limegreen");
    expect(subHeading).toHaveAttribute("fill", "white");
    
});