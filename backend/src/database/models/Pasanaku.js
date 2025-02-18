class Pasanaku {

    constructor({year, totalPlayers, playersWithNumber, status}) {
      this.year = year;
      this.totalPlayers = totalPlayers;
      this.playersWithNumber = playersWithNumber;
      this.status = status;
    }

    setPlayersWithNumber() {
      this.playersWithNumber = this.playersWithNumber + 1;
    }
  }

module.exports = Pasanaku;