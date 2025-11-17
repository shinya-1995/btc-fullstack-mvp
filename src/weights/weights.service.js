function createWeightService(repository) {
  const submitWeight = async (body) => {
    return await repository.submitWeight(body);
  };
  const getWeightDataOfWeek = async () => {
    console.log('service:呼ばれた');

    return await repository.getWeightDataOfWeek();
  };
  return { submitWeight, getWeightDataOfWeek };
}

module.exports = { createWeightService };
