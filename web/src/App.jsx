import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Navbar from "./components/Navbar/Navbar";
import NewExame from "./components/NewExame/NewExame";

const theme = createTheme({
	palette: {
		primary: {
			main: "#0B9FF1",
			
		},
		secondary: {
			main: "#0B9FF1",
		},
		text: {
			primary: "#FFFFFF",
		},
		roxo: {
			main: "#6B5ECD"
		},
		verde: {
			main: "#23AF7E"
		},
		vermelho:{
			main: "#EA5F5E"
		},
		contrastThreshold: 3,
		tonalOffset: 0.2,
	},
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Navbar />
			<NewExame />
		</ThemeProvider>
	);
};

export default App;
