const connection = require('../database/connection');
const crypto = require("crypto");

module.exports = {
    async index(request, response){
        const symptom = await connection('Symptoms');
        return response.json(symptom);
    },
    async create(request, response) {
        const { nome, id_consulta } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
        let symptom = {
            id,
            nome,
            id_consulta
        }
        await connection('Symptoms').insert(symptom);
        return response.json(id);
    },
    async delete(request, response){
        const {id} = request.params;
        const resp = await connection('Symptoms').where('id',id).delete();
        if (resp == 0) return response.status(400).json("Sintoma não encontrada");
        return response.json("deletado com sucesso");
    },
    async edit(request, response){
        const {id} = request.params
        const symptom = await connection('Symptoms').where('id', id).first();
        if (symptom == undefined) return response.status(404).json("Sintoma não encontrado");
        const { nome = symptom.nome, id_consulta = symptom.id_consulta } = request.body;
        let edit = {
            id,
            nome,
            id_consulta
        }
        await connection('Symptoms').where('id',id).update(edit);
        return response.json(edit);
    }
}