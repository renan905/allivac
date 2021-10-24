import { Route, Switch } from "react-router-dom";

import NewExame from "./pages/NewExame/NewExame";
import Vaccine from "./pages/Vaccine/Vaccine"
import App from "./App"

const RoutesApp = () => {
	return (
		<Switch>
			<Route component={App} path="/" exact />
			<Route component={NewExame} path="/exame" exact />
			<Route component={Vaccine} path="/vacinar" exact />
		</Switch>
	);
};

export default RoutesApp;