const Pgmodel = require("../models/note.model");
require("express-async-errors");

const getAll = async (req, res) => {
  const data = await Pgmodel.findAll({
    attributes: ["id", "name", "content"]
  });
  res.send(data);
};
const getOne = async (req, res) => {
  const data = await Pgmodel.findOne({
    attributes: ["id", "name", "content"],
    where: { id: req.params.id }
  });
  res.status(200).send(data);
};

const saveOne = async (req, res) => {
  const data = await Pgmodel.create(req.body);
  res.status(200).send(data);
};

const updateOne = async (req, res) => {
  const data = await Pgmodel.update(req.body, {
    where: { id: req.params.id }
  });
  res.status(200).send(data);
};

const deleteOne = async (req, res) => {
  const data = await Pgmodel.destroy({
    where: { id: req.params.id }
  });
  res.status(200).send("Deleted");
};
module.exports = { getAll, getOne, saveOne, updateOne,deleteOne };