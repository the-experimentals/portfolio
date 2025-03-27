import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';

it('It should mount', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  root.render(<Home />);
  root.unmount();
});