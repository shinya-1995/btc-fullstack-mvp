function createWeightService(repository) {
  const submitWeight = async (body) => {
    return await repository.submitWeight(body);
  };
  const getWeightDataOfWeek = async (param) => {
    return await repository.getWeightDataOfWeek(param);
  };
  return { submitWeight, getWeightDataOfWeek };
}

module.exports = { createWeightService };
