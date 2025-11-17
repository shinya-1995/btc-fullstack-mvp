/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable('user_weights', (table) => {
    table.increments('id').primary();
    table.integer('user_id').notNullable();
    table.float('weight').notNullable();
    table.timestamp('inputed_at').defaultTo(knex.fn.now());
    table.date('measured_at').notNullable();
    table.foreign('user_id').references('users.id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTable('user_weights');
};
