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
  return { submitWeight, getWeightDataOfWeek, getWeightEditData };
}

module.exports = { createWeightService };
