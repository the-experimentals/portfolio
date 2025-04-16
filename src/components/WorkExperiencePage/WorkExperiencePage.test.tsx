import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WorkExperiencePage } from './WorkExperiencePage';

describe('<WorkExperiencePage />', () => {
  test('it should mount', () => {
    render(<WorkExperiencePage />);

    const workExperiencePage = screen.getByTestId('WorkExperiencePage');

    expect(workExperiencePage).toBeInTheDocument();
  });
});