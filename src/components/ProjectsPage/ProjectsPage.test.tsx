
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {ProjectsPage} from './ProjectsPage';

describe('<ProjectsPage />', () => {
  test('it should mount', () => {
    render(<ProjectsPage />);

    const projectsPage = screen.getByTestId('ProjectsPage');

    expect(projectsPage).toBeInTheDocument();
  });
});