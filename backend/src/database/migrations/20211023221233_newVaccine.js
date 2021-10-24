
exports.up = function(knex) {
    return knex.schema.createTable('Vaccine', function(table){
      table.string('id').primary();
      table.string('nome').notNullable();
      table.int('dose').notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('vaccine');
  };
  