function createWeightController(service) {
  const submitWeightData = async (req, res) => {
    const body = await req.body;
    const submitData = await service.submitWeight(body);

    res.send(submitData);
  };

  const getWeightDataOfWeek = async (req, res) => {
    console.log('controller:呼ばれた');
    const getWeightDataOfWeek = await service.getWeightDataOfWeek(
      req.params.period
    );

    res.send(getWeightDataOfWeek);
  };
  return { submitWeightData, getWeightDataOfWeek };
}

module.exports = { createWeightController };
