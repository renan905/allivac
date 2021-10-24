const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
	async index(request, response) {
		const { id_consulta } = request.params;

		const treatment = await connection("treatment")
			.where("id_consulta", id_consulta)
			.join("Drug", "Treatment.id_medicamento", "Drug.id");
		return response.json(treatment);
	},
	async create(request, response) {
		const {
			id_consulta,
			id_medicamento,
			dosagem,
			medida,
			intervalo,
			duracao,
		} = request.body;

		const id = crypto.randomBytes(4).toString("HEX");
		let treatment = {
			id,
			id_consulta,
			id_medicamento,
			dosagem,
			medida,
			intervalo,
			duracao,
		};
		await connection("Treatment").insert(treatment);
		return response.json(id);
	},
	async delete(request, response) {
		const { id } = request.params;
		const resp = await connection("Treatment").where("id", id).delete();
		if (resp == 0)
			return response.status(400).json("Tratamento não encontrada");
		return response.json("deletado com sucesso");
	},
	async edit(request, response) {
		const { id } = request.params;
		const treatment = await connection("Treatment").where("id", id).first();
		if (treatment == undefined)
			return response.status(404).json("Tratamento não encontrado");
		const {
			id_consulta = treatment.id_consulta,
			id_medicamento = treatment.id_medicamento,
			dosagem = treatment.dosagem,
			medida = treatment.medida,
			intervalo = treatment.intervalo,
			duracao = treatment.duracao,
		} = request.body;
		let edit = {
			id,
			id_consulta,
			id_medicamento,
			dosagem,
			medida,
			intervalo,
			duracao,
		};
		await connection("Treatment").where("id", id).update(edit);
		return response.json(edit);
	},
};
