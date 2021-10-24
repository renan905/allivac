const connection = require('../database/connection');
const crypto = require("crypto");

module.exports = {
    async index(request, response){
        const drug = await connection('Drug');
        return response.json(drug);
    },
    async create(request, response) {
        const { nome } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
        let drug = {
            id,
            nome
        }
        await connection('Drug').insert(drug);
        return response.json(id);
    },
    async delete(request, response){
        const {id} = request.params;
        const resp = await connection('Drug').where('id',id).delete();
        if (resp == 0) return response.status(400).json("Remédio não encontrada");
        return response.json("deletado com sucesso");
    },
    async edit(request, response){
        const {id} = request.params
        const drug = await connection('Drug').where('id', id).first();
        if (drug == undefined) return response.status(404).json("Remédio não encontrada");
        const { nome = drug.nome} = request.body;
        let edit = {
            id,
            nome,
        }
        await connection('Drug').where('id',id).update(edit);
        return response.json(edit);
    }
}