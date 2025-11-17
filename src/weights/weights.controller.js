function createWeightController(service) {
  const submitWeightData = async (req, res) => {
    const body = await req.body;
    const submitData = await service.submitWeight(body);

    res.send(submitData);
  };

  const getWeightDataOfWeek = async (req, res) => {
    // console.log('controller:呼ばれた');
    const getWeightDataOfWeek = await service.getWeightDataOfWeek(
      req.params.period
    );

    res.send(getWeightDataOfWeek);
  };

  const getWeightEditData = async (req, res) => {
    const getWeightEditData = await service.getWeightEditData(req.params.date);
    console.log(getWeightEditData.at(-1));

    res.send(getWeightEditData.at(-1));
  };
  return { submitWeightData, getWeightDataOfWeek, getWeightEditData };
}

module.exports = { createWeightController };
