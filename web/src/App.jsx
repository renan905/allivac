import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Navbar from "./components/Navbar/Navbar";
import NewExame from "./pages/NewExame/NewExame";
import DrawerMenu from "./components/Drawer/DrawerMenu";

import AppTheme from "./theme/AppTheme";

const App = () => {
	return (
		<ThemeProvider theme={AppTheme}>
			<Box sx={{ display: "flex" }}>
				<Navbar />

				<DrawerMenu />

				<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
					<NewExame />
				</Box>
			</Box>
		</ThemeProvider>
	);
};

export default App;
