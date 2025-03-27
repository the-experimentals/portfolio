import React from 'react';
import ReactDOM from 'react-dom';
import CoverPage from './CoverPage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CoverPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});