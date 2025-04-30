import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {MockupsGallery} from './MockupsGallery';

describe('<MockupsGallery />', () => {
  test('it should mount', () => {
    render(<MockupsGallery />);

    const mockupsGallery = screen.getByTestId('MockupsGallery');

    expect(mockupsGallery).toBeInTheDocument();
  });
});