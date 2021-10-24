
exports.up = function(knex) {
    return knex.schema.createTable('Drug', function(table){
      table.string('id').primary();
      table.string('nome');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('Drug')
  };
  