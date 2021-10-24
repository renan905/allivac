import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "@mui/material/styles";
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import RoutesApp from "./routes";

import AppTheme from "./theme/AppTheme";

import './index.css';


ReactDOM.render(
  	<React.StrictMode>
		<ThemeProvider theme={AppTheme}>
			<Router history={createBrowserHistory()}>
				<RoutesApp />
			</Router>
		</ThemeProvider>
 	</React.StrictMode>,
  	document.getElementById('root')
);

