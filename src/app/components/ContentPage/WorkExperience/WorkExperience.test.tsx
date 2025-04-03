import React from 'react';
import ReactDOM from 'react-dom/client';
import WorkExperience from './WorkExperience';

it('It should mount', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  root.render(<WorkExperience />);
  root.unmount();
});