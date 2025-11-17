const dayjs = require('dayjs');

function createWeightrepository(knex, table = 'user_weights') {
  const submitWeight = async (body) => {
    const gotWeightData = await knex(table).insert(body).returning('*');

    const { id, user_id, measured_at, weight, inputed_at } = gotWeightData[0];

    return {
      id,
      user_id,
      measured_at: dayjs(measured_at).format('YYYY-MM-DD'),
      weight,
      inputed_at,
    };
  };

  const getWeightDataOfWeek = async (param) => {
    let getWeightData;
    if (param === 'oneWeek') {
      getWeightData = await knex()
        .where({ user_id: 2 })
        .andWhere('measured_at', '>=', knex.raw(`NOW() - INTERVAL '7 days'`))
        .select('weight', 'measured_at')
        .from('user_weights');
    } else if (param === 'oneMonth') {
      getWeightData = await knex('user_weights')
        .where('measured_at', '>=', knex.raw(`NOW() - INTERVAL '1 month'`))
        .andWhere({ user_id: 2 })
        .select('weight', 'measured_at');
    } else {
      getWeightData = await knex()
        .where({ user_id: 2 })
        .select('weight', 'measured_at')
        .from('user_weights');
    }

    return getWeightData;
  };
  const getWeightEditData = async (param) => {
    const getWeightEditData = await knex('user_weights')
      .where({ user_id: 2 })
      .andWhere('measured_at', param)
      .select('weight', 'measured_at');

    return getWeightEditData;
  };

  return { submitWeight, getWeightDataOfWeek, getWeightEditData };
}

module.exports = { createWeightrepository };
