import React from "react";
import { Modal, Box } from "@mui/material";

import ApplyVaccines from "../ApplyVaccinesModal/ApplyVaccinesModal";
import "./VaccinesListModal.css";

const styleModal = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	bgcolor: "background.paper",
};

const VaccinesListModal = ({ open, handleClose }) => {
	// const handleClose = () => setApplyNew(false);

	return (
		<Modal open={open} onClose={handleClose}>
			<Box sx={styleModal} >
				<ApplyVaccines handleClose={handleClose}/>
			</Box>
		</Modal>
	);
};

export default VaccinesListModal;
