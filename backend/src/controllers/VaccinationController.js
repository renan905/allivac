const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
	async index(request, response) {

        const { id_paciente } = request.params;

		const vaccination = await connection("Vaccination")
			.where("id_paciente", id_paciente)
			.join("Vaccine", "Vaccination.id_vacina", "vaccine.id");
		return response.json(vaccination);
	},
	async create(request, response) {
		const {
            id_paciente,
            id_vacina,
            date
		} = request.body;

		const id = crypto.randomBytes(4).toString("HEX");
		let vaccination = {
			id,
            id_paciente,
            id_vacina,
            date
		};
		await connection("Vaccination").insert(vaccination);
		return response.json(id);
	},
	async delete(request, response) {
		const { id } = request.params;
		const resp = await connection("Vaccination").where("id", id).delete();
		if (resp == 0)
			return response.status(400).json("Vacinação não encontrada");
		return response.json("deletado com sucesso");
	},
	async edit(request, response) {
		const { id } = request.params;
		const vaccination = await connection("Vaccination").where("id", id).first();
		if (vaccination == undefined)
			return response.status(404).json("Vacinação não encontrado");
		const {
			id_paciente = vaccination.id_paciente,
            id_vacina = vaccination.id_vacina,
            date = vaccination.date
		} = request.body;
		let edit = {
			id,
            id_paciente,
            id_vacina,
            date
		};
		await connection("Vaccination").where("id", id).update(edit);
		return response.json(edit);
	},
};
