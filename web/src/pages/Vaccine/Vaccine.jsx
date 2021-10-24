import React, { useState, useEffect } from "react";
import { Paper, TextField, Grid, Typography, Modal, Box } from "@mui/material";

import DrawerMenu from "../../components/Drawer/DrawerMenu";
import Navbar from "../../components/Navbar/Navbar";
import ApplyVaccines from "../../components/ApplyVaccinesModal/ApplyVaccinesModal";

import { VaccinesMock } from "../../Mock/VaccinesMock";
import { AntSwitch } from "../../components/AntSwitch/AntSwitch";
import VaccinesList from "../../components/VaccinesListCard/VaccinesListCard";

import "./Vaccine.css";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	bgcolor: "background.paper",
};

const Vaccine = () => {
	const [vaccines, setVaccines] = useState([]);
	const [applyNew, setApplyNew] = useState(false);

	const handleOpen = () => setApplyNew(true);
	const handleClose = () => setApplyNew(false);

	useEffect(() => {
		setVaccines(VaccinesMock);
	}, []);

	return (
		<Box sx={{ display: "flex" }}>
			<Navbar />
			<DrawerMenu />

			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Paper
					className="Vaccine"
					elevation={3}
					sx={{ bgcolor: "bg.caixa", padding: "20px" }}
				>
					<Grid container>
						<Grid item xs={12}>
							<Grid className="Menu" container>
								<Grid item xs={6}>
									<h1>VACINAS</h1>
								</Grid>

								<Grid item xs={4}>
									<TextField
										label="buscar por nome ou data"
										variant="standard"
										InputProps={{
											sx: { color: "text." },
										}}
										InputLabelProps={{
											sx: { color: "roxo.main", accentColor: "roxo.main" },
											style: {
												color: "roxo.main",
												fontWeight: "bold",
												outlineColor: "roxo.main",
											},
										}}
									/>
								</Grid>

								<Typography>Aplicada</Typography>

								<AntSwitch
									defaultChecked
									inputProps={{ "aria-label": "ant design" }}
								/>

								<Typography>Não Aplicada</Typography>
							</Grid>
						</Grid>

						<VaccinesList />
					</Grid>
				</Paper>

				<Modal
					open={applyNew}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<ApplyVaccines />
					</Box>
				</Modal>
			</Box>
		</Box>
	);
};

export default Vaccine;
