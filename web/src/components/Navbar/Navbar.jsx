import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


import "./Navbar.css";

const Navbar = () => {
	const [systemData, setSystemData] = useState({
		userName: "dr Hans Chucrute",
	});

	return (
		<Paper class="Navbar" variant="outlined" square>
			<div className="menu">
				<div className="left">
					<img
						src="allivac.png"
						alt="Girl in a jacket"
						width="75"
						height="80"
					/>
				</div>
				

				<div className="right">
					<img
						src="image 21.png"
						alt="Girl in a jacket"
						width="40"
						height="40"
					/>
					<span><b>Olá {systemData.userName}</b></span>
					<img
						src="image 18.png"
						alt="Girl in a jacket"
						width="40"
						height="40"
					/>

					<ArrowDropDownIcon color="bg" />
				</div>
			</div>
		</Paper>
	);
};

export default Navbar;