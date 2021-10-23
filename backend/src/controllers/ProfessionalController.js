const connection = require('../database/connection');
const crypto = require("crypto");


module.exports = {
    async index(request, response){
        const professional = await connection('Professional');
        return response.json(professional);
    },
    async create(request, response) {
        const { nome, email, senha, cpf, telefone, nascimento, sexo, codigo } = request.body;
        if (nome == undefined) return response.status(400).json("Nome é um campo obrigatorio");
        
        const checkEmail = await connection('Professional').where('email', email).first();
        if (checkEmail != undefined){
            return response.status(400).json("Email ja cadastrado");
        }
        const checkCPF = await connection('Professional').where('cpf', cpf).first();
        if (checkCPF != undefined){
            return response.status(400).json("CPF ja cadastrado");    
        }

        const id = crypto.randomBytes(4).toString('HEX');
        let professional = {
            id,
            nome,
            email,
            senha,
            cpf,
            telefone,
            nascimento,
            sexo,
            codigo
        }
        console.log(professional);
        await connection('Professional').insert(professional);
        return response.json(id);
    },
    async delete(request, response){
        const {id} = request.params;
        const resp = await connection('Professional').where('id',id).delete();
        if (resp == 0) return response.status(400).json("Usuário nao encontrado");
        return response.json("deletado com sucesso");
    },
    async edit(request, response){
        console.log(1234)
        
        const {id} = request.params
        const professional = await connection('Professional').where('id', id).first();
        console.log(professional)
        if (professional == undefined) return response.status(404).json("Usuário não encontrado");
        const { nome = professional.nome, email = professional.email, senha = professional.senha, cpf = professional.cpf, telefone = professional.telefone, nascimento = professional.nascimento, sexo = professional.sexo, codigo = professional.codigo} = request.body;
        let edit = {
            id,
            nome,
            email,
            senha,
            cpf,
            telefone,
            nascimento,
            sexo
        }
        await connection('Professional').where('id',id).update(edit);
        return response.json(edit);
    }
}