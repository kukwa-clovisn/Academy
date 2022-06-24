const colorModel = require("../models/colorModel");

module.exports = {
  get: (req, res) => {
    let statusId = req.params.status;
    colorModel.find({ status: statusId }, (err, data) => {
      if (err) return res.status(500).json(err);

      if (!data) return res.status(403);
      console.log(data);
      return res.status(200).json(data);
    });
  },
  post: (req, res) => {
    let color = req.body;
    colorModel.create(color);

    return res.status(200).json(req.body);
  },
};
