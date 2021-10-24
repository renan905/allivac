import React from "react";
import Drawer from "@mui/material/Drawer";
import { Box, ListItem, List, Toolbar } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";

import "./DrawerMenu.css";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const MenuItens = ["Vacinar", "Nova Consulta"];

const DrawerMenu = () => {
	return (
		<Drawer
			className="MenuDrawerContainer"
			variant="permanent"
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				[`& .MuiDrawer-paper`]: {
					width: drawerWidth,
					boxSizing: "border-box",
					bgcolor: "bg.caixa",
				},
			}}
			open
		>
			<Toolbar />
			<Toolbar />
			<Box sx={{ overflow: "auto", color: "text.primary" }}>
				<List className="MenuItensList">
					<Link to="/vacinar">
						<ListItem
							className="MenuItensListBox"
							button
							divider
							key={MenuItens[0]}
						>
							<ListItemText
								className="MenuItensListBoxText"
								sx={{ color: "text.primary" }}
								primary={MenuItens[0]}
							/>
						</ListItem>
					</Link>

					<Link to="/exame">
						<ListItem
							className="MenuItensListBox"
							button
							divider
							key={MenuItens[1]}
						>
							<ListItemText
								className="MenuItensListBoxText"
								sx={{ color: "text.primary" }}
								primary={MenuItens[1]}
							/>
						</ListItem>
					</Link>
				</List>
			</Box>
		</Drawer>
	);
};

export default DrawerMenu;
