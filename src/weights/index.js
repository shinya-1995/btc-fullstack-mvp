const { createWeightrepository } = require('./weights.repository');
const { createWeightService } = require('./weights.service');
const { createWeightController } = require('./weights.controller');

function initWeight(knex) {
  const repository = createWeightrepository(knex);
  const service = createWeightService(repository);
  const controller = createWeightController(service);
  return controller;
}

module.exports = { initWeight };
