import React from "react";
import Drawer from "@mui/material/Drawer";
import { Box, ListItem, List, Toolbar } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";

import "./DrawerMenu.css";

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
					{MenuItens.map((text) => (
						<ListItem
							className="MenuItensListBox"
							button
							divider
							key={text}
						>
							<ListItemText
								className="MenuItensListBoxText"
								sx={{ color: "text.primary" }}
								primary={text}
							/>
						</ListItem>
					))}
				</List>
			</Box>
		</Drawer>
	);
};

export default DrawerMenu;
