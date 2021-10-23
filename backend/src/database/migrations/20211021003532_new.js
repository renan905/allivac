
exports.up = function(knex) {
    return knex.schema.createTable('ExamRequest', function(table){
      table.string('id').primary();
      table.string('nome');
      table.string('id_consulta').references('id').inTable('Consultas')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('ExamRequest')
  };
  