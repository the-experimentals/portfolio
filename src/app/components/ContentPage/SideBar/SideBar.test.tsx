import React from 'react';
import ReactDOM from 'react-dom/client';
import SideBar from './SideBar';

it('It should mount', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  root.render(<SideBar />);
  root.unmount();
});