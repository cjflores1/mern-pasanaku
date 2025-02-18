class User {
    constructor({name, position, year, status}) {
      this.name = name;
      this.position = position;
      this.year = year;
      this.status = status;
    }

    setPosition(position) {
      this.position = position;
    }
  }

  module.exports = User;