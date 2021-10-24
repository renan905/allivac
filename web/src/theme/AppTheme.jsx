import { createTheme } from "@mui/material/styles";

const AppTheme = createTheme({
	palette: {
		primary: {
			main: "#0B9FF1",
		},
		secondary: {
			main: "#0B9FF1",
		},
		text: {
			primary: "#FFFFFF",
			text: "#000000",
		},
		bg: {
			primary: "#F5F5F5",
			caixa: "#313346",
			fundo: "#1F1D2C"
		},
		roxo: {
			main: "#6B5ECD",
			primary: "#23AF7E",
		},
		verde: {
			main: "#23AF7E",
		},
		vermelho: {
			main: "#EA5F5E",
		},
		contrastThreshold: 3,
		tonalOffset: 0.2,
	},
});

export default AppTheme;
