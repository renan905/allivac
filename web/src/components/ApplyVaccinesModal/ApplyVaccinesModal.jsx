import React, { useState } from "react";
import { Paper, Typography, TextField, Button } from "@mui/material";

import "./ApplyVaccinesModal.css";

const ApplyVaccinesModal = () => {
	const [newVaccineApplication, setNewVaccineApplication] = useState({
		vaccine: "Pfizer",
		dose: 1,
		date: "10/10/2021",
	});

	return (
		<Paper class="ApplyVaccinesModal" variant="outlined" square>
			<div className="">
				<Typography>VACINA: {newVaccineApplication.vaccine}</Typography>

				<div className="Vaccine-box">
				<TextField
					id="outlined-basic"
					label="Lote"
					variant="outlined"
				/>
				<TextField
					id="outlined-basic"
					label="Número/Dose"
					variant="outlined"
				/>
				<TextField
					id="datetime-local"
					label="DATA/HORA"
					type="datetime-local"
					defaultValue="2017-05-24T10:30"
					sx={{ width: 250 }}
					InputLabelProps={{
						shrink: true,
					}}
				/>
				</div>
				

				<Button variant="contained"> Finalizar</Button>

				<Button variant="contained">Cancelar Consulta</Button>
				<Button variant="contained">Finalizar</Button>
			</div>
		</Paper>
	);
};

export default ApplyVaccinesModal;
