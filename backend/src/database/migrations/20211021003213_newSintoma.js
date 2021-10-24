
exports.up = function(knex) {
    return knex.schema.createTable('Symptoms', function(table){
      table.string('id').primary();
      table.string('nome')
      table.string('id_consulta').references('id').inTable('Consultas')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('Symptoms')
  };
  