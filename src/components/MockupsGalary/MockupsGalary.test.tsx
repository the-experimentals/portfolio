import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {MockupsGalary} from './MockupsGalary';

describe('<MockupsGalary />', () => {
  test('it should mount', () => {
    render(<MockupsGalary />);

    const mockupsGalary = screen.getByTestId('MockupsGalary');

    expect(mockupsGalary).toBeInTheDocument();
  });
});