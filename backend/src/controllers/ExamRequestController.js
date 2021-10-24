const connection = require('../database/connection');
const crypto = require("crypto");

module.exports = {
    async index(request, response){
        const {id_consulta} = request.params;
        const examRequest = await connection('ExamRequest').where('id_consulta',id_consulta);
        return response.json(examRequest);
    },
    async create(request, response) {
        const { nome, id_consulta } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
        let examRequest = {
            id,
            nome,
            id_consulta
        }
        await connection('examRequest').insert(examRequest);
        return response.json(id);
    },
    async delete(request, response){
        const {id} = request.params;
        const resp = await connection('examRequest').where('id',id).delete();
        if (resp == 0) return response.status(400).json("Requisição não encontrada");
        return response.json("deletado com sucesso");
    },
    async edit(request, response){
        const {id} = request.params
        const examRequest = await connection('examRequest').where('id', id).first();
        if (examRequest == undefined) return response.status(404).json("Rquisição não encontrada");
        const { nome = examRequest.nome, id_consulta = examRequest.id_consulta } = request.body;
        let edit = {
            id,
            nome,
            id_consulta
        }
        await connection('examRequest').where('id',id).update(edit);
        return response.json(edit);
    }
}