
exports.up = function(knex) {
    return knex.schema.createTable('Vaccination', function(table){
      table.string('id').primary();
      table.string('id_paciente').references('id').inTable('Pacient');
      table.string('id_vacina').references('id').inTable('Vaccine');
     table.date('Date').notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('Vaccination')
  };
  