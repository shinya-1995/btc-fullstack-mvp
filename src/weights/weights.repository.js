const dayjs = require('dayjs');
require('dayjs/locale/ja');
const timezone = require('dayjs/plugin/timezone');
const utc = require('dayjs/plugin/utc');

// UTCプラグインを読み込み
dayjs.extend(utc);
// timezoneプラグインを読み込み
dayjs.extend(timezone);
// 日本語化
dayjs.locale('ja');
// タイムゾーンのデフォルトをJST化
dayjs.tz.setDefault('Asia/Tokyo');

function createWeightrepository(knex, table = 'user_weights') {
  const submitWeight = async (body) => {
    const isWeightData = await knex(table)
      .where({ user_id: 2 })
      .andWhere('measured_at', dayjs(body.measured_at).format('YYYY-MM-DD'))
      .select('*');

    if (isWeightData.length !== 0)
      return {
        ok: false,
        status: 409,
        message: 'すでにデータが存在しています',
      };

    const FormatedBody = {
      user_id: 2,
      measured_at: dayjs(body.measured_at).format('YYYY-MM-DD'),
      weight: '56',
    };

    const gotWeightData = await knex(table).insert(FormatedBody).returning('*');
    const { id, user_id, measured_at, weight, inputed_at } = gotWeightData[0];

    return {
      id,
      user_id,
      measured_at: dayjs(measured_at).format('YYYY-MM-DD'),
      weight,
      inputed_at,
      message: '登録完了',
    };
  };

  const getWeightDataOfWeek = async (param) => {
    let getWeightData;
    if (param === 'oneWeek') {
      getWeightData = await knex('user_weights')
        .where({ user_id: 2 })
        .andWhere('measured_at', '>=', knex.raw(`NOW() - INTERVAL '7 days'`))
        .select('weight', 'measured_at');
    } else if (param === 'oneMonth') {
      getWeightData = await knex('user_weights')
        .where('measured_at', '>=', knex.raw(`NOW() - INTERVAL '1 month'`))
        .andWhere({ user_id: 2 })
        .select('weight', 'measured_at');
    } else {
      getWeightData = await knex('user_weights')
        .where({ user_id: 2 })
        .select('weight', 'measured_at');
    }
    if (getWeightData.length === 0) {
      getWeightData = await knex('user_weights')
        .where({ user_id: 2 })
        .select('weight', 'measured_at');
      return getWeightData;
    }

    return getWeightData;
  };
  const getWeightEditData = async (param) => {
    console.log(param);

    const getWeightEditData = await knex('user_weights')
      .where({ user_id: 2 })
      .andWhere('measured_at', param)
      .select('weight', 'measured_at')
      .from('user_weights');
    console.log(getWeightEditData);

    return getWeightEditData;
  };
  const patchWeightEditData = async (param, bodyData) => {
    const patchWeightEditData = await knex('user_weights')
      .where({ user_id: 2 })
      .andWhere('measured_at', param)
      .update({ weight: bodyData })
      .returning('*');

    return patchWeightEditData;
  };

  return {
    submitWeight,
    getWeightDataOfWeek,
    getWeightEditData,
    patchWeightEditData,
  };
}

module.exports = { createWeightrepository };
