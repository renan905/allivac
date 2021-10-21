import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import RoutesApp from "./routes";

import './index.css';


ReactDOM.render(
  <React.StrictMode>
	  <Router history={createBrowserHistory()}>
		<RoutesApp />
	</Router>
  </React.StrictMode>,
  document.getElementById('root')
);

