import { Route, Switch } from "react-router-dom";

import Vaccine from "./pages/Vaccine/Vaccine"
import App from './App';

import Drawer from "./components/Drawer/DrawerMenu"

const RoutesApp = () => {
	return (
		<Switch>
			<Route component={App} path="/" exact />
			<Route component={Vaccine} path="/vacinar" exact />
			<Route component={Drawer} path="/d" exact />
		</Switch>
	);
};

export default RoutesApp;