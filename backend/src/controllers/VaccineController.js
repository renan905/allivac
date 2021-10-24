const connection = require('../database/connection');
const crypto = require("crypto");

module.exports = {
    async index(request, response){
        const vaccine = await connection('Vaccine');
        return response.json(vaccine);
    },
    async create(request, response) {
        const { nome, dose } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
        let vaccine = {
            id,
            nome,
            dose
        }
        await connection('Vaccine').insert(vaccine);
        return response.json(id);
    },
    async delete(request, response){
        const {id} = request.params;
        const resp = await connection('vaccine').where('id',id).delete();
        if (resp == 0) return response.status(400).json("Vacina não encontrada");
        return response.json("deletada com sucesso");
    },
    async edit(request, response){
        const {id} = request.params
        const vaccine = await connection('vaccine').where('id', id).first();
        if (vaccine == undefined) return response.status(404).json("Vacina não encontrada");
        const { nome = vaccine.nome, dose = vaccine.dose} = request.body;
        let edit = {
            id,
            nome,
            dose
        }
        await connection('vaccine').where('id',id).update(edit);
        return response.json(edit);
    }
}