/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('users').del();
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
