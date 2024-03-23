const Pasanaku = require("../database/Pasanaku");

const getAllPasanakus = async () => {
    const allPasanakus = await Pasanaku.find({});
    return allPasanakus;
  };

  const getOnePasanakuByYear = async ( pasanakuYear ) => {
    const pasanaku = await Pasanaku.find({"year": pasanakuYear});
    return pasanaku;
  };

  const getOnePasanakuById = async ( pasanakuId ) => {
    const pasanaku = await Pasanaku.findById( pasanakuId );
    return pasanaku;
  };

  const createNewPasanaku = async (newPasanaku) => {
    const pasanaku = new Pasanaku(newPasanaku);
    const createdPasanaku = await pasanaku.save();
    return createdPasanaku;
  };

  const updateOnePasanaku = async ( pasanakuId ) => {
    const paranaku = await Pasanaku.updateOne({ _id: pasanakuId}, {$inc: { playersWithNumber: 1 }});
    return paranaku;
  }

  const deleteOnePasanaku = async (pasanakuId) => {
    const pasanaku = await Pasanaku.findByIdAndDelete(pasanakuId);
    return pasanaku;
  };

  module.exports = {
    getAllPasanakus,
    getOnePasanakuByYear,
    getOnePasanakuById,
    createNewPasanaku,
    updateOnePasanaku,
    deleteOnePasanaku,
  };