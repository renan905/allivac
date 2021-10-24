import React from "react";
import { Paper, Box } from "@mui/material";

import DrawerMenu from "../../components/Drawer/DrawerMenu";
import Navbar from "../../components/Navbar/Navbar";
import NewExameLeftPanel from "../../components/NewExameLeftPanel/NewExameLeftPanel";
import NewExameRigthPanel from "../../components/NewExameRigthPanel/NewExameRigthPanel";

import "./NewExame.css";

const NewExame = () => {
	return (
		<Box sx={{ display: "flex" }}>
			<Navbar />
			<DrawerMenu />

			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Paper
					className="NewExame"
					elevation={3}
					sx={{ bgcolor: "bg.fundo" }}
				>
					<NewExameLeftPanel />
					<NewExameRigthPanel />
				</Paper>
			</Box>
		</Box>
	);
};

export default NewExame;
