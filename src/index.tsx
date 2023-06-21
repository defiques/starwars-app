import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router} from "react-router-dom";
import App from "./components/App/App";
import {setupStore} from "./store/store";
import {Provider} from "react-redux";

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

      <Provider store={store}>
          <Router>
              <App />
          </Router>
      </Provider>
);
