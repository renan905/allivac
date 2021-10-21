import React, { useState, useEffect } from "react";
import { Paper, TextField, Grid, Typography, Modal, Box } from "@mui/material";

import Navbar from "../../components/Navbar/Navbar";
import "./Vaccine.css";

import ApplyVaccines from "../../components/ApplyVaccinesModal/ApplyVaccinesModal";

import { VaccinesMock } from "../../components/Mock/VaccinesMock";
import { AntSwitch } from "../../components/AntSwitch/AntSwitch";

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
		<>
			<Navbar />
			<Paper className="Vaccine" elevation={3}>
				<Grid container>
					<Grid item xs={12}>
						<Grid className="Menu" container>
							<Grid item xs={6}>
								<h1>VACINAS</h1>
							</Grid>
							<Grid item xs={4}>
								<TextField
									label="Standard warning"
									variant="standard"
									color="warning"
									focused
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

					<Grid item xs={12}>
						<Grid
							container
							spacing={2}
							direction="row"
							justifyContent="flex-start"
							alignItems="center"
							className="ListVaccines"
						>
							{vaccines &&
								vaccines.map((item) => (
									<Grid item xs={4}>
										<Paper
											className=""
											onClick={handleOpen}
										>
											<div className="">
												<p>Vacina: {item.name}</p>
												<p>Data: {item.date}</p>
											</div>
										</Paper>
									</Grid>
								))}
						</Grid>
					</Grid>
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
		</>
	);
};

export default Vaccine;
