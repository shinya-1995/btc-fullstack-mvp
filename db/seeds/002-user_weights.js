/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('user_weights').del();
  await knex('user_weights').insert([
    {
      user_id: 2,
      weight: 54.0,
      inputed_at: knex.fn.now(),
      measured_at: '2025-10-01',
    },
    {
      user_id: 2,
      weight: 54.2,
      inputed_at: knex.fn.now(),
      measured_at: '2025-10-02',
    },
    {
      user_id: 2,
      weight: 53.9,
      inputed_at: knex.fn.now(),
      measured_at: '2025-10-03',
    },
    {
      user_id: 2,
      weight: 54.1,
      inputed_at: knex.fn.now(),
      measured_at: '2025-10-04',
    },
    {
      user_id: 2,
      weight: 53.7,
      inputed_at: knex.fn.now(),
      measured_at: '2025-10-05',
    },
    {
      user_id: 2,
      weight: 53.8,
      inputed_at: knex.fn.now(),
      measured_at: '2025-10-06',
    },
    {
      user_id: 2,
      weight: 53.5,
      inputed_at: knex.fn.now(),
      measured_at: '2025-10-07',
    },
    {
      user_id: 2,
      weight: 53.3,
      inputed_at: knex.fn.now(),
      measured_at: '2025-10-09',
    },
    {
      user_id: 2,
      weight: 53.4,
      inputed_at: knex.fn.now(),
      measured_at: '2025-10-10',
    },
    {
      user_id: 2,
      weight: 53.1,
      inputed_at: knex.fn.now(),
      measured_at: '2025-10-11',
    },
    {
      user_id: 2,
      weight: 53.0,
      inputed_at: knex.fn.now(),
      measured_at: '2025-10-13',
    },
    {
      user_id: 2,
      weight: 52.8,
      inputed_at: knex.fn.now(),
      measured_at: '2025-10-14',
    },
    {
      user_id: 2,
      weight: 53.0,
      inputed_at: knex.fn.now(),
      measured_at: '2025-10-15',
    },
    {
      user_id: 2,
      weight: 52.6,
      inputed_at: knex.fn.now(),
      measured_at: '2025-10-16',
    },
    {
      user_id: 2,
      weight: 52.5,
      inputed_at: knex.fn.now(),
      measured_at: '2025-10-17',
    },
    {
      user_id: 2,
      weight: 52.7,
      inputed_at: knex.fn.now(),
      measured_at: '2025-10-18',
    },
    {
      user_id: 2,
      weight: 52.3,
      inputed_at: knex.fn.now(),
      measured_at: '2025-10-20',
    },
    {
      user_id: 2,
      weight: 52.1,
      inputed_at: knex.fn.now(),
      measured_at: '2025-10-22',
    },
    {
      user_id: 2,
      weight: 52.2,
      inputed_at: knex.fn.now(),
      measured_at: '2025-10-23',
    },
    {
      user_id: 2,
      weight: 51.9,
      inputed_at: knex.fn.now(),
      measured_at: '2025-10-25',
    },

    {
      user_id: 2,
      weight: 51.8,
      inputed_at: knex.fn.now(),
      measured_at: '2025-11-01',
    },
    {
      user_id: 2,
      weight: 51.6,
      inputed_at: knex.fn.now(),
      measured_at: '2025-11-02',
    },
    {
      user_id: 2,
      weight: 51.7,
      inputed_at: knex.fn.now(),
      measured_at: '2025-11-03',
    },
    {
      user_id: 2,
      weight: 51.4,
      inputed_at: knex.fn.now(),
      measured_at: '2025-11-04',
    },
    {
      user_id: 2,
      weight: 51.3,
      inputed_at: knex.fn.now(),
      measured_at: '2025-11-05',
    },
    {
      user_id: 2,
      weight: 51.1,
      inputed_at: knex.fn.now(),
      measured_at: '2025-11-06',
    },
    {
      user_id: 2,
      weight: 51.2,
      inputed_at: knex.fn.now(),
      measured_at: '2025-11-07',
    },
    {
      user_id: 2,
      weight: 50.9,
      inputed_at: knex.fn.now(),
      measured_at: '2025-11-09',
    },
    {
      user_id: 2,
      weight: 50.7,
      inputed_at: knex.fn.now(),
      measured_at: '2025-11-10',
    },
    {
      user_id: 2,
      weight: 50.8,
      inputed_at: knex.fn.now(),
      measured_at: '2025-11-11',
    },
    {
      user_id: 2,
      weight: 50.5,
      inputed_at: knex.fn.now(),
      measured_at: '2025-11-13',
    },
    {
      user_id: 2,
      weight: 50.3,
      inputed_at: knex.fn.now(),
      measured_at: '2025-11-14',
    },
    {
      user_id: 2,
      weight: 50.1,
      inputed_at: knex.fn.now(),
      measured_at: '2025-11-16',
    },
    {
      user_id: 2,
      weight: 50.3,
      inputed_at: knex.fn.now(),
      measured_at: '2025-11-17',
    },
    {
      user_id: 2,
      weight: 49.9,
      inputed_at: knex.fn.now(),
      measured_at: '2025-11-18',
    },
    {
      user_id: 2,
      weight: 49.8,
      inputed_at: knex.fn.now(),
      measured_at: '2025-11-19',
    },
    {
      user_id: 2,
      weight: 49.6,
      inputed_at: knex.fn.now(),
      measured_at: '2025-11-21',
    },
    {
      user_id: 2,
      weight: 49.4,
      inputed_at: knex.fn.now(),
      measured_at: '2025-11-23',
    },
    {
      user_id: 2,
      weight: 49.2,
      inputed_at: knex.fn.now(),
      measured_at: '2025-11-25',
    },
    {
      user_id: 2,
      weight: 49.0,
      inputed_at: knex.fn.now(),
      measured_at: '2025-11-27',
    },
    {
      user_id: 2,
      weight: 47.8,
      inputed_at: knex.fn.now(),
      measured_at: '2025-11-30',
    },
  ]);
};
