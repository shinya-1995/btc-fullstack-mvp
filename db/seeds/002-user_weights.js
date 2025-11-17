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
      inputed_at: knex.fn.now(),
      measured_at: '2025-10-05',
    },
    {
      user_id: 2,
      weight: 49,
      inputed_at: knex.fn.now(),
      measured_at: '2025-10-06',
    },
    {
      user_id: 3,
      weight: 67,
      inputed_at: knex.fn.now(),
      measured_at: '2025-11-05',
    },
  ]);
};
