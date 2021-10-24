import React, { useState } from "react";
import { AppBar, Paper } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import "./Navbar.css";

const Navbar = () => {
	const [systemData, setSystemData] = useState({
		userName: "dr Hans Chucrute",
	});

	return (
		<AppBar
			position="fixed"
			sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
		>
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
						<span>
							<b>Olá {systemData.userName}</b>
						</span>
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
		</AppBar>
	);
};

export default Navbar;
