import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SkillsPage from './SkillsPage';

describe('<SkillsPage />', () => {
  test('it should mount', () => {
    render(<SkillsPage />);

    const skillsPage = screen.getByTestId('SkillsPage');

    expect(skillsPage).toBeInTheDocument();
  });
});