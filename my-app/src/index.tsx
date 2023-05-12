import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    {/* Componente principal da aplicação*/}
    {/* todo arquivo que é *.tsx é um componente */}

  </React.StrictMode>
);
