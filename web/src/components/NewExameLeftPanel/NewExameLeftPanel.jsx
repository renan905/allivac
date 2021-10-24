import React, { useState, useEffect } from "react";
import { AttachFile, PictureAsPdf, Create } from "@material-ui/icons";
import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";

import "./NewExameLeftPanel.css";

import userDataMock from "../../Mock/UserMock";

import {
	filesExameAttachmentMock,
	atestadoExameAttachmentMock,
} from "../../Mock/ExameAttachmentMock";

const NewExameLeftPanel = () => {
	const [userData, setUserData] = useState({});
	const [dateTime, setDateTime] = useState({});
	const [atestado, setAtestado] = useState({});
	const [files, setFiles] = useState([]);

	useEffect(() => {
		let currentDate = new Date();

		setUserData(userDataMock);
		setAtestado(atestadoExameAttachmentMock);
		setFiles(filesExameAttachmentMock);

		setDateTime({
			time:
				currentDate.getHours() +
				":" +
				(currentDate.getMinutes() < 10
					? "0" + currentDate.getMinutes()
					: currentDate.getMinutes()),
			date:
				currentDate.getDate() +
				"/" +
				currentDate.getMonth() +
				"/" +
				currentDate.getFullYear(),
		});
	}, []);

	return (
		<Box className="Informacoes-Paciente">
			<p>
				<b>Paciente:</b> {userData.nome}
			</p>
			<p>
				<b>Sexo:</b> {userData.sexo}
			</p>
			<p>
				<b>Nascimento:</b> {userData.nascimento}
			</p>
			<p>
				<b>Data:</b> {dateTime.date} <Create fontSize="inherit" />
			</p>
			<p>
				<b>Horario:</b> {dateTime.time} <Create fontSize="inherit" />
			</p>

			<h1>Novo Atestado</h1>
			<div className="Atestado">
				<TextField
					id="datetime-local"
					label="DATA/HORA"
					type="datetime-local"
					defaultValue="2017-05-24T10:30"
					variant="filled"
					sx={{
						width: 250,
						bgcolor: "bg.primary",
					}}
					InputProps={{
						sx: { color: "roxo.main", accentColor: "roxo.main" },
					}}
					InputLabelProps={{
						shrink: true,
						sx: { color: "roxo.main", accentColor: "roxo.main" },
						style: {
							color: "roxo.main",
							fontWeight: "bold",
						},
					}}
				/>
				<TextField
					className="Text-Field"
					id="filled"
					label="Descrição do Atestado"
					variant="filled"
					sx={{
						bgcolor: "bg.primary",
					}}
					InputProps={{
						sx: { color: "black" },
					}}
					InputLabelProps={{
						shrink: true,
						sx: { color: "roxo.main", accentColor: "roxo.main" },
						style: {
							color: "roxo.main",
							fontWeight: "bold",
							outlineColor: "roxo.main",
						},
					}}
				/>

				<div className="Atestado-Botoes">
					<Button variant="outlined" startIcon={<PictureAsPdf />}>
						baixar atestado
					</Button>

					<Button variant="contained" component="span">
						gerar atestado
					</Button>
				</div>
			</div>

			<div className="Anexos-Titulos">
				<h1>Anexos</h1>
				<Button className="Button" variant="contained" size="small">
					ver todos
				</Button>
			</div>

			{files &&
				files.map((item) => (
					<div className="Anexos">
						<div className="Anexos-container">
							<AttachFile fontSize="large" />
							<p>{item.name}</p>
						</div>
					</div>
				))}
		</Box>
	);
};

export default NewExameLeftPanel;
