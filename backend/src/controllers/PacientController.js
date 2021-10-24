const connection = require('../database/connection');
const crypto = require("crypto");
const { application } = require('express');
const { ETIMEDOUT } = require('constants');

module.exports = {
    async index(request, response){
        const pacients = await connection('Pacient');
        return response.json(pacients);
    },
    async create(request, response) {
        const { nome, email, senha, cpf, telefone, nascimento, sexo } = request.body;
        if (nome == undefined) return response.status(400).json("Nome é um campo obrigatorio");
        
        const checkEmail = await connection('Pacient').where('email', email).first();
        if (checkEmail != undefined){
            return response.status(400).json("Email ja cadastrado");
        }
        const checkCPF = await connection('Pacient').where('cpf', cpf).first();
        if (checkCPF != undefined){
            return response.status(400).json("CPF ja cadastrado");    
        }

        const id = crypto.randomBytes(4).toString('HEX');
        let pacient = {
            id,
            nome,
            email,
            senha,
            cpf,
            telefone,
            nascimento,
            sexo
        }
        await connection('Pacient').insert(pacient);
        return response.json(id);
    },
    async delete(request, response){
        const {id} = request.params;
        const resp = await connection('Pacient').where('id',id).delete();
        if (resp == 0) return response.status(400).json("Usuário nao encontrado");
        return response.json("deletado com sucesso");
    },
    async edit(request, response){
        const {id} = request.params
        const pacient = await connection('Pacient').where('id', id).first();
        if (pacient == undefined) return response.status(404).json("Usuário não encontrado");
        const { nome = pacient.nome, email = pacient.email, senha = pacient.senha, cpf = pacient.cpf, telefone = pacient.telefone, nascimento = pacient.nascimento, sexo = pacient.sexo} = request.body;
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
        await connection('Pacient').where('id',id).update(edit);
        return response.json(edit);
    }
}