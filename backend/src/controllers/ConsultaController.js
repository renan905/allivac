const connection = require('../database/connection');
const crypto = require("crypto");

module.exports = {
    async index(request, response){
        const consulta = await connection('Consulta')
        return response.json(consulta);
    },
    async create(request, response) {
        const { id_pacient, id_professional } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
        let consulta = {
            id,
            id_pacient,
            id_professional
        }
        await connection('Consulta').insert(consulta);
        return response.json(id);
    },
    async delete(request, response){
        const {id} = request.params;
        const resp = await connection('Consulta').where('id',id).delete();
        if (resp == 0) return response.status(400).json("Consulta não encontrada");
        return response.json("deletado com sucesso");
    },
    async edit(request, response){
        const {id} = request.params
        const consulta = await connection('Consulta').where('id', id).first();
        if (consulta == undefined) return response.status(404).json("Usuário não encontrado");
        const { id_pacient = consulta.id_pacient, id_professional = consulta.id_professional } = request.body;
        let edit = {
            id,
            id_pacient,
            id_professional
        }
        await connection('Consulta').where('id',id).update(edit);
        return response.json(edit);
    }
}