/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('user_weights').del();
  await knex('user_weights').insert([
    {
      user_id: 1,
      weight: 66.0,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      user_id: 2,
      weight: 49,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      user_id: 3,
      weight: 67,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
  ]);
};
