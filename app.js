const express = require('express');
const knex = require('./knex');

const { initWeight } = require('./src/weights/index');

function buildApp() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const weightController = initWeight(knex);
  //   const productController = initProduct(knex);
  //   const orderController = initOrder(knex);

  function validateIdMiddleware(req, res, next) {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        error: `Invalid id parameter. Instead received "${
          req.params.id
        }" which is a type of "${typeof req.params.id}"`,
      });
    }
    next();
  }

  app.post('/api/weight', weightController.submitWeightData);
  app.get('/api/data', weightController.getWeightDataOfWeek);

  return app;
}

module.exports = { buildApp };
