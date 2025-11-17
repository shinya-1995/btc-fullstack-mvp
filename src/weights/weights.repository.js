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

  const getWeightDataOfWeek = async () => {
    console.log('repository:呼ばれた');

    const getWeightData = await knex()
      .where({ user_id: 2 })
      .select('weight', 'measured_at')
      .from('user_weights');
    console.log(getWeightData);

    return getWeightData;
  };
  return { submitWeight, getWeightDataOfWeek };
}

module.exports = { createWeightrepository };
