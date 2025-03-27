import React from 'react';
import { createRoot } from 'react-dom/client';
import CoverPage from './CoverPage';

it('It should mount', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<CoverPage />);
  root.unmount();
});