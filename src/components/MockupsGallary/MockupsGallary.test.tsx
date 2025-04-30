import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {MockupsGallary} from './MockupsGallary';

describe('<MockupsGallary />', () => {
  test('it should mount', () => {
    render(<MockupsGallary />);

    const mockupsGallary = screen.getByTestId('MockupsGallary');

    expect(mockupsGallary).toBeInTheDocument();
  });
});