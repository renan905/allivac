import React, { useState } from "react";
import {
	Paper,
	Typography,
	TextField,
	Button,
	ButtonGroup,
	Box,
} from "@mui/material";

import "./ApplyVaccinesModal.css";

const ApplyVaccinesModal = ({handleClose}) => {
	const [newVaccineApplication, setNewVaccineApplication] = useState({
		vaccine: "Pfizer",
		dose: 1,
		date: "10/10/2021",
	});

	return (
		<Box>
			<Paper
				className="ApplyVaccineBox"
				square
				elevation={3}
				sx={{ bgcolor: "bg.fundo", height: "500px", width: "500px" }}
			>
				<Typography sx={{ fontSize: "25px" }}>
					<b>VACINA:</b> {newVaccineApplication.vaccine}
				</Typography>

				<div className="Vaccine-box">
					<TextField
						id="outlined-basic"
						label="Lote"
						variant="outlined"
						sx={{
							bgcolor: "bg.primary",
						}}
						InputProps={{
							sx: { color: "text." },
						}}
						InputLabelProps={{
							sx: {
								color: "roxo.main",
								accentColor: "roxo.main",
							},
							style: {
								color: "roxo.main",
								fontWeight: "bold",
								outlineColor: "roxo.main",
							},
						}}
					/>
					<TextField
						id="outlined-basic"
						label="Número/Dose"
						variant="outlined"
						sx={{
							bgcolor: "bg.primary",
						}}
						InputProps={{
							sx: { color: "text." },
						}}
						InputLabelProps={{
							sx: {
								color: "roxo.main",
								accentColor: "roxo.main",
							},
							style: {
								color: "roxo.main",
								fontWeight: "bold",
								outlineColor: "roxo.main",
							},
						}}
					/>
					<TextField
						id="datetime-local"
						label="DATA/HORA"
						type="datetime-local"
						defaultValue="2017-05-24T10:30"
						sx={{
							width: 250,
							bgcolor: "bg.primary",
						}}
						InputProps={{
							sx: {
								color: "roxo.main",
								accentColor: "roxo.main",
							},
						}}
						InputLabelProps={{
							shrink: true,
							sx: {
								color: "roxo.main",
								accentColor: "roxo.main",
							},
							style: {
								color: "roxo.main",
								fontWeight: "bold",
							},
						}}
					/>
				</div>

				<ButtonGroup>
					<Button onClick={handleClose} variant="contained" color="vermelho">
						Cancelar Consulta
					</Button>
					<Button onClick={handleClose} variant="contained" color="verde">
						Finalizar
					</Button>
				</ButtonGroup>
			</Paper>
		</Box>
	);
};

export default ApplyVaccinesModal;
