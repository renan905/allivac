import React, { useState, useEffect } from "react";
import { AttachFile, PictureAsPdf, Create } from "@material-ui/icons";
import { Paper, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";

import "./NewExame.css";

import userDataMock from "../Mock/UserMock";

import {
	filesExameAttachmentMock,
	atestadoExameAttachmentMock,
} from "../Mock/ExameAttachmentMock";

const NewExame = () => {
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
			time: currentDate.getHours() + ":" + (currentDate.getMinutes() < 10 ? "0" + currentDate.getMinutes() : currentDate.getMinutes() ),
			date:
				currentDate.getDate() +
				"/" +
				currentDate.getMonth() +
				"/" +
				currentDate.getFullYear(),
		});
	}, []);

	return (
		<Paper className="NewExame" elevation={3}>
			<Box className="Informacoes-Paciente">
				<p><b>Paciente:</b> {userData.nome}</p>
				<p><b>Sexo:</b> {userData.sexo}</p>
				<p><b>Nascimento:</b> {userData.nascimento}</p>
				<p><b>Data:</b> {dateTime.date} <Create fontSize="inherit" /></p>
				<p><b>Horario:</b> {dateTime.time} <Create fontSize="inherit" /></p>

				<h1>Novo Atestado</h1>
				<div className="Atestado">
					<TextField
						id="datetime-local"
						label="DATA/HORA"
						type="datetime-local"
						defaultValue="2017-05-24T10:30"
						color="bg"
						sx={{ width: 250 }}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						className="Text-Field"
						id="filled"
						label="Descrição do Atestado"
						variant="filled"
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

			<Box className="Consulta-Coletas">
				<h1>Sintomas</h1>

				<div className="Sintomas-Item">
					<TextField
						className="Text-Field"
						id="input-with-icon-textfield"
						label="Sintoma"
						variant="filled"
					/>
					<Button size="small" color="vermelho">
						Remover
					</Button>
				</div>

				<h1>Pedido de Exame</h1>
				<div className="Sintomas-Item">
					<TextField
						className="Text-Field"
						id="input-with-icon-textfield"
						label="Pedido de Exame"
						variant="filled"
					/>
					<Button size="small" color="vermelho">
						Remover
					</Button>
				</div>

				<h1>Tratamento</h1>

				<div className="Tratamento">
					<TextField
						className="Text-Field"
						id="filled-basic"
						label="Medicamento"
						variant="filled"
					/>
					<TextField
						className="Text-Field"
						id="filled-basic"
						label="Dosagem"
						variant="filled"
					/>
					<TextField
						className="Text-Field"
						id="filled-basic"
						label="Frequencia"
						variant="filled"
					/>

					<TextField
						className="Text-Field"
						id="filled-basic"
						label="Duração"
						variant="filled"
					/>
				</div>

				<h1>Descrição</h1>
				<div>
					<TextField
						className="Text-Field"
						id="filled-basic"
						label="Descrição"
						variant="filled"
						color="roxo"
					/>
				</div>

				<div className="ActionButtons">
					<Button variant="contained" color="vermelho">
						Cancelar Consulta
					</Button>
					<Button variant="contained" color="verde">
						Finalizar
					</Button>
				</div>
			</Box>
		</Paper>
	);
};

export default NewExame;
