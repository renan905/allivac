
exports.up = function(knex) {
    return knex.schema.createTable('Consulta', function(table){
      table.string('id').primary();
      table.string('id_pacient').references('id').inTable('Pacient')
      table.string('id_professional').references('id').inTable('Professional')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('Consulta')
  };
  