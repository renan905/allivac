import React from "react";
import { Paper } from "@mui/material";

import "./NewExame.css";

import NewExameLeftPanel from "../../components/NewExameLeftPanel/NewExameLeftPanel";
import NewExameRigthPanel from "../../components/NewExameRigthPanel/NewExameRigthPanel";

const NewExame = () => {
	return (
		<Paper className="NewExame" elevation={3} sx={{ bgcolor: "bg.fundo" }}>
			<NewExameLeftPanel />
			<NewExameRigthPanel />
		</Paper>
	);
};

export default NewExame;
