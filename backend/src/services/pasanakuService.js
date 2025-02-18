const Pasanaku = require("../database/Pasanaku");
const PasanakuModel = require("../database/models/Pasanaku");

const getAllPasanakus = async () => {
    const allPasanakus = await Pasanaku.find({});
    return allPasanakus;
  };

  const getOnePasanakuByYear = async ( pasanakuYear ) => {
    const pasanaku = await Pasanaku.find({"year": pasanakuYear});
    return pasanaku;
  };

  const getOnePasanakuById =  ( pasanakuId ) => {
    const pasanaku =  Pasanaku.findById( pasanakuId );
    return pasanaku;
  };

  const createNewPasanaku =  (newPasanaku) => {
    // const pasanaku = new Pasanaku(newPasanaku);
    const createdPasanaku =  Pasanaku.save(newPasanaku);
    return createdPasanaku;
  };

  const updateOnePasanaku = async ( pasanakuId ) => {
    // const paranaku = await Pasanaku.updateOne({ _id: pasanakuId}, {$inc: { playersWithNumber: 1 }});
    const paranaku = await Pasanaku.updateOne(pasanakuId);
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