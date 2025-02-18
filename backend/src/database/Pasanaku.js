const Pasanaku = require('./models/Pasanaku');

const pasanaku1 = new Pasanaku({year: new Date().getFullYear(), totalPlayers: 10, playersWithNumber: 2, status: true});
// const pasanaku2 = new Pasanaku({year: 2024, totalPlayers: 10, playersWithNumber: 10, status: true});

let pasanakus = [pasanaku1];

const find = (pasanakuToFind) => {
  if(pasanakuToFind["year"]) {
    return pasanakus.findIndex(pasanaku => pasanaku.year == pasanakuToFind["year"])+1;
  }
  return pasanakus;
};

const save = (newPasanaku) => {
  const pasanaku = new Pasanaku(newPasanaku);
  pasanakus.push(pasanaku);
  return pasanakus[pasanakus.length-1];
};

const findById = (pasanakuId) => {
  return pasanakus[pasanakuId-1];
};

const updateOne = (pasanakuId) => {
  const pasanaku = pasanakus[pasanakuId-1];
  pasanaku?.setPlayersWithNumber();
  return pasanaku;
};

module.exports = {
  find,
  save,
  findById,
  updateOne,
}
