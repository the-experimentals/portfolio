import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {CoverPage} from './CoverPage';
import { ThemeProvider } from '@mui/material';
import customTheme from '../../themes/customTheme';

describe('<CoverPage />', () => {

  const theme = customTheme(true);
  it('it should mount', () => {
    render(
      <ThemeProvider  theme={theme}>
        <CoverPage />
      </ThemeProvider>
    );

    // Ensure the component renders key elements
    expect(screen.getByText(/Hi, my name is/i)).toBeInTheDocument();
    expect(screen.getByText(/Bibek Saini/i)).toBeInTheDocument();
    expect(screen.getByText(/I am a passionate software engineer/i)).toBeInTheDocument();
  });

  it('renders all Typography components with the correct text', () => {
    render(
      <ThemeProvider theme={theme}>
        <CoverPage />
      </ThemeProvider>
    );

    // Ensure all Typography elements are rendered
    expect(screen.getByText(/Hi, my name is/i)).toBeInTheDocument();
    expect(screen.getByText(/Bibek Saini/i)).toBeInTheDocument();
    expect(screen.getByText(/I am a passionate software engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/I specialise in designing architecture/i)).toBeInTheDocument();
    expect(screen.getByText(/I am a strong advocate of agile methodologies/i)).toBeInTheDocument();
  });

  it('displays the correct primary color in the sx prop', () => {
    render(
      <ThemeProvider theme={theme}>
        <CoverPage />
      </ThemeProvider>
    );

    const gridContainer = screen.getByTestId('CoverPage');
    const style = window.getComputedStyle(gridContainer);
    
    // Check if the '--primary-color' custom property is being applied correctly
    expect(style.getPropertyValue('--primary-color')).toBe(theme.palette.primary.main);
  });

  it('applies correct class names to the grid container', () => {
    render(
      <ThemeProvider theme={theme}>
        <CoverPage />
      </ThemeProvider>
    );

    const gridContainer = screen.getByTestId('CoverPage');
    expect(gridContainer).toHaveClass('CoverPage');
    // expect(gridContainer).toHaveClass('centralize');
  });

  it('renders the profile image container', () => {
    render(
      <ThemeProvider theme={theme}>
        <CoverPage />
      </ThemeProvider>
    );

    // Check if the profile image div is rendered
    const profileImage = screen.getByTestId('profile-image');
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveClass('profileImage'); // Ensure the correct class is applied
  });

});