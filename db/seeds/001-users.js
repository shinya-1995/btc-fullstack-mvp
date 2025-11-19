/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('user_weights').del();
  await knex('users').del();
  await knex.raw("SELECT SETVAL ('users_id_seq', 1, false)");
  await knex('users').insert([
    {
      name: 'itadori',
      email: 'itadori@example.com',
      password: '',
      logedIn: false,
    },
    {
      name: 'kugisaki',
      email: 'kugisaki@example.com',
      password: '',
      logedIn: false,
    },
    {
      name: 'fushiguro',
      email: 'fushiguro@example.com',
      password: '',
      logedIn: false,
    },
  ]);
};
