import Box from "@mui/material/Box";

import Navbar from "./components/Navbar/Navbar";
import NewExame from "./pages/NewExame/NewExame";
import DrawerMenu from "./components/Drawer/DrawerMenu";

import "./App.css";

const App = () => {
	return (
		<Box sx={{ display: "flex" }}>
			<Navbar />
			<DrawerMenu />

			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<NewExame />
			</Box>
		</Box>
	);
};

export default App;
