import React, { useState, useEffect } from "react";
import { Paper, Grid, Modal, Box } from "@mui/material";

import { VaccinesMock } from "../../Mock/VaccinesMock";
import ApplyVaccines from "../ApplyVaccinesModal/ApplyVaccinesModal";
import "./VaccinesListCard.css";

import VaccinesListModal from "../VaccineListModal/VaccinesListModal";

const styleModal = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	bgcolor: "background.paper",
};

const VaccinesListCard = () => {
	const [vaccines, setVaccines] = useState([]);
	const [applyNew, setApplyNew] = useState(false);

	const handleOpen = () => setApplyNew(true);
	const handleClose = () => setApplyNew(false);

	useEffect(() => {
		setVaccines(VaccinesMock);
	}, []);

	return (
		<>
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
						<Grid item xs={3}>
							<Paper onClick={handleOpen}>
								<Paper
									className="VaccineCard"
									sx={{
										color: "text.text",
									}}
								>
									<p className="VaccineCard-Vaccine">
										<b>Vacina: </b>{" "}
										{item.name.toUpperCase()}
									</p>
									<p className="VaccineCard-Date">
										<b>Data:</b> {item.date}
									</p>
								</Paper>
							</Paper>
						</Grid>
					))}
			</Grid>

			<VaccinesListModal open={applyNew} handleClose={handleClose} />
		</>
	);
};

export default VaccinesListCard;
