function createWeightService(repository) {
  const submitWeight = async (body) => {
    return await repository.submitWeight(body);
  };
  const getWeightDataOfWeek = async (param) => {
    return await repository.getWeightDataOfWeek(param);
  };

  const getWeightEditData = async (param) => {
    return await repository.getWeightEditData(param);
  };
  const patchWeightEditData = async (param, bodyData) => {
    console.log(await repository.patchWeightEditData(param, bodyData));

    return await repository.patchWeightEditData(param, bodyData);
  };
  return {
    submitWeight,
    getWeightDataOfWeek,
    getWeightEditData,
    patchWeightEditData,
  };
}

module.exports = { createWeightService };
