function createWeightController(service) {
  const submitWeightData = async (req, res) => {
    const body = await req.body;

    const submitData = await service.submitWeight(body);

    res.send(submitData);
  };

  const getWeightDataOfWeek = async (req, res) => {
    const getWeightDataOfWeek = await service.getWeightDataOfWeek(
      req.params.period
    );

    res.send(getWeightDataOfWeek);
  };

  const getWeightEditData = async (req, res) => {
    const getWeightEditData = await service.getWeightEditData(req.params.date);
    console.log(getWeightEditData.length === 0);

    if (getWeightEditData.length === 0) {
      res.send({
        weight: 'データがありません',
      });
    } else {
      res.send(getWeightEditData.at(-1));
    }
  };
  const patchWeightEditData = async (req, res) => {
    const patchWeightEditData = await service.patchWeightEditData(
      req.params.date,
      req.body.weight
    );

    if (patchWeightEditData.length === 0) {
      res.send({
        weight: 'データがありません',
      });
    } else {
      res.send(patchWeightEditData.at(-1));
    }
  };
  return {
    submitWeightData,
    getWeightDataOfWeek,
    getWeightEditData,
    patchWeightEditData,
  };
}

module.exports = { createWeightController };
