import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-woolf-hw-06-phonebook">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
