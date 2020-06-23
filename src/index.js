import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import client from './client';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from '@apollo/client';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
