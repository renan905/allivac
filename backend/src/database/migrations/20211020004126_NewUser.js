
exports.up = function(knex) {
    return knex.schema.createTable('Pacient', function(table){
      table.string('id').primary();
      table.string('nome').notNullable();
      table.string('email').notNullable();
      table.string('senha').notNullable();
      table.string('cpf').notNullable();
      table.string('telefone').notNullable();
      table.date('nascimento').notNullable();
      table.string('sexo').notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('Pacient')
  };
  