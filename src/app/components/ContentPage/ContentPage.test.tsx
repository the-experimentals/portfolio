import React from 'react';
import { createRoot } from 'react-dom/client';
import ContentPage from './ContentPage';

it('It should mount', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<ContentPage />);
  root.unmount();
});