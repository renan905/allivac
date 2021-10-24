import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";

import "./NewExameRigthPanel.css";

const NewExameRigthPanel = () => {
	useEffect(() => {}, []);

	return (
		<Box className="Consulta-Coletas">
			<h1>Sintomas</h1>

			<div className="Sintomas-Item">
				<TextField
					className="Text-Field"
					id="input-with-icon-textfield"
					label="Sintoma"
					variant="filled"
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
				<TextField
					className="Text-Field"
					id="filled-basic"
					label="Dosagem"
					variant="filled"
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
				<TextField
					className="Text-Field"
					id="filled-basic"
					label="Frequencia"
					variant="filled"
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

				<TextField
					className="Text-Field"
					id="filled-basic"
					label="Duração"
					variant="filled"
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
			</div>

			<h1>Descrição</h1>
			<div>
				<TextField
					className="Text-Field"
					id="filled-basic"
					label="Descrição"
					variant="filled"
					color="roxo"
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
	);
};

export default NewExameRigthPanel;
