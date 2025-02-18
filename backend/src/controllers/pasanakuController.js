const pasanakuService = require("../services/pasanakuService");
const userService = require("../services/userService");

const getAllPasanakus = async (req, res) => {
    try {
      const allPasanakus = await pasanakuService.getAllPasanakus();
      res.send({ status: "OK", data: allPasanakus });
    } catch (error) {
      console.error("Error, pasanakuController", error);
    }
  };

  const getOnePasanakuByYear = async (req, res) => {
    const { pasanakuYear } = req.params;
    const pasanaku = await pasanakuService.getOnePasanakuByYear(pasanakuYear);
    res.status(201).send({ status: "OK", data: pasanaku });
  };

  const getOnePasanakuById = async (req, res) => {
    const { pasanakuId } = req.params;
    const pasanaku = await pasanakuService.getOnePasanakuById(pasanakuId);
    res.status(201).send({ status: "OK", data: pasanaku });
  };

  const createNewPasanaku = (req, res) => {
    const { body } = req;
    if(!body.year || !body.totalPlayers) return;
    const newPasanaku = { year: body.year, totalPlayers: body.totalPlayers, status: true, playersWithNumber: 0 };
    const createdPasanaku = pasanakuService.createNewPasanaku(newPasanaku);
    res.status(201).send({ status: "OK", data: createdPasanaku });
  };

  const updateOnePasanaku = (req, res) => {
    const updatedUser = pasanakuService.updateOnePasanaku();
    res.send("Update an existing User");
  };

  const getNumber = async (req, res) => {
    const { pasanakuId } = req.params;
    // console.log(`pasanakuID--> ${JSON.stringify(req.params)}`);
    const pasanaku =  pasanakuService.getOnePasanakuById(pasanakuId);
    const playersWithNumber = pasanaku?.playersWithNumber;
    const totalPlayers = pasanaku?.totalPlayers;
    // console.log(`(totalPlayers, playersWithNumber)--> ${totalPlayers}, ${playersWithNumber}`);
    if(playersWithNumber === totalPlayers) return;
    let playerNumber = 0;
    while(playerNumber === 0) {
      let randomInt = Math.floor(Math.random() * ((totalPlayers+1) - 1) + 1);
      console.log(randomInt);
      const playerRandomNumber = await userService.verifyNumberPlayer(randomInt);
      console.log(playerRandomNumber);
      playerNumber = playerRandomNumber.length === 0 ? randomInt : 0;
    }
    // const updatedUser = pasanakuService.updateOnePasanaku();
    const resp = await pasanakuService.updateOnePasanaku(pasanakuId);
    res.status(201).send({ status: "OK", data: {playerNumber, resp} });
  };

  const deleteOnePasanaku = async (req, res) => {
    const { pasanakuId } = req.params;
    await pasanakuService.deleteOnePasanaku(pasanakuId);
    res.send("Delete the pasanaku game with ID:", pasanakuId);
  };

  module.exports = {
    getAllPasanakus,
    getOnePasanakuByYear,
    getOnePasanakuById,
    createNewPasanaku,
    updateOnePasanaku,
    getNumber,
    deleteOnePasanaku,
  };