const Team = require("../models/productsModel");

const getAllTaem = async (req, res) => {
  try {
    const team = await Team.find({});
    res.send(team).status(200);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//get product by id

const getAllTeamById = async (req, res) => {
  const { id } = req.params;
  try {
    const team = await Team.findById(id);
    res.send(team).status(200);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// delete
const deleteTeanmById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTeam = await Team.findByIdAndDelete(id);
    const team = await Team.find({});
    res.status(200).json({
      message: "success",
      deletedProduct: deletedTeam,
      allProducts: team,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//post new product

const addNewTeam = async (req, res) => {
  const newTeam = new Team({ ...req.body });
  try {
    await newTeam.save();
    res.status(201).send({
      message: "created succesfully!",
      data: newTeam,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getAllTaem,
  getAllTeamById,
  deleteTeanmById,
  addNewTeam,
};
