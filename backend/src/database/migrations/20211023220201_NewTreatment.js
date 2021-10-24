
exports.up = function(knex) {
    return knex.schema.createTable('Treatment', function(table){
      table.string('id').primary();
      table.string('id_consulta').references('id').inTable('Consultas');
      table.string('id_medicamento').references('id').inTable('Drug');
      table.double('dosagem').notNullable();
      table.string('medida').notNullable();
      table.double('intervalo').notNullable();
      table.time('duracao').notNullable();

    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('Treatment')
  };
  